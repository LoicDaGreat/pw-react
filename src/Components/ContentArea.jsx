import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

const ContentArea = ({ 
    children,
    backgroundImg
}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuState = (state) => {
        setIsMenuOpen(state);
    }

    return (
        <div className=" min-h-screen flex flex-col">
            <NavigationBar onStateChange={menuState}/>
            <main className="flex-1 w-full mx-auto bg-no-repeat bg-cover bg-fixed"
                style={{ backgroundImage: `url(${backgroundImg})` }}
            >
                {children}
            </main>
        </div>
    );
}

export default ContentArea;
