## React y ReactDOM
React como libreria esta dividida en 2 partes, React y ReactDOM, con la primera es con la
 que vamos a generar la aplicacion utilizando componentes y demas y la segunda se encarga 
 espesificamente de renderizar la aplicacion en el navegador
    
 ### Como se maneja la data en React?
 
 En react, valores de un componentes son inmutables, eso quiere decir que no cambian.
  para lograr que cambiar el los valores de un componente, hay que cambiar su estado!!
  
### Como modificar la data? 

Los componenetes en react tinene un metodo llamado setState con el cual se puede modicar el estado.

### Ciclo de vida de una aplicacion en React:
```
 classMiComponenteextendsComponents{
   constructor(){
 	    // Enlazo (bind) eventos y/o inicializo estado
    }
    componentWillMount(){
 	    // Se ejecuta antes de montar el componente
 	    // Se podría usar para hacer un setState()
 	}
 	render(){
 	    // Contiene todos los elementos a renderizar
 	    // podrías usarlo para calcular propiedades (ej: concatenar una cadena)
 	}
 	componentDidMount(){
 	    //Solo se lanza una vez
 	    //Ideal para llamar a una API, hacer un setInteval, etc
 	}
 
 	//Actualización:
 	 componentWillReceiveProps(){
 	    //Es llamado cuando el componente recibe nuevas propiedades.
 
 	}
 	shouldComponentUpdate(){
 	    //Idea para poner una condición y  si las propiedades que le llegaron anteriormente
 	    // eran las mismas que tenia retornar false para evitar re-renderear el componente
 	}
 	componentWillUpdate(){
 	    //metodo llamado antes de re-renderizar el componente si shouldComponentUpdate devolvió true
 	}
 
 	// re-render si es necesario...
 
 	componentDidUpdate(){
 	    //Método llamado luego del re-render
 	}
 	componentWillUnmount(){
 	    //Método llamado antes de desmontar el componente
 	}
 	componentDidCatch(){
 	    // Si ocurre algún error, lo capturo desde acá:
 	}
 }
```