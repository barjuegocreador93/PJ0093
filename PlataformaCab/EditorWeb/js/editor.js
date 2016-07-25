/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function()
{
    objetosDesplazables("#editorFiles");
    objetosDesplazables("#editorAtributos");
    objetosDesplazables("#editorHtmlObjs");
    
    validarInputsConButton([["input[name='fileName']",[""]]],"#saveFile");
    $("#saveFile").click(function(){
        if(!isJQ(this,".disabled"))
        {
            var file={"nombre":$("input[name='fileName']").val(),"tipo":$("select[name='tipo']").val(),"proyecto":$("")};
            file=JSON.stringify(file);
            $.post("./tpi_manager_file.php","newfile="+file,"json");
            $(".menuA2_2").click()
        }
    });
});


function objetosDesplazables(selector)
{
    $(selector+" button").click(function()
    {
        if(!isJQ(this,".disabled"))
            $(this).addClass("disabled");
        else
             $(this).removeClass("disabled");
    });
    
    $(document).mousemove(function(event)
    {
        if(isJQ(selector+" button",".disabled"))
            $(selector).css({"left":event.pageX-10,"top":event.pageY-5});
    });
}