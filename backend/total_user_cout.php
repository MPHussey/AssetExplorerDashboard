<?php
require ('config.php');

$query="SELECT COUNT(asset_tag) 
FROM snipeit.assets WHERE deleted_at IS NULL AND assigned_to !='NULL'";
$result=mysqli_query($conn,$query);
$data=0;
while($row=mysqli_fetch_array($result)){
    $data=$row[0];

}
echo $data;

?>
