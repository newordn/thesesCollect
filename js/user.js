$.each(document.getElementsByClassName("user-item"), (i, v) => {
    v.addEventListener("click", () => {
        v.setAttribute("style","   background-color:#2286c3; color:white;")
        if(v.getAttribute("value"))
        $("#usersId").val($("#usersId").val() + v.getAttribute("value")+",");
        console.log($("#usersId").val())
    })})
