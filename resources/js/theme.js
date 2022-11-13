window.theme = {};

(function(theme, $) {

    var js_vars = {};

    theme = theme || {};

    $.extend(theme, {

        rtl: js_vars.rtl == '1' ? true : false,
        rtl_browser: $('html').hasClass('browser-rtl'),

        ajax_url: js_vars.ajax_url,
        request_error: js_vars.request_error,

        change_logo: js_vars.change_logo == '1' ? true : false,

        show_sticky_header: js_vars.show_sticky_header == '1' ? true : false,
        show_sticky_header_tablet: js_vars.show_sticky_header_tablet == '1' ? true : false,
        show_sticky_header_mobile: js_vars.show_sticky_header_mobile == '1' ? true : false,

        category_ajax: js_vars.category_ajax == '1' ? true : false,
        prdctfltr_ajax: js_vars.prdctfltr_ajax == '1' ? true : false,
        show_minicart: js_vars.show_minicart == '1' ? true : false,

        container_width: parseInt(js_vars.container_width),
        grid_gutter_width: parseInt(js_vars.grid_gutter_width),
        screen_lg: parseInt(js_vars.screen_lg),
        slider_loop: js_vars.slider_loop == '1' ? true : false,
        slider_autoplay: js_vars.slider_autoplay == '1' ? true : false,
        slider_autoheight: js_vars.slider_autoheight == '1' ? true : false,
        slider_speed: js_vars.slider_speed ? js_vars.slider_speed : 5000,
        slider_nav: js_vars.slider_nav == '1' ? true : false,
        slider_nav_hover: js_vars.slider_nav_hover == '1' ? true : false,
        slider_margin: js_vars.slider_margin == '1' ? 40 : 0,
        slider_dots: js_vars.slider_dots == '1' ? true : false,
        slider_animatein: js_vars.slider_animatein ? js_vars.slider_animatein : '',
        slider_animateout: js_vars.slider_animateout ? js_vars.slider_animateout : '',
        product_thumbs_count: js_vars.product_thumbs_count ? js_vars.product_thumbs_count : 4,
        product_zoom: js_vars.product_zoom == '1' ? true : false,
        product_zoom_mobile: js_vars.product_zoom_mobile == '1' ? true : false,
        product_image_popup: js_vars.product_image_popup == '1' ? 'fadeOut' : false,

        hoverIntentConfig: {
            sensitivity: 2,
            interval: 0,
            timeout: 0
        },

        owlConfig: {
            rtl: js_vars.rtl == '1' ? true : false,
            loop: js_vars.slider_loop == '1' ? true : false,
            autoplay: js_vars.slider_autoplay == '1' ? true : false,
            autoHeight: js_vars.slider_autoheight == '1' ? true : false,
            autoplayTimeout: js_vars.slider_speed ? js_vars.slider_speed : 5000,
            autoplayHoverPause: true,
            lazyLoad: true,
            nav: js_vars.slider_nav == '1' ? true : false,
            navText: ["", ""],
            dots: js_vars.slider_dots == '1' ? true : false,
            stagePadding: (js_vars.slider_nav_hover != '1' && js_vars.slider_margin == '1') ? 40 : 0,
            animateOut: js_vars.slider_animateout ? js_vars.slider_animateout : '',
            animateIn: js_vars.slider_animatein ? js_vars.slider_animatein : ''
        },

        mfpConfig: {
            tClose: js_vars.popup_close,
            gallery: {
                tPrev: js_vars.popup_prev,
                tNext: js_vars.popup_next,
                tCounter: js_vars.mfp_counter
            },
            image: {
                tError: js_vars.mfp_img_error
            },
            ajax: {
                tError: js_vars.mfp_ajax_error
            },
            callbacks: {
                open: function() {
                    $('body').addClass('lightbox-opened');
                    var fixed = this.st.fixedContentPos;
                    if (fixed) {
                        $('#header.sticky-header .header-main.sticky, #header.sticky-header .main-menu-wrap, .fixed-header #header.sticky-header .header-main, .fixed-header #header.sticky-header .main-menu-wrap').css(theme.rtl_browser ? 'left' : 'right', theme.getScrollbarWidth());
                    }
                    var that = $(this._lastFocusedEl);
                    if ((that.parents('.portfolios-lightbox').hasClass('with-thumbs')) && $(document).width() >= 1024) {



                        $('body').prepend(portfolio_lightbox_thumbnails_base);



                        var $carousel_items_wrapper = $portfolios_lightbox_thumbnails_carousel.find('.owl-stage');

                        $carousel_items_wrapper.find('.owl-item').removeClass('current');
                        $carousel_items_wrapper.find('.owl-item').eq(magnificPopup.currItem.index).addClass('current');

                        $.magnificPopup.instance.next = function() {
                            var magnificPopup = $.magnificPopup.instance;
                            $.magnificPopup.proto.next.call(this);
                            $carousel_items_wrapper.find('.owl-item').removeClass('current');
                            $carousel_items_wrapper.find('.owl-item').eq(magnificPopup.currItem.index).addClass('current');
                        };

                        $.magnificPopup.instance.prev = function() {
                            var magnificPopup = $.magnificPopup.instance;
                            $.magnificPopup.proto.prev.call(this);
                            $carousel_items_wrapper.find('.owl-item').removeClass('current');
                            $carousel_items_wrapper.find('.owl-item').eq(magnificPopup.currItem.index).addClass('current');
                        };

                        $carousel_items_wrapper.find('.owl-item').on('click', function() {
                            $carousel_items_wrapper.find('.owl-item').removeClass('current');
                            $.magnificPopup.instance.goTo($carousel_items_wrapper.find('.owl-item').index(this));
                            $(this).addClass('current');
                        });

                    }
                },
                close: function() {
                    $('body').removeClass('lightbox-opened');
                    var fixed = this.st.fixedContentPos;
                    if (fixed) {
                        $('#header.sticky-header .header-main.sticky, #header.sticky-header .main-menu-wrap, .fixed-header #header.sticky-header .header-main, .fixed-header #header.sticky-header .main-menu-wrap').css(theme.rtl_browser ? 'left' : 'right', '');
                    }
                    $('.owl-carousel .owl-stage').each(function() {
                        var $this = $(this),
                            w = $this.width() + parseInt($this.css('padding-left')) + parseInt($this.css('padding-right'));

                        $this.css({ 'width': w + 200 });
                        setTimeout(function() {
                            $this.css({ 'width': w });
                        }, 0);
                    });

                }
            }
        },
        infiniteConfig: {
            navSelector: "div.pagination",
            nextSelector: "div.pagination a.next",
            loading: {
                finishedMsg: "",
                msgText: "<em class='infinite-loading'></em>",
                img: "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            }
        },
        sticky_nav_height: 0,
        getScrollbarWidth: function() {
            if (this.scrollbarSize === undefined) {
                var scrollDiv = document.createElement("div");
                scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                document.body.appendChild(scrollDiv);
                this.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
            }
            return this.scrollbarSize;
        },
        isTablet: function() {
            if ($(window).width() < 992 - theme.getScrollbarWidth())
                return true;
            return false;
        },
        isMobile: function() {
            if ($(window).width() <= 480 - theme.getScrollbarWidth())
                return true;
            return false;
        },
        initStatCounter: function($elements) {
            if (typeof $elements == "undefined") {
                $elements = $("body");
            }
            var $stats = $elements.find('.stats-block');
            $stats.each(function() {
                $(this).appear(function() {
                    var endNum = parseFloat($(this).find('.stats-number').data('counter-value'));
                    var Num = ($(this).find('.stats-number').data('counter-value')) + ' ';
                    var speed = parseInt($(this).find('.stats-number').data('speed'));
                    var ID = $(this).find('.stats-number').data('id');
                    var sep = $(this).find('.stats-number').data('separator');
                    var dec = $(this).find('.stats-number').data('decimal');
                    var dec_count = Num.split(".");
                    if (dec_count[1]) {
                        dec_count = dec_count[1].length - 1;
                    } else {
                        dec_count = 0;
                    }
                    var grouping = true;
                    if (dec == "none") {
                        dec = "";
                    }
                    if (sep == "none") {
                        grouping = false;
                    } else {
                        grouping = true;
                    }
                    var settings = {
                        useEasing: true,
                        useGrouping: grouping,
                        separator: sep,
                        decimal: dec
                    }
                    var counter = new countUp(ID, 0, endNum, dec_count, speed, settings),
                        endTrigger = function() {
                            if ($('#' + ID).next('.counter_suffix').length > 0) {
                                $('#' + ID).next('.counter_suffix').css('display', 'inline');
                            }
                        };
                    setTimeout(function() {
                        counter.start(endTrigger);
                    }, 500);
                }, {
                    accX: 0,
                    accY: -150
                });
            });
        },

        refreshVCContent: function($elements) {
            if ($elements) {
                theme.initStatCounter($elements);
            }
            theme.refreshStickySidebar(true);

            if (typeof window.vc_js == 'function')
                window.vc_js();
        },

        adminBarHeight: function() {
            var $admin_bar = $('#wpadminbar'),
                adminbar_height = 0;
            if ($admin_bar.get(0)) {
                adminbar_height = $('#wpadminbar').css('position') == 'fixed' ? $('#wpadminbar').height() : 0;
            }
            return parseInt(adminbar_height);
        },
        refreshStickySidebar: function(timeout) {
            var $sticky_sidebar = $('.sidebar [data-plugin-sticky]');
            if ($sticky_sidebar.get(0)) {
                if (timeout) {
                    setTimeout(function() {
                        $sticky_sidebar.trigger('recalc.pin');
                    }, 400);
                } else {
                    $sticky_sidebar.trigger('recalc.pin');
                }
            }
        },
        scrolltoContainer: function($container) {
            if ($container.get(0)) {
                var winWidth = $(window).width();
                if (winWidth <= 991 - theme.getScrollbarWidth()) {
                    $('.sidebar-overlay').click();
                }
                $('html, body').stop().animate({
                    scrollTop: $container.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height - 18
                }, 600, 'easeOutQuad');
            }
        }
    });
}).apply(this, [window.theme, jQuery]);


// Sticky Header
(function(theme, $) {
    theme = theme || {};
    $.extend(theme, {
        StickyHeader: {
            defaults: {
                header: $('#header')
            },
            initialize: function($header) {
                this.$header = ($header || this.defaults.header);
                this.sticky_height = 0;
                this.sticky_offset = 0;
                this.sticky_pos = 0;
                this.change_logo = theme.change_logo;
                if (!theme.show_sticky_header || !this.$header.length)
                    return this;
                var self = this;
                var $header_top = self.$header.find('> .header-top');
                if ($header_top.length) {
                    self.$header_top = $header_top;
                    self.top_height = $header_top.height();
                } else {
                    self.$header_top = false;
                }
                var $menu_wrap = self.$header.find('> .main-menu-wrap');
                if ($menu_wrap.length) {
                    self.$menu_wrap = $menu_wrap;
                    self.menu_height = $menu_wrap.height();
                } else {
                    self.$menu_wrap = false;
                }
                self.$header_main = self.$header.find('.header-main');
                self.reveal = self.$header.parents('.header-wrapper').hasClass('header-reveal');
                self.is_sticky = false;
                self.reset()
                    .build()
                    .events();

                return self;
            },

            build: function() {
                var self = this;
                if (!self.is_sticky && ($(window).height() + self.header_height + theme.adminBarHeight() + parseInt(self.$header.css('border-top-width')) >= $(document).height())) {
                    return self;
                }
                if ($(window).height() > $('body').height())
                    window.scrollTo(0, 0);
                var scroll_top = $(window).scrollTop();
                if (self.$menu_wrap && !theme.isTablet()) {
                    self.$header_main.stop().css('top', 0);
                    if (self.$header.parent().hasClass('fixed-header'))
                        self.$header.parent().attr('style', '');
                    if (scroll_top > self.sticky_pos) {
                        if (!self.$header.hasClass('sticky-header')) {
                            self.$header.addClass('sticky-header');
                            self.$header.css('padding-bottom', self.menu_height);
                            self.$menu_wrap.stop().css('top', theme.adminBarHeight());
                            var selectric = self.$header.find('.header-main .searchform select').data('selectric');
                            if (selectric)
                                selectric.close();

                            if (self.$header.parent().hasClass('fixed-header')) {
                                self.$header_main.hide();
                                self.$header.css('padding-bottom', 0);
                            }

                            if (!self.init_toggle_menu) {
                                self.init_toggle_menu = true;
                                theme.MegaMenu.build();
                                if ($('#main-toggle-menu').length) {
                                    if ($('#main-toggle-menu').hasClass('show-always')) {
                                        $('#main-toggle-menu').data('show-always', true);
                                        $('#main-toggle-menu').removeClass('show-always');
                                    }
                                    $('#main-toggle-menu').addClass('closed');
                                    $('#main-toggle-menu .menu-title').addClass('closed');
                                    $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                }
                            }
                            self.is_sticky = true;
                        }
                    } else {
                        if (self.$header.hasClass('sticky-header')) {
                            self.$header.removeClass('sticky-header');
                            self.$header.css('padding-bottom', 0);
                            self.$menu_wrap.stop().css('top', 0);
                            self.$header_main.show();
                            var selectric = self.$header.find('.main-menu-wrap .searchform select').data('selectric');
                            if (selectric)
                                selectric.close();
                            if (self.init_toggle_menu) {
                                self.init_toggle_menu = false;
                                theme.MegaMenu.build();
                                if ($('#main-toggle-menu').length) {
                                    if ($('#main-toggle-menu').data('show-always')) {
                                        $('#main-toggle-menu').addClass('show-always');
                                        $('#main-toggle-menu').removeClass('closed');
                                        $('#main-toggle-menu .menu-title').removeClass('closed');
                                        $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                    }
                                }
                            }
                            self.is_sticky = false;
                        }
                    }
                } else {
                    self.$header_main.show();
                    if (self.$header.parent().hasClass('fixed-header') && $('#wpadminbar').length && $('#wpadminbar').css('position') == 'absolute') {
                        self.$header.parent().css('top', ($('#wpadminbar').height() - scroll_top) < 0 ? -$('#wpadminbar').height() : -scroll_top);
                    } else if (self.$header.parent().hasClass('fixed-header')) {
                        self.$header.parent().attr('style', '');
                    } else {
                        if (self.$header.parent().hasClass('fixed-header'))
                            self.$header.parent().attr('style', '');
                    }
                    if (self.$header.hasClass('sticky-menu-header') && !theme.isTablet()) {
                        self.$header_main.stop().css('top', 0);
                        if (self.change_logo) self.$header_main.removeClass('change-logo');
                        self.$header_main.removeClass('sticky');
                        self.$header.removeClass('sticky-header');
                        self.is_sticky = false;
                        self.sticky_height = 0;
                        self.sticky_offset = 0;
                    } else {
                        if (self.$menu_wrap)
                            self.$menu_wrap.stop().css('top', 0);
                        if (scroll_top > self.sticky_pos && (!theme.isTablet() || (theme.isTablet() && (!theme.isMobile() && theme.show_sticky_header_tablet) || (theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile)))) {
                            if (!self.$header.hasClass('sticky-header')) {
                                self.$header.addClass('sticky-header');
                                self.$header.css('padding-bottom', self.main_height);
                                self.$header_main.addClass('sticky');
                                if (self.change_logo) self.$header_main.addClass('change-logo');
                                self.$header_main.stop().css('top', theme.adminBarHeight());
                                if (!self.init_toggle_menu) {
                                    self.init_toggle_menu = true;
                                    theme.MegaMenu.build();
                                    if ($('#main-toggle-menu').length) {
                                        if ($('#main-toggle-menu').hasClass('show-always')) {
                                            $('#main-toggle-menu').data('show-always', true);
                                            $('#main-toggle-menu').removeClass('show-always');
                                        }
                                        $('#main-toggle-menu').addClass('closed');
                                        $('#main-toggle-menu .menu-title').addClass('closed');
                                        $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                    }
                                }
                                self.is_sticky = true;
                            }
                        } else {
                            if (self.$header.hasClass('sticky-header')) {
                                if (self.change_logo) self.$header_main.removeClass('change-logo');
                                self.$header_main.removeClass('sticky');
                                self.$header.removeClass('sticky-header');
                                self.$header.css('padding-bottom', 0);
                                self.$header_main.stop().css('top', 0);
                                if (self.init_toggle_menu) {
                                    self.init_toggle_menu = false;
                                    theme.MegaMenu.build();
                                    if ($('#main-toggle-menu').length) {
                                        if ($('#main-toggle-menu').data('show-always')) {
                                            $('#main-toggle-menu').addClass('show-always');
                                            $('#main-toggle-menu').removeClass('closed');
                                            $('#main-toggle-menu .menu-title').removeClass('closed');
                                            $('#main-toggle-menu .toggle-menu-wrap').attr('style', '');
                                        }
                                    }
                                }
                                self.is_sticky = false;
                            }
                        }
                    }
                }
                if (!self.$header.hasClass('header-loaded'))
                    self.$header.addClass('header-loaded');
                if (!self.$header.find('.logo').hasClass('logo-transition'))
                    self.$header.find('.logo').addClass('logo-transition');
                if (self.$header.find('.overlay-logo').get(0) && !self.$header.find('.overlay-logo').hasClass('overlay-logo-transition'))
                    self.$header.find('.overlay-logo').addClass('overlay-logo-transition');
                return self;
            },
            reset: function() {
                var self = this;
                if (self.$header.find('.logo').hasClass('logo-transition'))
                    self.$header.find('.logo').removeClass('logo-transition');
                if (self.$header.find('.overlay-logo').get(0) && self.$header.find('.overlay-logo').hasClass('overlay-logo-transition'))
                    self.$header.find('.overlay-logo').removeClass('overlay-logo-transition');
                if (self.$menu_wrap && !theme.isTablet()) {
                    // show main menu
                    self.$header.addClass('sticky-header sticky-header-calc');
                    self.$header_main.addClass('sticky');
                    if (self.change_logo) self.$header_main.addClass('change-logo');
                    self.sticky_height = self.$menu_wrap.height() + parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    self.sticky_offset = parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    if (self.change_logo) self.$header_main.removeClass('change-logo');
                    self.$header_main.removeClass('sticky');
                    self.$header.removeClass('sticky-header sticky-header-calc');
                    self.header_height = self.$header.height() + parseInt(self.$header.css('margin-top'));
                    self.menu_height = self.$menu_wrap.height() + parseInt(self.$menu_wrap.css('padding-top')) + parseInt(self.$menu_wrap.css('padding-bottom'));
                    self.sticky_pos = (self.header_height - self.sticky_height) + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));
                    if (self.reveal) {
                        self.sticky_pos += self.menu_height + 30;
                    }
                } else {
                    // show header main
                    self.$header.addClass('sticky-header sticky-header-calc');
                    self.$header_main.addClass('sticky');
                    if (self.change_logo) self.$header_main.addClass('change-logo');
                    self.sticky_main_height = self.$header_main.height();
                    if (self.change_logo) self.$header_main.removeClass('change-logo');
                    self.$header_main.removeClass('sticky');
                    self.$header.removeClass('sticky-header sticky-header-calc');
                    self.header_height = self.$header.height() + parseInt(self.$header.css('margin-top'));
                    self.main_height = self.$header_main.height();
                    self.sticky_height = self.sticky_main_height;
                    self.sticky_offset = self.main_height - self.sticky_main_height;
                    if (!(!theme.isTablet() || (theme.isTablet() && (!theme.isMobile() && theme.show_sticky_header_tablet) || (theme.isMobile() && theme.show_sticky_header_tablet && theme.show_sticky_header_mobile)))) {
                        self.sticky_height = 0;
                        self.sticky_offset = 0;
                    }
                    self.sticky_pos = (self.header_height - self.sticky_main_height) + $('.banner-before-header').height() + parseInt($('body').css('padding-top')) + parseInt(self.$header.css('border-top-width'));
                    if (self.reveal) {
                        self.sticky_pos += self.main_height + 30;
                    }
                }
                self.init_toggle_menu = false;
                self.$header_main.removeAttr('style');
                self.$header.removeAttr('style');
                return self;
            },
            events: function() {
                var self = this,
                    win_width = 0;
                $(window).on('resize', function() {
                    if (win_width != $(window).width()) {
                        self.reset()
                            .build();
                        win_width = $(window).width();
                    }
                });
                $(window).on('scroll', function() {
                    self.build();
                });
                return self;
            }
        }
    });
}).apply(this, [window.theme, jQuery]);


// Hash Scroll
(function(theme, $) {
    theme = theme || {};
    $.extend(theme, {
        HashScroll: {
            initialize: function() {
                this.build()
                    .events();
                return this;
            },

            build: function() {
                var self = this;
                try {
                    var hash = window.location.hash;
                    var target = $(hash);
                    if (target.length && !(hash == '#review_form' || hash == '#reviews' || hash.indexOf('#comment-') != -1)) {
                        setTimeout(function() {
                            $('html, body').stop().animate({
                                scrollTop: target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1
                            }, 600, 'easeOutQuad', function() {
                                self.activeMenuItem();
                            });
                        }, 600);
                    }
                    return self;
                } catch (err) {
                    return self;
                }
            },

            activeMenuItem: function() {
                var self = this;
                var scroll_pos = $(window).scrollTop();
                var $menu_items = $('.menu-item > a[href*="#"], .sticky-nav .nav > li > a[href*="#"]');
                if ($menu_items.length) {
                    $menu_items.each(function() {
                        var $this = $(this);
                        var href = $this.attr('href');
                        var target;
                        if (href.indexOf('#') == 0) {
                            target = $(href);
                        } else {
                            var url = window.location.href;
                            url = url.substring(url.indexOf('://') + 3);
                            if (url.indexOf('#') != -1)
                                url = url.substring(0, url.indexOf('#'));
                            href = href.substring(href.indexOf('://') + 3);
                            href = href.substring(href.indexOf(url) + url.length);
                            if (href.indexOf('#') == 0) {
                                target = $(href);
                            }
                        }
                        if (target && target.get(0)) {
                            var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1,
                                $parent = $this.parent();
                            //if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
                            //scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
                            //}
                            if (scroll_to <= scroll_pos + 5) {
                                $parent.siblings().removeClass('active');
                                $parent.addClass('active');
                            } else {
                                $parent.removeClass('active');
                            }
                        }
                    });
                }
                return self;
            },

            events: function() {
                var self = this;
                $('.menu-item > a[href*="#"], .sticky-nav .nav > li > a[href*="#"], a[href*="#"].hash-scroll, .hash-scroll-wrap a[href*="#"]').on('click', function(e) {
                    e.preventDefault();
                    var $this = $(this);
                    var href = $this.attr('href');
                    var target;

                    if (href.indexOf('#') == 0) {
                        target = $(href);
                    } else {
                        var url = window.location.href;
                        url = url.substring(url.indexOf('://') + 3);
                        if (url.indexOf('#') != -1)
                            url = url.substring(0, url.indexOf('#'));
                        href = href.substring(href.indexOf('://') + 3);
                        href = href.substring(href.indexOf(url) + url.length);
                        if (href.indexOf('#') == 0) {
                            target = $(href);
                        }
                    }
                    if (target && target.get(0)) {
                        var $parent = $this.parent();
                        var scroll_to = target.offset().top - theme.StickyHeader.sticky_height - theme.adminBarHeight() - theme.sticky_nav_height + 1;
                        //                        if (scroll_to <= theme.StickyHeader.sticky_pos + theme.sticky_nav_height) {
                        //                            scroll_to = theme.StickyHeader.sticky_pos + theme.sticky_nav_height + 1;
                        //                        }
                        $('html, body').stop().animate({
                            scrollTop: scroll_to
                        }, 600, 'easeOutQuad', function() {
                            self.activeMenuItem();
                            $parent.siblings().removeClass('active');
                            $parent.addClass('active');
                        });
                    } else {
                        window.location.href = $this.attr('href');
                    }
                });
                $(window).on('scroll', function() {
                    self.activeMenuItem();
                });
                self.activeMenuItem();
                return self;
            }
        }
    });

}).apply(this, [window.theme, jQuery]);


function init() {
    (function($) {
        'use strict';
        $('.thumb-gallery-thumbs').each(function() {
            var $thumbs = $(this),
                $detail = $thumbs.parent().find('.thumb-gallery-detail'),
                flag = false,
                duration = 300;

            if ($thumbs.data('initThumbs'))
                return;

            $detail.on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    var len = $detail.find('.owl-item').length,
                        cloned = $detail.find('.cloned').length;
                    if (len) {
                        $thumbs.trigger('to.owl.carousel', [(e.item.index - cloned / 2 - 1) % len, duration, true]);
                    }
                    flag = false;
                }
            });

            $thumbs.on('changed.owl.carousel', function(e) {
                if (!flag) {
                    flag = true;
                    var len = $thumbs.find('.owl-item').length,
                        cloned = $thumbs.find('.cloned').length;
                    if (len) {
                        $detail.trigger('to.owl.carousel', [(e.item.index - cloned / 2) % len, duration, true]);
                    }
                    flag = false;
                }
            }).on('click', '.owl-item', function() {
                if (!flag) {
                    flag = true;
                    var len = $thumbs.find('.owl-item').length,
                        cloned = $thumbs.find('.cloned').length;
                    if (len) {
                        $detail.trigger('to.owl.carousel', [($(this).index() - cloned / 2) % len, duration, true]);
                    }
                    flag = false;
                }
            }).data('initThumbs', true);
        });
    }).apply(this, [jQuery]);

}

(function(theme, $) {
    'use strict';
    $(document).ready(function() {
        // Init Theme
        init();
        // Sticky Header
        if (typeof theme.StickyHeader !== 'undefined') {
            theme.StickyHeader.initialize();
        }
        // Hash Scroll
        if (typeof theme.HashScroll !== 'undefined') {
            theme.HashScroll.initialize();
        }
    });

}).apply(this, [window.theme, jQuery]);

(function(theme, $, undefined) {
    "use strict";
    //  Experience Timeline
    var timelineHeightAdjust = {
        $timeline: $('#exp-timeline'),
        $timelineBar: $('#exp-timeline .timeline-bar'),
        $firstTimelineItem: $('#exp-timeline .timeline-box').first(),
        $lastTimelineItem: $('#exp-timeline .timeline-box').last(),

        build: function() {
            var self = this;

            self.adjustHeight();
        },
        adjustHeight: function() {
            var self = this,
                calcFirstItemHeight = (self.$firstTimelineItem.outerHeight(true) / 2) + 5,
                calcLastItemHeight = (self.$lastTimelineItem.outerHeight(true) / 2) + 5;

            self.$timelineBar.css({
                top: calcFirstItemHeight,
                bottom: calcLastItemHeight
            });
        }
    }

    if ($('#exp-timeline').get(0)) {
        setTimeout(function() {
            $(window).bind('resizeEnd', function() {
                timelineHeightAdjust.build();
            });
        }, 1000);
        timelineHeightAdjust.build();
    }


})(window.theme, jQuery);