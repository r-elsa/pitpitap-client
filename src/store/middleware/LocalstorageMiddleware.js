export const LocalstorageMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (!action.saveToLocal) {
    return;
  }

  const { itemName, data } = action.payload;

  let localSettings = JSON.parse(localStorage.getItem(itemName)) || {};

  localStorage.setItem(itemName, JSON.stringify({
      ...localSettings,
      ...data
  }))

  next(action);

};