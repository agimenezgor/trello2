import React, { Component } from 'react';
import Tarea from './Tarea.js';

class Lista extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: props.nombre,
            nombreTarea: '',
            visible: true, 
            tareas: []
        }
    }
    botonCrearTarea=()=>{this.setState({visible: false});}
    cerrar=()=>{this.setState({visible: true});}
    handleChange = (event) => {this.setState({[event.target.name]:event.target.value});}
    nuevaTarea=()=>{
        console.log("this.state.nombreTarea");
        let arrayTareas = this.state.tareas;
        arrayTareas.push({nombre: this.state.nombreTarea});
        this.setState({tareas: arrayTareas});
        this.setState({nombreTarea: ''});
        this.cerrar();
    }
    renderAnyadirTarea(){
        if(this.state.tareas.length < 12){
            if(this.state.visible === true) {
                return <React.Fragment>
                    <button className="btn btn-success h-100" onClick={this.botonCrearTarea}>
                        + Añadir una tarea nueva.
                    </button>
                </React.Fragment>
            }else {
                return(
                    <form className="bg-warning rounded-lg w-100">
                        <div className="input-group d-flex justify-content-center">
                            <input type="text" className="form control p-1 w-100 mt-2 ml-1 mr-1" name="nombreTarea" value={this.state.nombreTarea} onChange={this.handleChange} placeholder="Introduce el nombre de la tarea..."></input>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                            <button className="btn btn-success mr-3 mb-2" onClick={this.nuevaTarea}>Añadir tarea</button>
                            <button className="btn btn-danger ml-3 mb-1" onClick={this.cerrar}>X</button>
                        </div>
                    </form> 
                )
            }
        }  
    }
    cerrarTarea = () => {
        var indice = window.event.target.id;
        var arrayTareas = this.state.tareas;
        arrayTareas.splice(indice, 1);
        this.setState({tareas: []});
        this.setState(_state =>({tareas: arrayTareas}));
    }
    render(){
        if(this.state.tareas.length === 0){
            return (
                <div className="w-100 d-flex justify-content-center">{this.renderAnyadirTarea()}</div>
            )
        }else{
            return(
                <div className="w-100">
                    {this.state.tareas.map((tarea, index) => (
                        <div className="d-inline-flex container-fluid w-100">
                            <div className="w-100 col-md-10 p-0">
                                <Tarea  key={`tarea-${index}`}
                                nombre = {tarea.nombre}/>
                            </div>
                            <div className="col-md-2 p-0 d-flex justify-content-end ml-2 h-100">
                                <button id={index} className="btn btn-danger ml-1 btn-sm h-50" onClick={this.cerrarTarea}>X</button>
                            </div>
                        </div>))}
                        
                    <div className="d-flex justify-content-center">{this.renderAnyadirTarea()}</div>
                </div> 
            )
        }  
    }
}
export default Lista;