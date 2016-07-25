<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$newproyect = $_POST["proyectos"];
$newproyect = json_decode($newproyect);
$name="";
$nuevo=[];
foreach ($newproyect as $c=>$d)
{
    if($c=="nombre")
    {
      mkdir ("proyectos/".$d);
      $name=$d;
      $nuevo["url-root"]="proyectos/".$d."/init.json";
    }
    
    $nuevo[$c]=$d;
}

$init=[];
$init["root"]=[];

$init = json_encode($init);
file_put_contents($nuevo["url-root"], $init);


$proyects= file_get_contents("json/proyects.json");
$proyects=  json_decode($proyects);
$pr=[];
$pr["proyectos"]=[];
$i=0;
foreach ($proyects as $c)
{
    foreach($c as $d)
    {
        $pr["proyectos"][$i]=$d;
        $i++;
    }
}        
$pr["proyectos"][$i]=$nuevo;

$proyects=  json_encode($pr);
file_put_contents("json/proyects.json",$proyects);