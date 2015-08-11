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


    var photoset = "72157657092571525";

    $.getJSON("https://api.flickr.com/services/rest/?api_key=b4bbdbd564f3362675aaf802be6ca80b&method=flickr.photosets.getPhotos&user_id=134645738%40N07&format=json&photoset_id=" + photoset + "&extras=url_sq%2Curl_t%2Curl_s%2Curl_m%2Curl_o&nojsoncallback=1",
        function(data){
            //if the image has a location, build an html snippet containing the data
            if(data.stat != 'fail') {
                console.log(data);

                var photos = [];

                $.each(data.photoset.photo, function (k,val) {
                    var photo = '' +
                        '<a href="' + val.url_o +'" data-gallery><img src="' + val.url_o +'" width="144" /></a>';
                    photos.push(photo);
                });

                $('#links').append(photos);

            } else {
                console.log('fail');
            }

        });



    console.log("Author: Jaison Brooks :)");

});