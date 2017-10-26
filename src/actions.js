import store from "./store";

export const addComent= (name,coment)=>{
    const addComent = [...store.getState().foro,{
        id : store.getState().foro.length+1,
    // const newComent= icoment.concat( {
		name: name,
		coment: coment
	}];

	store.setState({
		foro: addComent
	})
}

export const removeComent = (index) => {
	const coment =  store.getState().coment.filter( (item, idx) => idx !== index );
	store.setState({
		coment: coment
	})
}


