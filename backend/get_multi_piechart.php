<?php
require ('config.php');
$query_1="SELECT _snipeit_division_6,COUNT(asset_tag)
FROM snipeit.assets
WHERE deleted_at IS NULL AND _snipeit_division_6 IS NOT NULL
GROUP BY _snipeit_division_6";

$result_1=mysqli_query($conn,$query_1);
$data_1=[];
$j=0;
while($row=mysqli_fetch_array($result_1)){
    $data_1[$j]["division"]=$row[0];
    $data_1[$j]["count"]=$row[1];
    $j++;
}

$main_arr=[];
$model_arr=['Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)'];


$query="
SELECT assets._snipeit_division_6,category.name,COUNT(assets.asset_tag)
FROM snipeit.assets assets,snipeit.models models,snipeit.categories category
WHERE assets.model_id=models.id AND models.category_id=category.id AND assets.deleted_at IS NULL AND assets._snipeit_division_6 IS NOT NULL AND category.name IN('Laptop(IT)','Laptop(ULKBL)','Zero Client','Thin Client','Desktop(IT)','Desktop(ULKBP)','Printer','IP Phone','Scanners','Tablet') AND assets.assigned_to!='NULL'
GROUP BY assets._snipeit_division_6,category.name";
        $result=mysqli_query($conn,$query);
        $data=[];
        $i=0;
        while($row=mysqli_fetch_array($result)){
            $main_arr[$i]["division"]=$row[0];
            $main_arr[$i]["category"]=$row[1];
            $main_arr[$i]["value"]=$row[2];
            $i++;
        }


$creative_arr=[];
$j=0;
for($a=0;$a<sizeof($data_1);$a++){
    $creative_arr[$a]["category"]=$data_1[$a]["division"];
    $creative_arr[$a]["value"]=$data_1[$a]["count"];
    for($b=0;$b<sizeof($main_arr);$b++){
        if($main_arr[$b]["division"]==$data_1[$a]["division"]){
            $creative_arr[$a]["subData"][$j]["category"]=$main_arr[$b]["category"];
            $creative_arr[$a]["subData"][$j]["value"]=$main_arr[$b]["value"];
        }
        $j++;
    }
$j=0;

}





echo json_encode($creative_arr);





?>
