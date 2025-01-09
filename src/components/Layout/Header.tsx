import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, LayoutDashboard } from 'lucide-react';
import { ConnectWalletButton } from '../Wallet/ConnectWalletButton';
import { useWallet } from '../../contexts/WalletContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isConnected } = useWallet();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0D1117]/80 backdrop-blur-lg' : 'bg-[#0D1117]'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="text-2xl font-bold text-white">
            aiHash
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/marketplace" className="text-gray-300 hover:text-white">Marketplace</Link>
            <Link to="/governance" className="text-gray-300 hover:text-white">Governance</Link>
            <Link to="/stats" className="text-gray-300 hover:text-white">Statistics</Link>
            <Link to="/docs" className="text-gray-300 hover:text-white">Documentation</Link>
            {isConnected && (
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-primary hover:text-primary/80"
              >
                <LayoutDashboard className="w-4 h-4" />
                Mining Center
              </button>
            )}
            <ConnectWalletButton />
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D1117]">
          <div className="px-4 py-2 space-y-1">
            <Link to="/marketplace" className="block px-3 py-2 text-gray-300 hover:text-white">Marketplace</Link>
            <Link to="/governance" className="block px-3 py-2 text-gray-300 hover:text-white">Governance</Link>
            <Link to="/stats" className="block px-3 py-2 text-gray-300 hover:text-white">Statistics</Link>
            <Link to="/docs" className="block px-3 py-2 text-gray-300 hover:text-white">Documentation</Link>
            {isConnected && (
              <button
                onClick={() => {
                  navigate('/');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 text-primary hover:text-primary/80 w-full"
              >
                <LayoutDashboard className="w-4 h-4" />
                Mining Center
              </button>
            )}
            <div className="px-3 py-2">
              <ConnectWalletButton />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}