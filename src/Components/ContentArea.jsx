import React from "react";
import NavigationBar from "./NavigationBar";

const ContentArea = ({ 
    children,
    backgroundImg
}) => {

    return (
        <div className=" min-h-screen flex flex-col">
            <NavigationBar />
            <main className="flex-1 w-full mx-auto"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                {children}
            </main>
        </div>
    );
}

export default ContentArea;
