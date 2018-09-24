<?php

require '../../app/common.php';
//get taskID
$taskID = $_GET['taskID'] ?? 0;

//fetch work from db
$work = work::findBYTaskId($taskId);

//convert to Json and print
echo json_encode($work);


 ?>
