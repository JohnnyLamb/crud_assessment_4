$(document).on('ready', function() {

});

$('form').on('submit',function(e){
  e.preventDefault();
  var payload = {
    name:$('#name').val(),
    hobbies:$('#hobbies').val()
  };
  $.post('/lobsters',payload,function(data){
    console.log(data.name + data.hobbies);
  });

});
