<?php

class WorkHoursReport {
  public static function fetchByProjectId($projectId){
      $db = new PDO(DB_SERVER, DB_USER, DB_PW);

      $sql = 'SELECT DATE(start_date) AS DATE,
                SUM(hours) AS hours
                FROM Work, Tasks
                WHERE Work.task_id = Tasks.idea
                AND Tasks.project_id=?
                GROUP BY DATE(start_date)
                ORDER BY date';
    $statement = $db->prepare($sql);
    // 3. Run the query
    $success = $statement->execute(
        [$projectId]
    );

    // 4. Handle the results
    $arr = $statement->fetchAll(PDO::FETCH_ASSOC);
    return $arr;
  }
}
