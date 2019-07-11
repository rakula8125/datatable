<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html>
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<script src="/js/vendor/jquery-3.3.1.js"></script>
<script src="/js/vendor/popper.min.js"></script>
<script src="/js/vendor/bootstrap.min.js"></script>
<script src="/js/vendor/datatables.min.js"></script>

<script src="/js/main.js" type="text/javascript"></script>

<link rel="stylesheet" href="/css/vendor/bootstrap.min.css">
<link rel="stylesheet" href="/css/vendor/datatables.min.css" />
<link rel="stylesheet" href="/css/vendor/fontawesome-all.css">

<link rel="stylesheet" href="/css/main.css">

<title>DataTable Bootstrap Tabs</title>
</head>

<body>
	<nav class="navbar navbar-expand-sm navbar-light bg-light fixed-top">
		<button class="navbar-toggler mr-2" type="button" data-toggle="collapse" data-target="#navbar">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div id="nav">
			<span class="navbar-brand d-flex flex-fill"> 
				<a class="navbar-brand header-weight-bold" href="/"> </a>
			</span>
		</div>
		<div class="d-flex flex-fill">
		</div>
	</nav>
	<br/>

	<form id="prediction_form" action="" method="post"
		name="prediction_form" role="form">
		<div class="container">
			<div id="success_message" class="PopupPanel" style="float: right">
			</div>
			<jsp:include page="tabs.jsp" />

		</div>
	</form>
</body>
</html>
