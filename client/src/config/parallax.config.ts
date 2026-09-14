/**
 * Configuration centralisée pour les effets parallax
 * Modifiez ces valeurs pour ajuster les animations sur tout le site
 */

export const parallaxConfig = {
  // Configuration globale
  global: {
    // Activer/désactiver tous les effets parallax
    enabled: true,
    
    // Désactiver sur mobile pour les performances
    disableOnMobile: false,
    
    // Largeur d'écran considérée comme mobile (en pixels)
    mobileBreakpoint: 768,
    
    // Activer les marqueurs de debug (utile pour le développement)
    showMarkers: false,
  },

  // Configuration pour le Hero Section
  hero: {
    background: {
      speed: 0.3,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
    content: {
      start: 'top 80%',
      end: 'top 30%',
      scrub: true,
    },
  },

  // Configuration pour les sections de contenu
  sections: {
    header: {
      start: 'top 80%',
      end: 'top 40%',
      scrub: true,
    },
    content: {
      start: 'top 90%',
      end: 'top 50%',
      scrub: true,
    },
  },

  // Configuration pour les cartes de projet
  projectCards: {
    scale: {
      start: 'top 90%',
      end: 'top 50%',
      scrub: true,
      initialScale: 0.8,
      finalScale: 1,
      initialOpacity: 0.5,
      finalOpacity: 1,
    },
  },

  // Configuration pour la section About
  about: {
    leftColumn: {
      start: 'top 80%',
      end: 'top 40%',
      scrub: true,
    },
    rightColumn: {
      start: 'top 85%',
      end: 'top 45%',
      scrub: true,
    },
  },

  // Configuration pour les effets personnalisés
  custom: {
    // Parallax vertical standard
    vertical: {
      slow: { speed: 0.2 },
      medium: { speed: 0.5 },
      fast: { speed: 0.8 },
      reverse: { speed: -0.3 },
    },
    
    // Effets de rotation
    rotate: {
      quarter: { rotation: 90 },
      half: { rotation: 180 },
      full: { rotation: 360 },
    },
    
    // Effets de fade
    fade: {
      quick: {
        start: 'top 90%',
        end: 'top 60%',
      },
      medium: {
        start: 'top 80%',
        end: 'top 40%',
      },
      slow: {
        start: 'top 70%',
        end: 'top 30%',
      },
    },
  },
};

/**
 * Fonction utilitaire pour vérifier si le parallax doit être activé
 */
export function shouldEnableParallax(): boolean {
  if (!parallaxConfig.global.enabled) {
    return false;
  }

  if (parallaxConfig.global.disableOnMobile) {
    return window.innerWidth >= parallaxConfig.global.mobileBreakpoint;
  }

  return true;
}

/**
 * Fonction utilitaire pour obtenir la configuration avec les marqueurs de debug
 */
export function getConfigWithMarkers<T extends Record<string, any>>(config: T): T {
  return {
    ...config,
    markers: parallaxConfig.global.showMarkers,
  };
}
