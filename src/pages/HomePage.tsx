import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, ShieldCheck, AlertTriangle, Lock, Eye, Clock, HeadphonesIcon } from 'lucide-react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import FloatingDownloadButton from '@/components/layouts/FloatingDownloadButton';

const DOWNLOAD_URL = 'https://upload.app/download/%E6%A2%A7%E6%A1%90%E7%A4%BE%E4%BA%A4/com.w2a.dn1s/aec547701470f0c38594c6ee1e5c5b461b9bab1395c48a67a58681f903726829';

export default function HomePage() {
  const handleDownload = () => {
    window.open(DOWNLOAD_URL, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingDownloadButton />
      
      <main className="flex-1 pt-16">
        {/* 首屏主视觉海报 */}
        <section className="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(138,116,169,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,193,156,0.1),transparent_50%)]" />
          
          <div className="container mx-auto px-4 text-center relative z-10 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">梧桐社交</span>
              <span className="text-foreground"> · 遇见同频的人</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              干净纯粹 | 安全靠谱 | 高颜值年轻人专属社交平台
            </p>
            <Button
              onClick={handleDownload}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              立即下载 APP
            </Button>
          </div>
        </section>

        {/* 平台品牌介绍板块 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
                新一代综合年轻化社交平台
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                梧桐社交是新一代综合年轻化社交平台，主打干净交友、严格管理、隐私保护，
                打造无低俗、无杂乱的优质社交环境。我们致力于为年轻人提供一个安全、纯粹、
                高品质的社交空间，让每一次相遇都充满意义。
              </p>
            </div>
          </div>
        </section>

        {/* 核心功能展示板块 */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              核心功能
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="glass-card border-none hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">即时聊天</h3>
                  <p className="text-muted-foreground">
                    私聊群聊、互动流畅，实时消息推送，让沟通更加便捷高效
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">动态广场</h3>
                  <p className="text-muted-foreground">
                    分享日常、结识好友，发现有趣的人和事，拓展社交圈
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">官方认证</h3>
                  <p className="text-muted-foreground">
                    杜绝虚假账号提升真实度，严格审核机制保障用户权益
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <AlertTriangle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">风控管理</h3>
                  <p className="text-muted-foreground">
                    违规分级处罚，社区干净规范，营造健康的社交氛围
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 安全隐私保障板块 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
              安全隐私保障
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="flex items-start gap-4 p-6 rounded-lg glass-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Lock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">全程数据加密保护</h3>
                  <p className="text-sm text-muted-foreground">采用银行级加密技术</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg glass-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">用户隐私永不外泄</h3>
                  <p className="text-sm text-muted-foreground">严格遵守隐私保护法规</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg glass-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">24小时双重审核</h3>
                  <p className="text-sm text-muted-foreground">人工+系统双重保障</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg glass-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">反骚扰反低俗管控</h3>
                  <p className="text-sm text-muted-foreground">智能识别违规内容</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg glass-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <HeadphonesIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">官方客服支持</h3>
                  <p className="text-sm text-muted-foreground">7x24小时在线服务</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg glass-card">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">完整申诉体系</h3>
                  <p className="text-sm text-muted-foreground">公平公正处理投诉</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 官方APP下载专区 */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                下载梧桐社交 APP
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                官方原版安装包 · 无广告 · 无捆绑 · 无病毒
              </p>
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                立即下载安装
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
