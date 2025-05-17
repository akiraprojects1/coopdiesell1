import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { useThemeStore } from '../store/theme';

interface MenuItem {
  label: string;
  path?: string;
  children?: MenuItem[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDarkMode, toggleTheme } = useThemeStore();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    {
      label: 'A Coopdiesel',
      children: [
        { label: 'Missão e Valores', path: '/missao-valores' },
        { label: 'Canais de Atendimento', path: '/sobre/canais-atendimento' },
        { label: 'Política de Privacidade', path: '/sobre/politica-privacidade' },
      ]
    },
    {
      label: 'Serviços',
      children: [
        { label: 'Proteção Veicular', path: '/servicos/protecao-veicular' },
        { label: 'Transportes', path: '/servicos/transportes' },
        { label: 'Postos de Combustível', path: '/servicos/postos' },
        { label: 'Lubrificantes', path: '/servicos/lubrificantes' },
        { label: 'Peças e Acessórios', path: '/servicos/pecas-acessorios' },
      ]
    },
    { label: 'Downloads', path: '/downloads' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' 
          ? 'bg-white/95 dark:bg-gray-900/95 shadow-xl backdrop-blur-sm' 
          : 'bg-black/40 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            to="/" 
            className="text-2xl font-bold text-green-500 hover:text-green-600 transition-all duration-300 transform hover:scale-105"
          >
            Coopdiesel
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    onClick={() => handleDropdownClick(item.label)}
                    className="flex items-center text-gray-800 dark:text-white/90 font-medium hover:text-green-500 transition-colors"
                  >
                    {item.label}
                    <ChevronDown size={16} className="ml-1 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.path || '#'}
                    className="text-gray-800 dark:text-white/90 font-medium hover:text-green-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path || '#'}
                        className="block px-4 py-2 text-gray-800 dark:text-white/90 hover:bg-green-500 hover:text-white transition-colors rounded-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
              aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-gray-700" />
              )}
            </button>
            <button 
              className="text-gray-800 dark:text-white transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`lg:hidden fixed inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 z-50 ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <Link 
                to="/" 
                className="text-2xl font-bold text-green-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Coopdiesel
              </Link>
              <button 
                className="text-gray-800 dark:text-white" 
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="space-y-6">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.label)}
                        className="flex items-center justify-between w-full text-gray-800 dark:text-white/90 font-medium text-lg"
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`transform transition-transform duration-300 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div 
                        className={`mt-4 ml-4 space-y-4 transition-all duration-300 ${
                          activeDropdown === item.label ? 'block' : 'hidden'
                        }`}
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path || '#'}
                            className="block text-gray-600 dark:text-gray-400 hover:text-green-500 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path || '#'}
                      className="block text-gray-800 dark:text-white/90 font-medium text-lg hover:text-green-500 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;