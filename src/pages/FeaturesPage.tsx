import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Users, ShieldCheck, AlertTriangle, Image, Video, Bell, Search } from 'lucide-react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import FloatingDownloadButton from '@/components/layouts/FloatingDownloadButton';

export default function FeaturesPage() {
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
                核心功能
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                为年轻人打造的全方位社交功能，让每一次互动都充满乐趣
              </p>
            </div>
          </div>
        </section>

        {/* 即时聊天 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gradient-text">即时聊天</h2>
                  <p className="text-muted-foreground">私聊群聊、互动流畅</p>
                </div>
              </div>
              
              <Card className="glass-card border-none mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    梧桐社交提供强大的即时通讯功能，支持一对一私聊和多人群聊。
                    无论是文字、语音还是视频，都能实现实时传输，让沟通零延迟。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <MessageCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">多种消息类型</h4>
                        <p className="text-sm text-muted-foreground">支持文字、表情、图片、语音、视频等多种消息形式</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Bell className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">消息推送</h4>
                        <p className="text-sm text-muted-foreground">实时消息提醒，不错过任何重要信息</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">群组管理</h4>
                        <p className="text-sm text-muted-foreground">创建兴趣群组，邀请好友一起畅聊</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">隐私保护</h4>
                        <p className="text-sm text-muted-foreground">端到端加密，保障聊天内容安全</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 动态广场 */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gradient-text">动态广场</h2>
                  <p className="text-muted-foreground">分享日常、结识好友</p>
                </div>
              </div>
              
              <Card className="glass-card border-none mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    在动态广场，你可以分享生活中的精彩瞬间，发现有趣的人和事。
                    通过点赞、评论、转发等互动方式，快速拓展你的社交圈。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Image className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">图文动态</h4>
                        <p className="text-sm text-muted-foreground">发布图片和文字，记录生活点滴</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Video className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">短视频分享</h4>
                        <p className="text-sm text-muted-foreground">上传短视频，展示精彩瞬间</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Search className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">智能推荐</h4>
                        <p className="text-sm text-muted-foreground">根据兴趣推荐相关内容和用户</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">话题互动</h4>
                        <p className="text-sm text-muted-foreground">参与热门话题，结识同好</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 官方认证 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-accent-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gradient-text">官方认证</h2>
                  <p className="text-muted-foreground">杜绝虚假账号提升真实度</p>
                </div>
              </div>
              
              <Card className="glass-card border-none mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    梧桐社交实行严格的用户认证机制，通过多重验证确保每个账号的真实性。
                    官方认证标识让你轻松识别可信用户，营造安全可靠的社交环境。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">实名认证</h4>
                        <p className="text-sm text-muted-foreground">通过手机号和身份信息验证用户身份</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">头像审核</h4>
                        <p className="text-sm text-muted-foreground">人工+AI双重审核，确保头像真实合规</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">认证标识</h4>
                        <p className="text-sm text-muted-foreground">通过认证的用户获得专属标识</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">信用体系</h4>
                        <p className="text-sm text-muted-foreground">建立用户信用评分，提升平台可信度</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 风控管理 */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold gradient-text">风控管理</h2>
                  <p className="text-muted-foreground">违规分级处罚，社区干净规范</p>
                </div>
              </div>
              
              <Card className="glass-card border-none mb-8">
                <CardContent className="p-8">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    梧桐社交采用先进的风控管理系统，对违规行为实施分级处罚机制。
                    通过智能识别和人工审核相结合，确保社区环境干净规范，让每位用户都能安心社交。
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">智能识别</h4>
                        <p className="text-sm text-muted-foreground">AI自动识别违规内容和行为</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <ShieldCheck className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">人工审核</h4>
                        <p className="text-sm text-muted-foreground">专业审核团队24小时在线监控</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <AlertTriangle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">分级处罚</h4>
                        <p className="text-sm text-muted-foreground">根据违规程度实施警告、禁言、封号等处罚</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">用户举报</h4>
                        <p className="text-sm text-muted-foreground">支持用户举报违规内容，共同维护社区环境</p>
                      </div>
                    </div>
                  </div>
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
