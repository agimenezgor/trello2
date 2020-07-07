import React, { Component } from 'react';

class Tarea extends Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: props.nombre,
            terminado: false
        }
    }
    terminar = () =>{this.setState({terminado: !this.state.terminado});}
    renderTerminado(){
        if(this.state.terminado === false){
            return(
                <button className="btn btn-warning btn-sm" onClick={this.terminar}>Pendiente</button>
            )
        }else{
            return(
                <button className="btn btn-success btn-sm" onClick={this.terminar}>Terminado</button>
            )
        }
    }
    render(){
        const {nombre} = this.props;
        return(
            <div className="container-fluid mb-3 d-flex w-100 p-0">
                <div className="col-md-8 text-capitalize text-white d-flex align-items-center p-0">{nombre}</div>   
                <div className="col-md-4 p-0">
                    {this.renderTerminado()}   
                </div>
            </div>
        )
    }
}
export default Tarea;