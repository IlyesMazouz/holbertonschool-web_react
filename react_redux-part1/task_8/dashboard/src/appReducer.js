export const APP_ACTIONS = {
	LOGIN: 'LOGIN',
	LOGOUT: 'LOGOUT',
	TOGGLE_DRAWER: 'TOGGLE_DRAWER',
	MARK_NOTIFICATION_READ: 'MARK_NOTIFICATION_READ',
	SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
	SET_COURSES: 'SET_COURSES',
  };
  
  export const initialState = {
	displayDrawer: true,
	user: {
	  email: '',
	  isLoggedIn: false,
	},
	notifications: [],
	courses: [],
  };
  
  export const appReducer = (state = initialState, action) => {
	switch (action.type) {
	  case APP_ACTIONS.LOGIN:
		return {
		  ...state,
		  user: { ...state.user, email: action.email, isLoggedIn: true },
		};
	  case APP_ACTIONS.LOGOUT:
		return {
		  ...state,
		  user: { ...state.user, isLoggedIn: false, email: '' },
		};
	  case APP_ACTIONS.TOGGLE_DRAWER:
		return {
		  ...state,
		  displayDrawer: !state.displayDrawer,
		};
	  case APP_ACTIONS.MARK_NOTIFICATION_READ:
		return {
		  ...state,
		  notifications: state.notifications.map((notification) =>
			notification.id === action.id
			  ? { ...notification, isRead: true }
			  : notification
		  ),
		};
	  case APP_ACTIONS.SET_NOTIFICATIONS:
		return {
		  ...state,
		  notifications: action.notifications,
		};
	  case APP_ACTIONS.SET_COURSES:
		return {
		  ...state,
		  courses: action.courses,
		};
	  default:
		return state;
	}
  };
  