//For fields having the same max and min you can use default values
//For field with specified max and min you can specify them by data-min or data-max attributes.
// For fields with unliminited max you can specify data-max="unlimit".


(function() {
  var wdg_counters = document.querySelectorAll('.js-counter');
  var min_counter = 0;
  var max_counter = 30;
  for(var i = 0, len = wdg_counters.length; i < len; i++){
    var counter = wdg_counters[i];
    var input = counter.querySelector('input');

    input.oninput = checkCounter;
    counter.onclick = changeCounter;

  }


  function changeCounter(e){
    var e = e || window.event;
    var target = e.target;

    if(target.tagName != 'BUTTON') return;

    var input = this.querySelector('input');
    var min = input.dataset.min || min_counter;
    var max = input.dataset.max || max_counter;

     if(target.dataset.count == 'minus') {
      if(--input.value < min) input.value = min;
     }
     if(target.dataset.count == 'plus') {
      max != 'unlimit' && ++input.value > max? input.value = max : ++input.value;

     }
    return false;
  };

  function checkCounter(e){
    var e = e || window.event;
    var target = e.target;
    var min = target.dataset.min || min_counter;
    var max = target.dataset.max || max_counter;
    var val = target.value;

    var reg = /^[0-9]+$/;

    if(!val.match(reg)) {
      target.value = val.slice(0, val.length-1);
    }
    if(val == '' || val < min) target.value = min;
    if(max != 'unlimit' && val > parseInt(max)) target.value = max;
  };


})();
