function OpenWindow(e, t, n, i) {
    var o = (screen.width - t) / 2,
        a = (screen.height - n) / 2;
    winprops = "resizable=0, height=" + n + ",width=" + t + ",top=" + a + ",left=" + o + "w", i && (winprops += ",scrollbars=1");
    window.open(e, "_blank", winprops)
}

function setLocation(e) {
    window.location.href = e
}

function displayAjaxLoading(e) {
    e ? $("#loadingwait").show() : $("#loadingwait").hide("slow")
}

function txtforpeople(e) {
    var t = e.id;
    $("#forpeople").html("For " + $("#" + t).html() + " People")
}

function displayPopupNotification(e, t, n) {
    var i;
    i = "success" == t ? $("#dialog-notifications-success") : "error" == t ? $("#dialog-notifications-error") : $("#dialog-notifications-success");
    var o = "";
    if ("string" == typeof e) o = "<p>" + e + "</p>";
    else
        for (var a = 0; a < e.length; a++) o = o + "<p>" + e[a] + "</p>";
    i.html(o);
    var l = n ? !0 : !1;
    i.dialog({
        modal: l
    })
}

function displayBarNotification(e, t, n) {
    clearTimeout(barNotificationTimeout);
    var i = "success";
    "success" == t ? i = "success" : "error" == t && (i = "error"), $("#bar-notification").removeClass("success").removeClass("error"), $("#bar-notification .content").remove();
    var o = "";
    if ("string" == typeof e) o = '<p class="content">' + e + "</p>";
    else
        for (var a = 0; a < e.length; a++) o = o + '<p class="content">' + e[a] + "</p>";
    $("#bar-notification").append(o).addClass(i).fadeIn("slow").mouseenter(function () {
        clearTimeout(barNotificationTimeout)
    }), $("#bar-notification .close").unbind("click").click(function () {
        $("#bar-notification").fadeOut("slow")
    }), n > 0 && (barNotificationTimeout = setTimeout(function () {
        $("#bar-notification").fadeOut("slow")
    }, n))
}

function htmlEncode(e) {
    return $("<div/>").text(e).html()
}

function htmlDecode(e) {
    return $("<div/>").html(e).text()
}

function setValue() {
    $("#IstStep").length > 0 && (document.getElementById("IstStep").checked = !0), $("#Custometext").length > 0 && (document.getElementById("Custometext").disabled = !0), $("#RLeg").length > 0 && (document.getElementById("RLeg").disabled = !0), $("#RSecri").length > 0 && (document.getElementById("RSecri").disabled = !0), $("#first").length > 0 && (document.getElementById("first").disabled = !1), $("#Second").length > 0 && (document.getElementById("Second").disabled = !1), $("#Third").length > 0 && (document.getElementById("Third").disabled = !1), $("#Cusionboth1").length > 0 && (document.getElementById("Cusionboth1").checked = !0), $("#HisHerDropdDown1").hide()
}

function FunctiHidshowQutionDiv(e) {
    e.checked ? ($("#CusionCustomiDiv").show(), $("html,body").animate({
        scrollTop: $(".related-products-grid").height()
    }, 1e3)) : ($("#CusionCustomiDiv").hide(), $("html,body").animate({
        scrollTop: 0
    }, 1e3))
}

function skuchange(e, t, n) {
    $("#" + n.id).val(t), document.getElementById("loadingwait").style.display = "block", $("#PillowQutionCustomi").hide(), $("#CusionCustomiDiv").hide(), $.ajax({
        cache: !1,
        url: "/ShoppingCart/ProductAddonsGetBasedonSizeSelection",
        data: {
            productId: e,
            SizeValueId: t
        },
        type: "post",
        success: function (e) {
            $("#AddonView").empty(), $("#AddonView").html(e), document.getElementById("loadingwait").style.display = "none"
        }
    }), $("input:checkbox").attr("checked", !1), $.ajax({
        cache: !1,
        url: "/ShoppingCart/ProductDetails_AttributeChangeskuchange",
        data: {
            productId: e,
            data: $("#product-details-form").serialize()
        },
        type: "post",
        success: function (t) {
            t.sku && $("#sku-" + e).text(t.sku), t.price && $("#spanprice").text(t.price)
        }
    })
}

function PriceChange(e, t, n) {
    $("#" + n).val(t), $(".testby").hide(), $("input:checkbox").length > 0 && $("input:checkbox").attr("checked", !1), $("input:radio").length > 0 && $("input:radio").attr("checked", !1), setValue(), setValueCusion(), $.ajax({
        cache: !1,
        url: "/ShoppingCart/ProductDetails_AttributeChangeskuchange",
        data: {
            productId: e,
            data: $("#product-details-form").serialize()
        },
        type: "post",
        success: function (t) {
            t.sku && $("#sku-" + e).text(t.sku), t.price && $("#spanprice").text(t.price)
        }
    })
}

function PriceChangePopUp(e, t, n) {
    $("#" + n).val(t), setValue(), setValueCusion(), $.ajax({
        cache: !1,
        url: "/ShoppingCart/ProductDetails_AttributeChangeskuchange",
        data: {
            productId: e,
            data: $("#product-details-form").serialize()
        },
        type: "post",
        success: function (t) {
            t.sku && $("#sku-" + e).text(t.sku), t.price && $("#spanprice").text(t.price)
        }
    })
}

function QViewProduct(e) {
    $("#valDiv").hide(), document.getElementById("loadingwait").style.display = "block", $("#divQView").empty(), $.ajax({
        cache: !1,
        url: "/Product/ProductDetailsQView",
        data: {
            productId: e
        },
        type: "post",
        success: function (e) {
            var t = document.getElementById("divQView");
            t.innerHTML += e, "true" == $(e).find("#divPreSelected").attr("IsPreselected") && PriceChangePopUp($(e).find("#divPreSelected").attr("productId"), $(e).find("#divPreSelected").attr("attributId"), $(e).find("#divPreSelected").attr("contrrolId")), document.getElementById("loadingwait").style.display = "none", $("#valDiv").show()
        }
    })
}

function setValueCusion() {
    $("#Custometextcusion").length > 0 && (document.getElementById("Custometextcusion").disabled = !0), $("#RSecricusion").length > 0 && (document.getElementById("RSecricusion").disabled = !0), $("#RLegCusion").length > 0 && (document.getElementById("RLegCusion").disabled = !0), $("#firstCusion").length > 0 && (document.getElementById("firstCusion").disabled = !1), $("#SecondCusion").length > 0 && (document.getElementById("SecondCusion").disabled = !1), $("#ThirdCusion").length > 0 && (document.getElementById("ThirdCusion").disabled = !1), $("#Cusionboth").length > 0 && (document.getElementById("Cusionboth").disabled = !1), $("#HisOrHer").length > 0 && (document.getElementById("HisOrHer").disabled = !1), $("#IstStepCusion").length > 0 && (document.getElementById("IstStepCusion").checked = !0), $("#Cusionboth").length > 0 && (document.getElementById("Cusionboth").checked = !0), $("#HisHerDropdDown").hide()
}

function RefreshCushionHisHerSection(e) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            value: e
        },
        type: "post",
        url: "/Product/HisHerRefreshSection",
        success: function (e) {
            document.getElementById("ImageHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImageHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function FunctiHidshowHisHerDiv(e, t) {
    checkBoxConditional(e, t), e.checked ? ("1" == t && displayBarNotification("These are additional Cushions which would be personalized", "error", 3500), $("#DivHisHerCustomixa").show(), $("#HisHerCusion1").length > 0 && (document.getElementById("HisHerCusion1").checked = !0), $("html,body").animate({
        scrollTop: 800
    }, 1e3)) : ($("#DivHisHerCustomixa").hide(), $("html,body").animate({
        scrollTop: 0
    }, 1e3))
}
function FunctiHidshowTowelDiv(e, t) {
    checkBoxConditional(e), e.checked ? ("1" == t && displayBarNotification("These are additional Towels which would be personalized", "error", 3500), $("#PillowQutionCustomi").show(), $("#CushionRadioInitial").length > 0 && (document.getElementById("CushionRadioInitial").checked = !0), $("html,body").animate({
        scrollTop: 800
    }, 1e3)) : ($("#PillowQutionCustomi").hide(), $("html,body").animate({
        scrollTop: 0
    }, 1e3))
}

function HisHerCusionDivHideShow(e) {
    $("#divHiHerCushonDropDown").show(), $("#DivHisHerCushionName").hide(), RefreshCushionHisHerSection("60")
}

function HisHerNameCusionDivHideShow(e) {
    $("#divHiHerCushonDropDown").hide(), $("#DivHisHerCushionName").show(), RefreshCushionHisHerSection("30")
}

function CountKeyWord(e, t) {
    var n = $("#" + t.id).val(),
        i = $("#" + t.id).attr("maxlength");
    $("#" + e).html(parseInt(i) - n.length)
}

function HisHerText1and2() {
    var e = "";
    if (document.getElementById("loadingwait").style.display = "block", document.getElementById("HisHerCusion1").checked) {
        var t = $("#firstHisHer option:selected").text() + $("#SecondHisHer option:selected").text() + $("#ThirdHisHer option:selected").text();
        t.indexOf("-") > -1 && (t = t.replace("-", ""));
        var n = $("#HisHer1 option:selected").text() + $("#HisHer2 option:selected").text() + $("#HisHer3 option:selected").text();
        n.indexOf("-") > -1 && (n = n.replace("-", "")), e = t + "_" + n
    } else var e = document.getElementById("HisHerText1").value + "_" + document.getElementById("HisHerText2").value;
    $.ajax({
        cache: !1,
        data: {
            test: e
        },
        type: "post",
        url: "/Product/CushionHisHerSectionText",
        success: function (e) {
            document.getElementById("ImageHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImageHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function FontHisHerSectionChange(e, t, url) {
    if (url == null || url == undefined)
        url = "/Product/CushionHisHerSectionFont";

    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            fontstyle: e
        },
        type: "post",
        url: url,
        success: function (e) {
            document.getElementById("ImageHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImageHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none", ChangeImageDynamic("FontHisHerSectionChange_", t.id)
        }
    })
}

function ColorHisHerSectionChange(e, t) {
    $("#spanHisHerCushon").length > 0 && ($("#spanHisHerCushon")[0].innerHTML = "", $("#spanHisHerCushon").css({
        backgroundColor: e
    })), document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Color: e
        },
        type: "post",
        url: "/Product/CushionHisHerSectionColor",
        success: function (e) {
            document.getElementById("ImageHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImageHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none", $("a[id^=currentColorLinkHis_]").removeClass("currentactive"), $("#" + t.id).addClass("currentactive")
        }
    })
}

function FunctiHidshowPillowDiv(e, t) {
    checkBoxConditional(e), e.checked ? ("1" == t && displayBarNotification("These are additional Cushions which would be personalized", "error", 3500), $("#PillowQutionCustomi").show(), $("#CushionRadioInitial").length > 0 && (document.getElementById("CushionRadioInitial").checked = !0), $("html,body").animate({
        scrollTop: 800
    }, 1e3)) : ($("#PillowQutionCustomi").hide(), $("html,body").animate({
        scrollTop: 0
    }, 1e3))
}

function Refreshcushion(e) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            value: e
        },
        url: "/Product/RefreshPillowQutionCustom",
        success: function (e) {
            document.getElementById("PillowQutioncustom").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function HisHerCusionDropdownHideShow1(e) {
    document.getElementById("CushionRadioInitial").checked ? ($("#DivCushionIntial").show(), $("#DivCushionName").hide(), Refreshcushion("60")) : document.getElementById("CushionRadioName").checked && ($("#DivCushionIntial").hide(), $("#DivCushionName").show(), Refreshcushion("30"))
}

function PopulateText() {
    document.getElementById("loadingwait").style.display = "block";
    var e = "";
    if (document.getElementById("CushionRadioInitial").checked) {
        var e = $("#first option:selected").text() + $("#Second option:selected").text() + $("#Third option:selected").text();
        e.indexOf("-") > -1 && (e = e.replace("-", ""))
    } else var e = document.getElementById("cushionNametext").value;
    $.ajax({
        cache: !1,
        data: {
            test: e
        },
        url: "/Product/TextChange",
        success: function (e) {
            document.getElementById("PillowQutioncustom").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function FontchangePillowQutionTextFont(e, t) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Font: e
        },
        url: "/Product/changePillowQutionChangefont",
        success: function (e) {
            document.getElementById("PillowQutioncustom").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none", ChangeImageDynamic("SelectedFontdiv_", t.id)
        }
    })
}

function ChangeImageDynamic(e, t) {
    var n, i, o;
    $("img[id^=" + e + "]").each(function () {
        if (n = $(this).attr("src").lastIndexOf("/"), i = $(this).attr("src").substr(0, n), o = $(this).attr("src").substr(n), o.indexOf("-") > 0) {
            var e = o.split("-")[0];
            e = i + e + "." + o.split(".")[1], $(this).attr("src", $(this).attr("src").replace($(this).attr("src"), e))
        }
    }), n = $("#" + t).attr("src").lastIndexOf("/"), i = $("#" + t).attr("src").substr(0, n), o = $("#" + t).attr("src").substr(n), o = i + o.split(".")[0] + "-small." + o.split(".")[1], $("#" + t).attr("src", $("#" + t).attr("src").replace(jQuery("#" + t).attr("src"), o))
}

function changeTextColorPillowQution(e, t) {
    $("#spansingleCushon").length > 0 && ($("#spansingleCushon")[0].innerHTML = "", $("#spansingleCushon").css({
        backgroundColor: e
    })), document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Color: e
        },
        url: "/Product/ColorchangePillowQutionChange",
        success: function (e) {
            document.getElementById("PillowQutioncustom").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none", $("a[id^=currentColorLink_]").removeClass("currentactive"), $("#" + t.id).addClass("currentactive")
        }
    })
}

function checkBoxConditional(e) {
    return console.log($("input:checkbox.personalize:checked").length), $("input:checkbox.personalize:checked").length > 1 ? (e.checked = !1, displayBarNotification("Please select either Single or His and Her cushion", "error", 3500), !1) : void 0
}

function SinglepillowDiv(e) {
    checkBoxConditional(e), e.checked ? (document.getElementById("PillowRadioInitial").checked = !0, $("#PillowSingle").show(), $(window).scrollTop(900)) : ($("#PillowSingle").hide(), $(window).scrollTop(0))
}

function HisHerpillowDiv(e) {
    checkBoxConditional(e), e.checked ? (document.getElementById("radioHisHerPillowInitial").checked = !0, $("#PillowHisHerDiv").show(), $(window).scrollTop(900)) : ($("#PillowHisHerDiv").hide(), $(window).scrollTop(0))
}

function HisHerSamepillowDiv(e) {
    checkBoxConditional(e), e.checked ? (document.getElementById("radioHisHerSamePillowInitial").checked = !0, $("#PillowHisHerSameDiv").show(), $(window).scrollTop(900)) : ($("#PillowHisHerSameDiv").hide(), $(window).scrollTop(0))
}

function SinglePillowRefresh(e) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            value: e
        },
        url: "/Product/RefreshSinglePillow",
        success: function (e) {
            document.getElementById("SinglePillowImage").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function SinglePillowRadiobtn(e) {
    document.getElementById("PillowRadioInitial").checked ? ($("#DivSinglePillowIntial").show(), $("#DivSinglePillowName").hide(), SinglePillowRefresh("60")) : document.getElementById("PillowRadioName").checked && ($("#DivSinglePillowIntial").hide(), $("#DivSinglePillowName").show(), SinglePillowRefresh("30"))
}

function SinglePillowText() {
    document.getElementById("loadingwait").style.display = "block";
    var e = "";
    if (document.getElementById("PillowRadioInitial").checked) var e = $("#spfirst option:selected").text() + $("#spSecond option:selected").text() + $("#spThird option:selected").text();
    else var e = document.getElementById("SinglePillowtxtbox").value;
    $.ajax({
        cache: !1,
        data: {
            test: e
        },
        url: "/Product/SinglePillowTextChange",
        success: function (e) {
            document.getElementById("SinglePillowImage").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function SiglePillowFontchange(e, t) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Font: e
        },
        url: "/Product/SinglePillowFontChange",
        success: function (e) {
            document.getElementById("SinglePillowImage").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none", ChangeImageDynamic("SiglePillowFontchange_", t.id)
        }
    })
}

function SinglePillowColorChange(e, t) {
    $("#spanSinglePillow").length > 0 && ($("#spanSinglePillow")[0].innerHTML = "", $("#spanSinglePillow").css({
        backgroundColor: e
    })), document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Color: e
        },
        url: "/Product/SinglePillowColorChange",
        success: function (e) {
            document.getElementById("SinglePillowImage").src = "data:image/png;base64," + e, document.getElementById("loadingwait").style.display = "none", $("a[id^=SinglePillowColorChange_]").removeClass("currentactive"), $("#" + t.id).addClass("currentactive")
        }
    })
}

function RefreshHisHerPillow(e) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            value: e
        },
        type: "post",
        url: "/Product/HisHerPillowRefreshSection",
        success: function (e) {
            document.getElementById("ImagePillowHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function HisHerpillowDivInital(e) {
    document.getElementById("radioHisHerPillowInitial").checked ? ($("#HisPillowDropdown").show(), $("#DivHisHerPillowName").hide(), RefreshHisHerPillow("60")) : document.getElementById("radioHisHerPillowName").checked && ($("#HisPillowDropdown").hide(), $("#DivHisHerPillowName").show(), RefreshHisHerPillow("30"))
}

function HisHerPillowInitailsName() {
    var e = "";
    if (document.getElementById("loadingwait").style.display = "block", document.getElementById("radioHisHerPillowInitial").checked) {
        var t = $("#firstHisHerPillow1 option:selected").text() + $("#SecondHisHerPillow1 option:selected").text() + $("#ThirdHisHerPillow1 option:selected").text();
        t.indexOf("-") > -1 && (t = t.replace("-", ""));
        var n = $("#HisHer1Pillow2 option:selected").text() + $("#HisHer2Pillow2 option:selected").text() + $("#HisHer3Pillow2 option:selected").text();
        n.indexOf("-") > -1 && (n = n.replace("-", "")), e = t + "_" + n
    } else var e = document.getElementById("HisHerPillowText1").value + "_" + document.getElementById("HisHerPillowText2").value;
    $.ajax({
        cache: !1,
        data: {
            test: e
        },
        type: "post",
        url: "/Product/PillowHisHerText",
        success: function (e) {
            document.getElementById("ImagePillowHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function PillowHisHerFont(e, t) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            fontstyle: e
        },
        type: "post",
        url: "/Product/PillowHisHerFont",
        success: function (e) {
            document.getElementById("ImagePillowHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none", ChangeImageDynamic("PillowHisHerFont_", t.id)
        }
    })
}

function PillowHisHerColor(e, t) {
    $("#spanHisHerPillow").length > 0 && ($("#spanHisHerPillow")[0].innerHTML = "", $("#spanHisHerPillow").css({
        backgroundColor: e
    })), document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Color: e
        },
        type: "post",
        url: "/Product/PillowHisHerColorSection",
        success: function (e) {
            document.getElementById("ImagePillowHisHer1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHer2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none", $("a[id^=PillowHisHerColor_]").removeClass("currentactive"), $("#" + t.id).addClass("currentactive")
        }
    })
}

function RefreshHisHerSamePillow(e) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            value: e
        },
        type: "post",
        url: "/Product/HisHerSamePillowRefreshSection",
        success: function (e) {
            document.getElementById("ImagePillowHisHerSame1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHerSame2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none"
        }
    })
}


function HisHerSamepillowDivInital(e) {
    document.getElementById("radioHisHerSamePillowInitial").checked ? ($("#HisSamePillowDropdown").show(), $("#DivHisHerSamePillowName").hide(), RefreshHisHerPillow("60")) : document.getElementById("radioHisHerSamePillowName").checked && ($("#HisSamePillowDropdown").hide(), $("#DivHisHerSamePillowName").show(), RefreshHisHerPillow("30"))
}

function HisHerSamePillowInitailsName() {

    var e = "";
    if (document.getElementById("loadingwait").style.display = "block", document.getElementById("radioHisHerSamePillowInitial").checked) {
        var t = $("#firstHisHerSamePillow1 option:selected").text() + $("#SecondHisHerSamePillow1 option:selected").text() + $("#ThirdHisHerSamePillow1 option:selected").text();
        t.indexOf("-") > -1 && (t = t.replace("-", ""));
        e = t + "_" + t;
        //var n = $("#HisHerSame1Pillow2 option:selected").text() + $("#HisHerSame2Pillow2 option:selected").text() + $("#HisHerSame3Pillow2 option:selected").text();
        //n.indexOf("-") > -1 && (n = n.replace("-", "")), e = t + "_" + t
    } else var e = document.getElementById("HisHerSamePillowText1").value + "_" + document.getElementById("HisHerSamePillowText1").value;
    $.ajax({
        cache: !1,
        data: {
            test: e
        },
        type: "post",
        url: "/Product/PillowHisHerSameText",
        success: function (e) {
            document.getElementById("ImagePillowHisHerSame1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHerSame2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function PillowHisHerSameFont(e, t) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            fontstyle: e
        },
        type: "post",
        url: "/Product/PillowHisHerSameFont",
        success: function (e) {
            document.getElementById("ImagePillowHisHerSame1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHerSame2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none", ChangeImageDynamic("PillowHisHerSameFont_", t.id)
        }
    })
}

function PillowHisHerSameColor(e, t) {
    $("#spanHisHerSamePillow").length > 0 && ($("#spanHisHerSamePillow")[0].innerHTML = "", $("#spanHisHerSamePillow").css({
        backgroundColor: e
    })), document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        data: {
            Color: e
        },
        type: "post",
        url: "/Product/PillowHisHerSameColorSection",
        success: function (e) {
            document.getElementById("ImagePillowHisHerSame1").src = "data:image/png;base64," + e.Image1, document.getElementById("ImagePillowHisHerSame2").src = "data:image/png;base64," + e.Image2, document.getElementById("loadingwait").style.display = "none", $("a[id^=PillowHisHerSameColor_]").removeClass("currentactive"), $("#" + t.id).addClass("currentactive")
        }
    })
}


function testfunc(e) {
    var t = e.id;
    $("div[id^=sdiv_]").removeClass("active"), $("#" + t).addClass("active")
}
function changeOldPriceForSizeAddon(div) {
    //alert($(div).attr("data-price").indexOf('PKR'));
    //alert($('#oldprice-hdn').val());
    
    if ($(div).attr("data-price").indexOf('PKR') > -1 || $(div).attr("data-price").indexOf('EUR') > -1) {
        var price = $(div).attr("data-price").substring(4);
        var currency = $(div).attr("data-price").substring(0, 3);
        var oldProdprice = $('#oldprice-hdn').val().substring(4);
        var subOldProdPrice = oldProdprice.replace(/,/g, "");
		var priceWithoutComa = price.replace(/,/g, "");
        //alert(parseFloat(subOldProdPrice));
        var addonOldPrice = parseFloat(priceWithoutComa) + parseFloat(subOldProdPrice);
        
        //alert(addonOldPrice);
        //$('#oldprice-span').html(currency + ' ' + addonOldPrice);
        $('#oldprice-span').html(currency + ' ' + addonOldPrice.toLocaleString('en'));
    }
    else {
        var price = $(div).attr("data-price").substring(1);
        var currency = $(div).attr("data-price").substring(0, 1);
        var oldProdprice = $('#oldprice-hdn').val().substring(1);
        var subOldProdPrice = oldProdprice.replace(/,/g, "");
        //alert(parseFloat(subOldProdPrice));
        var addonOldPrice = parseFloat(price) + parseFloat(subOldProdPrice);
      //  alert(addonOldPrice);
        $('#oldprice-span').html(currency + ' ' +addonOldPrice);
    }
    
    
}
function AddonsPriceChangechange(e) {
    $.ajax({
        cache: !1,
        url: "/ShoppingCart/ProductDetails_AttributeChange",
        data: {
            productId: e,
            data: $("#product-details-form").serialize()
        },
        type: "post",
        success: function (t) {
            t.sku && $("#sku-" + e).text(t.sku), t.price && $("#spanprice").text(t.price)
        }
    })
}

function Checkallredyclick(e) {
    var t = $("#" + e.id).attr("class");
    "disabled" == t && swal("These are pre-selected and can not be unchecked.Please add content, if any.")
}

function HideShowDiv(e, t, n) {
    var i = isNaN($("#selectedAmt").html()) ? 0 : parseInt($("#selectedAmt").html()),
        o = $("#" + t.id).attr("class");
    "disabled" != o ? i = t.checked ? parseInt(i) + parseInt(n) : parseInt(i) - parseInt(n) : $("#" + t.id).prop("checked", !0), $("#selectedAmt").html(i), $(".testby").hide(), $("#PillowQutionCustomi").hide(), $("#CusionCustomiDiv").hide(), $("#DivHisHerCustomixa").hide(), $("#" + e).show()
}

function filterbyprice(e, t, n) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        type: "post",
        url: "/Catalog/CategoryForFilter",
        data: {
            categoryId: e,
            pricerange: t
        },
        success: function (e) {
            $("#filpro").empty(), document.getElementById("filpro").innerHTML = e, document.getElementById("loadingwait").style.display = "none", "0" == n ? document.getElementById("btnreset").style.display = "block" : document.getElementById("btnreset").style.display = "none"
        }
    })
}

function ChangeFunction1(e) {
    document.getElementById("loadingwait").style.display = "block";
    var t = document.getElementById("colrdropdown"),
        n = t.options[t.selectedIndex].value;
    $.ajax({
        cache: !1,
        type: "post",
        url: "/Catalog/getProductsForSelectedColor",
        data: {
            colorTableId: n,
            categoryid: e
        },
        success: function (e) {
            $(".item-grid").empty(), $(".item-grid").addClass("item-box"), $(".item-box").html(e), document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function skuchangeselect(e, t, n) {
    $("#" + n.id).val(t), $.ajax({
        cache: !1,
        url: "/ShoppingCart/ProductDetails_AttributeChangeskuchange",
        data: {
            productId: e,
            data: $("#product-details-form").serialize()
        },
        type: "post",
        success: function (t) {
            t.sku && $("#sku-" + e).text(t.sku), t.price && $("#spanprice").text(t.price)
        }
    })
}

function Changequntity(e, t) {
    document.getElementById(t).value = e
}

function Mostpopular(e) {
    document.getElementById("loadingwait").style.display = "block", $.ajax({
        cache: !1,
        type: "post",
        url: "/Product/CategoryBestSellers",
        data: {
            CategoryId: e
        },
        success: function (e) {
            $(".item-grid").empty(), $(".item-grid").append('<div id="innerdiv"></div>'), $("#innerdiv").html(e), $(".item-grid").show(), document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function FunctiHidshow(e) {
    "pill" == e ? ($("#CusionCustomiDiv").show(), $("#DivHisHerCustomixa").hide(), $("#PillowQutionCustomi").hide()) : "his" == e ? ($("#DivHisHerCustomixa").show(), $("#PillowQutionCustomi").hide(), $("#CusionCustomiDiv").hide(), document.getElementById("HisHerCusion1").checked = !0) : "cush" == e && ($("#CusionCustomiDiv").hide(), $("#DivHisHerCustomixa").hide(), $("#PillowQutionCustomi").show(), document.getElementById("CushionRadioInitial").checked = !0)
}

function GetAttributeValue(e, t, n) {
    document.getElementById("loadingwait").style.display = "block";
    var i = e.split("_");
    $("#" + t).val(i[5]), AddonsPriceChangechange(i[2]), $.ajax({
        cache: !1,
        url: "/Product/ProductDetails_AttributeChange1",
        data: {
            AttributeId: i[5],
            ProductId: i[2]
        },
        type: "post",
        success: function (e) {
            $("#ValuePic").empty(), gh = e.replace("gallery", ""), document.getElementById("ValuePic").innerHTML = gh, document.getElementById("loadingwait").style.display = "none", $("img[id^=SelectedColordiv_]").removeClass("currentactive"), $("#" + n.id).addClass("currentactive")
        }
    })
}

function testdropdown(e, t) {
    var n = $("label[id^='Addons_']"),
        i = "";
    if (n.length > 0)
        for (a = 0; a < n.length; a++) i += n[a].id + ",";
    $.ajax({
        cache: !1,
        url: "/Product/PrepareProductDetailsPageModelAjaxCall",
        data: {
            productid: t,
            customerCurrency: e,
            Addons: i,
            parent: $("#product-details-form").serialize()
        },
        type: "post",
        success: function (e) {
            $("#spanprice").html("");
            var t = e.split("|");
            for ($("#spanprice").html(t[0]), b = 1; b < t.length; b++) {
                var n = t[b].split(":");
                $("#" + n[0]).html(n[1])
            }
        }
    })
}

function Bdaycheck() {
    var e = parseInt($("#bday").val());
    return null == e || e > 31 ? ($("#bday").css("background-color", "rgb(255, 192, 192)"), $("#bday").val(""), !1) : void 0
}

function Bmonthcheck() {
    var e = ($("#bmonth").val(), parseInt($("#bmonth").val()));
    return null == e || e > 12 ? ($("#bmonth").css("background-color", "rgb(255, 192, 192)"), $("#bmonth").val(""), !1) : void 0
}

function Byearcheck() {
    var e = parseInt($("#bday").val()),
        t = parseInt($("#bmonth").val()),
        n = parseInt($("#byear").val()),
        i = new Date,
        o = i.getFullYear(),
        a = $("#byear").val().indexOf(1, "0"),
        l = $("#byear").val().indexOf(2, "0");
    if (0 != a && 0 != l) return $("#byear").css("background-color", "rgb(255, 192, 192)"), $("#byear").val(""), !1;
    var s = $("#byear").val().indexOf(9, "1");
    $("#byear").val().indexOf(0, "1");
    if ($("#byear").val().length > 1 && 1 != s && 0 == a) return $("#byear").css("background-color", "rgb(255, 192, 192)"), $("#byear").val(""), !1;
    if (null == n || 1900 > n || n > o) return $("#byear").css("background-color", "rgb(255, 192, 192)"), !1;
    if (null != e && null != t && null != n) {
        var c = e,
            d = t,
            r = n,
            u = 5,
            g = new Date;
        g.setFullYear(r, d - 1, c);
        var m = new Date,
            h = new Date;
        h.setFullYear(g.getFullYear() + u, d - 1, c), m - h > 0 || ($("#byear").val(""), $("#byear").css("background-color", "rgb(255, 192, 192)"))
    }
}

function Bdaycheck1() {
    var e = parseInt($("#bday1").val());
    return null == e || e > 31 ? ($("#bday1").css("background-color", "rgb(255, 192, 192)"), $("#bday1").val(""), !1) : void 0
}

function Bmonthcheck1() {
    var e = ($("#bmonth1").val(), parseInt($("#bmonth1").val()));
    return null == e || e > 12 ? ($("#bmonth1").css("background-color", "rgb(255, 192, 192)"), $("#bmonth1").val(""), !1) : void 0
}

function Byearcheck1() {
    var e = parseInt($("#bday1").val()),
        t = parseInt($("#bmonth1").val()),
        n = parseInt($("#byear1").val()),
        i = new Date,
        o = i.getFullYear(),
        a = $("#byear1").val().indexOf(1, "0");
    if (0 != a) return $("#byear1").css("background-color", "rgb(255, 192, 192)"), $("#byear1").val(""), !1;
    var l = $("#byear1").val().indexOf(9, "1");
    if ($("#byear1").val().length > 1 && 1 != l) return $("#byear1").css("background-color", "rgb(255, 192, 192)"), $("#byear1").val(""), !1;
    if (null == n || 1900 > n || n > o) return $("#byear1").css("background-color", "rgb(255, 192, 192)"), !1;
    if (null != e && null != t && null != n) {
        var s = e,
            c = t,
            d = n,
            r = 0,
            u = new Date;
        u.setFullYear(d, c - 1, s);
        var g = new Date,
            m = new Date;
        m.setFullYear(u.getFullYear() + r, c - 1, s), g - m > 0 || ($("#byear1").val(""), $("#byear1").css("background-color", "rgb(255, 192, 192)"))
    }
}

function CCNcheck() {
    var e = $('input[name="Radiobtn"]:checked').val(),
        t = $("#CreditCardNumber").val(),
        n = $("#CreditCardNumber");
    if ("Visa" == e) {
        if ("" != t) {
            var o = t.indexOf("4", "0");
            t.indexOf("", "12");
            0 != o ? n.css("background-color", "rgb(255, 192, 192)") : n.css("background-color", "white")
        }
    } else if ("Master Card" == e && "" != t) {
        var o = t.indexOf("5", "0");
        if (0 != o) n.css("background-color", "rgb(255, 192, 192)");
        else
            for (i = 1; i <= 5; i++) {
                var a = t.indexOf(i, "1");
                if (1 == a) return n.css("background-color", "white"), !0;
                n.css("background-color", "rgb(255, 192, 192)")
            }
    }
}

function numbersOnly(e, t) {
    var n = $("#" + e.getAttribute("id"));
    return n.css("background-color", "rgb(255, 255, 255)"), 0 === t.charCode || /\d/.test(String.fromCharCode(t.charCode))
}

function cehckname() {
    var e = $("#CreditCardName");
    return e.val().toLowerCase() != $("#NewAddress_FirstName").val().toLowerCase() ? (e.css("background-color", "rgb(255, 192, 192)"), !1) : void e.css("background-color", "white")
}

function Bdaycheck() {
    var e = parseInt($("#bday").val());
    return null == e || e > 31 ? ($("#bday").css("background-color", "rgb(255, 192, 192)"), $("#bday").val(""), !1) : void 0
}

function Bmonthcheck() {
    var e = ($("#bmonth").val(), parseInt($("#bmonth").val()));
    return null == e || e > 12 ? ($("#bmonth").css("background-color", "rgb(255, 192, 192)"), $("#bmonth").val(""), !1) : void 0
}

function Byearcheck() {
    var e = parseInt($("#bday").val()),
        t = parseInt($("#bmonth").val()),
        n = parseInt($("#byear").val()),
        i = new Date,
        o = i.getFullYear(),
        a = $("#byear").val().indexOf(1, "0");
    if (0 != a) return $("#byear").css("background-color", "rgb(255, 192, 192)"), $("#byear").val(""), !1;
    var l = $("#byear").val().indexOf(9, "1");
    if ($("#byear").val().length > 1 && 1 != l) return $("#byear").css("background-color", "rgb(255, 192, 192)"), $("#byear").val(""), !1;
    if (null == n || 1900 > n || n > o) return $("#byear").css("background-color", "rgb(255, 192, 192)"), !1;
    if (null != e && null != t && null != n) {
        var s = e,
            c = t,
            d = n,
            r = 18,
            u = new Date;
        u.setFullYear(d, c - 1, s);
        var g = new Date,
            m = new Date;
        m.setFullYear(u.getFullYear() + r, c - 1, s), g - m > 0 || ($("#byear").val(""), $("#byear").css("background-color", "rgb(255, 192, 192)"))
    }
}

function Bdaycheck1() {
    var e = parseInt($("#bday1").val());
    return null == e || e > 31 ? ($("#bday1").css("background-color", "rgb(255, 192, 192)"), $("#bday1").val(""), !1) : void 0
}

function Bmonthcheck1() {
    var e = ($("#bmonth1").val(), parseInt($("#bmonth1").val()));
    return null == e || e > 12 ? ($("#bmonth1").css("background-color", "rgb(255, 192, 192)"), $("#bmonth1").val(""), !1) : void 0
}

function Byearcheck1() {
    var e = parseInt($("#bday1").val()),
        t = parseInt($("#bmonth1").val()),
        n = parseInt($("#byear1").val()),
        i = new Date,
        o = i.getFullYear(),
        a = $("#byear1").val().indexOf(1, "0");
    if (0 != a) return $("#byear1").css("background-color", "rgb(255, 192, 192)"), $("#byear1").val(""), !1;
    var l = $("#byear1").val().indexOf(9, "1");
    if ($("#byear1").val().length > 1 && 1 != l) return $("#byear1").css("background-color", "rgb(255, 192, 192)"), $("#byear1").val(""), !1;
    if (null == n || 1900 > n || n > o) return $("#byear1").css("background-color", "rgb(255, 192, 192)"), !1;
    if (null != e && null != t && null != n) {
        var s = e,
            c = t,
            d = n,
            r = 18,
            u = new Date;
        u.setFullYear(d, c - 1, s);
        var g = new Date,
            m = new Date;
        m.setFullYear(u.getFullYear() + r, c - 1, s), g - m > 0 || ($("#byear1").val(""), $("#byear1").css("background-color", "rgb(255, 192, 192)"))
    }
}

function GetCreditCardInfo() {
    document.getElementById("CreditCard").style.display = "block"
}

function GetCreditCardInfo() {
    document.getElementById("CreditCard").style.display = "block"
}

function GetCreditCardInfohide() {
    document.getElementById("CreditCard").style.display = "none", $('input[name="Radiobtn"]').attr("checked", !1), document.getElementById("hiddenvalue").value = ""
}
var barNotificationTimeout;
$(document).ready(function () {
    $("#triggle,#close-content").click(function () {
        $("#right-content").toggle(), $(".overview ,.gallery").toggleClass("hide-blank")
    })
});
function ShowDivtre(value, current) {
	var id = "#" + current.id;
    if (value == "1") {
		$("#MobileVerficaation").css({ display: "block" });
        //document.getElementById('MobileVerficaation').style.display = 'block';
    } else {
		$("#MobileVerficaation").css({ display: "none" });
        //document.getElementById('MobileVerficaation').style.display = 'none';
    }
}
function SendMobileAPIcall(url) {

    var MobileNumber = document.getElementById('txtMobile').value;

    var str2 = MobileNumber;
    var str1 = "0";
   var res = str2;
    if (str2.substr(0, 1) != '0')
        res = str1.concat(str2);


    //var dirListURL = '/MobileSentMessage' + '/' + res;
    var valida = validator();
    $.ajax({
        url: url,
        dataType: 'json',
		data: {MobileNumber : res },
        async: true,
        success: function (dirs) {
            if (dirs == true && valida == true) {
                alert("Verification PIN is being sent to your mobile number");
                document.getElementById('textSendMobile').style.display = 'block';

            } else {
                alert("Please provide valid mobile number.");
                document.getElementById('textSendMobile').style.display = 'none';
            }


        },
        error: function (data) {
            alert("Please provide valid mobile number.");
        }
    });

}
function PinCodeVerify() {

    var PinCode = document.getElementById('txtPinCode').value;

    //var dirListURL = '/PinCodeVerif' + '/' + PinCode;
	var dirListURL = '/Checkout/PinCodeVerification' + '?PinCode=' + PinCode;
    $.ajax({
        url: dirListURL,
        dataType: 'json',
        async: true,
        success: function (dirs) {
            if (dirs == true) {
                document.getElementById('HiddenVerfi').value = "true";

                document.getElementById('ErrorNotVerfy').style.display = 'none';
                alert("Your number has been verified successfully! Please click on CONFIRM to process your order.");

            } else {
                document.getElementById('ErrorNotVerfy').style.display = 'block';

                document.getElementById('HiddenVerfi').value = "false";

            }


        },
        error: function (data) {
            alert("Please enter a valid PIN Code");
        }
    });

}
function validator() {

    var textBox = document.getElementById("txtMobile");
    var textLength = textBox.value.length;
    if (textLength >= 10) {
        //red

        return true;
    } else {
        //green

        return false;
    }
}
function NotVerified() {

    document.getElementById('HiddenVerfi').value = "false";
    var dirListURL = '/NotVerified';
    $.ajax({
        url: dirListURL,
        dataType: 'json',
        async: true,

    });

}