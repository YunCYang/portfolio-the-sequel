import { SHOW_MENU } from '../constants/action-types';

const showMenu = (state = false, action) => {
  if (action.type === SHOW_MENU) return action.payload;
  else return state;
};

export default showMenu;
