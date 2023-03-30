<?php
require ('config.php');
$query="SELECT DISTINCT(_snipeit_division_6)
FROM snipeit.assets
WHERE deleted_at IS NULL AND _snipeit_division_6 !='NULL'
ORDER BY _snipeit_division_6";
$result=mysqli_query($conn,$query);
$data=[];
$i=0;
while($row=mysqli_fetch_array($result)){
    $data[$i]=$row[0];
    $i++;
}

echo json_encode($data);


?>
