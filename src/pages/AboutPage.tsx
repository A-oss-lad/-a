import { Card, CardContent } from '@/components/ui/card';
import { Target, Heart, TrendingUp, Users } from 'lucide-react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import FloatingDownloadButton from '@/components/layouts/FloatingDownloadButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <FloatingDownloadButton />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary via-background to-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                关于梧桐社交
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                梧桐社交是新一代综合年轻化社交平台，致力于为年轻人打造一个干净、纯粹、安全的社交空间
              </p>
            </div>
          </div>
        </section>

        {/* 平台定位 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">平台定位</h2>
              <Card className="glass-card border-none">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    梧桐社交定位为新一代综合年轻化社交平台，专注服务青少年及年轻交友用户群体。
                    我们深知当代年轻人对社交环境的高要求，因此将"干净交友、严格管理、隐私保护"
                    作为核心理念，打造无低俗、无杂乱的优质社交环境。
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    平台采用严格的用户审核机制和智能风控系统，确保每一位用户都能在安全、
                    舒适的环境中结识志同道合的朋友，分享生活点滴，建立真实有意义的社交关系。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 品牌理念 */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center gradient-text">品牌理念</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="glass-card border-none hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">干净纯粹</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    坚持零容忍态度对待低俗内容，通过人工+AI双重审核机制，
                    确保平台内容健康向上，为用户营造清新舒适的社交氛围。
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">安全靠谱</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    采用银行级数据加密技术，严格保护用户隐私信息。
                    建立完善的举报申诉机制，快速响应用户反馈，保障用户权益。
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">真实社交</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    推行实名认证和官方认证体系，杜绝虚假账号和机器人。
                    鼓励用户展示真实自我，建立基于共同兴趣的深度社交关系。
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card border-none hover:shadow-lg transition-all">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">持续创新</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    紧跟年轻人社交需求变化，不断优化产品功能和用户体验。
                    引入前沿技术，为用户提供更智能、更便捷的社交服务。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 发展愿景 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">发展愿景</h2>
              <Card className="glass-card border-none">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    梧桐社交的愿景是成为中国最受年轻人信赖的社交平台，让每一位用户都能在这里
                    找到属于自己的社交圈子，遇见真正志同道合的朋友。
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    我们相信，优质的社交环境能够为年轻人带来积极正面的影响。通过持续优化平台
                    管理机制，引入创新社交功能，我们将不断提升用户体验，让社交变得更加简单、
                    纯粹、有意义。
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    未来，梧桐社交将继续秉承"干净、安全、真实"的核心价值观，为亿万年轻用户
                    提供高品质的社交服务，成为连接人与人之间的温暖桥梁。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
