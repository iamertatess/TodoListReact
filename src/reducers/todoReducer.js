const todoReducer = (state, action) => {
    
    switch (action.type) {
      case 'CHANGE_THEME':
        return { ...state, isDarkMode: !state.isDarkMode };
  
      case 'CREATE':
        
        const newTodo = { id: new Date().getTime(), text: action.payload };
  
        
        const updated = state.todos.concat(newTodo);
  
       
        return { ...state, todos: updated };
  
      case 'DELETE':
        
        const filtred = state.todos.filter((i) => i.id !== action.payload);
  
        
        return { ...state, todos: filtred };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;