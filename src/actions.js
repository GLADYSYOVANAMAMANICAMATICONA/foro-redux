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
    console.log(addComent)
    
}
export const removeComent = (index) => {
    const coment =  store.getState().foro.filter( (item, idx) => idx !== index );
    // filter solo con array
	store.setState({
		foro: coment
	})
}


