<?php
require('config.php');
$division=$_POST["division"];
$query_laptopIT="SELECT category.name,COUNT(assets.asset_tag)
FROM snipeit.assets assets,snipeit.models models,snipeit.categories category
WHERE assets.model_id=models.id AND models.category_id=category.id AND assets._snipeit_division_6 !='NULL' AND 
category.name IN('Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)','Printer','IP Phone','Scanners','Tablet') AND assets.assigned_to!='NULL' 
AND assets.deleted_at IS NULL AND assets._snipeit_division_6='".$division."'
GROUP BY category.name";

$result_laptopIT=mysqli_query($conn,$query_laptopIT);
$data=[];
$i=0;
while($row=mysqli_fetch_array($result_laptopIT)){
    $data[$i]["category"]=$row[0];
    $data[$i]["count"]=$row[1];
    $data[$i]["division"]=$division;
    $i++;
}

echo json_encode($data);


?>
