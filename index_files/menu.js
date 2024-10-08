var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*Menu Dropdown Onhover Js*/
jQuery(document).ready(function() {

        /* ---------------------------------------------- /*
         * Initialization General Scripts for all pages
         /* ---------------------------------------------- */

        var navbar      = jQuery('.navbar'),
            navHeight   = navbar.height(),
           // worksgrid   = jQuery('#works-grid'),
            width       = Math.max(jQuery(window).width(), window.innerWidth),
            mobileTest  = false;

        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            mobileTest = true;
        }
        document.onload = rambo_load_menu();
        rambo_navbarSubmenu(width);
        rambo_hoverDropdown(width, mobileTest);

        jQuery(window).resize(function() {
            var width = Math.max(jQuery(window).width(), window.innerWidth);
            rambo_hoverDropdown(width, mobileTest);
        });
     function rambo_load_menu () {
    jQuery('.dropdown-menu').parent().addClass('dropdown');
    jQuery('.dropdown-menu > li > .dropdown-menu').parent().addClass('dropdown-submenu');
    }

        /* ---------------------------------------------- /*
         * Navbar submenu
         /* ---------------------------------------------- */

        function rambo_navbarSubmenu(width) {
            if (width > 1100) {
                jQuery('.navbar li.dropdown').hover(function() {
                    var MenuLeftOffset  = jQuery(this).offset().left;
                    var Menu1LevelWidth = jQuery('.dropdown-menu', jQuery(this)).width();
                    if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                        jQuery(this).children('.dropdown-menu').addClass('leftauto');
                    } else {
                        jQuery(this).children('.dropdown-menu').removeClass('leftauto');
                    }
                    if (jQuery('.dropdown', jQuery(this)).length > 0) {
                        var Menu2LevelWidth = jQuery('.dropdown-menu', jQuery(this)).width();
                        if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                            jQuery(this).children('.dropdown-menu').addClass('left-side');
                        } else {
                            jQuery(this).children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });

                 jQuery('.navbar li.dropdown a').focus(function() {
                    var MenuLeftOffsets  = jQuery(this).parent().offset().left;
                    var Menu1LevelWidth = jQuery('.dropdown-menu', jQuery(this).parent()).width();
                    if (width - MenuLeftOffsets < Menu1LevelWidth * 2) {
                        jQuery(this).parent().children('.dropdown-menu').addClass('leftauto');
                    } else {
                        jQuery(this).parent().children('.dropdown-menu').removeClass('leftauto');
                    }
                    if (jQuery('.dropdown', jQuery(this).parent()).length > 0) {
                        var Menu2LevelWidth = jQuery('.dropdown-menu', jQuery(this).parent()).width();
                        if (width - MenuLeftOffsets - Menu1LevelWidth < Menu2LevelWidth) {
                            jQuery(this).parent().children('.dropdown-menu').addClass('left-side');
                        } else {
                            jQuery(this).parent().children('.dropdown-menu').removeClass('left-side');
                        }
                    }
                });
            }
        }

        /* ---------------------------------------------- /*
         * Navbar hover dropdown on desctop
         /* ---------------------------------------------- */

        function rambo_hoverDropdown(width, mobileTest) {
            if ((width > 1100) && (mobileTest !== true)) {
                jQuery('.dropdown-menu').removeAttr("style");
                var delay = 0;
                var setTimeoutConst;
                jQuery('.navbar li.dropdown, .navbar li.dropdown li.dropdown-submenu').hover(function() {
                        var jQuerythis = jQuery(this);
                        setTimeoutConst = setTimeout(function() {
                            jQuerythis.addClass('open');
                            jQuerythis.find('.dropdown-toggle').addClass('disabled');
                        }, delay);
                    },
                    function() {
                        clearTimeout(setTimeoutConst);
                        jQuery(this).removeClass('open');
                        jQuery(this).find('.dropdown-toggle').removeClass('disabled');
                    });
            } else {
                jQuery('.navbar  li.dropdown, .navbar li.dropdown > .dropdown-menu li.dropdown-submenu').unbind('mouseenter mouseleave');
                jQuery('.navbar [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    jQuery(this).parent().siblings().removeClass('open');
                    jQuery(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                    jQuery(this).parent().toggleClass();
                });
            }
        }

          /* ---------------------------------------------- /*
         * Navbar focus dropdown on desktop
         /* ---------------------------------------------- */

  const topLevelLinks = Array.prototype.slice.call(document.querySelectorAll(".navbar li.dropdown a"), 0);
           topLevelLinks.forEach(function(link){
             return link.addEventListener('focus', function(e) {
                this.parentElement.classList.add('open')
                e.preventDefault();
                var div_list = e.target.parentElement.querySelectorAll( ".open" );
                var div_array = Array.prototype.slice.call(div_list);
                  div_array.forEach(function(e){
                   return e.classList.remove( "open" )
                });
              })             

            })



            jQuery('li a').focus(function() { 

             jQuery(this).parent().siblings().removeClass('open');

            });

          
           jQuery('a,input').bind('focus', function() {
             if(!jQuery(this).closest(".menu-item").length ) {
                topLevelLinks.forEach(function(link){
                return link.parentElement.classList.remove('open')
            })
            }
        })
        
        jQuery('li.dropdown').find('.caret').each(function(){
            jQuery(this).on('click', function(){
                if( jQuery(window).width() <= 1100) {
                  jQuery('li.dropdown,li.dropdown-submenu').removeClass('open');
                  jQuery(this).parent().next().slideToggle();
                }
             return false;
            });
        });
        jQuery('a,input').bind('focus', function() {
             if(!jQuery(this).closest(".menu-item").length  && ( jQuery(window).width() <= 1100) ) {
                jQuery('.nav-collapse').removeClass('in');
                jQuery('.nav-collapse').css({'height': '0px'});
             }})
});
	
	  

}
/*
     FILE ARCHIVED ON 21:41:34 May 12, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:12:39 Jun 23, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 4.164
  exclusion.robots: 0.073
  exclusion.robots.policy: 0.064
  esindex: 0.008
  cdx.remote: 14.221
  LoadShardBlock: 157.672 (3)
  PetaboxLoader3.datanode: 229.873 (5)
  PetaboxLoader3.resolve: 113.771 (2)
  load_resource: 193.143
  loaddict: 113.991
*/