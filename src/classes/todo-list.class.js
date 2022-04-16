import { Todo } from "./todo.class";

export class TodoList {

    constructor() {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ) {

        this.todos.push( todo );
        this.guardarLocalStorage();

    }

    eliminarTodo( id ) {


        this.todos = this.todos.filter( todo => todo.id != id); // mantener los que sean diferentes al id
        this.guardarLocalStorage();

    }

    marcarCompletodo( id ) {

        for( const todo of this.todos ) {
            
            if( todo.id == id ){

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }

    eliminarCompletados() {
        
        this.todos = this.todos.filter( todo => !todo.completado ); //todos los que no esten completados
        this.guardarLocalStorage();


    }

    guardarLocalStorage(){

        //convertir arreglo de todos a un json string JSON.stringify()
        localStorage.setItem( 'todo', JSON.stringify( this.todos ) );

    }

    cargarLocalStorage(){

        // proceso inverso a stringify, pasar un json string a su objeto original JSON.parse()
        this.todos = ( localStorage.getItem( 'todo' ) )
                        ? JSON.parse( localStorage.getItem( 'todo' ))
                        : [];

        // map barrer cada uno de los elementos de un arreglo y retornar un nuevo arreglo
        // con cada uno de los elementos mutados
        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );

        //como solo pasa un argumento se puede poner de la siguiente manera
        //solo si es un argumento
        this.todos = this.todos.map( Todo.fromJson );

    }

}