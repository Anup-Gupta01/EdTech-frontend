import React, { useState } from 'react'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogPageData } from '../services/operations/pageAndComponentData';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CourseCard from '../components/core/Catalog/CourseCard';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import Footer from '../components/common/Footer';
import Error from './Error';
import { useSelector } from 'react-redux';

const Catalog = () => {
    console.log("📌 Catalog component mounted");

    // const { catalogName } = useParams();
    // const [catatlogPageData, setCatalogPageData] = useState(null);
    // const [categoryId, setCategoryId] = useState("");

    // //fetch all categories
    // useEffect(() => {
    //     const getCategories = async () => {
    //         const res = await apiConnector("GET", categories.CATEGORIES_API);
    //         const category_id = res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0].
    //             _id;
    //         setCategoryId(category_id);
    //     }
    //     getCategories();
    // }, [catalogName]);

    // useEffect(() => {
    //     const getCategoryDetails = async () => {
    //         try {
    //             const res = await getCatalogPageData(categoryId);
    //             console.log()
    //             setCatalogPageData(res);
    //         }
    //         catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     if (categoryId) {
    //         getCategoryDetails();
    //     }

    // }, [categoryId]);

    // yaha se 


    const { loading } = useSelector((state) => state.profile)
    const { catalogName } = useParams()
    const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");

    //Fetch all categories
    useEffect(() => {
        const getCategories = async () => {
            console.log("🌐 Calling Categories API:", categories.CATEGORIES_API);
            try {
                const res = await apiConnector("GET", categories.CATEGORIES_API);

                const categoriesArray = res?.data?.allCategories;

                console.log("📦 Corrected Category list:", categoriesArray);

                if (!Array.isArray(categoriesArray)) {
                    console.error("❌ API did not return an array of categories.");
                    return;
                }

                const matchedCategory = categoriesArray.find((ct) => {
                    const formattedName = ct.name.toLowerCase().replace(/\s+/g, "-");
                    console.log("🔍 Checking:", formattedName, "vs", catalogName);
                    return formattedName === catalogName;
                });

                console.log("🧩 Matched Category:", matchedCategory);


                if (!matchedCategory) {
                    console.error("❌ No category matched for catalogName:", catalogName);
                    return;
                }

                setCategoryId(matchedCategory._id);
            } catch (err) {
                console.error("❌ Error fetching categories:", err);
            }
        };

        console.log("📌 Catalog component mounted");
        console.log("📁 CatalogName from URL:", catalogName);

        getCategories();
    }, [catalogName]);


    useEffect(() => {
        const getCategoryDetails = async () => {
            try {
                const res = await getCatalogPageData(categoryId);
                console.log("PRinting res: ", res?.data);
                setCatalogPageData(res);
            }
            catch (error) {
                console.log(error)
            }
        }
        if (categoryId) {
            getCategoryDetails();
        }

    }, [categoryId]);


    if (loading || !catalogPageData) {
        return (
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }
    if (!loading && !catalogPageData.success) {
        return <Error />
    }

    console.log("Courses:", catalogPageData?.data?.selectedCategory?.courses);


    return (
        <>
            {/* Hero Section */}
            <div className=" box-content bg-richblack-800 px-4">
                <div className="mx-auto flex min-h-[260px] max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
                    <p className="text-sm text-richblack-300">
                        {`Home / Catalog / `}
                        <span className="text-yellow-25">
                            {catalogPageData?.data?.selectedCategory?.name}
                        </span>
                    </p>
                    <p className="text-3xl text-richblack-5">
                        {catalogPageData?.data?.selectedCategory?.name}
                    </p>
                    <p className="max-w-[870px] text-richblack-200">
                        {catalogPageData?.data?.selectedCategory?.description}
                    </p>
                </div>
            </div>

            {/* Section 1 */}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                <div className="section_heading text-white">Courses to get you started</div>
                <div className="my-4 flex border-b border-b-richblack-600 text-sm">
                    <p
                        className={`px-4 py-2 ${active === 1
                            ? "border-b border-b-yellow-25 text-yellow-25"
                            : "text-richblack-50"
                            } cursor-pointer`}
                        onClick={() => setActive(1)}
                    >
                        Most Populer
                    </p>
                    <p
                        className={`px-4 py-2 ${active === 2
                            ? "border-b border-b-yellow-25 text-yellow-25"
                            : "text-richblack-50"
                            } cursor-pointer`}
                        onClick={() => setActive(2)}
                    >
                        New
                    </p>
                </div>
                <div>
                    <CourseSlider
                        Courses={catalogPageData?.data?.selectedCategory?.courses}
                    />
                </div>
            </div>
            {/* Section 2 */}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                <div className="section_heading text-white">
                    Top courses in {catalogPageData?.data?.differentCategory?.name}
                </div>
                <div className="py-8">
                    <CourseSlider
                        Courses={catalogPageData?.data?.differentCategory?.courses}
                    />
                </div>
            </div>

            {/* Section 3 */}
            <div className=" mx-auto box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
                <div className="section_heading text-white">Frequently Bought</div>
                <div className="py-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {catalogPageData?.data?.mostSellingCourses
                            ?.slice(0, 4)
                            .map((course, i) => (
                                <CourseCard course={course} key={i} Height={"h-[400px]"} />
                            ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>



    )
}

export default Catalog