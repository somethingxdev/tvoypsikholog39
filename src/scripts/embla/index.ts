import EmblaCarousel, { type EmblaOptionsType } from 'embla-carousel';
import { addPrevNextBtnsClickHandlers } from './arrows-dots-buttons';

const emblaNode = <HTMLElement>document.querySelector('.embla');
const viewportNode = <HTMLElement>emblaNode.querySelector('.embla__viewport');
const prevBtn = <HTMLElement>emblaNode.querySelector('.embla__button--prev');
const nextBtn = <HTMLElement>emblaNode.querySelector('.embla__button--next');

const emblaApi = EmblaCarousel(viewportNode, {
  slidesToScroll: 'auto',
  breakpoints: {
    '(max-width: 992px)': { slidesToScroll: 3 },
    '(max-width: 768px)': { slidesToScroll: 2 },
    '(max-width: 576px)': { slidesToScroll: 1 },
  },
});

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(emblaApi, prevBtn, nextBtn);

emblaApi.on('destroy', removePrevNextBtnsClickHandlers);
