<?php
require('config.php');
$division=$_POST["division"];
/*$query="SELECT DISTINCT(models.name) modal,category.name category
FROM snipeit.assets assets,snipeit.models models,snipeit.categories category
WHERE assets.model_id=models.id AND models.category_id=category.id AND assets._snipeit_division_6 ='".$division."' AND category.name IN('Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)') AND assets.deleted_at IS NULL
";*/

$query="SELECT models.name,category.name,COUNT(assets.asset_tag)
FROM snipeit.assets assets,snipeit.models models,snipeit.categories category
WHERE assets.model_id=models.id AND models.category_id=category.id AND assets._snipeit_division_6 ='".$division."' AND category.name IN('Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)','Printer','IP Phone','Scanners','Tablet') AND assets.deleted_at IS NULL AND assets.assigned_to!='NULL'
GROUP BY models.name,category.name
";

$result=mysqli_query($conn,$query);
$data=[];
$i=0;
while($row=mysqli_fetch_array($result)){
    $data[$i]["modal"]=$row[0];
    $data[$i]["category"]=$row[1];
    $data[$i]["count"]=$row[2];
    $i++;
}

echo json_encode($data);


?>
