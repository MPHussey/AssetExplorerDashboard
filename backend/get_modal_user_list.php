<?php
require('config.php');
$division=$_POST["division"];
$category=$_POST["category"];
//'Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)','Printer','IP Phone','Scanners','Tablet'
$chosed_cat="''";
if(str_contains($category,'Laptop(IT)')){
    $chosed_cat="'Laptop(IT)'";
}else if(str_contains($category,'Laptop(ULKBL)')){
    $chosed_cat="'Laptop(ULKBL)'";
}else if(str_contains($category,'Laptop(ULKBL)')){
    $chosed_cat="'Laptop(ULKBL)'";
}else if(str_contains($category,'Zero Client')){
    $chosed_cat="'Zero Client'";
}else if(str_contains($category,'Thin Client')){
    $chosed_cat="'Thin Client'";
}else if(str_contains($category,'Desktop(IT)')){
    $chosed_cat="'Desktop(IT)'";
}else if(str_contains($category,'Desktop(ULKBP)')){
    $chosed_cat="'Desktop(ULKBP)'";
}else if(str_contains($category,'Printer')){
    $chosed_cat="'Printer'";
}else if(str_contains($category,'IP Phone')){
    $chosed_cat="'IP Phone'";
}else if(str_contains($category,'Scanners')){
    $chosed_cat="'Scanners'";
}else if(str_contains($category,'Tablet')){
    $chosed_cat="'Tablet'";
}else if(str_contains($category,'Desktops')){
    $chosed_cat="'Desktop(IT)','Desktop(ULKBP)'";
}else if(str_contains($category,'Laptops')){
    $chosed_cat="'Laptop(IT)','Laptop(ULKBL)'";
}else if(str_contains($category,$division)){
    $chosed_cat="'Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)','Printer','IP Phone','Scanners','Tablet'";
}
$query="SELECT assets.asset_tag,models.name model,category.name category,users.id,users.username,users.first_name,users.last_name,assets._snipeit_division_6
FROM snipeit.assets assets,snipeit.models models,snipeit.categories category,snipeit.users users
WHERE assets.model_id=models.id AND models.category_id=category.id AND assets.assigned_to=users.id
AND assets._snipeit_division_6 ='".$division."' AND category.name IN(".$chosed_cat.") AND assets.deleted_at IS NULL AND assets.assigned_to!='NULL'
";

$result=mysqli_query($conn,$query);
$data=[];
$i=0;
while($row=mysqli_fetch_array($result)){
    $data[$i]["asset_tag"]=$row[0];
    $data[$i]["model_name"]=$row[1];
    $data[$i]["category_name"]=$row[2];
    $data[$i]["user_id"]=$row[3];
    $data[$i]["user_name"]=$row[4];
    $data[$i]["first_name"]=$row[5];
    $data[$i]["last_name"]=$row[6];
    $data[$i]["division_name"]=$row[7];
    $i++;
}

echo json_encode($data);


?>
