'use client'
import {useContext} from "react";
import {UserContext} from "@/context/User";
import FeatureBoxSection from "@/components/home/featurebox-section";
import ProductSidebarTwo from "@/components/product/sidebars/sidebar-two";
import Link from "next/link";

function Luis() {
    let {name} = useContext(UserContext);

    return (
        <>
            <div className="page-header">
                <div className="container d-flex flex-column align-items-center">
                    <nav aria-label="breadcrumb" className="breadcrumb-nav">
                        <div className="container">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Luis
                                </li>
                            </ol>
                        </div>
                    </nav>

                    <h1>LUIS</h1>
                </div>
            </div>
            <section className="container  pb-3 mb-1">

                <div className="row">
                    <div className="col-9">
                        <h2>luis lo que llego del context = {name}</h2>
                       
                    </div>


                    <ProductSidebarTwo/>
                </div>


                <hr className="mt-3 mb-6"/>
                <FeatureBoxSection/>

            </section>
        </>
    )
}

export default Luis;