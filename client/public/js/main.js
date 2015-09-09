$(document).on('ready', function() {
  listLobsters();
});
// create lobster with hobbies
$('form').on('submit',function(e){
  e.preventDefault();
  var payload = {
    name:$('#name').val(),
    hobbies:$('#hobbies').val()
  };
  $.post('/lobsters',payload,function(data){
    $('#all').html('Added' + data.name + " " + data.hobbies);
    listLobsters();
  });
});
// delete lobster
$(document).on('click','.delete-button',function(){
  $.ajax({
    method: "DELETE",
    url: '/lobster/' + $(this).attr('id')}).done(function(data){
      // $('#all').html('');
      $('#results').html('success!');
      listLobsters();
    });
});


// list lobster function which loops through and adds delete and edit button

function listLobsters(){
  // $('#all').html('');
  $.get('/lobsters',function(data){
    for (var i = 0; i < data.length; i++) {
      $('#all').prepend(
        '<tr>' +
        '<td><a href="#">' + data[i].name + '</a></td>' +
        '<td>' + data[i].hobbies + '</td>' +
        '<td><a class="btn btn-danger btn-xs delete-button" id="' + data[i]._id + '" role="button">Delete</a>' +
        '&nbsp;<a class="btn btn-primary btn-xs edit-button" id="' + data[i]._id + '" role="button">Edit</a></td>' +
        '</tr>'
      );
    }
  });
}

