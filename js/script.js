var copyTextareaBtn = document.querySelector('#copyText');

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
  setTimeout(function(){
  	alert('Copied to clipboard');
  },1000);
}

$(document).ready(function(){
	
$("#countries").msDropdown();
// Basic example
	var dataTable = $('#payload-history-table').DataTable({
		"ordering": false,
		"info":     false,
		"bInfo": false,
		"dom": '<"top"i>rt<"bottom"flp><"clear">',
		// "bLengthChange": true,
		"oLanguage": {
			"sLengthMenu": "<span> _MENU_  results in a page </span>",
			"oPaginate": {
				"sNext": '<i class="fas fa-caret-right"></i>',
				"sPrevious": '<i class="fas fa-caret-left"></i>',
			}
		},
		"stateSave": false,
		 "scrollX": true,
		"pagingType":"full_numbers",
		initComplete : function() {
        var input = $('#searchNameField').unbind(),
            self = this.api(),
            $searchButton = $("#searchButton")
           .on('click',function() {
              dataTable.search(input.val()).draw();
           }),
           $searchButton = $("#searchNameField")
           .on('keyup',function() {
              dataTable.search(input.val()).draw();
           })
    }
	});
	$('#payload-history-table_paginate').prepend('<span class="payload-history-table_paginate_text">displaying page</span>');
	$('.dataTables_length').addClass('bs-select');
});