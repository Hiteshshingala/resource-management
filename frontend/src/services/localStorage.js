export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = state => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
  };

  export const removeSate = state => {
    try {
      localStorage.setItem('state', '');
    } catch {
      // ignore write errors
    }
  };

  export const saveToken = (token) => {
    localStorage.setItem('jwt', token);
  }


  