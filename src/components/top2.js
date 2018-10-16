Vue.component('menu-item', {
  props: ['menuitem'],
  template: '<li>{{ menuitem.text }}</li>',
});

new Vue({
  el: '#top2',
  data: {
    menulist: [{
        id: 0,
        text: 'minsik'
      },
      {
        id: 1,
        text: 'hi'
      },
      {
        id: 2,
        text: 'Whatever else humans are supposed to eat'
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