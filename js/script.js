!function(e) {
    "use strict";
    e(window).load(function() {
        e(".loader-inner").fadeOut(),
            e(".loader").delay(200).fadeOut("slow")
    }),
        e(document).ready(function() {
            e("#testimonial-carousel").owlCarousel({
                navigation: !1,
                slideSpeed: 300,
                paginationSpeed: 400,
                responsiveRefreshRate: 200,
                responsiveBaseWidth: window,
                pagination: !0,
                autoPlay: !0,
                singleItem: !0
            }),
                e("#block-slider").owlCarousel({
                    navigation: !0,
                    slideSpeed: 300,
                    paginationSpeed: 400,
                    responsiveRefreshRate: 200,
                    responsiveBaseWidth: window,
                    pagination: !1,
                    autoPlay: !0,
                    singleItem: !0,
                    navigationText: ["<span class='icon-left-open-big'></span>", "<span class='icon-right-open-big'></span>"]
                }),
                e(".popup").magnificPopup({
                    type: "image",
                    fixedContentPos: !1,
                    fixedBgPos: !1,
                    mainClass: "mfp-no-margins mfp-with-zoom",
                    image: {
                        verticalFit: !0
                    },
                    zoom: {
                        enabled: !0,
                        duration: 300
                    }
                });
            var a = e(".works");
            e(".popup-youtube, .popup-vimeo").magnificPopup({
                disableOn: 700,
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: !1,
                fixedContentPos: !1
            }),
                e(".filter ").on("click", "li a", function() {
                    e(this).addClass("active"),
                        e(this).parent().siblings().find("a").removeClass("active");
                    var i = e(this).attr("data-filter");
                    if (e(this).closest(a).find(".item").removeClass("disable"),
                    "all" !== i)
                        for (var s = e(this).closest(a).find(".item"), o = 0; o < s.length; o++)
                            s.eq(o).hasClass(i) || s.eq(o).addClass("disable");
                    return !1
                }),
                e(".search-form i").on("click", function() {
                    e(this).closest(".search-form").find('input[type="text"]').focus(),
                    e(this).closest(".search-form").find('input[type="text"]').val() && e(this).closest(".search-form").find('input[type="submit"]').trigger("click")
                });
            var i = e("input#name")
                , s = e("input#email")
                , o = e("textarea#message")
                , t = e(".contact-form");
            e(".submit").on("click", function() {
                i.removeClass("errorForm"),
                    o.removeClass("errorForm"),
                    s.removeClass("errorForm");
                var a = !1
                    , r = i.val();
                ("" == r || " " == r) && (a = !0,
                    i.addClass("errorForm"));
                var n = o.val();
                ("" == n || " " == n) && (a = !0,
                    o.addClass("errorForm"));
                var l = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i
                    , d = s.val();
                if ("" == d || " " == d ? (s.addClass("errorForm"),
                    a = !0) : l.test(d) || (s.addClass("errorForm"),
                    a = !0),
                1 == a)
                    return !1;
                var p = t.serialize();
                return e.ajax({
                    type: "POST",
                    url: t.attr("action"),
                    data: p,
                    success: function(a) {
                        "SENDING" == a ? e("#success").fadeIn("slow") : e("#error").fadeIn("slow")
                    }
                }),
                    !1
            })
        })
}(jQuery);
