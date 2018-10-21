


$.each(document.getElementsByClassName("detailLink"),(i,v)=>{
    v.addEventListener("click",()=>{
    $.ajax({
    url: "http://localhost:8080/these/getOne/"+ v.getAttribute("href")[1]
}).done((data)=>{
    console.log(data);
$("#detailDate").text(data.theseDate)
$("#detailRegion").text(data.regions)
$("#detailUniversity").text(data.university)
$("#detailFaculty").text(data.faculty)
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
data.bibliography.forEach((v)=>{
    $("#detailBibliography").append("<li class='list-group-item'>" + v.title +"</li>");
})

data.library.forEach((v)=>{
    $("#detailLibrary").append("<li class='list-group-item'>" + v.description +"</li>");
})
})
})
})
