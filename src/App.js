import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import { addComent, removeComent } from "./actions";
import './App.css';

const Foro = ({ name, coment, removeComent }) => {
  return (
    <div>
      <div className="foro">
        <button className="remove-coment"
          onClick={removeComent}>
          Remove
      </button>
        <div>{name}</div>
        <div>{coment}</div>
      </div>
    </div>
  );
}

const Stats = ({foro})=> {
  var totalComent = foro.length;
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>{totalComent}</td>
        </tr>
      </tbody>
    </table>
  )
}

const ForoApp = ({ foro }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    addComent(this.nameInput.value,this.comentInput.value)
    this.nameInput.value = '';
    this.comentImput.value = '';
  }
  const foroComponet = foro.map((foro, index) => {
    return <Foro
      key={index}
      name={foro.name}
      score={foro.coment}
    />
  })
  return (
    <div className="foro" >
      <Stats foro={foro} />
      <h1>FORO</h1>
      <div>
        {foroComponet}
      </div>
      <form onSubmit={onSubmit}>
        <input placeholder="Name" type="text" ref={(e) => this.nameInput = e} />
        <input placeholder="Coment" type="text" ref={(e) => this.comentImput = e} />

        <input type="submit" value="Add Player" />
      </form>
    </div>



  )
}

const mapToProps = ({foro}) => ({foro});

export default connect(mapToProps)(ForoApp);
