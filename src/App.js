import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComent, removeComent } from "./actions";
import './App.css';

const Foro = ({ name, coment, removeComent }) => {
  return (
    <div>
      <div className="foro">
        <a className="remove-coment"
          onClick={removeComent}>
          Remove
      </a>
        {name}
      </div>
      <div className="foro-coment">
        <div className="counter">
          <div className="counter-score"> {coment} </div>
        </div>
      </div>
    </div>
  );
}

function Stats(props) {
  var totalComent = props.foro.length;
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Coment:</td>
          <td>{totalComent}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ForoApp = ({ foro }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('this..', this);//con truco, es el connect el this.
    addComent(this.comentInput.value)
  }
  const foroComponet = foro.map((foro, index)=>{
  return <Foro
          />
  })
}

export default ForoApp;
