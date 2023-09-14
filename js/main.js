$(document).ready(function() {
    $(".progress-bar").each(function() {
        var progress = $(this).attr("data-progress");
        $(this).animate({ width: progress + "%" }, 1000); // 1000ms (1 segundo) de animación
    });
});