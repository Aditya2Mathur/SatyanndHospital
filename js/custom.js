(function($){"use strict";function image_popover(){jQuery("[data-toggle=popover]").each(function(){jQuery(this).popover({html:!0,content:function(){var id=jQuery(this).attr("id");return jQuery("#popover-content-"+id).html()},})})}
function datepicker(){jQuery("#datepicker").datepicker()}
jQuery(".aon-scrolling-nav li").on("click",function(){jQuery(this).addClass("active").siblings().removeClass("active")});jQuery(".scrollbar-inner").scrollbar();function video_responsive(){jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>')}
function team_popSlide(){jQuery(".add-team-btn, .cs-message-close").on("click",function(){jQuery("body").toggleClass("active-team")})}
function edit_profile_slide(){jQuery(".edit-profile-btn, .cs-editProfile-close").on("click",function(){jQuery("body").toggleClass("active-edit-pro")})}
function new_chart_slide(){jQuery(".add-newchart-btn, .cs-newchart-close").on("click",function(){jQuery("body").toggleClass("active-new-chart")})}
function block_calender_slide(){jQuery(".book-appointment-btn, .books-appointment-close").on("click",function(){jQuery("body").toggleClass("active-books-appointment")})}
function edit_appointments_slide(){jQuery(".aon-book-appoint-block, .edit-appointments-close").on("click",function(){jQuery("body").toggleClass("active-edit-appointments")})}
function edit_availibility_slide(){jQuery(".aon-availibility-edit, .aon-avai-edit-btn, .cs-availibility-close").on("click",function(){jQuery("body").toggleClass("active-availibility-slide")})}
function block_time_slide(){jQuery(".edit-time-btn, .cs-edit-time-close").on("click",function(){jQuery("body").toggleClass("active-time-slide")})}
function block_feedback_slide(){jQuery(".give-feedback-btn, .cs-feedback-close").on("click",function(){jQuery("body").toggleClass("active-feedback-slide")})}
function shop_style1_slider(){jQuery(".shop-style1-slider").owlCarousel({rtl:!1,loop:!1,margin:30,nav:!0,dots:!1,items:1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,},480:{items:2,},991:{items:2,},1200:{items:4,},},})}
function aon_booked_test_carousel(){jQuery(".aon-booked-test-carousel").owlCarousel({loop:!0,margin:30,center:!1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},767:{items:2,},1024:{items:3,},1366:{items:5,},},})}
function aon_book_appoint_carousel(){jQuery(".aon-book-appoint-carousel").owlCarousel({loop:!0,margin:30,center:!1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},600:{items:2,},767:{items:2,},991:{items:2,},1200:{items:2,},1400:{items:3,},},})}
function aon_provider_video_slider(){jQuery(".aon-provi-video-slider").owlCarousel({loop:!0,margin:30,center:!1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},767:{items:2,},991:{items:1,},},})}
function aon_health_concer_carousel(){jQuery(".aon-health-concer-carousel").owlCarousel({loop:!0,margin:30,center:!1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},767:{items:2,},1024:{items:3,},1366:{items:5,},},})}
function aon_health_checkup_carousel(){jQuery(".aon-health-checkup-carousel").owlCarousel({loop:!0,margin:30,center:!1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},767:{items:2,},1024:{items:3,},1366:{items:4,},},})}
var max_fields=100;var wrapper=$(".input_fields_youtube");var add_button_youtube=$(".add_field_youtube");var x=1;$(add_button_youtube).click(function(e){e.preventDefault();if(x<max_fields){x++;$(wrapper).append('<div class="input_Timing-box"><a href="#" class="remove_field input-timing-close"><i class="feather-x"></i></a><h4 class="aon-timing-title">Session 1</h4> <div class="row"> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">Start Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">End Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> </div> <div class="aon-divider-line m-t20 m-b10"></div> <h4 class="aon-timing-title">Session 2</h4> <div class="row"> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">Start Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">End Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> </div> </div>')}});$(wrapper).on("click",".remove_field",function(e){e.preventDefault();$(this).parent("div").remove();x--});jQuery(".new-chart-selet").on("change",function(e){jQuery(".create-user-infos").fadeIn(500);e.preventDefault()});function Bootstrap_Slider(){jQuery("#ex1").slider({formatter:function(value){return"Current value: "+value},});jQuery("#ex2").slider({formatter:function(value){return"Current value: "+value},});jQuery("#ex3").slider({formatter:function(value){return"Current value: "+value},})}
jQuery(".sf-toogle-btn").on("click",function(e){jQuery(this).parent(".header-widget").toggleClass("active");jQuery(this).parent().siblings(".header-widget").removeClass("active");e.preventDefault()});jQuery(".admin-area-heading").on("click",function(e){jQuery(".admin-area-mid").toggleClass("active-plan");e.preventDefault()});function lightbox_popup(){lc_lightbox(".elem",{wrap_class:"lcl_fade_oc",gallery:!0,thumb_attr:"data-lcl-thumb",skin:"minimal",radius:0,padding:0,border_w:0,})}
function magnific_video(){jQuery(".mfp-video").magnificPopup({type:"iframe",})}
function magnific_popup(){jQuery(".mfp-gallery").magnificPopup({delegate:".mfp-link",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1],},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',},})}
function popup_vertical_center(){jQuery(function(){function reposition(){var modal=jQuery(this),dialog=modal.find(".modal-dialog");modal.css("display","block");dialog.css("margin-top",Math.max(0,(jQuery(window).height()-dialog.height())/2))}
jQuery(".modal").on("show.bs.modal",reposition);jQuery(window).on("resize",function(){jQuery(".modal:visible").each(reposition)})})}
function sticky_header(){if(jQuery(".sticky-header").length){var sticky=new Waypoint.Sticky({element:jQuery(".sticky-header"),})}}
function sticky_sidebar(){$(".rightSidebar").theiaStickySidebar({additionalMarginTop:100,})}
function scroll_top(){jQuery("button.scroltop").on("click",function(){jQuery("html, body").animate({scrollTop:0,},1000);return!1});jQuery(window).on("scroll",function(){var scroll=jQuery(window).scrollTop();if(scroll>900){jQuery("button.scroltop").fadeIn(1000)}else{jQuery("button.scroltop").fadeOut(1000)}})}
function input_type_file_form(){jQuery(document).on("change",".btn-file :file",function(){var input=jQuery(this),numFiles=input.get(0).files?input.get(0).files.length:1,label=input.val().replace(/\\/g,"/").replace(/.*\//,"");input.trigger("fileselect",[numFiles,label])});jQuery(".btn-file :file").on("fileselect",function(event,numFiles,label){var input=jQuery(this).parents(".input-group").find(":text"),log=numFiles>10?numFiles+" files selected":label;if(input.length){input.val(log)}else{if(log)alert(log);}})}
function accordion_active(){$(".acod-head a").on("click",function(){$(".acod-head").removeClass("acc-actives");$(this).parents(".acod-head").addClass("acc-actives");$(".acod-title").removeClass("acc-actives");$(this).parent().addClass("acc-actives");$(this).parents(".acod-head").attr("class")})}
function mobile_nav(){jQuery(".sub-menu").parent("li").addClass("has-child");jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");jQuery(".has-child a+.submenu-toogle").on("click",function(ev){jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500,function(){jQuery(this).parent().removeClass("nav-active")});jQuery(this).next(jQuery(".sub-menu")).slideToggle(500,function(){jQuery(this).parent().toggleClass("nav-active")});ev.stopPropagation()})}
function mobile_side_drawer(){jQuery("#mobile-side-drawer").on("click",function(){jQuery(".mobile-sider-drawer-menu").toggleClass("active")})}
function search_filter_panel(){jQuery(".aon-search-filter").on("click",function(){jQuery(".page-content").toggleClass("active-searchbar")});jQuery(".sf-seach-panel-close").on("click",function(){jQuery(".page-content").toggleClass("active-searchbar")})}
function categories_carousel_owl(){jQuery(".categories-carousel-owl").owlCarousel({loop:!0,margin:30,center:!0,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},480:{items:3,},767:{items:3,},1024:{items:5,center:!0,},},})}
function featurd_provider_carousel(){jQuery(".aon-featurd-provider-carousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,},600:{items:2,},1000:{items:2,},1200:{items:3,},},})}
function aon_vendor_provider_two_carousel(){jQuery(".aon-vendor-provider-two-carousel").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,},600:{items:2,},1000:{items:2,},1200:{items:3,},},})}
function slick_testimonials_carousel(){jQuery(".slick-testimonials-carousel").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!1,asNavFor:".slick-testimonials-thumbnails",});jQuery(".slick-testimonials-thumbnails").slick({slidesToShow:3,slidesToScroll:1,centerMode:!0,asNavFor:".slick-testimonials-carousel",dots:!1,focusOnSelect:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:2,},breakpoint:767,settings:{slidesToShow:1,},},],})}
function aon_med_testimonial(){jQuery(".aon-med-testimonial").owlCarousel({loop:!0,margin:30,items:1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],})}
function aon_med_testimonial2(){jQuery(".aon-med-testimonial2").owlCarousel({loop:!0,margin:30,items:1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],})}
function aon_related_provi_sidebar(){jQuery(".aon-related-provi-sidebar").owlCarousel({loop:!0,margin:0,items:1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],})}
function aon_recentpost_carousel(){jQuery(".aon-recentpost-carousel").owlCarousel({loop:!0,margin:0,items:1,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],})}
function testimonials_two_carousel_owl(){jQuery(".testimonials-two-carousel-owl").owlCarousel({loop:!0,margin:0,center:!0,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},767:{items:2,},1024:{items:3,center:!0,},},})}
function aon_video_carousel(){jQuery(".aon-video-carousel").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,},480:{items:2,},767:{items:3,},},})}
jQuery(".aon-ow-provi-related").owlCarousel({loop:!0,margin:20,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,},600:{items:2,},1000:{items:2,},1200:{items:3,},},});jQuery(".owl-caty-carousel").owlCarousel({loop:!0,margin:30,nav:!0,dots:!1,navText:['<span class="ar-left"></span>','<span class="ar-right"></span>',],responsive:{0:{items:1,center:!1,},480:{items:2,},767:{items:3,},1024:{items:4,},},});function input_number_vertical_form(){jQuery("input[name='demo_vertical2']").TouchSpin({verticalbuttons:!0,})}
function counter_section(){jQuery(".counter").counterUp({delay:10,time:3000,})}
jQuery(".nav-tabs a").on("click",function(){e.preventDefault();jQuery(this).tab("show")});jQuery(".wt-accordion a").on("click",function(){e.preventDefault();jQuery(this).tab("show")});function image_BeforeAfter(){jQuery("#sidebarCollapse").on("click",function(){jQuery("#header-admin, #sidebar-admin-wraper, #content").toggleClass("active")})}
function DataTable(){jQuery(".example-dt-table").DataTable()}
$('.scroll-nav a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);target=target.length?target:$("[name="+this.hash.slice(1)+"]");if(target.length){event.preventDefault();$("html, body").animate({scrollTop:target.offset().top,},1000,function(){var $target=$(target);$target.focus();if($target.is(":focus")){return!1}else{$target.attr("tabindex","-1");$target.focus()}})}}});function countdown_clock(){function getTimeRemaining(endtime){const total=Date.parse(endtime)-Date.parse(new Date());const seconds=Math.floor((total/1000)%60);const minutes=Math.floor((total/1000/60)%60);const hours=Math.floor((total/(1000*60*60))%24);const days=Math.floor(total/(1000*60*60*24));return{total,days,hours,minutes,seconds,}}
function initializeClock(id,endtime){const clock=document.getElementById(id);const daysSpan=clock.querySelector(".days");const hoursSpan=clock.querySelector(".hours");const minutesSpan=clock.querySelector(".minutes");const secondsSpan=clock.querySelector(".seconds");function updateClock(){const t=getTimeRemaining(endtime);daysSpan.innerHTML=t.days;hoursSpan.innerHTML=("0"+t.hours).slice(-2);minutesSpan.innerHTML=("0"+t.minutes).slice(-2);secondsSpan.innerHTML=("0"+t.seconds).slice(-2);if(t.total<=0){clearInterval(timeinterval)}}
updateClock();const timeinterval=setInterval(updateClock,1000)}
if(jQuery("#clockdiv").length){const deadline=new Date(Date.parse(new Date())+15*24*60*60*1000);initializeClock("clockdiv",deadline)}}
function masonryBox(){if(jQuery().isotope){var $container=jQuery(".masonry-wrap");$container.isotope({itemSelector:".masonry-item",transitionDuration:"1s",originLeft:!0,stamp:".stamp",});jQuery(".masonry-filter li").on("click",function(){var selector=jQuery(this).find("a").attr("data-filter");jQuery(".masonry-filter li").removeClass("active");jQuery(this).addClass("active");$container.isotope({filter:selector});return!1})}}
function page_loader(){$(".loading-area").fadeOut(1000);jQuery(".aon-banner-wrap").delay(100000).addClass("aon-banner-animate");jQuery(".aon-banner2-wrap").delay(100000).addClass("aon-banner2-animate")}
function color_fill_header(){var scroll=$(window).scrollTop();if(scroll>=100){$(".is-fixed").addClass("color-fill")}else{$(".is-fixed").removeClass("color-fill")}}
jQuery(document).ready(function(){image_popover(),datepicker(),video_responsive(),team_popSlide(),edit_profile_slide(),new_chart_slide(),block_calender_slide(),edit_appointments_slide();edit_availibility_slide(),block_time_slide(),block_feedback_slide(),shop_style1_slider(),aon_booked_test_carousel(),aon_book_appoint_carousel(),aon_provider_video_slider(),aon_health_concer_carousel(),aon_health_checkup_carousel();Bootstrap_Slider(),lightbox_popup(),magnific_video(),magnific_popup();popup_vertical_center();sticky_header(),sticky_sidebar(),scroll_top(),input_type_file_form(),accordion_active(),mobile_nav(),mobile_side_drawer(),search_filter_panel();categories_carousel_owl(),featurd_provider_carousel(),aon_vendor_provider_two_carousel(),slick_testimonials_carousel(),aon_related_provi_sidebar(),aon_med_testimonial(),aon_med_testimonial2(),aon_recentpost_carousel(),testimonials_two_carousel_owl(),aon_video_carousel(),input_number_vertical_form(),counter_section();image_BeforeAfter();DataTable();countdown_clock()});jQuery(window).on("load",function(){masonryBox(),page_loader()});jQuery(window).on("scroll",function(){color_fill_header()});jQuery(window).on("resize",function(){});jQuery(window).resize()})(window.jQuery);var index=0;var slides=document.querySelectorAll(".slides");var dot=document.querySelectorAll(".dot");function changeSlide(){for(let i=0;i<slides.length;i++){slides[i].classList.remove("show");dot[i].classList.remove("active")}
slides[index].classList.add("show");dot[index].classList.add("active");index=(index+1)%slides.length;setTimeout(changeSlide,4000)}
changeSlide()