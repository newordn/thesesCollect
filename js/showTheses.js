$.each(document.getElementsByClassName("detailLink"),(i,v)=>{
    v.addEventListener("click",()=>{
    $.ajax({
    url: "http://localhost:8080/these/getOne/"+ v.getAttribute("href")[1]
}).done((data)=>{
    
$("#detailDate").text(data.theseDate)
$("#detailRegion").text(data.regions)
$("#detailUniversity").text(data.university)
$("#detailFaculty").text(data.faculty)
$("#detailCountry").text(data.country)
$("#detailOption").text(data.options)
$("#detailLevel").text(data.level)
$("#detailSubject").text(data.subject)
$("#detailAbstract").attr("src",data.resumes)
$("#detailStudent").text(data.student)
$("#detailChiefOfWork").text(data.workChief)
$("#detailProf").text(data.profesor)
$("#detailAssistant").text(data.assistant)
$("#detailBibliography").html("");
$("#detailLibrary").html("");
let bibliography = data.bibliography.split(":");
for(let i=0;i<bibliography.length;i+=3)
{
    $("#detailBibliography").append('<li class="list-group-item" '+ 
    'data-toggle="tooltip" data-html="true"' +
    'title="<table class="table-bordered" '+
    'style="background-color:white;color:black">'+
      ' <thead><th>Auteur</th><th>Titre</th><th>Description</th></thead>'+
     '<tbody><tr><td>' + bibliography[i] + '</td><td>' + bibliography[i + 1] + '</td><td>' + bibliography[i+2] +'</td></tr></tbody></table>'
                            + bibliography[i] + "</li>");
}
let library = data.library.split(";");
    for (let i = 0; i < library.length;i ++) {
        $("#detailLibrary").append("<li class='list-group-item'>" + library[i] + "</li>");
    }
})
})
})

// handling scroll overflow when closing second modal
$(".addBL").click(()=>{
    $("#addThese").css("overflow","scroll");
})

// enabling tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})