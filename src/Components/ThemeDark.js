import React, { createContext, useContext, useState, useEffect } from 'react';

const DarkContext = createContext();

const ThemeDark = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (systemTheme = true) {
            setIsDark(true);
            console.log('DarkMode: ', systemTheme);
        }
    });

}

export default ThemeDark;