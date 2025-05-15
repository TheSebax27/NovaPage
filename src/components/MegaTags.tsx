import { useEffect } from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
}

const MetaTags = ({
  title = 'NOVA | Excelencia Digital',
  description = 'NOVA transforma ideas en excelencia digital con servicios de desarrollo web y móvil de vanguardia.',
  keywords = 'desarrollo web, aplicaciones móviles, diseño UX/UI, soluciones digitales, desarrollo de software',
  ogTitle = 'NOVA | Excelencia Digital',
  ogDescription = 'Transformando ideas en excelencia digital con servicios de desarrollo web y móvil de vanguardia.',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://novastudio.com',
  twitterCard = 'summary_large_image',
  twitterTitle = 'NOVA | Excelencia Digital',
  twitterDescription = 'Transformando ideas en excelencia digital con servicios de desarrollo web y móvil de vanguardia.',
  twitterImage = '/twitter-image.jpg',
}: MetaTagsProps) => {
  useEffect(() => {
    // Actualizar el título del documento
    document.title = title;

    // Actualizar meta tags
    const metaTags = {
      description,
      keywords,
      'og:title': ogTitle,
      'og:description': ogDescription,
      'og:image': ogImage,
      'og:url': ogUrl,
      'twitter:card': twitterCard,
      'twitter:title': twitterTitle,
      'twitter:description': twitterDescription,
      'twitter:image': twitterImage,
    };

    // Actualizar meta tags existentes o crear nuevos
    Object.entries(metaTags).forEach(([name, content]) => {
      if (!content) return;

      // Comprobar si es una etiqueta de Open Graph
      if (name.startsWith('og:')) {
        const existingMeta = document.querySelector(`meta[property="${name}"]`);
        if (existingMeta) {
          existingMeta.setAttribute('content', content);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('property', name);
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
        }
      } 
      // Comprobar si es una etiqueta de Twitter
      else if (name.startsWith('twitter:')) {
        const existingMeta = document.querySelector(`meta[name="${name}"]`);
        if (existingMeta) {
          existingMeta.setAttribute('content', content);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('name', name);
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
        }
      } 
      // Meta tags estándar
      else {
        const existingMeta = document.querySelector(`meta[name="${name}"]`);
        if (existingMeta) {
          existingMeta.setAttribute('content', content);
        } else {
          const meta = document.createElement('meta');
          meta.setAttribute('name', name);
          meta.setAttribute('content', content);
          document.head.appendChild(meta);
        }
      }
    });
  }, [
    title,
    description,
    keywords,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    twitterCard,
    twitterTitle,
    twitterDescription,
    twitterImage,
  ]);

  // Este componente no renderiza nada visualmente
  return null;
};

export default MetaTags;