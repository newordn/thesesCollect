$(".detailLink").click((e)=>{
    e.preventDefault();
    let id = $(this).attr("href");
    $.ajax({
        url: "http://192.168.43.84:8080/these/getOne/"+ id
    })
        .done(function (data) {
                console.log(data);
            
        })
})