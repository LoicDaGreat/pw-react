import React, { createContext, useState, useEffect } from 'react';

export const DarkContext = createContext();

const ThemeDark = ({Prop}) => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const storedTheme = localStorage.getItem('Theme');

        if (systemTheme || storedTheme === 'dark') {
            setIsDark(true); 
        }
        // console.log('DarkMode: ', systemTheme);
    }, []);

    useEffect(() => {
        if (isDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        }
  }, [isDark]);

  const handleToggle = () => {
    setIsDark(!isDark);
  }

  const setTheme = (theme) => {
    setIsDark(theme === 'dark');
  }
    
  return (
    <DarkContext.Provider 
      value={{ 
        isDark, 
        handleToggle, 
        setTheme,
        theme: isDark ? 'dark' : 'light' 
      }}
    >
      {Prop}
    </DarkContext.Provider>
  );
};

export default ThemeDark;