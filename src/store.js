import createStore from "redux-zero";

let FORO = [
    {
        name: "Rosa Mamani",
        coment: "Portafolio",
        id: 1
    },
    {
        name: "Gladys Mamani",
        coment: "Spotify",
        id: 2
    },
    {
        name: "Vladimir Mamani",
        coment: "Brigada",
        id: 3
    }

];
const initialState = {
    foro: FORO,
    foroIndex: -1
    // situacion inicial
    // porque el menos uno????
}
const store = createStore(initialState);

export default store;
