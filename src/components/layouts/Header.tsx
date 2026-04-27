import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const DOWNLOAD_URL = 'https://upload.app/download/%E6%A2%A7%E6%A1%90%E7%A4%BE%E4%BA%A4/com.w2a.dn1s/aec547701470f0c38594c6ee1e5c5b461b9bab1395c48a67a58681f903726829';

const navItems = [
  { name: '首页', path: '/' },
  { name: '平台介绍', path: '/about' },
  { name: '核心功能', path: '/features' },
  { name: '安全保障', path: '/security' },
  { name: '下载中心', path: '/download' },
];

export default function Header() {
  const location = useLocation();

  const handleDownload = () => {
    window.open(DOWNLOAD_URL, '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">梧</span>
          </div>
          <span className="text-xl font-bold gradient-text">梧桐社交</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path ? 'text-primary' : 'text-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Download Button */}
        <Button
          onClick={handleDownload}
          className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
        >
          立即下载
        </Button>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col gap-4 mt-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-base font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                onClick={handleDownload}
                className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
              >
                立即下载
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
