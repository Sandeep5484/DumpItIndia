import React from "react";
import aboutimg from "../utils/assets/images/about-img.jpeg";
import "../DashboardPage.css";

const DashboardPage = () => {
    return (
        <div className="aboutPage flex flex-col sm:flex-row">
            <img src={aboutimg} alt="aboutimg" className="w-full h-96  " />
            <div className="about px-8">
                <h1>About us</h1>
                <p>
                    Dump it India is a cutting-edge scrap management software
                    designed to streamline and optimize the process of waste
                    management and recycling in India. With its user-friendly
                    interface and powerful features, Dump it India
                    revolutionizes the way businesses and individuals handle
                    their scrap materials, making the process efficient,
                    cost-effective, and environmentally friendly. Dump it India
                    simplifies the entire scrap management process, from
                    collection to disposal.
                </p>
            </div>
        </div>
    );
};

export default DashboardPage;
