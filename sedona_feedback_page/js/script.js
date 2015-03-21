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
    var parent = this;
    var input = this.querySelector('input');
     if(parent && target.dataset.count == 'minus') {
      if(--input.value < min_counter) input.value = min_counter;
     }
     if(parent && target.dataset.count == 'plus') {
      if(++input.value > max_counter) input.value = max_counter;
     }
    return false;
  };

  function checkCounter(e){
    var e = e || window.event;
    var target = e.target;
    var val = target.value;

    var reg = /^[0-9]+$/;
    if(!val.match(reg)) {
      target.value = val.slice(0, val.length-1);
      target.value = min_counter;
    }
    if(val < min_counter ) target.value = min_counter;
    if(val > max_counter) target.value = max_counter;
  };


})();
