<?php

include "dbFunctions.php";

$query = "SELECT * FROM statistics order by country"; 
$result = mysqli_query($link, $query);

while ($row = mysqli_fetch_assoc($result)) {
    $statistics[] = $row;
}
mysqli_close($link);

echo json_encode($statistics);

?>

