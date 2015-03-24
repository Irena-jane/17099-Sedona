//For fields having the same max and min you can use default values
//For field with specified max and min you can specify them by data-min or data-max attributes.
// For fields with unliminited max you can specify data-max="unlimit".


(function() {
  var wdg_counters = document.querySelectorAll('.js-counter');
  // var input_tmpl = document.querySelector('#input-template').innerHTML;
  // var adults = ['взрослого'];
  // var children = ['ребенка'];

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
      max != 'unlimit' && input.value > (max-1)? input.value = max : ++input.value;

     }
    return false;
  };

  function checkCounter(e){
    var e = e || window.event;
    var target = e.target;
    var min = target.dataset.min || min_counter;
    var max = target.dataset.max || max_counter;
    var val = checkValue(target.value, min, max);
    target.value = val;
  };

  function checkValue(val, min, max){
    var res = parseInt(val);

    if(isNaN(res) || res < min) res = min;

    if(max != 'unlimit' && res > parseInt(max)) res = max;
    return res;
  };

    // function generateCustomerInputs(val){
    //   // var row =
    // };
})();
