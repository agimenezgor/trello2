import React, {Component} from 'react';
import Lista from './Lista';
import 'bootstrap/dist/css/bootstrap.min.css';

class Principal extends Component {
    constructor(props){
        super(props);
        this.state = {
            listas: [],
            visible : true,
            nombre : '',
        }
        this.mapListas = this.mapListas.bind(this);
    }
    crearLista = () =>{this.setState({visible: false});}
    cerrar = () => {
        this.setState({visible: true});
        this.setState({nombre: ''});
    }
    handleChange = (event) => {this.setState({[event.target.name]:event.target.value});}
    listaNueva = () => {
        let arrayTareas = this.state.listas;
        arrayTareas.push({nombre: this.state.nombre});
        this.setState({listas: arrayTareas});
        this.setState({nombre: ''});
        this.cerrar();
    }
    renderAnyadirLista = () =>{
        if(this.state.listas.length < 6){
            if(this.state.visible === true) {
                return <React.Fragment>
                    <button className="btn btn-success m-3 h-50" onClick={this.crearLista}>
                        + Añadir una lista nueva.
                    </button>
                </React.Fragment>
            }else {
                return <React.Fragment>
                    <form className="bg-warning col-md-2 rounded-lg h-50">
                        <div className="input-group d-flex justify-content-center">
                            <input type="text" className="form control p-1 w-100 mt-2" name="nombre" value={this.state.nombre} onChange={this.handleChange} placeholder="Introduce el nombre de la lista..."></input>
                        </div>
                        <div className="d-flex justify-content-center m-2">
                            <button className="btn btn-success mr-3 mb-2" onClick={this.listaNueva}>Añadir lista</button>
                            <button className="btn btn-danger ml-3" onClick={this.cerrar}>X</button>
                        </div>
                    </form> 
                </React.Fragment>
            }
        }  
    }
    cerrarLista =()=> {
        var indice = window.event.target.id;
        var arrayListas = this.state.listas;
        arrayListas.splice(indice, 1);
        this.setState({listas: []});
        this.setState(_state =>({listas: arrayListas}));
    }
    mapListas(){
        return <React.Fragment>
            {this.state.listas.map((lista, index) => (
                <div className="col-md-2" key={`lista-${index}`}>
                    <div className="bg-info m-2 pb-1 rounded-lg">
                        <div className="d-flex justify-content-between">
                            <h4 className="m-2 ml-5 mr-5 text-capitalize text-white">{lista.nombre}</h4>
                            <button id={index} className="btn btn-danger m-2 ml-5" onClick={this.cerrarLista}>X</button>
                        </div>
                        <div className="m-2 d-flex justify-content-center"><Lista/></div>
                    </div> 
                </div>))}
            </React.Fragment>
    }
    render(){
        if(this.state.listas.length === 0){
            return(
                <div className="container-fluid">
                    {this.renderAnyadirLista()}
                </div>
            );
        }
        else{
            return(
                <div className="container-fluid w-100">
                   <div className="row">
                        {this.mapListas()}
                        {this.renderAnyadirLista()}
                    </div>
                </div>
            );
        }
    }
}
 export default Principal;