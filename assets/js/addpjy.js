$(document).read(function(){
    changeColor();
    clickChangePage();
    
})

function changeColor(){
    $(".newsTable table tr td").mouseover(function(){
        $(this).addClass("changeColorTd");
    })
    $(".newsTable table tr td").mouseout(function(){
        $(this).removeClass("changeColorTd");
    })
}

function clickChangePage(){
    $(".newsTable table tr td").click(function(){
        
    })
}