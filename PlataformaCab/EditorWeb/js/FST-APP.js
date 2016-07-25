
/**
* @fileoverview Libreria con funciones de utilidad
*
* @author Camilo Barbosa
* @version 2.0
*/
/**
* @class fats_appi
* @requires JQuery
* @description Clase de funcion que permite genrar clases para crear applicaion web desde el navegador
* @example Clase .activ_on .activ1
* @example Clase .Hide .Show .slave1 
* @example js initi: $(document).ready(function(){var app=new fast_appi(".interruptor",".actorBajoInterruptor"); app.run();});
* @example html: < a class="interruptor1">Presioname< /a>< div class="actorBajoInterruptor1">Hola mundo!!< /div>
* @param {String} activ clase para usar de interruptor
* @param {String} slave clase para despues de oprimir el interruptor
* @returns {Void} No retorna nada
*/
function fast_appi(activ, slave)//Obejeto 
{
    this.activ = activ;
    this.slave = slave;
    this.inter=[];

    var fp = {activ: this.activ, slave: this.slave, id: 0};
    var z = 0;

    for (var i = 0; i < ArrFastAppi.length; i++)
        if (ArrFastAppi[i].activ === fp.activ)
            z++;

    if (!z)
        ArrFastAppi.push(fp);
    this.fps = ArrFastAppi.length - 1;

    this.run = function ()
    {
        
        for (var i = 1; looking(this.activ + i + ""); i++)
        {

            var cactiv = this.activ + i + "";
            var cslave = this.slave + i + "";
            $(cslave).hide();
            var m=new ob(cactiv, cslave, this.activ, this.slave, i, this.fps);
            this.inter.push(m);

        }
    };
}


//Funciones Basicas Y Variables:

var ArrFastAppi = [];

/**
*
* @param {String} html objeto html numero 1
* @param {String} html2 objeto html numero 2
* @returns {Bool} verdad si html es el mismo html2
* */
function isJQ(html, html2) //Permite saber si un elemento html contiene un id(#) o clase(.)
{
    return $(html).is(html2);
}
/**
*
* @param {String} html objeto html numero 1* 
* @returns {Bool} verdad si html es visible para el usuario
* */
function isReady(html)//Permite saber si un elemento html esta a la vista del usuario
{
    return isJQ(html, ":visible");
}
/**
*
* @param {String} html objeto html numero 1* 
* @returns {Bool} verdad si html existe
* */
function looking(html)//permiete saber si existe un elemento html id o clase
{
    return isReady(html) || isJQ(html, ":not(:visible)");
}

/**
*
* @private
* 
* */
function ob(activ, slave, nactiv, nslave, id, fps)//funcion basica de fast_api
{
    
        $(activ).click(function () {
            if(!isJQ(activ,".disabled")){
            if (activ !== ArrFastAppi[fps].activ + ArrFastAppi[fps].id + "") {
                $(ArrFastAppi[fps].activ + ArrFastAppi[fps].id + "").fadeIn();
                if(isJQ(slave,".Hide"))$(ArrFastAppi[fps].slave + ArrFastAppi[fps].id + "").hide();
                else $(ArrFastAppi[fps].slave + ArrFastAppi[fps].id + "").slideUp();
                $(ArrFastAppi[fps].activ + ArrFastAppi[fps].id + "").removeClass("active");
            }
            
            if (isJQ(this, ".activ_togg"))
            {
                $(slave).slideToggle();
                if(isJQ(this,"active"))$(this).removeClass("active");
                else
                $(this).addClass("active");
                
                
            }
            else
            {
                if(isJQ(slave,".Show"))
                    $(slave).show();
                else
                if(isJQ(slave,".FadeIn"))
                    $(slave).fadeIn();
                else
                    $(slave).slideDown();
                $(this).hide();
                
            }
            $(slave + "_on").slideDown();
            $(slave + "_off").slideUp();
            ArrFastAppi[fps].activ = nactiv;
            ArrFastAppi[fps].slave = nslave;
            ArrFastAppi[fps].id = id;
            }

        });
        if (isJQ(activ, ".activ_on"))
            $(activ).click();
        if (isJQ(activ, ".getText"))
        {
            for (var i = 1; i <= 6; i++)
            {
                if (isJQ(slave, ".h_" + i + ""))
                {
                    $(slave).prepend("<h" + i + ">" + $(activ).text() + "</h" + i + ">");
                }
            }
        }


    
    if(looking(activ+"_1"))
    {
        this.sub=new fast_appi(nactiv+id+"_",nslave+id+"_");
        this.sub.run();
    }
    
    return;

}

