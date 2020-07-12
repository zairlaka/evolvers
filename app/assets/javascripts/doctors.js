$(document).on('turbolinks:load',function () {
    
$(function () {
    $('#start').datetimepicker();
    $("#start").data("DateTimePicker").format('ddd, DD MMM YYYY HH:mm');

});

$(function () {
    $('#end').datetimepicker();
    $('#end').data("DateTimePicker").format('ddd, DD MMM YYYY HH:mm');
});

$(function () {
    $('#start').datetimepicker({
        //minDate : moment(),
        //maxDate : false
    });
    $('#end').datetimepicker({
        useCurrent: false //Important! See issue #1075
    });
    $("#start").on("dp.hide", function (e) {
        $('#end').data("DateTimePicker").minDate(e.date);
        $('#end_time').attr("disabled",false);
    });
    $("#end").on("dp.change", function (e) {
        $('#start').data("DateTimePicker").maxDate(e.date);
    });
});

    $('#checkmodal').on("hidden.bs.modal", function() {
        $("#start").data("DateTimePicker").clear()
    $("#end").data("DateTimePicker").clear()
    })

    $("#check_submit").on("click", function(e) {
        let start = $("#start_time").val();
        let end = $("#end_time").val();
    
        if (start != "" && end != ""){
            $('#checkmodal').modal('hide');
            $.ajax({
                url: "/doctors/check_available_doc",
                type: 'GET',
                data: {start: start,end: end},
                success: function(data){
                    $('#table-data').html('').html(data);
            }});
        }else{ 
            e.preventDefault();
        }
    
    })
})
