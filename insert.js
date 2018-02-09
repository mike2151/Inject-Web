$('body').on('click', event => {
  $('<div>' + code_to_inject + '</div>').appendTo(event.target);
});


