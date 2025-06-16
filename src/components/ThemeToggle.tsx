import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        ) : (
          <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;