const app = getApp();

Page({
  data: {
    inputValue: '',
  },

  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  
  add() {
    app.todos = app.todos.concat([
      {
        id: app.todos.length + 1,
        text: this.data.inputValue,
        compeleted: false,
      },
    ]);
    my.navigateBack();
  },
});