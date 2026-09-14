import { useParallax, useParallaxScale, useParallaxFade, useParallaxRotate } from "@/hooks/useParallax";

export default function ParallaxDemo() {
  const parallaxRef1 = useParallax({ speed: 0.5 });
  const parallaxRef2 = useParallax({ speed: -0.3 });
  const scaleRef = useParallaxScale();
  const fadeRef = useParallaxFade();
  const rotateRef = useParallaxRotate({ rotation: 180 });

  return (
    <section className="py-20 md:py-32 bg-background overflow-hidden">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Effets Parallax
          </h2>
          <p className="text-muted-foreground text-lg">
            Faites défiler pour voir les différents effets en action
          </p>
        </div>

        <div className="space-y-32">
          {/* Parallax Vertical */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Parallax Vertical</h3>
              <p className="text-muted-foreground">
                L'élément se déplace verticalement à une vitesse différente du scroll.
              </p>
            </div>
            <div ref={parallaxRef1} className="h-64 bg-accent/20 rounded-sm flex items-center justify-center">
              <span className="text-accent font-bold text-xl">Scroll Down ↓</span>
            </div>
          </div>

          {/* Parallax Inverse */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div ref={parallaxRef2} className="h-64 bg-accent/20 rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-xl">Scroll Up ↑</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Parallax Inverse</h3>
              <p className="text-muted-foreground">
                L'élément se déplace dans la direction opposée au scroll.
              </p>
            </div>
          </div>

          {/* Scale Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Scale Effect</h3>
              <p className="text-muted-foreground">
                L'élément grandit progressivement lors du scroll.
              </p>
            </div>
            <div ref={scaleRef} className="h-64 bg-accent/20 rounded-sm flex items-center justify-center">
              <span className="text-accent font-bold text-xl">Scale Up 📈</span>
            </div>
          </div>

          {/* Fade Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div ref={fadeRef} className="h-64 bg-accent/20 rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-xl">Fade In ✨</span>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4">Fade Effect</h3>
              <p className="text-muted-foreground">
                L'élément apparaît progressivement avec un effet de fondu.
              </p>
            </div>
          </div>

          {/* Rotate Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Rotate Effect</h3>
              <p className="text-muted-foreground">
                L'élément tourne lors du scroll.
              </p>
            </div>
            <div className="flex justify-center">
              <div ref={rotateRef} className="w-32 h-32 bg-accent/20 rounded-sm flex items-center justify-center">
                <span className="text-accent font-bold text-xl">🔄</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
