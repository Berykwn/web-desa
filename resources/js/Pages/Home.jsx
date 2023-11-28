import Slider from "@/Components/Fragments/Slider";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

const Home = ({ pages }) => {
    
    return (
        <MainLayout pages={pages}>
            <div className="px-14 py-12">
                <Slider />
            </div>

            
        </MainLayout>
    );
};

export default Home;
