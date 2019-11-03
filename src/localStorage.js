export const submitState = () => {
    try {
      const storableState = localStorage.getItem('state');
      if (storableState === null) {
        return undefined;
      }
      return JSON.parse(storableState);
    } catch (error) {
      return undefined;
    }
  };

  export const storeState = state => {
    try {
      const storableState = JSON.stringify(state);
      localStorage.setItem('state', storableState);
    } catch (error) {
      console.log(error);
    }
  };