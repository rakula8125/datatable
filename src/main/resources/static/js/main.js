var appData = appData || {
	table:'', objArray:{}, textInputArray:{}, cbInputArray:{}, page:getCookieValue('page'),
	 
	chg_columns:[{
		"className": 'details-control',
		"orderable": false,
		"data": null,
		"defaultContent": ''
	}, {
		"data": null,
		"searchable": false,
		"orderable": false,
		'defaultContent': "",
		'targets': 1,
		'render': function (data, type, row) {
			return setCheckbox(data,type,row);
		}
	}, {data: "number",
		render: function ( data, type, row, meta ) {
            if(type === 'display'){
                data = '<a target="_blank" href="'+ row.id +'">' + data + '</a>'; 
            }
            return data;
        }
	}, {data: "risk"}, {data: "ChangeOwner"}, {data: "ChangeRequestState"}, {data: "PlannedStartDate"}, 
    	{data: "Description"}, {data: "TechnicalService"}, {data: "CausedAnIncident"}, 
    	{data: "agLOGIT"}, {data: "agCART"}, {data: "agMNB"},{data: "agRFC"},
    	{data: "agTsLOGIT"}, {data: "agTsCART"}, {data: "agTsMNB"},{data: "agTsRFC"},
    	{data:"cabNotes",
    	"visible": false,
    	"render": function (data, type, row) {
    	    return p.textInputArray['text_' + row.number] == null ? row.cabNotes : p.textInputArray['text_' + row.number];}
        }, // hidden column to export CabNotes
        {data: "type", "visible": false,"searchable": false,"orderable": false} // hidden column for Type
    ],

 	inc_columns : [{
		"className": 'details-control',
		"orderable": false,
		"data": null,
		"defaultContent": ''
	}, {
		"data": null,
		"searchable": false,
		"orderable": false,
		'defaultContent': "",
		'targets': 1,
		'render': function (data, type, row) {
			return setCheckbox(data,type,row);
		}
	}, {data: "number",
		render: function ( data, type, row, meta ) {
            if(type === 'display'){
                data = '<a target="_blank" href="'+ row.id +'">' + data + '</a>'; 
            }
            return data;
        }
	}, {data: "Description"}, {data: "UpdatedOnInGraph"}, {data: "TechnicalService"}, 
    	{data: "IncidentCreatedOn"}, {data: "AssignmentGroup"}, {data: "CausedByAChange"}, 
    	{data: "iLOGIT"}, {data: "iCART"}, {data: "iMNB"}, {data: "ProblemCreated"}, {data: "pbLOGIT"}, 
    	{data: "pbCART"}, {data: "pbMNB"}, 
    	{data:"cabNotes",
    	"visible": false,
    	"render": function (data, type, row) {
    	    return p.textInputArray['text_' + row.number] == null ? row.cabNotes : p.textInputArray['text_' + row.number];}
        } // hidden column to export CabNotes
    ],

    major_inc_columns : [{
		"className": 'details-control',
		"orderable": false,
		"data": null,
		"defaultContent": ''
	}, {
		"data": null,
		"searchable": false,
		"orderable": false,
		'defaultContent': "",
		'targets': 1,
		'render': function (data, type, row) {
			return setCheckbox(data,type,row);
		}
	}, {data: "number",
		render: function ( data, type, row, meta ) {
	        if(type === 'display'){
	            data = '<a target="_blank" href="'+ row.id +'">' + data + '</a>'; 
	        }
	        return data;
	    }
	}, {data: "Description"}, {data: "UpdatedOnInGraph"}, {data: "TechnicalService"}, 
		{data: "IncidentCreatedOn"}, {data: "AssignmentGroup"}, {data: "MajorIncident"}, 
		{data: "miLOGIT"}, {data: "miCART"}, {data: "miMNB"}, {data: "miRFC"}, {data: "miGNB"}, 
		{data:"cabNotes",
		"visible": false,
		"render": function (data, type, row) {
		    return p.textInputArray['text_' + row.number] == null ? row.cabNotes : p.textInputArray['text_' + row.number];}
	    } // hidden column to export CabNotes
	]
}; 
var p =  appData;

$(document).ready(function (e) {
	(function() {
		$('#tabs li:first-child a').tab('show');
		$.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
		initiateDataTable("#chg_grid", p.chg_columns, "../data/data1.json");
	})();
	
	
	$("a[data-toggle='tab']").on("shown.bs.tab", function (e) {
		var currentTab = $(e.target).attr('id') 
		switch (currentTab)   {
			case 'a_chg' :
				initiateDataTable("#chg_grid", p.chg_columns, "../data/data1.json");
				p.table.columns.adjust().draw();
				break ;
			case 'a_inc' :
				initiateDataTable("#inc_grid", p.inc_columns, "../data/data2.json");
				p.table.columns.adjust().draw();
	            break ;
			case 'a_major_inc' :   
	            initiateDataTable("#major_inc_grid", p.major_inc_columns, "../data/data2.json");
				p.table.columns.adjust().draw();
	            break ;
			default: //do nothing 
		}
	});
  

	$('#focusedBox').on('change', function() {
         if ($(this).is(':checked')) {
            $.fn.dataTable.ext.search.push(
                function(settings, data, dataIndex,row, counter) {
                    var i = 0; var count = 0;
                    var modelArray = [row.agLOGIT, row.agCART, row.agMNB,row.agRFC,
                    				  row.agTsLOGIT, row.agTsCART, row.agTsMNB, row.agTsRFC];
                        while(i < modelArray.length) {
                        	if(modelArray[i] != null) {  
                        		modelArray[i].toLowerCase() == "yes" ? count++ : 0; // increment only if the value is found
                        	}
                        	i++;
                        }
                        var date = new Date();
                        var startDate = new Date(row.PlannedStartDate)
                        var description = row.Description;
                        var tService = row.TechnicalService == null ? '' : row.TechnicalService;
                        var risk = row.risk == null ? '' : row.risk;
                        var type = row.type == null ? '' : row.type;
                        //if(row.number.startsWith('CHG')) {
                            return ( (type.toLowerCase() != 'expedited') && (type.toLowerCase() != 'standard') && 
                                     (type.toLowerCase() != 'emergency') && (type.toLowerCase() != 'informational') &&
                                     (risk.toLowerCase() != 'minimal') && 
                                     (tService.toLowerCase().indexOf('release management') == -1) &&
                                     (tService.toLowerCase().indexOf('control m') == -1) &&
                                     (description.toLowerCase().indexOf('gis - os scan remediation') == -1)  &&
                                     startDate >= date  && count >= 1);
                });
            } else {
            $.fn.dataTable.ext.search.pop();
        } 
		p.table.draw();
    });	
	
	
	$(document).on('change', 'tbody input[type="checkbox"]', function (e) {
		p.objArray = {};
        var checkBoxVal = $(this).val();
        p.objArray[checkBoxVal] = (this.checked ? 1 : 0);
        p.cbInputArray[checkBoxVal] = (this.checked ? 1 : 0);
        ajaxSubmit(e,p.objArray, "/save");
    });


	$(document).on('change', 'tbody .ta', function (e) {
		p.objArray = {}; 
		var id = $(this).attr('id');
		var value = $(this).val();
		p.objArray[id] = value;
		p.textInputArray[id] = value;
	});
	
	
	// Add event listener for opening and closing details
    $(document).on('click', 'tbody .details-control', function (e) {
        var tr = $(this).closest('tr');
        var row = p.table.row(tr);
        if (row.child.isShown()) {
            row.child.hide();
			tr.removeClass('shown');
		} else {
			row.child(format(row.data())).show();
			tr.addClass('shown');
		}
    });
	
	
    $(document).on('click', '.btn.btn-secondary.btn-sm', function(e){
		ajaxSubmit(e,p.objArray, "/save");
	});
	
});


function hideTable(legend) {
	$(p.table.table().container()).css( 'display', 'none' );
	$(legend).css( 'display', 'none' );
}


function initiateDataTable(_tableId, _columns, _url) {
	$.fn.dataTable.ext.errMode = function ( settings, helpPage, message ) { 
	    console.log(message);
	    alert('Error while loading the table data. Please contact IT Support');
	};
	p.table = $(_tableId).DataTable({
		"ajax": {
			"url": _url,
			"dataSrc": "data",
			"type": "GET",
			"data": {
				"page": $('#page').val()
			}
		},
		language: {
			"processing": "<i class='spinner-border  text-primary'> </i>",
			"loadingRecords": "Please wait - loading...",
			"zeroRecords": "No matching records found",
			"search": "Filter:"
		},
		"columns": _columns,
		"rowId": "number",
		"destroy": true,
		"pageLength": 100,
		"ordering": true,
		"deferRender": true,
		"order": [[6, "desc"]],
		"processing": true,
		"scrollY": '50vh',
		"scrollCollapse": true,
		"scrollX": true,
		//"stateSave": true,
		"responsive": true,
		"select": {
			style: 'multi'
		},
		"createdRow": function (row, data, dataIndex) {
			$(row).find('td:eq(1)').attr('id', row.id);
		},
		"dom":
			"<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
			"<'row'<'col-sm-12'tr>>" +
			"<'row'<'col-sm-5'i><'col-sm-7'p>>",
		"buttons": [{
				extend: 'copyHtml5',
				titleAttr: 'Copy',
				exportOptions: {
					orthogonal: 'export',
					columns: (_tableId.toLowerCase().indexOf('chg') == -1) ? [_columns.length-1,':not(.notexport)'] : [_columns.length-2,':not(.notexport)']
				}
			}, {
				extend: 'excelHtml5',
				titleAttr: 'Excel',
				exportOptions: {
					orthogonal: 'export',
					columns: (_tableId.toLowerCase().indexOf('chg') == -1) ? [_columns.length-1,':not(.notexport)'] : [_columns.length-2,':not(.notexport)']
				}
			}, {
				extend: 'csvHtml5',
				titleAttr: 'CSV',
				exportOptions: {
					orthogonal: 'export',
					columns: (_tableId.toLowerCase().indexOf('chg') == -1) ? [_columns.length-1,':not(.notexport)'] : [_columns.length-2,':not(.notexport)'],
					format: {
                           body: function ( data, row, column, node ) {
                               return data == null ? '' : data;                                }
                            }
                       }
                   }
		],
		"rowCallback": function (row, data, index) {
			formatBgRed(row, 9, data.CausedAnIncident);

			formatBgYellow(row, 10, data.agLOGIT);
			formatBgYellow(row, 11, data.agCART);
			formatBgYellow(row, 12, data.agMNB);
			formatBgYellow(row, 13, data.agRFC);
			
			formatBgYellow(row, 14, data.agTsLOGIT);
			formatBgYellow(row, 15, data.agTsCART);
			formatBgYellow(row, 16, data.agTsMNB);
			formatBgYellow(row, 17, data.agTsRFC);
			
			// 2nd Tab
			formatBgRed(row, 8, data.CausedByAChange);
			formatBgLightRed(row, 12, data.ProblemCreated);

			formatBgYellow(row, 9, data.iLOGIT);
			formatBgYellow(row, 10, data.iCART);
			formatBgYellow(row, 11, data.iMNB);
			formatBgLightYellow(row, 13, data.pbLOGIT);
			formatBgLightYellow(row, 14, data.pbCART);
			formatBgLightYellow(row, 15, data.pbMNB);
			
			// 3rd Tab
			formatBg(row, 8, data.MajorIncident,'#CD5C5C');
			
			formatBgYellow(row, 9, data.miLOGIT);
			formatBgYellow(row, 10, data.miCART);
			formatBgYellow(row, 11, data.miMNB);
			formatBgYellow(row, 12, data.miRFC);
			formatBgYellow(row, 13, data.miGNB);
			
		}
	});
	
}


function ajaxSubmit(e,data, url) {
   if(Object.keys(p.objArray).length == 0) return;
   e.preventDefault();
   //e.stopPropagation();
   
   console.log('objectArray: '+JSON.stringify(data));
	$.ajax({
		url: url,
		type: "POST",
		data: JSON.stringify(data),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		complete: function (data) {
			$('#success_message').fadeIn().html('Updated Successfully');
			console.log('Server response', data);
			setTimeout(function () { $('#success_message').fadeOut("slow");}, 2000);
			p.objArray = {};
		}
	});
}


/* Formatting function for row details - modify as you need */
function format(d) {
	var notes = '';
	var arrayNotes = p.textInputArray['text_' + d.number];
	if (arrayNotes == null) {
		notes = d.cabNotes == null ? '' : d.cabNotes;
	} else {
		notes = arrayNotes;
	}
	var textArea = '<td> <textarea disabled class="ta" name=text_' + d.number + ' id=text_' + d.number + '>' + notes + ' </textarea></td>' ;
	if(p.page == 'true')
    	textArea = '<td> <textarea class="ta" name=text_' + d.number + ' id=text_' + d.number + '>' + notes + ' </textarea></td>';
		
    return '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
	'<tr>' +
	'<td>CAB Notes:</td>' +
	textArea +
	'<td> <button id="commentButton" type="button" class="btn btn-secondary btn-sm"> <i class="fas fa-check"></i> </button> </td>' +
	'</tr>' +
	'</table>';
}


function formatBgRed(row, index, column) {
	if (column != null) {
		if (column.toLowerCase().startsWith("inc") || column.toLowerCase().startsWith("chg")
			 || column.toLowerCase().startsWith("prb")) {
			$('td:eq(' + index + ')', row).css('background-color', '#CD5C5C');
		}
	}
}


function formatBgLightRed(row, index, column) {
	if (column != null) {
		if (column.toLowerCase().startsWith("inc") || column.toLowerCase().startsWith("chg")
			 || column.toLowerCase().startsWith("prb")) {
			$('td:eq(' + index + ')', row).css('background-color', '#FFA07A');
		}
	}
}


function formatBgYellow(row, index, column) {
	if (column == null) {
		return;
	} else {
		if (column.toLowerCase() == "yes") {
			$('td:eq(' + index + ')', row).css('background-color', 'yellow');
		}
	}
}


function formatBgLightYellow(row, index, column) {
	if (column == null) {
		return;
	} else {
		if (column.toLowerCase() == "yes") {
			$('td:eq(' + index + ')', row).css('background-color', '#FFFF99');
		}
	}
}

function formatBg(row, index, column,color) {
	if (column == null) {
		return;
	} else {
		if (column.toLowerCase() == "yes") {
			$('td:eq(' + index + ')', row).css('background-color', color);
		}
	}
}


function getCookieValue(a) {
    var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
    return b ? b.pop() : '';
}


function setCheckbox(data, type, row) {
    var link;
	var exp;
	var cbTag = '<input class = "checkbox" type="checkbox" id=cb_' + row.number + ' value=' + row.number;
	if (row.reviewed == 1) {
		link = cbTag+ ' checked disabled="disabled">'
		if(p.page == 'true') { link = cbTag+ ' checked>' }
		exp = 'Yes';
	} else {
		link = cbTag+ ' disabled="disabled">';
		if(p.page == 'true') { link = cbTag+ '>' }
  			exp = 'No';
	}
	if (type == 'export') {
       		if(p.cbInputArray[row.number] == null) {return exp; } 
  			    else { return p.cbInputArray[row.number] == 1 ? 'Yes' : 'No' } 
		return exp;
	}
	return link;
}