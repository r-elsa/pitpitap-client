export const LocalstorageMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (!action.saveToLocal) {
    return;
  }

  const { itemName } = action.payload;

  // let localSettings = JSON.parse(localStorage.getItem(itemName)) || {};
  
  localStorage.setItem(itemName, JSON.stringify({
      ...action.payload
  }))
};