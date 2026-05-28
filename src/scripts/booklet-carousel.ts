import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';

function updateButtonState(
  emblaApi: EmblaCarouselType,
  prevButtonNode: HTMLButtonElement,
  nextButtonNode: HTMLButtonElement,
) {
  prevButtonNode.disabled = !emblaApi.canScrollPrev();
  nextButtonNode.disabled = !emblaApi.canScrollNext();
}

export function initBookletCarousel() {
  const wrapperNode = document.querySelector('.embla-booklet') as HTMLElement | null;
  if (!wrapperNode || wrapperNode.dataset.initialized === 'true') return;

  const viewportNode = wrapperNode.querySelector('.embla-booklet__viewport') as HTMLElement | null;
  const prevButtonNode = wrapperNode.querySelector('.embla-booklet__prev') as HTMLButtonElement | null;
  const nextButtonNode = wrapperNode.querySelector('.embla-booklet__next') as HTMLButtonElement | null;

  if (!viewportNode || !prevButtonNode || !nextButtonNode) return;

  wrapperNode.dataset.initialized = 'true';

  const emblaApi = EmblaCarousel(viewportNode, {
    align: 'start',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 976px)': { active: false },
    },
  });

  prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false);
  nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false);

  emblaApi
    .on('init', () => updateButtonState(emblaApi, prevButtonNode, nextButtonNode))
    .on('select', () => updateButtonState(emblaApi, prevButtonNode, nextButtonNode))
    .on('reInit', () => updateButtonState(emblaApi, prevButtonNode, nextButtonNode));

  updateButtonState(emblaApi, prevButtonNode, nextButtonNode);

  Fancybox.bind('[data-fancybox="booklet"]', {});
}
