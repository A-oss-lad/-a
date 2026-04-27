import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DOWNLOAD_URL = 'https://upload.app/download/%E6%A2%A7%E6%A1%90%E7%A4%BE%E4%BA%A4/com.w2a.dn1s/aec547701470f0c38594c6ee1e5c5b461b9bab1395c48a67a58681f903726829';

export default function FloatingDownloadButton() {
  const handleDownload = () => {
    window.open(DOWNLOAD_URL, '_blank');
  };

  return (
    <Button
      onClick={handleDownload}
      size="icon"
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 z-50"
      aria-label="下载APP"
    >
      <Download className="h-6 w-6" />
    </Button>
  );
}
