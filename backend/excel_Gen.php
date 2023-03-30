<?php
include('SimpleXLSXGen.php');
$converted_stored_items=json_decode($_POST['excel-values'],true);

$data_arr=[];
$data_arr[0]=['Model', 'Number Of Assets'];
$i=1;
for($a=0;$a<sizeof($converted_stored_items);$a++){

    $data_arr[$a+1]=[$converted_stored_items[$a]["modal"],$converted_stored_items[$a]["count"]];

}

//echo $converted_stored_items[0]["category"];
/*$books = [
    ['ISBN', 'title', 'author', 'publisher', 'ctry' ],
    [618260307, 'The Hobbit', 'J. R. R. Tolkien', 'Houghton Mifflin', 'USA'],
    [908606664, 'Slinky Malinki', 'Lynley Dodd', 'Mallinson Rendel', 'NZ']
];*/
$xlsx = SimpleXLSXGen::fromArray( $data_arr );
$xlsx->downloadAs('AppDetails.xlsx');


?>
