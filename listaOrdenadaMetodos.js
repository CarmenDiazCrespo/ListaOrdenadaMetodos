var MAX_ELEM_LIST=5; //El máximo de elementos que puede meter son 5
//Lo pongo como variable global
//Entiendo que el usuario me mete del 1-5 
function create(){
    var list=[];
    for(var i=0; i<MAX_ELEM_LIST; i++){ //Inicializo con un for porque no se cuantos elementos va a meter el usu
        list[i]=Number.NaN;
    }
    return list;
}
function isEmpty(list){
    var isEmpty=false;
    if(isNaN(list[0])){ //Miro si el primer puesto está vacio, 
                        //si lo está no hay elementos en el array por lo tanto está vacio entero
        isEmpty=true;
    }
    return isEmpty;
}
function isFull(list){
    var isFull=false;
    if(!isNaN(list[MAX_ELEM_LIST-1])){ //Si el ultimo puesto no está vacio, es porque está llena entera.
        isFull=true;
    }
    return isFull;
}
function size(list){
    var length=0;
    while (length<MAX_ELEM_LIST && !isNaN(list[length])){ //Comprueblo los elementos que están rellenos, pero no
                                                         // pueden ser más que el máximo de elementos.
        length++;
    }
    return length;
}
function add(list, elem){
    var elem= parseInt(elem); //Lo convierto en un entero, el elemento que me han pasado
    if (isNaN(elem)) { //Compruebo que no esté vacio.
        throw "El elemento no es un número";
    }
    if(isFull(list)){ //Si la lista está llena no puedo meter el nuevo elemento
        throw "La lista está llena";   
    }
    list.push(elem); //Lo incluyo
    list.sort(); //Lo ordeno
    return list.length; 
}
function get(list, index){
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    return list[index-1];
}
function toString(list){
    var str = "";
    if (!isEmpty(list)){
        var length = size(list);	
        for (var i=0; i<length-1;i++){
            str = str + list[i] + " - "; //Pinta el array separados por guiones
        } 		 		
        str = str + list[i]; 		
    } 	
    return str;
}
function indexOf(list,elem){
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    var result=-1;//Por defecto lo pongo a -1
    var i=0;

    while(i<size(list)){
        if(list[i]===elem){
            result=i+1; // Para que el usuario vea del 1-5
        }
        i++;
    }
    return result;
}
function lastIndexOf(list,elem){ //En el ejercicio pone que se quite la función, pero luego pone que la dejemos
    //si un número se repite tiene sentido que exista la función.
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    var result=-1;
    var i=size(list);
    for(var i=size(list);i>=0;i--){//Recorro a la inversa el array
        if(list[i]===elem){
            result=i+1;// Para que el usuario vea del 1-5
        }
    }
    return result;
}
function capacity(list){
    return MAX_ELEM_LIST; //La capacidad máxima de elementos de la lista
}
function clear(list){
    var elem = Number.NaN;
    if (!isEmpty(list)){
        var length = size(list);	
        for (var i=0; i<length;i++){ //Sustituyo cada entero de la lista con un nan
            list[i] = Number.NaN;
        } 		 		 		
    } 
}
function firstElement(list){
    var first;
    if (!isEmpty(list)){
        first = list[0]; 		
    } else {
        throw "The list is empty.";
    }
    return first;
} 
function lastElement(list){
    var last;
    if (!isEmpty(list)){
        last = list[size(list)-1]; 		
    } else {
        throw "The list is empty.";
    }
    return last;
}
function remove(list,index){
    if(isEmpty(list)){
        throw "The list is empty";
    }
    if(index>size(list)){
        throw "Indice fuera de límite";
    }
    var result= list[index-1]; //Guardo el resultado en una variable, resto -1 para que sea de 0-4

    for(var i=index-1; i<size(list);i++){
        list[i]=list[i+1]; //Voy metiendo el de la posición siguiente
    }
    return result;
}
function removeElement(list,elem){
    var found=false;
    if(isNaN(elem)){
        throw "The element is not a number";
    }
    var i=0;
    while(i<size(list) && !found){
        if(list[i]===elem){
            found=true; //Para que pare cuando ha encontrado el elemento
            remove(list,i+1); 
        }
        i++;
    }
    return found;
}

function testlist(){
    var list = create ();
    console.log("Está vacía: " + isEmpty(list));
    console.log("Longitud: " + size(list));
    console.log("Está llena: " + isFull(list));
    console.log("Añado un 5 en la posicón: "+add(list, 5));
    console.log("Está vacía: " + isEmpty(list));
    add(list,2);
    add(list,4);
    add(list,6);
    add(list,1);
    console.log(toString(list));
    console.log("El elemento 5 está en la posición: "+indexOf(list,5));
    console.log(toString(list));
    console.log("El elemento 4 está en la posición empezando por atrás: "+lastIndexOf(list,4));
    console.log("Capacidad máxima: "+capacity(list));
    console.log(toString(list));
    clear(list);
    add(list,2);
    add(list,4);
    add(list,6);
    add(list,1);
    add(list,7);
    console.log(toString(list));
    console.log("Borro el elemento de la posición 3 que es: "+remove(list,3));
    console.log(toString(list));
    console.log("Borro el elemento 6 de la posición, se ha borrado? "+removeElement(list,6));
    console.log(toString(list));

} 
window.onload = testlist;
