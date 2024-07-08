//AND OPERATION
function AND(a, b){
return a&&b;
}

//OR OPERATION
function OR(a,b){
    if(a||b){
        return 1;
       
    }
    else{
        return 0;
    }
}

//NOT OPERATION
function NOT(a){
    if(a == 1){
        return 0;
    }
    else{
        return 1;
    }
}

//NOR
function NOR(a,b){
    if(a ==0 && b==0){
        return 1;
    }
    else {
        return 0;
    }
}

//Nand
function NAND(a,b){
    if(a==1 && b==1){
        return 0;
    }
    else{
        return 1;
    }
}

//XOR
function XOR(a,b){
    if(a !==b){
        return 1;
    }
    else{
        return 0;
    }
}

//XNOR
function XNOR(a,b){
    if(a==b){
        return 1;
    }
    else{
        return 0;
    }
}

