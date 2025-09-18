import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Globe, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20" data-testid="header-navigation">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary" data-testid="logo-jeton">Jeton</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-1" data-testid="nav-home">
            <span className="text-primary font-medium">Home</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors" data-testid="nav-personal">
            <span className="text-gray-600">Personal</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors" data-testid="nav-business">
            <span className="text-gray-600">Business</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-1 cursor-pointer hover:text-primary transition-colors" data-testid="nav-company">
            <span className="text-gray-600">Company</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-2 cursor-pointer" data-testid="language-selector">
            <Globe className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 text-sm">EN</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
          <Button variant="ghost" className="text-gray-600 hover:text-primary" data-testid="button-login">
            Log in
          </Button>
          <Button className="bg-primary text-white hover:bg-primary/90" data-testid="button-signup">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200" data-testid="mobile-menu">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <div className="space-y-4">
              <div className="text-primary font-medium">Home</div>
              <div className="text-gray-600">Personal</div>
              <div className="text-gray-600">Business</div>
              <div className="text-gray-600">Company</div>
            </div>
            <div className="pt-4 border-t border-gray-200 space-y-4">
              <Button variant="ghost" className="w-full justify-start text-gray-600">
                Log in
              </Button>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Sign up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
