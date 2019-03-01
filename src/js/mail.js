///*----------------- Product Pre-Order - submission js ----------------*/
//$(document).ready(function (e) {
//    var productForm = $(".choose-form");
//    productForm.on("submit", function (e) {
//        e.preventDefault();
//        var productColor = $("input[name=color]").val(),
//            productQuantity = $("input.quanity").val(),
//            productOsl = $("select.os1").val(),
//            productFName = $("input.fname").val(),
//            productLName = $("input.lname").val(),
//            productEmail = $("input.email").val(),
//            productAddressOne = $("input.address1").val(),
//            productAddressTwo = $("input.address2").val(),
//            productState = $("input.state").val(),
//            productZip = $("input.zip").val(),
//            productCountry = $("select.country").val();
//        if (productFName !== '' && productLName !== '' && productEmail !== '' && productAddressOne !== '' && productAddressTwo !== '' && productState !== '' && productZip !== '' && productCountry !== '') {
//            productForm.find(".form-element").each(function () {
//                $(this).css("border", "1px solid #ededed");
//            });
//            $.ajax({
//                type: "POST",
//                url: "./contact/pre-order.php",
//                data: {
//                    "formColor": productColor,
//                    "formQuantity": productQuantity,
//                    'formOs1': productOsl,
//                    'formFName': productFName,
//                    'formLName': productLName,
//                    'formEmail': productEmail,
//                    'formAddOne': productAddressOne,
//                    'formAddTwo': productAddressTwo,
//                    'formState': productState,
//                    'formZip': productZip,
//                    'formCountry': productCountry
//                },
//                dataType: "json",
//                success: function (data) {
//                    $(".submit-progress")
//                        .append("<i class='fa fa-refresh' aria-hidden='true'></i>")
//                        .hide()
//                        .fadeIn("slow", function () {
//                            $(".submit-progress").hide();
//                        });
//                    if (data.message_status == 'ok') {
//                        function showUp() {
//                            $(".submit-message").text(data.content).fadeOut(3000);
//			    
//                        }
//                    } else {
//                        function showUp() {
//                            $(".submit-message").text(data.content).fadeOut(3000);
//                        }
//                    }
//                    setTimeout(showUp, 500);
//		    $(".choose-form")[0].reset();
//                }
//            });
//        } else {
//            productForm.find(".form-element").each(function () {
//                if ($(this).val() === "") {
//                    $(this).css("border-color", "red");
//                } else {
//                    $(this).css("border", "1px solid #ededed");
//                }
//            });
//        }
//    });
//});
//      