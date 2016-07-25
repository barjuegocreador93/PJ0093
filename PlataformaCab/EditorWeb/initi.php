<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function explore($obj,$page="")
{
   
}



function objetos($objs = []) {
    $page="";
    if(is_null($objs))
        return "";
    foreach ($objs as $objeto)
    {
        $doble=false;
        $nombre="";
        foreach ($objeto as $propiedad=>$dato)
        {
           if($propiedad=="nombre")
           {$page.="<$dato ";$nombre=$dato;} 
           if($propiedad=="clases")
               $page.="class='$dato' ";
           if($propiedad=="mas")
                $page.="$dato >";           
           if($propiedad==="texto")
               $page.=$dato;
           if($propiedad === "hijo")
           { $page.=objetos($dato)."</$nombre>";}
           
          
        }
    }    
    return $page;
}


function readJsonPage($url) {
    $json = file_get_contents($url);
    $json = json_decode($json);
    $jsonS = file_get_contents("../aditionalPackets/structs.json");
    $structs = json_decode($jsonS);
    print $structs->{"init"};

    foreach ($json->{"head"} as $hd) {
        if (is_string($hd[0])) {
            $text = $structs->{$hd[0]};
            $options = $hd[1];
            for ($i = 0; $i < count($options); $i++) {
                $text = str_replace("V$i", $options[$i], $text);
            }
            print $text;
        } else {
            print $hd[1];
        }
    }
    
    foreach ($json->{"body"} as $hd) {
        if (is_string($hd[0])) {
            if ($hd[0] != "_objeto") {
                $text = $structs->{$hd[0]};
                $options = $hd[1];
                for ($i = 0; $i < count($options); $i++) {
                    $text = str_replace("V$i", $options[$i], $text);
                }
                print $text;
            }
            else
            {
               print objetos($hd[1]);
            }
        } else {
            print $hd[1];
        }
    }
}


