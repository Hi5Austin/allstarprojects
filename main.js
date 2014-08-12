$(document).ready(function() {
// Have to do in get script to use firebase!
$.getScript("https://cdn.firebase.com/js/client/1.0.15/firebase.js", function() {

//this gets the code for firebase

var projects = new Firebase('https://asproject.firebaseio.com/');
var allComs = new Firebase('https://asccomments.firebaseio.com/'); 
var d = new Date();
var year = d.getFullYear();

//this connects to my firebase locker
//projects.on('value', function (snapshot) {
	//var database = snapshot.val();

	//if(firstRender === true) {
		//for(var project in database) {
			//if(database.hasOwnProperty(project)){
				//var projectProps = database[project];
				//debugger
				//displayProjects(projectProps.link,projectProps.creator,projectProps.type);
				//firstRender = false;
			//}
		//}
	//}
//});

//for everythin in my firebase, display it

var displayProjects = function(name,link,creator,type,des,img) {
    var myLink = link;
    var myCreator = creator;
    var myType = type;
    var myDes = des;
    var myImg = img;
    var myName= name;

    var html ="";
    html += "<a href='" + link + "'><div id='project' style='background-color:white;width:300px;height:600;border:1px solid #000;border-radius:10px;margin:25px;'>";
    html += "<img id='thing' src='" + img + "'><br>";
    html += "<a target='_blank' href='http://austincarvey.github.io/allstarprojects/project.html?projects_url=" + link +"'>" + name + "</a><br>";
    html += des + "<br>";
    html += 'By: ' + myCreator;
    html +="</div></a>";

    $("#home").append(html);
    return;

  //$("#image").append('<img id="thing" src="' + img + '"><br>');
  //$("#home").append('<a id="link" target="_blank" href=file:///Users/allstarcode/Desktop/floobits/project.html?projects_url=' + myLink+ '>' + myLink+"</a><br>");
  //$("#home").append('<a>' + " a " + myType + " by " + myCreator + '</a><br>');
  //$("#home").append('<a>' + myDes + '</a><br><br><br><br><br><br><br><br><br><br><br><br>');


//this sets my variables to the value of the link, type, and person who made it
  //$("#home").append('<a target="_blank" href="file:///Users/allstarcode/Desktop/floobits/project.html?projects_url="'+ link +'>'<img id="thing" "src=" + img + '"></a><br>');
  //$("#home").append('<a id="link" target="_blank" href="file://localhost/Users/allstarcode/Desktop/floobits/project.html?projects_url=' + myLink+ '">' + "</a>");
  //$("#home").append('<a>' + " a " + myType + " by " + myCreator + '</a><br>');
  //$("#home").append('<a>' + myDes + '</a><br>');


// this adds that data to the html file so it will be displayed
};

var addProjectsToList = function() {
    var myLink = $("#searchBox").val();
    var myCreator = $("#nameBox").val();
    var myType = $("#projectType option:selected").text();
    var myDes = $("#des").val();
    var myImg = $("#img").val();
    var myName = $("#namebox").val();
   debugger

// this adds that data to the html file so it will be displayed

  projects.push({name:myName, link: myLink, creator: myCreator, type: myType, des: myDes, img: myImg});
 

// this pushes that data as an object to my firebase locker


};

projects.on('child_added',function(snapshot) {
  var pro = snapshot.val();
  displayProjects(pro.name,pro.link,pro.creator,pro.type,pro.des,pro.img);
  
});


 $("#searchButton").click(addProjectsToList);
 

 //when the button is clicked it adds the project to the list

 //-------THIS IS FOR THE PROJECTS PAGE/IFRAME PAGE -------------------// 


var displayCommetns = function(comments) {
    var myUrl = url;
    var myCommetns = commetns;
    var html ="";
    html += "<div>";
    html += "<img src='" + img + "'>";
    html += "<a target='_blank' href='http://austincarvey.github.io/allstarprojects/project.html?projects_url=" + link +"'>" + link + "</a>";
    html += " A " + myType + ' by ' + myCreator;
    html +="</div>";

    $("#home").append(html);
};


allComs.on('child_added',function(snapshot) {
  var coo = snapshot.val();
  if(coo.url === getURLParameter("projects_url")){
    $("#indie").append('<br><a>' + coo.name + ": "+ coo.comments + '</a><br>');
  }
});




 function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null;
    }

    //var comment = $("#com").val();
   
     var projects_url = getURLParameter("projects_url");
    $("#indie").append('<iframe id="pro" src="' + projects_url +' "> </iframe>');
    projects.on('value',function(snapshot) {
      var stuff = snapshot.val();
      for(var key in stuff) {
        if(stuff[key].link === projects_url) {
          $("#indie").append('<a>' + stuff[key].name + '</a><br>');
          $("#indie").append('<a>' + stuff[key].des + '</a><br>');
          $("#indie").append('<a> A '+ stuff[key].type + ' by '+ stuff[key].creator + '</a><br>');
          //$("#indie").append('<input id="com" placeholder="Leave a comment"><input id="addc" type="Submit">');
          $("#indie").append('<input id="comname" placeholder="Name"><input id="com" placeholder="Leave a comment"><input id="addc" type="Submit">');
          //$("#indie").append('<div id="fb-root"></div>');
          //$("#indie").prepend('<div id="fb-root"></div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.0";fjs.parentNode.insertBefore(js, fjs);}(document, "script", "facebook-jssdk"));</script>');
          //$("indie").append('<div class="fb-comments" data-href="http://example.com/comments" data-numposts="5" data-colorscheme="light"></div>');
          $("#jsscript").append('<script> $.getScript("https://cdn.firebase.com/js/client/1.0.15/firebase.js", function() { function getURLParameter(name) {return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search)||[,""])[1].replace(/\\+/g, "%20"))||null;} var projects = new Firebase("https://asccomments.firebaseio.com/"); var projects_url = getURLParameter("projects_url"); $("#addc").click(function(){var name = $("#comname").val();var comment = $("#com").val(); projects.push({name: name,url:projects_url ,comments:comment});});});');


        }
      }
    });

$("#filtersubmit").click(function(){
$("#home").empty();
projects.on('value',function(snapshot){
  var pros = snapshot.val();
 

  // here apply the filter IM YELLING AT YOU
  //for(var x in pros){
    //console.log(x.type);
  //}
  for(var pro in pros) {
      if(pros.hasOwnProperty(pro)){
        var projectProps = pros[pro];
        var filter = $("#typefilter").val();
       
        if($("#typefilter").val() === "All"){
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
        }
        else if(projectProps.type === $("#typefilter").val())  {
          displayProjects(projectProps.name,projectProps.link,projectProps.creator,projectProps.type,projectProps.des,projectProps.img,year);
        }
      }
  }
});
       //  $("#jsscript").append('<script> $.getScript("https://cdn.firebase.com/js/client/1.0.15/firebase.js", function() {var projects = new Firebase("https://asproject.firebaseio.com/"); $("#addc").click(function(){ var comment = $("#com").val(); projects.push({comments:comment});});});');

//          $("#jsscript").append('<script> $("#addc").click(function(){ var myComments = $("div"); var comment = $("#com").val(); $("body").append("<div>" + comment + "</div>");});');

   // $("#addc").click(function(){
     //var comment = $("#com").val(); 
      //$("indie").append("<div>" + comment + "</div>");
    //});

//$("#addc").click(function(){
   // var myComments = $("div"); 
   // debugger
    //projects.push({comments: myComments}); 
});
});
});


