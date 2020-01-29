export const gallery = {
  items: [
    { path: '../../../assets/img/products/17.jpg' },
    { path: '../../../assets/img/products/18.jpg' },
    { path: '../../../assets/img/products/19.jpg' },
    { path: '../../../assets/img/products/21.jpg' },
    { path: '../../../assets/img/products/16.jpg' }
  ],
  options: {
    selector: '.siema',
    duration: 200,
    easing: 'ease-out',
    perPage: {
      300: 1,
      800: 4
    },
    startIndex: 0,
    draggable: true,
    threshold: 20,
    loop: true
  }
};
