// nice selector 2
document.addEventListener("DOMContentLoaded", function (e) {
  var options = { searchable: false };
  NiceSelect.bind(document.getElementById("seachable-select"), options);

  NiceSelect.bind(document.getElementById("seachable-select2"), options);

  NiceSelect.bind(document.getElementById("seachable-select3"), options);

  NiceSelect.bind(document.getElementById("seachable-select4"), options);

  document.getElementById("translated-select")._niceSelect = NiceSelect.bind(
    document.getElementById("translated-select"),
    options
  );

  document.getElementById("translated-select")._niceSelect = NiceSelect.bind(
    document.getElementById("translated-select"),
    options
  );

  document.getElementById("translated-select")._niceSelect = NiceSelect.bind(
    document.getElementById("translated-select"),
    options
  );

  document.getElementById("translated-select")._niceSelect = NiceSelect.bind(
    document.getElementById("translated-select"),
    options
  );
});
