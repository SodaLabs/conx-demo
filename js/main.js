(function() {
  var recordStatus = false;
  var selectedCount = 0;

  document.addEventListener("DOMContentLoaded", function() {
    // reset
    updateSelection(0);
    updateRecordStatus(recordStatus);

    // Handle the callee selection
    var calleeContainer = document.querySelector(".callee-container");
    calleeContainer.addEventListener("change", function(evt) {
      var elements = calleeContainer.querySelectorAll(
        "input[type=checkbox]:checked"
      );
      updateSelection(elements.length);
      updateRecordStatus(recordStatus);
    });

    //Handle the record button
    var recordButton = document.querySelector(".record-button");
    recordButton.addEventListener("click", function(evt) {
      if (selectedCount === 0) {
        return;
      }

      recordStatus = !recordStatus;
      updateRecordStatus(recordStatus);
    });
  });

  function updateSelection(number) {
    selectedCount = number;
    var selectionSummary = document.querySelector(".selection-summary");

    if (!number) {
      selectionSummary.innerHTML = "";
      return;
    }

    selectionSummary.innerHTML = `Selecting ${number} people`;
  }

  function updateRecordStatus(status) {
    var recordStatus = document.querySelector(".record-status");
    var recordButton = document.querySelector('.record-button');

    if (selectedCount === 0) {
      recordStatus.innerHTML = "Recording is off.";
      recordButton.src = 'images/disable.png';
      return;
    }

    if (status) {
      recordStatus.innerHTML = "Recording...";
      recordButton.src = 'images/recording.png';
    } else {
      recordStatus.innerHTML = "Recording is off.";
      recordButton.src = 'images/normal.png';
    }
  }
})();