
if($("#typefilter").val() === "Everything" && $("#namefilter")===""){
        for(var pro in pros) {
      if(pros.hasOwnProperty(pro)){
        var projectProps = pros[pro];
        var filter = $("#typefilter").val();
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
        }
      }
}
else if($("#typefilter").val() === "Everything" && $("#namefilter")!==""){
        for(var pro in pros) {
      if(pros.hasOwnProperty(pro)){
        var projectProps = pros[pro];
        var filter = $("#typefilter").val();
          if(projectProps.creator === $("#namefilter").val()){
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
          }
        }
      }
}
else if($("#typefilter").val() !== "Everything" && $("#namefilter").val() === ""){
        for(var pro in pros) {
      if(pros.hasOwnProperty(pro)){
        var projectProps = pros[pro];
        var filter = $("#typefilter").val();
          if(projectProps.type === filter){
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
          }
        }
      }
}
else if($("#typefilter").val() !== "Everything" && $("#namefilter").val() !== ""){
        for(var pro in pros) {
      if(pros.hasOwnProperty(pro)){
        var projectProps = pros[pro];
        var filter = $("#typefilter").val();
          if(projectProps.type === filter && projectProps.creator === $("#namefilter").val()){
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
          }
        }
      }
}



for(var pro in pros) {
      if(pros.hasOwnProperty(pro)){
        var projectProps = pros[pro];
        var filter = $("#typefilter").val();
       debugger
        if($("#typefilter").val() === "Everything"){
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
        }
        else if(projectProps.type === $("#typefilter").val())  {
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
        }
      }
  }