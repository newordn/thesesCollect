$("#img").mouseenter(
    ()=>{
        $("#upload").css("opacity",1);
    }
)
$("#img").mouseleave(
    () => {
        $("#upload").css("opacity", 0);
    }
)
// rigths radio button listeners
$('input:radio[name="role"]').change(
    function () {
        if ($(this).is(':checked') && $(this).val() == 'user') {
            $("#right").val("user");
            console.log("user")
        }
        else if ($(this).is(':checked') && $(this).val() == 'admin') {
            $("#right").val("admin");
            console.log("admin")
        }
        else
        {
            $("#right").val("root");
            console.log("root");
        }
        });

// handling bibliography and library adding
 // libray
$("#confirmLibraryAdding").click(()=>{
    let libVal= $("#library").val();
    $("#library").val( libVal + ($("#libraryContent").val())+";")
    $("#libraryList").append('<li class="list-group-item">'+ 
    $("#libraryContent").val()+'</li>');
    $("#library").attr("value", $("#library").val())
})
// bibliography
$("#confirmBibliographyAdding").click(() => {
    let biblioVal = $("#bibliographyAuthor").val() + ":" + $("#bibliographyTitle").val() + ":" + $("#bibliographyContent").val() +":";
    $("#bibliography").val(biblioVal + ($("#bibliography").val()))
    $("#bibliographyList").append('<li class="list-group-item">' +
        $("#bibliographyTitle").val() + '</li>');

$("#bibliography").attr("value", $("#bibliography").val())
})

// file picker
$("#addButton").click(() => {

    $("#abstract_file").click();
document.getElementById("abstract_file").addEventListener('change', handleImg, false);
function handleImg() {
    let img = this.files[0];
    console.log(img);
    $("#abstract").val(img.name);
}
});
