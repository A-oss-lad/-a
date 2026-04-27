import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">梧</span>
            </div>
            <span className="text-lg font-bold gradient-text">梧桐社交</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/about" className="hover:text-primary transition-colors">
              用户协议
            </Link>
            <Link to="/security" className="hover:text-primary transition-colors">
              隐私政策
            </Link>
            <a href="#" className="hover:text-primary transition-colors">
              官方客服
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            ©2026 梧桐社交 全部版权保留
          </p>
        </div>
      </div>
    </footer>
  );
}
