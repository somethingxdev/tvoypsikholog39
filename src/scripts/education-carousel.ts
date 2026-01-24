import EmblaCarousel from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export function initEducationCarousel() {
  const wrapperNode = document.querySelector('.embla-education') as HTMLElement;
  if (!wrapperNode) return;

  const viewportNode = wrapperNode.querySelector('.embla-education__viewport') as HTMLElement;
  const prevButtonNode = wrapperNode.querySelector('.embla-education__prev') as HTMLElement;
  const nextButtonNode = wrapperNode.querySelector('.embla-education__next') as HTMLElement;

  if (!viewportNode || !prevButtonNode || !nextButtonNode) return;

  const emblaApi = EmblaCarousel(viewportNode, { loop: false }, [Autoplay({})]);

  prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false);
  nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false);

  Fancybox.bind('[data-fancybox="education"]', {});
}
