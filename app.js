// Call the storage API to get the stored data
const todos = my.getStorageSync({key:'todos'}).data || [
  { id:'1', text: 'Learning Javascript', completed: true },
  { id:'2', text: 'Learning ES2016', completed: true },
  { id:'3', text: 'Learning Mini Program ', completed: false },
];

App({
  todos,

  setTodos(todos) {
    this.todos = todos;
    my.setStorageSync({key:'todos', data:todos});
  },

});