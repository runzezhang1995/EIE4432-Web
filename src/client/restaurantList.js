import $ from './common';
import '../../style/restaurantList.css';

const arrowSpan = '&nbsp <span class="caret"></span>'
let cuisine = '';



function searchRestaurant(params) {
    const data = {
        name: '1234'
    };
    $.post('http://localhost/EIE4432-WEB/src/server/api/getRestaurantList.php',data, (data, status, xhr)=> {
        if(status === 'success') {
            const restaurants = data.restaurants;
            $('.grid').empty();
            if (restaurants.length === 0) {
                $('.grid').append('<h3 class="text-center">No restaurant found</h3>');
                return;
            }
            restaurants.forEach(restaurant => {
                let cuisinesString = '';
                restaurant.cuisines.forEach(cuisine => {
                    cuisinesString += (cuisine+' · ');
                });
                cuisinesString = cuisinesString.substr(0,cuisinesString.length-2)
                const costNTimeString = restaurant.average_cost + ' ' + restaurant.start_time + ' - ' + restaurant.end_time;

                $('.grid').append(`
                    <div class="grid-item col-xs-12 col-sm-6 col-md-3 col-lg-2" style="text-align:center" data-restaurant_id="${restaurant.restaurant_id}">
                        <div style="display:inline-block;position:relative">
                            <img class="img-responsive grid-item-img" id="img-${restaurant.restaurant_id}" src='../../public/no_image.jpg'} alt=${restaurant.restaurant_id} data-restaurant_id="${restaurant.restaurant_id}"/>
                        </div>
                        <p class="restaurant-info restaurant-name">${restaurant.restaurant}</p>
                        <p class="restaurant-info restaurant-cuisine">${cuisinesString}</p>
                        <p class="restaurant-info restaurant-cost-and-time">${costNTimeString}</p>
                        <div class="hover-cover" data-restaurant_id="${restaurant.restaurant_id}">
                            <h1 style="color:white; margin: 35px auto">Order</h1>
                        </div>
                    </div>
                `);
                
            });

            $('.hover-cover').click((e)=> {
                console.log(e.currentTarget);
                const tgt = e.currentTarget;
                const restaurantId = $(tgt).data('restaurant_id');
                console.log(restaurantId);
            })

            $('.hover-cover').popover({
                placement:'bottom',
                title:'Order',
                html:true,
                content: '<h1>1234</h1>'
            });


            console.log(restaurants);

        } else {
            console.log(status);
            console.log(data);
            console.log(xhr);
            alert('fail to load restaurant information');

        } 
    
    }, 'json').fail(() => {
        alert('fail to load restaurant information');

    });
    




}


()=> {

}


$(() => {
    console.log('ready');
    searchRestaurant();

    $('.dropdown-selection').click((e) => {
        const tgt = e.currentTarget;
        console.log(tgt);
        cuisine = $(tgt).attr('value');
        const cuisineDisplay = $(tgt).text();
        $('#dropdownMenu1').html(cuisineDisplay + arrowSpan);
    });


});