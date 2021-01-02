function OnSelection(e) {
    document.getElementById("loadingwait").style.display = "block", $("input[name=EnteredQuantity]").val("1"), $.ajax({
        cache: !1,
        url: "/Personalized/PillowCushionProductSelections",
        data: {
            Id: e
        },
        type: "post",
        success: function (e) {
            document.getElementById("MainSelection").innerHTML = "", document.getElementById("MainSelection").innerHTML = e.MainSelection, document.getElementById("MainImagesandAttribute").innerHTML = "", document.getElementById("MainImagesandAttribute").innerHTML = e.Attributeandimages, document.getElementById("addToCartdiv").innerHTML = "", document.getElementById("addToCartdiv").innerHTML = e.AddTocart, firsttimesinglecushinselect(), document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function GetaddonsofSelectedProduct(e) {
    document.getElementById("loadingwait").style.display = "block", $("input[name=EnteredQuantity]").val("1"), 1 == $("#rdoCusion")[0].checked ? $(".SingleCushion").trigger("click") : 1 == $("#rdoPillow")[0].checked && $(".SinglePillow").trigger("click"), $.ajax({
        cache: !1,
        url: "/Personalized/GetAddonsOfProductsbySelected",
        data: {
            Id: e
        },
        type: "post",
        success: function (e) {
            document.getElementById("AddonView").innerHTML = "", document.getElementById("AddonView").innerHTML = e.ProductAttribute, document.getElementById("ProductInfo").innerHTML = "", document.getElementById("ProductInfo").innerHTML = e.Productonfo, document.getElementById("addToCartdiv").innerHTML = "", document.getElementById("addToCartdiv").innerHTML = e.AddTocart, $("#spanBaseColor").length > 0 && ($("#spanBaseColor")[0].innerHTML = "", $("#spanBaseColor")[0].innerHTML = e.Sku), firsttimesinglecushinselect(), document.getElementById("loadingwait").style.display = "none"
        }
    })
}

function skuchangeAttribute(e) {
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

function firsttimesinglecushinselect() {
    1 == $("#rdoCusion")[0].checked ? $(".SingleCushion").trigger("click") : 1 == $("#rdoPillow")[0].checked && $(".SinglePillow").trigger("click")
}

function IsSingleCushionClick(e) {
    val = !1, e.checked && (val = !0), $.ajax({
        cache: !1,
        url: "/ShoppingCart/IsSingleCushionclick",
        data: {
            value: val
        },
        type: "post",
        success: function (e) { }
    })
}

function IsHisHerCushionClick(e) {
    val = !1, e.checked && (val = !0), $.ajax({
        cache: !1,
        url: "/ShoppingCart/IsHisHerCushionclick",
        data: {
            value: val
        },
        type: "post",
        success: function (e) { }
    })
}

function IsSinglePillowclick(e) {
    val = !1, e.checked && (val = !0), $.ajax({
        cache: !1,
        url: "/ShoppingCart/IsSinglePillowclick",
        data: {
            value: val
        },
        type: "post",
        success: function (e) { }
    })
}

function IsHisHerPillowcclick(e) {
    val = !1, e.checked && (val = !0), $.ajax({
        cache: !1,
        url: "/ShoppingCart/IsHisHerPillowcclick",
        data: {
            value: val
        },
        type: "post",
        success: function (e) { }
    })
}


function IsHisHerSamePillowcclick(e) {
    val = !1, e.checked && (val = !0), $.ajax({
        cache: !1,
        url: "/ShoppingCart/IsHisHerSamePillowcclick",
        data: {
            value: val
        },
        type: "post",
        success: function (e) { }
    })
}