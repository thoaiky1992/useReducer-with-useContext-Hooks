
const Reducer = (state,action) => {
	switch (action.type) {
		case 'ADD': state.data.push({ name : action.data} );
			return {...state};
		default:
			return state;
	}
}
export default Reducer;