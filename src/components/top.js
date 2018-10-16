Vue.component('menu-item', {
  props: ['menuitem'],
  template: ' <a href="#" class="button">{{ menuitem.text }}</a>',
});

new Vue({
  el: '#top',
  data: {
    menulist: [{
        id: 0,
        text: 'minsik'
      },
      {
        id: 1,
        text: 'menu'
      },
      {
        id: 2,
        text: 'Whatever'
      }
    ]
  }
});

// new Vue({
//   el: '#top',
//   data: {
//     menuList: [
//       { id: 0, text: 'Vegetables' },
//       { id: 1, text: 'Cheese' },
//       { id: 2, text: 'Whatever else humans are supposed to eat' }
//     ]
//   }
// });