var conceptmenustatus = 0;
var applicationmenustatus = 0;
/* 0: Menu is closed. 1: Menu is open. */
var animactive = 1;
/* 0: Animation is off. 1: Animation is running. */

$(document).ready(function() {	
	$("body").css("display", "none");
    $("body").fadeIn(450);	
	
	var hash = window.location.hash.substr(1);
	var href = $("a.trans").each(function(){
		var href = $(this).attr("href");
		if(hash==href.substr(0,href.length-5)){
			var newContent = hash + ".html #bodyscrollwrapper";
			$("#bodyscrollwrapper").load(newContent)
		}
	});
	
	$("a.trans").click(function(){
		var newContent = $(this).attr("href")+" #bodyscrollwrapper";
		$("#bodyscroll").slideUp(400, loadNewContent);
		$("#loadAnimation").fadeIn(300);
		window.location.hash = $(this).attr("href").substr(0, $(this).attr("href").length-5);
		function loadNewContent()
		{
			$("#bodyscrollwrapper").load(newContent, "", showNewContent)
		}
		function showNewContent()
		{
			$("#bodyscroll").slideDown(400, hideLoadAnimation);
		}
		function hideLoadAnimation()
		{
			$("#loadAnimation").fadeOut(300);
		}
		return false;
		});
	
	$("#water").hover(function() {
		$(this).find(".behind").stop().fadeOut("fast");
	}, function() {
		$(this).find(".behind").stop().fadeIn("fast");
	});
	$("#agriculture").hover(function() {
		$(this).find(".behind").stop().fadeOut("fast");
	}, function() {
		$(this).find(".behind").stop().fadeIn("fast");
	});
	
	$("#energy").hover(function() {
		$(this).find(".behind").stop().fadeOut("fast");
	}, function() {
		$(this).find(".behind").stop().fadeIn("fast");
	});
	
	$("#residential").hover(function() {
		$(this).find(".behind").stop().fadeOut("fast");
	}, function() {
		$(this).find(".behind").stop().fadeIn("fast");
	});
	
	$("#titlecard").find("#subtitletxt").fadeOut(0);
	
	$("#titlecard").hover(function() {
		$("#titletxt").fadeOut(200, function() {
			$("#subtitletxt").fadeIn(200);
		});
	}, function() {
		$("#subtitletxt").fadeOut(200, function() {
			$("#titletxt").fadeIn(200);
		});
	});
	
	$("#concept").click(function() {
		$("#concept").animate({
			left: "+=250"
		}, 300, function() {
			$("#conceptmenu").animate({
				width: "+=820"
			}, 300, function() {
				conceptmenustatus = 1;
			});
		});
	});
	
	$("#application").click(function() {
		$("#application").animate({
			left: "-=250"
		}, 300, function() {
			$("#applicationmenuwrapper").animate({
				left: "+=820"
			}, 300);
			$("#applicationmenu").animate({
				width: "+=820",
				left: "-=820"
			}, 300, function() {
				applicationmenustatus = 1;
			});
		});
	});
	
	$("body").on("click", function(ev) {
		var clickedID = ev.target.id;
		if (clickedID !== "conceptmenu") {
			if(conceptmenustatus == 1) {
				$("#conceptmenu").animate({
					width: "-=820"
				}, 300, function() {
					$("#concept").animate({
						left: "-=250"
					}, 300);
				});
				conceptmenustatus = 0;
			}
			if(applicationmenustatus == 1) {
				$("#applicationmenuwrapper").animate({
					left: "-=820"
				}, 300);
				$("#applicationmenu").animate({
					width: "-=820",
					left: "+=820"
				}, 300, function() {
					$("#application").animate({
						left: "+=250"
					}, 300);
				});
				applicationmenustatus = 0;
			}
		}
	});
});