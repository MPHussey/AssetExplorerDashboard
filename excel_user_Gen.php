<?php
include('backend/SimpleXLSXGen.php');
$converted_stored_items=json_decode($_POST['excel-user-values'],true);

$data_arr=[];
$data_arr[0]=['Asset Tag', 'Model Name','Category Name','Username','First Name','Last Name','Division Name'];
$i=1;
for($a=0;$a<sizeof($converted_stored_items);$a++){

    $data_arr[$a+1]=[$converted_stored_items[$a]["asset_tag"],$converted_stored_items[$a]["model_name"],$converted_stored_items[$a]["category_name"],$converted_stored_items[$a]["user_name"],$converted_stored_items[$a]["first_name"],$converted_stored_items[$a]["last_name"],$converted_stored_items[$a]["division_name"]];

}

//echo $converted_stored_items[0]["category"];
/*$books = [
    ['ISBN', 'title', 'author', 'publisher', 'ctry' ],
    [618260307, 'The Hobbit', 'J. R. R. Tolkien', 'Houghton Mifflin', 'USA'],
    [908606664, 'Slinky Malinki', 'Lynley Dodd', 'Mallinson Rendel', 'NZ']
];*/
$xlsx = SimpleXLSXGen::fromArray( $data_arr );
$xlsx->downloadAs($converted_stored_items[1]["division_name"].'_Asset_Users.xlsx');


?>
