let school = {
      name: "oxford intern",
      year: 1985,
      student: 98,
      courses: ['maths', 'english', 'science'],
      action: function(){
        return "time for ${this.name} school";
      }
};

console.log(school.action());