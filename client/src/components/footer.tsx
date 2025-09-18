import { Button } from "@/components/ui/button";
import { Globe, ChevronDown } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Get Started",
      links: ["Sign up", "Login"]
    },
    {
      title: "Discover",
      links: ["AirFly Card", "Fees"]
    },
    {
      title: "Company",
      links: ["About", "Newsroom", "Partnerships", "Media Assets"]
    },
    {
      title: "Legal",
      links: ["Cookie Policy", "Privacy Policy", "Terms and Conditions", "Disclaimers", "AML Policy"]
    },
    {
      title: "Help",
      links: ["Developers", "FAQ", "Support", "Release Notes"]
    }
  ];

  return (
    <footer className="bg-white py-16" data-testid="footer-main">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-primary mb-4" data-testid={`footer-title-${section.title.toLowerCase().replace(' ', '-')}`}>
                {section.title}
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="hover:text-primary transition-colors cursor-pointer"
                      data-testid={`footer-link-${link.toLowerCase().replace(' ', '-')}`}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-primary/20 text-primary hover:bg-primary/5"
                  data-testid="button-footer-google-play"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span className="text-sm font-medium">GET IT ON Google Play</span>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="border-primary/20 text-primary hover:bg-primary/5"
                  data-testid="button-footer-app-store"
                >
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="text-sm font-medium">Download on the App Store</span>
                  </div>
                </Button>
              </div>
              
              {/* Certification badges */}
              <div className="flex space-x-3 opacity-60">
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">ISO</div>
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">PCI</div>
                <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center text-xs font-medium">SSL</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-muted-foreground cursor-pointer" data-testid="footer-language-selector">
                <Globe className="w-4 h-4" />
                <span className="text-sm">EN</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors" data-testid="social-instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.418 3.323-1.418s2.448.543 3.323 1.418c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.38-.928-.928 0-.49.438-.928.928-.928s.928.438.928.928c0 .548-.438.928-.928.928zm-3.323 9.781c-1.297 0-2.448-.49-3.323-1.297-.928-.807-1.418-1.947-1.418-3.244s.49-2.448 1.418-3.323c.875-.875 2.026-1.418 3.323-1.418s2.448.543 3.323 1.418c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors" data-testid="social-facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary/90 transition-colors" data-testid="social-twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              
              <div className="text-sm text-muted-foreground" data-testid="made-by-buro">
                Made by <span className="text-primary font-medium">Büro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
