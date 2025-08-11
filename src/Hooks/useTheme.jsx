import { useContext } from 'react';
import { DarkContext } from '../Contexts/ThemeDark';

const useTheme = () => {
  const context = useContext(DarkContext);
  
  if (context === undefined) {
    throw new Error('Theme must be within a provider');
  }
  
  return context;
};

export default useTheme;