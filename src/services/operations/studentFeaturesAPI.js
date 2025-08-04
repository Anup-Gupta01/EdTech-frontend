import { apiConnector } from "../apiconnector";
import { studentEndpoints } from "../apis";
import { toast } from "react-hot-toast"
import rzpLogo from "../../assets/Logo/rzp_logo.png"
// import { verifyPayment } from "../../../server/controllers/Payments";
import { setPaymentLoading } from "../../slices/courseSlice";
import { resetCart } from "../../slices/cartSlice";
const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY

// import { Navigate } from "react-router-dom";

const { COURSE_PAYMENT_API, COURSE_VERIFY_API, SEND_PAYMENT_SUCCESS_EMAIL_API } = studentEndpoints;

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;

        script.onload = () => {
            resolve(true);
        }

        script.onerror = () => {
            resolve(false);
        }

        document.body.appendChild(script);
    })
}


export async function buyCourse(token, courses, getUserDetails, navigate, dispatch) {
    const toastId = toast.loading("Loading...");

    // console.log("ka ho buy course")
    try {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            toast.error("Razorpay SDK failed to load");
            return;
        }
        //intiate the order
        const orderResponse = await apiConnector("POST", COURSE_PAYMENT_API, { courses }, {
            Authorization: `Bearer ${token}`,
        })
        if (!orderResponse.data.success) {
            throw new Error(orderResponse.data.message);
        }
        console.log("📦 Payment API response:", orderResponse.data);

        //options
        const options = {
            // key: process.env.REACT_APP_RAZORPAY_KEY,
            key: RAZORPAY_KEY,

            // currency: orderResponse.data.data.currency,
            currency: orderResponse.data.message.currency,
            amount: `${orderResponse.data.message.amount}`,
            order_id: orderResponse.data.message.id,
            name: "StudyNotion",
            description: "Thank you for purchasing the course",
            image: rzpLogo,
            prefill: {
                name: `${getUserDetails.firstName}`,
                email: getUserDetails.email
            },
            handler: function (response) {
                //send successful wala mail
                sendPaymentSuccessEmail(response, orderResponse.data.message.amount, token);
                //verifyPayment
                verifyPayment({ ...response, courses }, token, navigate, dispatch);
            }
        }
        //miss hogya tha 
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on("payment.failed", function (response) {
            toast.error("oops, payment failed");
            console.log(response.error);
        })

    } catch (error) {

        console.log("PAYMENT API ERROR...", error);
        toast.error("Could not make payment");
    }
    toast.dismiss(toastId);
}


async function sendPaymentSuccessEmail(response, amount, token) {
    console.log("This is sendpayment email ")
    try {
        await apiConnector("POST", SEND_PAYMENT_SUCCESS_EMAIL_API, {
            orderId: response.razorpay_order_id,
            paymentId: response.razorpay_payment_id,
            amount,
        }, {
            Authorization: `Bearer ${token}`
        })

    } catch (error) {
        console.log("PAYMENT SUCCESS EMAIL ERROR....", error);
    }
}

//verify payment

async function verifyPayment(bodyData, token, navigate, dispatch) {
    console.log("this is verify payment ")
    const toastId = toast.loading("Verifying Payment....");
    dispatch(setPaymentLoading(true));
    try {
        const response = await apiConnector("POST", COURSE_VERIFY_API, bodyData, {
            Authorization: `Bearer ${token}`,
        })

        if (!response?.data.success) {
            throw new Error(response.data.message);
        }
        toast.success("payment successfull,you are added to the course");
        navigate("/dashboard/enrolled-course");
        dispatch(resetCart());
        //     }catch(error){
        //        console.log("PAYMENT VERIFY ERROR...", error?.response?.data || error.message);
        //   toast.error(error?.response?.data?.message || "Could not verify payment");

        //     }
    } catch (error) {
        let errorMessage = "Could not verify payment";

        if (error?.response?.data?.message) {
            errorMessage = error.response.data.message;
        } else if (error?.message) {
            errorMessage = error.message;
        }

        console.log("PAYMENT VERIFY ERROR...", error);
        toast.error(errorMessage);
    }

    toast.dismiss(toastId);
    dispatch(setPaymentLoading(false));
}