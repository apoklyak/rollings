export interface SliderItem
{
    path: string;
}

export interface SliderOptions
{
  selector?: string,
  duration?: number,
  easing?: string,
  perPage?: any,
  startIndex?: number,
  draggable?: boolean,
  threshold?: number,
  loop?: boolean
}
