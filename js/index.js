$(document).ready(function(){
			$("#lightmenu").click(function(){
				$("#locks").hide();
				$("#climate").hide();
				$("#home").hide();
				$("#lights").show();
				$('#active-light').addClass('active');
				$('#active-home').removeClass('active');
				$('#active-climate').removeClass('active');
				$('#active-lock').removeClass('active');
			});
			$("#homemenu").click(function(){
				$("#lights").hide();
				$("#locks").hide();
				$("#climate").hide();
				$("#home").show();
				$('#active-home').addClass('active');
				$('#active-light').removeClass('active');
				$('#active-climate').removeClass('active');
				$('#active-lock').removeClass('active');
			});
			$("#climatemenu").click(function(){
				$("#locks").hide();
				$("#lights").hide();
				$("#home").hide();
				$("#climate").show();
				$('#active-climate').addClass('active');
				$('#active-home').removeClass('active');
				$('#active-light').removeClass('active');
				$('#active-lock').removeClass('active');
			});
			$("#lockmenu").click(function(){
				$("#lights").hide();
				$("#climate").hide();
				$("#home").hide();
				$("#locks").show();
				$('#active-lock').addClass('active');
				$('#active-home').removeClass('active');
				$('#active-climate').removeClass('active');
				$('#active-light').removeClass('active');
			});
			$(function () {
				$('#datetimepicker1').datetimepicker();
			});
			$(function () {
				$('#datetimepicker2').datetimepicker();
			});
			$(function () {
				$('#datetimepicker3').datetimepicker();
			});
			$(function () {
				$('#datetimepicker4').datetimepicker();
			});
			$(function () {
				$('#datetimepicker5').datetimepicker();
			});
			$(function () {
				$('#datetimepicker6').datetimepicker();
			});
			$(function () {
				$('#datetimepicker7').datetimepicker();
			});
			$(function () {
				$('#datetimepicker8').datetimepicker();
			});
		});