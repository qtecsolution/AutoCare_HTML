// nice selector 2
document.addEventListener("DOMContentLoaded", function (e) {
  var els = document.querySelectorAll(".selectize");
  els.forEach(function (select) {
    NiceSelect.bind(select);
  });
});

//select2
$(document).ready(function () {
  $(".service_select").select2();
});

$(function () {
  $('input[name="datefilter"]').daterangepicker({
    autoUpdateInput: false,
    locale: {
      cancelLabel: "Clear",
    },
  });

  $('input[name="datefilter"]').on("apply.daterangepicker", function (ev, picker) {
    $(this).val(
      picker.startDate.format("MM/DD/YYYY") + " - " + picker.endDate.format("MM/DD/YYYY")
    );
  });

  $('input[name="datefilter"]').on("cancel.daterangepicker", function (ev, picker) {
    $(this).val("");
  });
});
