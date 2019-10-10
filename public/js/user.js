getSubs();

function getSubs() {
  $.get("/api/subjects", function(data){
    console.log("subjects", data);
    updateCard(data);
  });
}
function updateCard(subjectsData) {
  // Loop through and build elements for the subjects
  for (var i = 0; i < subjectsData.length; i++) {
    // Get specific article info for current index
    var theSub = subjectsData[i];
    var $subjectCard = $("<div class='card text-center btn-sm col-4'>");

    // Create the list group to contain the subjects and add the subject content for each
    // var $subjectList = $("<ul>");
    // $subjectList.addClass("list-group");

    // Add the newly created element to the DOM
    $("#subject-card").append($subjectCard);

    // If the subject has a name, log and append to $articleList
    var subName = theSub.name;

    if (subName) {
      console.log(subName);
      $subjectCard.append("<h4 class=''>" + subName + "</h4>");
      $subjectCard.append("<button class='btn btn-primary btn-sm m-3 mx-5'>Study!</button>");
    }
  }
}
