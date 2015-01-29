jQuery(document).ready(function($) {


/*
|--------------------------------------------------------------------------
| Global myTheme Obj / Variable Declaration
|--------------------------------------------------------------------------
|
|
|
*/

	var myTheme = window.myTheme || {},
    $win = $( window );
		
	
/*
|--------------------------------------------------------------------------
| Superfish
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.Navigation = function () {
		
		$('#menu-main-nav').superfish({
		});
	
	};
	

/*
|--------------------------------------------------------------------------
| Search field placeholder text
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.SearchPlaceholder = function () {
		
		$("#s").watermark("Search..");
	
	};	
	

/*
|--------------------------------------------------------------------------
| Mobile Nav
|--------------------------------------------------------------------------
|
|
|
*/	

	myTheme.MobileNav = function () {
		
		$("#menu-mobile-nav").tinyNav({
  			header: 'Navigation' 
		});
	
	};		
	
	
/*
|--------------------------------------------------------------------------
| Fitvids Responsive Videos
|--------------------------------------------------------------------------
|
|
|
*/		

	myTheme.FitVids = function () {
		
		$(".container").fitVids();
	
	};		
	

/*
|--------------------------------------------------------------------------
| Functions Initializers
|--------------------------------------------------------------------------
|
|
|
*/

	myTheme.Navigation();
	myTheme.SearchPlaceholder();
	myTheme.MobileNav();
	myTheme.FitVids();
	
	

});