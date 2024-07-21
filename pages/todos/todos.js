const app = getApp();

Page({
  data: {
    user: null,
  },

  async onLoad() {
    this.setData({ todos: app.todos }); 
    try {
      const userData = await this.getReqExternalApi();
      this.setData({ user: userData });
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    };    
  },

  onShow() {
    // Render global data to current page
    this.setData({ todos: app.todos });
  },

  onTodoChanged(e) {
    const checkedTodos = e.detail.value;
    app.setTodos(app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    })));
    this.setData({ todos: app.todos });
  },

  addTodo() {
    my.navigateTo({ url: '../add-todo/add-todo' });
  },

  delete(id) {
    let idTargte = id.target.dataset.id
    app.todos = app.todos.filter(todo => todo.id !== idTargte)
    this.setData({ todos: app.todos });
  },

  getReqExternalApi() {
    return new Promise((resolve, reject) => {
      my.httpRequest({
        url: 'https://dummyjson.com/users/1',
        success: (res) => {
          if (res.data) {
            resolve(res.data);
          } else {
            reject(new Error('Empty response from API'));
          }
        },
        fail: (error) => {
          reject(error);
        }
      });
    });
  },

});