$(document).ready(function () {
    $(function () {
        $('#app-start').datetimepicker({
            minDate : moment()
        });
        $('#app-start').data("DateTimePicker").format('ddd, DD MMM YYYY HH:mm');
    });

    $(function () {
        $('#app-end').datetimepicker();
        $('#app-end').data("DateTimePicker").format('ddd, DD MMM YYYY HH:mm');
    });

    $(function () {
        $('#app-start').datetimepicker({
            minDate : moment(),
            maxDate : false
        });
        $('#app-end').datetimepicker({
            useCurrent: false //Important! See issue #1075
        });
        $("#app-start").on("dp.hide", function (e) {
            $('#app-end').data("DateTimePicker").minDate(e.date);
            $('#appointment_end_time').attr("disabled",false);
        });
        $("#app-end").on("dp.change", function (e) {
            $('#app-start').data("DateTimePicker").maxDate(e.date);
        });
    });
});

//selection_bubble