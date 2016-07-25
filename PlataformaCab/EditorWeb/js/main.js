/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var _Proyects=[];
var NombreProyectos=[""];


$( document ).ready(function(){
    var app= new fast_appi(".menuA",".menua");
    app.run();
    $(".title").addClass("jumbotron btn-success");
    $("#proyectsActions").hide();
    $(".menuA1").click(function(){$("#editorFirstNav").addClass("navbar-fixed-top");});
    $(".menuA2").click(function(){$("#editorFirstNav").addClass("navbar-fixed-top");});
    $(".menuA3").click(function(){$("#editorFirstNav").removeClass("navbar-fixed-top");});
    //Editor/Abrir proyecto/Extraer informacion
    
    AbrirProyectosEventos();
    
    //Editor/NuevoProyecto/Validar Button   
    validarInputsConButton([["input[name='nombrep']",NombreProyectos],["input[name='autor']",[""]]],"#npbtn");
    
    //Editor/NuevoProyecto/Click en nuevo proyecto
    $("#npbtn").click(function(){
        if(!isJQ(this,".disabled"))
        {
            var proyect={"nombre":$("input[name='nombrep']").val(),"autor":$("input[name='autor']").val(),"fecha":$("input[name='fecha']").val()};
            var p=JSON.stringify(proyect);
            $.post("./tpj_manager.php","proyectos="+p,"json");
            AbrirProyectosEventos();
            $("#npbtn").addClass("disabled btn-danger");
        }
        
    });
    
    $(".menuA1").click(function(){
        $("input[name='nombrep']").val("");
        $("input[name='autor']").val("");
        var date=new Date();
        $("input[name='fecha']").val(date.getHours()+":"+date.getMinutes()+"-"+date.getDate()+"/"+(date.getUTCMonth()+1)+"/"+date.getFullYear());
        $("#npbtn").addClass("disabled btn-danger");
    });
    
    //Editor/NuevoPoyecto/
    
    
});





function AbrirProyectosEventos()
{
    $.getJSON("json/proyects.json", function (file)
    {
        _Proyects=file.proyectos;
        for(var i=0;i<_Proyects.length;i++)
        {
            NombreProyectos.push(_Proyects[i].nombre);
        }        
        proyectosParaAbrir();
        
    });
}

function proyectosParaAbrir()
{
    $("#proyects").empty();
    $("#proyects").append("<table class='table table-responsive'></table>");
    $("#proyects table").append("<tr><th><label>Seleccionado</label></th><th><b>Nombre del proyecto</b></th><th><b>Autor</b></th><th><b>Fecha</b></th></tr>");
    for(var i=0;i<_Proyects.length;i++)
    {
        $("#proyects table").append("<tr id='p"+(i+1)+"'><td><input type='checkbox' name='cp"+(i+1)+"'></td><td class='nameP'>"+_Proyects[i].nombre+"</td><td>"+_Proyects[i].autor+"</td><td>"+_Proyects[i].fecha+"</td></tr>");
        var event=new ClickProyecto("p"+(i+1)+"");
    }
    
}

function ClickProyecto(idname)
{
    $("#"+idname+"").click(function(){
        $("#proyects input:checked").click();
        $("input[name='c"+idname+"'] ").click();
        $("#proyectsActions").show();
        var text=$("#"+idname+" .nameP ").text();        
        $("#proyectsActions h2").text(text);   
        $("#proyectsActions li.hide").text((Number(idname.split('p')[1])-1)+""); 
    });
}