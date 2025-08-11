import React from 'react';
import useTheme from '../Hooks/useTheme';

const ThemeToggle = () => {

const { isDark, ThemeToggle } = useTheme();

  return (
    <button
      onClick={ThemeToggle}
      className="
        px-4 py-2 rounded-lg font-medium
        bg-gray-200 dark:bg-gray-700
        text-gray-800 dark:text-gray-200
        hover:bg-gray-300 dark:hover:bg-gray-600
        transition-colors duration-200
        border border-gray-300 dark:border-gray-600
      "
    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;