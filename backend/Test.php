<?php
require('config.php');

$query="SELECT COUNT(DISTINCT(asset_tag))
FROM snipeit.assets
WHERE status_id IN(2,10,11,7,12,9) AND deleted_at IS NULL AND checkout_counter=checkin_counter";

$result=mysqli_query($conn,$query);
while($row=mysqli_fetch_array($result)){
    $data=$row[0];
}

echo $data;



?>
