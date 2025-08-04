// import { useSelector } from "react-redux"

// import renderCartAmount from "./renderCartAmount";
// import renderCartCourses from "./renderCartCourses";
// export default function Cart() {

//     const {total,totalItems} = useSelector((state) =>state.auth);

//     return (
//         <div className="text-white">
//             <h1>Your Cart</h1>

//             <p>{totalItems} Courses in cart</p>

//             {
//                 total>0
//                 ? ( <div>
//                     <renderCartCourses />
//                     <renderTotalAmount />
//                     </div>)
//                 : (<p>Your Cart is Empty</p>)}
//         </div>
//     )
   
// }
import { useSelector } from "react-redux"

// Corrected: In React, component names and their imports should be capitalized (PascalCase).
import RenderCartAmount from "./renderCartAmount";
import RenderCartCourses from "./renderCartCourses";

export default function Cart() {
    // Note: It's more common for cart details to be in a `cart` slice, not `auth`.
    const { total, totalItems } = useSelector((state) => state.cart);

    return (
        // Main container with centered content and padding
        <div className="mx-auto w-11/12 max-w-[1000px] py-10 text-white">
            
            {/* Page Header */}
            <h1 className="mb-4 text-3xl font-medium text-richblack-5">Your Cart</h1>
            
            {/* Item Count and Separator */}
            <p className="border-b border-b-richblack-400 pb-2 font-semibold text-richblack-400">
                {totalItems} {totalItems === 1 ? "Course" : "Courses"} in Cart
            </p>

            {total > 0 ? (
                // Layout for when the cart has items
                <div className="mt-8 flex flex-col-reverse lg:flex-row gap-x-10 gap-y-8">
                    
                    {/* Cart Items Section (takes up most of the space) */}
                    <div className="flex-1">
                        <RenderCartCourses />
                    </div>

                    {/* Cart Summary Section (fixed width on large screens) */}
                    <div className="lg:w-[280px] lg:min-w-[280px]">
                        {/* Corrected: Using the imported component name */}
                        <RenderCartAmount />
                    </div>

                </div>
            ) : (
                // View for when the cart is empty
                <div className="mt-10 flex h-[50vh] flex-col items-center justify-center">
                    <p className="text-xl text-richblack-100">Your Cart is Empty</p>
                    {/* It's a good idea to add a "Continue Shopping" button/link here */}
                </div>
            )}
        </div>
    )
}