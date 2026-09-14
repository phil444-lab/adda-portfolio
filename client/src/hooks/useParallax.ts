import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { shouldEnableParallax } from '@/config/parallax.config';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ParallaxOptions {
  speed?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
}

/**
 * Check if user prefers reduced motion
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useParallax(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    speed = 0.5,
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
    markers = false,
  } = options;

  useEffect(() => {
    // Don't apply parallax if disabled or user prefers reduced motion
    if (!shouldEnableParallax() || prefersReducedMotion()) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          markers,
        },
      });
    });

    return () => ctx.revert();
  }, [speed, start, end, scrub, markers]);

  return elementRef;
}

export function useParallaxScale(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
    markers = false,
  } = options;

  useEffect(() => {
    // Don't apply parallax if disabled or user prefers reduced motion
    if (!shouldEnableParallax() || prefersReducedMotion()) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0.5 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            markers,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [start, end, scrub, markers]);

  return elementRef;
}

export function useParallaxFade(options: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    start = 'top 80%',
    end = 'top 20%',
    scrub = true,
    markers = false,
  } = options;

  useEffect(() => {
    // Don't apply parallax if disabled or user prefers reduced motion
    if (!shouldEnableParallax() || prefersReducedMotion()) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            markers,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [start, end, scrub, markers]);

  return elementRef;
}

export function useParallaxRotate(options: ParallaxOptions & { rotation?: number } = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const {
    rotation = 360,
    start = 'top bottom',
    end = 'bottom top',
    scrub = true,
    markers = false,
  } = options;

  useEffect(() => {
    // Don't apply parallax if disabled or user prefers reduced motion
    if (!shouldEnableParallax() || prefersReducedMotion()) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        rotation,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start,
          end,
          scrub,
          markers,
        },
      });
    });

    return () => ctx.revert();
  }, [rotation, start, end, scrub, markers]);

  return elementRef;
}
export function useParallaxSlideIn<T extends HTMLElement = HTMLDivElement>(
  options: { direction?: 'left' | 'right' } & ParallaxOptions = {}
) {
  const elementRef = useRef<T>(null);
  const {
    direction = 'left',
    start = 'top 80%',
    end = 'top 40%',
    scrub = true,
    markers = false,
  } = options;

  useEffect(() => {
    // Don't apply parallax if disabled or user prefers reduced motion
    if (!shouldEnableParallax() || prefersReducedMotion()) {
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const xStart = direction === 'left' ? -200 : 200;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, x: xStart },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start,
            end,
            scrub,
            markers,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [direction, start, end, scrub, markers]);

  return elementRef;
}
