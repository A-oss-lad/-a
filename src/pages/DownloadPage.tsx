import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Smartphone, CheckCircle, HelpCircle } from 'lucide-react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';
import FloatingDownloadButton from '@/components/layouts/FloatingDownloadButton';

const DOWNLOAD_URL = 'https://upload.app/download/%E6%A2%A7%E6%A1%90%E7%A4%BE%E4%BA%A4/com.w2a.dn1s/aec547701470f0c38594c6ee1e5c5b461b9bab1395c48a67a58681f903726829';

export default function DownloadPage() {
  const handleDownload = () => {
    window.open(DOWNLOAD_URL, '_blank');
  };

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
                下载中心
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                官方原版安装包 · 无广告 · 无捆绑 · 无病毒
              </p>
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Download className="mr-2 h-5 w-5" />
                立即下载 APP
              </Button>
            </div>
          </div>
        </section>

        {/* 下载说明 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">下载说明</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card border-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">官方正版</h3>
                    <p className="text-muted-foreground">
                      官方发布的正版安装包，确保应用安全可靠，无任何恶意代码
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">无广告捆绑</h3>
                    <p className="text-muted-foreground">
                      纯净安装包，不包含任何第三方广告或捆绑软件，安装过程简洁流畅
                    </p>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">安全保障</h3>
                    <p className="text-muted-foreground">
                      经过严格的安全检测，无病毒、无木马，保护您的设备和隐私安全
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 安装步骤 */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">安装步骤</h2>
              <Card className="glass-card border-none">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">点击下载按钮</h3>
                        <p className="text-muted-foreground">
                          点击页面上的"立即下载APP"按钮，开始下载梧桐社交安装包（APK文件）。
                          下载过程中请保持网络连接稳定。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">允许安装未知来源</h3>
                        <p className="text-muted-foreground">
                          首次安装APK文件时，系统可能会提示"禁止安装未知来源应用"。
                          请在设置中找到"安装未知应用"选项，允许浏览器或文件管理器安装应用。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">打开安装包</h3>
                        <p className="text-muted-foreground">
                          下载完成后，在通知栏或下载文件夹中找到安装包，点击打开。
                          系统会显示应用权限说明，请仔细阅读后点击"安装"。
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">完成安装</h3>
                        <p className="text-muted-foreground">
                          等待安装进度完成，通常只需几秒钟。安装完成后点击"打开"即可启动梧桐社交，
                          开始您的社交之旅。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">常见问题</h2>
              <div className="space-y-4">
                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-2">为什么下载速度很慢？</h3>
                        <p className="text-muted-foreground">
                          下载速度取决于您的网络状况。建议在WiFi环境下下载，或切换到网络信号较好的位置。
                          如果持续下载失败，可以尝试清除浏览器缓存后重新下载。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-2">安装时提示"解析包出现问题"怎么办？</h3>
                        <p className="text-muted-foreground">
                          这通常是因为下载的安装包不完整或损坏。请删除已下载的文件，重新下载完整的安装包。
                          确保下载过程中网络连接稳定，不要中断下载。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-2">如何更新到最新版本？</h3>
                        <p className="text-muted-foreground">
                          当有新版本发布时，APP内会弹出更新提示。您也可以随时访问本页面下载最新版本的安装包，
                          直接安装即可覆盖旧版本，无需卸载。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-2">安装后无法打开应用怎么办？</h3>
                        <p className="text-muted-foreground">
                          请检查您的手机系统版本是否符合要求（Android 5.0及以上）。
                          如果系统版本符合要求但仍无法打开，请尝试重启手机后再次打开。
                          问题依然存在请联系官方客服。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-none">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <HelpCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold mb-2">是否支持iOS系统？</h3>
                        <p className="text-muted-foreground">
                          目前仅提供Android版本下载。iOS版本正在开发中，敬请期待。
                          您可以关注我们的官方公告，第一时间获取iOS版本上线通知。
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 底部下载区 */}
        <section className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center glass-card p-12 rounded-2xl">
              <Smartphone className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4 gradient-text">
                立即下载梧桐社交
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                开启您的纯净社交之旅
              </p>
              <Button
                onClick={handleDownload}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Download className="mr-2 h-5 w-5" />
                下载安装包
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
