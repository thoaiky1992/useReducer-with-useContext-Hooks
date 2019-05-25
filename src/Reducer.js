
const Reducer = (state,action) => {
	switch (action.type) {
		case 'EDIT':
			return { ...state,name:action.data}
		default:
			return state;
	}
}
export default Reducer;