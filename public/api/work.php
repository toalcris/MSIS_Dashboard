<?php

require '../../app/common.php';

/*
$taskId = intval($_GET['task_id'] ?? 0);
if ($taskId < 1) {
  throw new Exception('Invalid Task ID');
}
*/

// 1. Go to the database and get all work associated with the $taskId
$workArr = Work::getWorkByTaskId($task_id);

// 2. Convert to JSON
$json = json_encode($workArr, JSON_PRETTY_PRINT);

// 3. Print
header('Content-Type: application/json');
echo $json;
