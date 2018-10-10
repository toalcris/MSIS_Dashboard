var dashboardApp = new Vue({
  el: '#dashboard',
  data: {
    project: {
      name : '',
      short_description: '',
      start_date : '',
      target_date : '',
      budget : '',
      spent : '',
      projected_spend: '',
      weekly_effort_target: ''
    },
    tasks: [
      {
        id: 0,
        title: '',
        type : '',
        size : '',
        team : '',
        status: '',
        start_date: '',
        close_date: null,
        hours_worked: '',
        perc_complete: '',
        current_sprint : ''
      }
    ]
  },
  computed: {
    days_left: function () {
      return moment(this.project.target_date).diff(moment(), 'days')
    }
  },
  methods: {
    pretty_date: function (d) {
      return moment(d).format('l')
    },
    pretty_currency: function (val) {
      if (val < 1e3) {
        return '$ ' + val
      }

      if (val < 1e6) {
        return '$ ' + (val/1e3).toFixed(1) + ' k'
      }

      return '$ ' + (val/1e6).toFixed(1) + ' M'
    },
    completeClass: function(task) {
      if (task.perc_complete == 100 ) {
        return 'alert-success'
      }
      if (task.current_sprint && task.hours_worked == 0 ) {
        return 'alert-warning'
      }
    },
    fetchTasks (pid) {
      fetch('https://raw.githubusercontent.com/tag/iu-msis/dev/public/p1-tasks.json')
      .then( response => response.json() )
      .then( json => {dashboardApp.tasks = json} )
      .catch( err => {
        console.log('TASK FETCH ERROR:');
        console.log(err);
      })
    },
    fetchProject (pid) {
      fetch('https://raw.githubusercontent.com/tag/iu-msis/dev/public/project1.json')
      .then( response => response.json() )
      .then( json => {dashboardApp.project = json} )
      .catch( err => {
        console.log('PROJECT FETCH ERROR:');
        console.log(err);
      })
    },
    fetchProjectWork (pid) {
      fetch('api/workHours.php?projectId='+pid)
      .then( response => response.json() )
      .then( json => {dashboardApp.project = json} )
      .catch( err => {
        console.log('PROJECT HOURS FETCH ERROR:');
        console.log(err);
      })
    },
    formatWorkHours(){
      console.log(this.workHours);
      this.workHours.forEach(
        function(entry, index, arr){
          entry.date = Date.parse(entry.date);
          entry.hours = Number(entry.hours);
          entry.runningTotalHours = entry.hours +
          (index == 0 ? 0 : arr[index-1].runningTotalHours);
        }
      );
      console.log(this.workHours);
    },
    gotoTask(tid) {
      // alert ('Clicked: ' + tid)
      window.location = 'task.html?taskId=' + tid;
    }
  },
  created () {
    this.fetchProject(1);
    this.fetchTasks(1);
    this.fetchProjectWork(1);
  }
})
