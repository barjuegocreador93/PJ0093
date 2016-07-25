/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
* @fileoverview Libreria con funciones de utilidad
*
* @author Camilo Barbosa
* @version 0.1
*/
/**
* @public
* @param {Array} inputs inputs a validar con sus respectivos no iguales a existentes ejemplo: [["#name",["","Carlos"]],[".adress",[""]],["input[name='edad']",[""]]]
* @param {String} button button a activar o desactivar
* @returns {Void} No retorna nada
*/
function validarInputsConButton(inputs, button)
{
    for(var i=0;i<inputs.length;i++)
    {
        var m=new valOb(inputs[i][0],inputs,button)
    }
}
/**
*
* @private
* @description Es una funcion que es utilizada por <b>validarInputsConButton()</b>
* @memberOf validarInputsConButton  
*/
function valOb(input,inputs,button)
{    
    
    $(input).keyup(function(){
        var data=true;
        for(var i=0;i<inputs.length;i++)
        {   
            if(!notEqualsStrToArray($(inputs[i][0]).val(),inputs[i][1]))
            {
                data=false;
                break;
            }
        }
        if(! data)
        {
            $(button).addClass("disabled btn-danger");
        }
        else
        {
           $(button).removeClass("disabled btn-danger"); 
        }
    });
    
}

function notEqualsStrToArray(value,array)
{
    
    for(var i=0;i<array.length;i++)
    {
        if(value===array[i])
        {
            return false;
        }
    }
    return true;
}