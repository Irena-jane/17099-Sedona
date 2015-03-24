//For fields having the same max and min you can use default values
//For field with specified max and min you can specify them by data-min or data-max attributes.
// For fields with unliminited max you can specify data-max="unlimit".


(function() {
  var wdg_counters = document.querySelectorAll('.js-counter');
  var input_tmpl = document.querySelector('#input-template').innerHTML;
  var clients = {};
  clients.adults = ['взрослого', 1];
  clients.children = ['ребенка', 0];

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
    e.preventDefault();
    if(target.tagName != 'BUTTON') return;

    var input = this.querySelector('input');
    var min = input.dataset.min || min_counter;
    var max = input.dataset.max || max_counter;
    var val = parseInt(input.value);

     if(target.dataset.count == 'minus') {
      val -=1;
      if(val < min) val = min;
     }

     if(target.dataset.count == 'plus') {
        val +=1;
        if(max != 'unlimit' && val > max) val = max;
     }

     input.value = val;
     operateClientInput(target, val);
  };

  function checkCounter(e){
    var e = e || window.event;
    var target = e.target;
    var min = target.dataset.min || min_counter;
    var max = target.dataset.max || max_counter;
    var val = checkValue(target.value, min, max);

    target.value = val;
    operateClientInput(target, val);

  };

  function checkValue(val, min, max){
    var res = parseInt(val);

    if(isNaN(res) || res < min) return min;

    if(max != 'unlimit' && res > parseInt(max)) return max;
    return res;
  };

    function operateClientInput(target, val){
      var client_type = target.parentNode.dataset.info;
      var number = clients[client_type][1];

      if(val - number > 0) {
        addClientInput(client_type, val, number);
      }else{
        removeClientInput(client_type, val, number);
      }


    };
    function addClientInput(client_type, val, number){
      var output = document.querySelector('.js-output-'+client_type);
      var type = clients[client_type][0];

      for(var i= number; i < val;i++,++clients[client_type][1]){
        var row = document.createElement('div');
        row.classList.add('row');
        var html = Mustache.render(input_tmpl, {
          "type": type,
          "number": i+1
        });
        row.innerHTML = html;
        output.appendChild(row);
      }

    };


    function removeClientInput(client_type, val, number){
      var output = document.querySelector('.js-output-'+client_type);

      for(var i = 0, len = number - val; i < len; i++){
        output.removeChild(output.lastChild);
        clients[client_type][1]-=1;
      }

    };
})();
