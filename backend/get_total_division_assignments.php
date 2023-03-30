<?php
require ('config.php');

$query="SELECT assets._snipeit_division_6,COUNT(assets.asset_tag)
FROM snipeit.assets assets,snipeit.models models,snipeit.categories category
WHERE assets.model_id=models.id AND models.category_id=category.id AND assets.deleted_at IS NULL AND assets._snipeit_division_6 IS NOT NULL AND category.name IN('Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)','Printer','IP Phone','Scanners','Tablet') AND assets.assigned_to!='NULL'
GROUP BY assets._snipeit_division_6";

$result=mysqli_query($conn,$query);
$data=[];
$i=0;
while($row=mysqli_fetch_array($result)){
    $data[$i]["division"]=$row[0];
    $data[$i]["count"]=$row[1];
    $i++;
}
echo json_encode($data);

?>
