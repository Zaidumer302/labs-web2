import { Button } from './ui/button';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI365Labs
              </h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#services" className="text-foreground hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="#case-studies" className="text-foreground hover:text-blue-600 transition-colors">
                Case Studies
              </a>
              <a href="#contact" className="text-foreground hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}