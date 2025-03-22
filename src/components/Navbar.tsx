
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="font-mono text-xl font-bold tracking-tight text-neura-700 dark:text-neura-400">
            Neura<span className="text-neura-500">CS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors">
            Home
          </Link>
          <Link to="/flashcards" className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors">
            Flashcards
          </Link>
          <Link to="/quizzes" className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors">
            Quizzes
          </Link>
          <Link to="/auth" className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors">
            Sign In
          </Link>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="ml-2"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="mr-2"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-stone-900 shadow-lg animate-fade-in">
          <div className="container mx-auto py-4 px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/flashcards" 
              className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Flashcards
            </Link>
            <Link 
              to="/quizzes" 
              className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Quizzes
            </Link>
            <Link 
              to="/auth" 
              className="text-sm font-medium text-stone-800 hover:text-neura-600 dark:text-stone-200 dark:hover:text-neura-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
