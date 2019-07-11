			<ul id="tabs" class="nav nav-tabs" role="tablist">
				<li class="nav-item"><a id="a_chg" class="nav-link active" data-toggle="tab" href="#chg_tab">Tab 1</a></li>
				<li class="nav-item"><a id="a_inc" class="nav-link" data-toggle="tab" href="#inc_tab">Tab 2</a></li>
				<%-- <li class="nav-item"><a id="a_major_inc" class="nav-link" data-toggle="tab" href="#major_inc_tab">Tab 3</a></li> --%> 
			</ul>
			<div id="tabContent" class="tab-content">
				<div id="chg_tab" class="tab-pane fade show active">
					<div class="text-right">
						<label class="label-for-check"> 
							<input class="check-with-label" type="checkbox" id="focusedBox" /> 
							<span> Focused Data </span>
						</label>
					</div>
					<table id="chg_grid" class="blueTable" border="1" style="width: 100%">
						<thead>
							<tr>
								<th class="all notexport" rowspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th>
								<th class="all" rowspan="2">Reviewed</th>
								<th class="all" rowspan="2">Change Request</th>
								<th class="all" rowspan="2">Risk</th>
								<th class="all" rowspan="2">Change Owner</th>
								<th class="all" rowspan="2">Change Request State</th>
								<th class="all" rowspan="2">Planned Start Date</th>
								<th class="all" rowspan="2">Description</th>
								<th class="all" rowspan="2">Technical Service(s)</th>
								<th class="all" rowspan="2">Caused an Incident</th>
								<th class="all" colspan="4">Predicts Model Incident</th>
								<th class="all" colspan="4">Predicts Model Incident - TS</th>
								<th class="none" rowspan="2"></th>
								<th class="none notexport" rowspan="2"></th>
							</tr>
							<tr>
								<th class="all">LOGIT</th>
								<th class="all">CART</th>
								<th class="all">MNB</th>
								<th class="all">RFC</th>
								<th class="all">LOGIT</th>
								<th class="all">CART</th>
								<th class="all">MNB</th>
								<th class="all">RFC</th>
							</tr>
						</thead>
					</table>
				
				</div>
				
				<div id="inc_tab" class="tab-pane fade">
					<table id="inc_grid" class="blueTable" border="1" style="width: 100%">
						<thead>
							<tr>
								<th class="all notexport" rowspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th>
								<th class="all" rowspan="2">Reviewed</th>
								<th class="all" rowspan="2">Incident</th>
								<th class="all" rowspan="2">Description</th>
								<th class="all" rowspan="2">Updated On in Graph</th>
								<th class="all" rowspan="2">Technical Service</th>
								<th class="all" rowspan="2">Incident Created On</th>
								<th class="all" rowspan="2">Assignment Group</th>
								<th class="all" rowspan="2">Caused By a Change</th>
								<th class="all" colspan="3">Predicts Caused by Change</th>
								<th class="all" rowspan="2">Problem Created</th>
								<th class="all" colspan="3">Predicts Creates a Problem</th>
								<th class="none" rowspan="2"></th>
							</tr>
							<tr>
								<th class="all">LOGIT</th>
								<th class="all">CART</th>
								<th class="all">MNB</th>
								<th class="all">LOGIT</th>
								<th class="all">CART</th>
								<th class="all">MNB</th>
							</tr>
						</thead>
					</table>
				</div>
				
				
				<div id="major_inc_tab" class="tab-pane fade">
					<table id="major_inc_grid" class="blueTable" border="1" style="width: 100%">
						<thead>
							<tr>
								<th class="all notexport" rowspan="2">&nbsp;&nbsp;&nbsp;&nbsp;</th>
								<th class="all" rowspan="2">Reviewed</th>
								<th class="all" rowspan="2">Incident</th>
								<th class="all" rowspan="2">Description</th>
								<th class="all" rowspan="2">Updated On in Graph</th>
								<th class="all" rowspan="2">Technical Service</th>
								<th class="all" rowspan="2">Incident Created On</th>
								<th class="all" rowspan="2">Assignment Group</th>
								<th class="all" rowspan="2">Major Incident</th>
								<th class="all" colspan="5">Predicts a Major Incident</th>
								<th class="none" rowspan="2"></th>
							</tr>
							<tr>
								<th class="all">LOGIT</th>
								<th class="all">CART</th>
								<th class="all">MNB</th>
								<th class="all">RFC</th>
								<th class="all">GNB</th>
							</tr>
						</thead>
					</table> 
				</div>
			</div>