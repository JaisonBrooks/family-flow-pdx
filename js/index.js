$(function () {
    var products = $('#products_list');
    $.getJSON("json/products.json", function(data) {

        var hoops = [];
        $.each(data.products.hoops, function(index, item) {
            var html = '' +
                '<div class="col-sm-4"><div class="product-item">'+
                '<div class="product-item-image">'+
                '<img src="' + item.photo +'" class="img-responsive center-cropped"/>'+
                '</div>'+
                '<div class="product-item-body">'+
                '<h3 class="text-left product-item-title">' + item.title + '</h3>'+
                '<p class="text-left product-item-subtitle">' + item.description + '</p>' +
                    '<span class="product-dollar-amount text-right color-green">' + item.price + '</span>' +
                '<a href="#" class="btn btn-outlined btn-sm btn-pink">Buy Now</a>'+
                '</div></div></div>';
            index ++; // increment index
            if ((index % 3) == 0) {
                // add clear fix
                html+= '<div class="clearfix visible-sm-block visible-lg-block"></div>';
            }
            hoops.push(html);
        });
        $(products).html(hoops);
    });

    var dir = "img/photos/";
    var fileextension = ".jpg";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //Lsit all png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");

                var html = '' +
                    '<a href="'  + filename +
                    '" title="" data-gallery>' +
                    '<img src="'  + filename + '" width="144" alt=""/>' +
                    '</a>';

                $('#links').append(html);
            });
        }
    });

    console.log("Author: Jaison Brooks :)");

});