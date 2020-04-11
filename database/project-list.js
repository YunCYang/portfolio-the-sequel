const projectList = [
  {
    id: 1,
    name: 'Lacerna',
    tech: ['React', 'Node', 'PostgreSQL', 'Redux'],
    github: 'https://github.com/YunCYang/lacerna',
    live: 'https://lacerna.yuncyang.com/',
    desc: 'A demo e-commerce site developed with ReactJs',
    detail: 'Lacerna is a demo e-commerce site selling coats, capes and similar apparels. Lacerna mimics real-life online stores with home page promoting new and popular products, product page that lets you see product detail, and cart page allowing you to proceed with the order. User can sign up as a user or shop as a guest.',
    img: './images/lacerna.png',
    imgArr: ['/images/lacerna.png', '/images/lacerna_product.png', '/images/lacerna_cart.png']
  }, {
    id: 2,
    name: 'Sudo-Ku',
    tech: ['React', 'Jest', 'Sass'],
    github: 'https://github.com/YunCYang/sudo-ku',
    live: 'https://sudo-ku.yuncyang.com/',
    desc: 'A sudoku game that recursively creates puzzle',
    detail: 'Sudo-Ku is a classical sudoku game providing 5 levels of difficulty. The puzzles are generated recursively and guaranteed to have a solution. Player can switch modes between actually putting in answers and taking notes within the block with ease.',
    img: './images/sudo-ku.png',
    imgArr: ['/images/sudo-ku.png', '/images/sudo-ku_title.png', '/images/sudo-ku_game.png']
  }
];

export default projectList;
