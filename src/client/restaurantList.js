import $ from './common';
import '../../style/restaurantList.css';
import '@chenfengyuan/datepicker';
import '../../node_modules/@chenfengyuan/datepicker/dist/datepicker.js';
import '../../node_modules/@chenfengyuan/datepicker/dist/datepicker.css';
import moment from 'moment';

const arrowSpan = '&nbsp <span class="caret"></span>'
let cuisine = '';
const restaurants = [];

// get list of restaurants from server 


function searchRestaurant() {
    const data = {
        cuisine,
    };
    $.post('http://localhost/EIE4432-WEB/src/server/api/getRestaurantList.php',data, (data, status, xhr)=> {
        if(status === 'success') {
            const restaurants = data.restaurants;
            $('#restaurant-grid').empty();
            if (restaurants.length === 0) {
                $('#restaurant-grid').append('<h3 class="text-center">No restaurant found</h3>');
                return;
            }
            restaurants.forEach(restaurant => {
                const costNTimeString = restaurant.average_cost + ' ' + restaurant.start_time + ' - ' + restaurant.end_time;

                $('#restaurant-grid').append(`
                    <div class="grid-item col-xs-12 col-sm-6 col-md-3 col-lg-2" style="text-align:center" data-restaurant_id="${restaurant.restaurant_id}">
                        <div style="display:inline-block;position:relative">
                            <img class="img-responsive grid-item-img" id="img-${restaurant.restaurant_id}" src='../../public/no_image.jpg'} alt=${restaurant.restaurant_id} data-restaurant_id="${restaurant.restaurant_id}"/>
                        </div>
                        <p class="restaurant-info restaurant-name">${restaurant.restaurant}</p>
                        <p class="restaurant-info restaurant-cuisine">${restaurant.cuisine}</p>
                        <p class="restaurant-info restaurant-cost-and-time">${costNTimeString}</p>
                        <div class="hover-cover" data-restaurant_id="${restaurant.restaurant_id}">
                            <h1 style="color:white; margin: 35px auto">Order</h1>
                        </div>
                    </div>
                `);
                
            });

            $('.hover-cover').click((e)=> {
                const tgt = e.currentTarget;
                const restaurantId = $(tgt).data('restaurant_id');

                let restaurant = null;
                restaurants.forEach(rt => {
                    if(rt.restaurant_id === restaurantId) {
                        restaurant = rt;
                    }
                });
                $('#restaurant-address-label').text(restaurant.address);
                $('#restaurant-phone-label').text(restaurant.phone);
                $('#restaurant-website-label').text(restaurant.website);
                $('#restaurant-cuisine-label').text(restaurant.cuisine);
                $('#restaurant-name-label').text(restaurant.restaurant);
                const startTime = moment(restaurant.start_time, 'HH:mm');
                const endTime = moment(restaurant.end_time, 'HH:mm');

                $('#time-selection-list').empty();
                if (restaurants.length === 0) {
                    $('#time-selection-list').append('<h3 class="text-center">No time available</h3>');
                    return;
                }

                while(startTime.isBefore(endTime)) {
                    const timeString = startTime.format('HH:mm');
                    $('#time-selection-list').append(`
                        <li><a class="dropdown-selection2" href="#" value="${timeString}"> ${timeString} </a></li>
                    `)
                    startTime.add(1, 'hours');
                }

                $('.dropdown-selection2').off('click');

                $('.dropdown-selection2').click((e) => {
                    e.preventDefault();
                    const tgt = e.currentTarget;
                    const timeDisplay = $(tgt).text();

                    $('#dropdownMenu2').html(timeDisplay + arrowSpan);
                    $('#dropdownMenu2').val(timeDisplay);
                    
                });

                $('#confirm-order-button').off('click');
                $('#confirm-order-button').click((e)=> {
                    e.preventDefault();
                    const date = $('#date-picker').datepicker('getDate', true);
                    const today = moment();
                    if (moment(date).isBefore(today))  {
                        alert('Please select a valid date');
                        return;
                    }
                    const time = $('#dropdownMenu2').val();
                    if(!time) {
                        alert('Please select a valid time');
                        return;
                    }
                    const noOfPeople = $('#no-of-people').val();
                    const customerName = $('#order-name').val();
                    if(!customerName) {
                        alert ('Please input a valid name of coming customer');
                        return;
                    }
                    const phoneNumber = $('#phone-number').val();
                    if(!phoneNumber) {
                        alert ('Please input a valid contact phone number');
                        return;
                    }

                    const dataToSubmit = {
                        date,
                        time,
                        noOfPeople,
                        customerName,
                        phoneNumber,
                    }
                    console.log(dataToSubmit);
                    $.post('http://localhost/EIE4432-WEB/src/server/api/getRestaurantList   .php', dataToSubmit, (data, status) => {
                        
                    if (status === 'success') {
                            $('#order-result-label').text = " Order placed, please wait for confirmation from the restaurant";
                        } else {
                            $('#order-result-label').text = data.error? data.error :" Unexpected error";
                        }
                    $('#order-result-holder').show();
                    $('#order-body-holder').hide();
                    }, 'json').fail(()=> {
                        $('#order-result-label').text ="Unexpected error";

                        $('#order-result-holder').show();
                        $('#order-body-holder').hide();

                    });



                });

                $('#order-body-holder').show();
                $('#make-order-holder').show();
            });
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
    //init calendar 

    $('[data-toggle="datepicker"]').datepicker();
    const today_string = moment().format('dd/MM/YYYY');

    $('[data-toggle="datepicker"]').datepicker('setDate',today_string);
    $('[data-toggle="datepicker"]').on('pick.datepicker', function (e) {
        if (e.date < new Date()) {
        e.preventDefault(); // Prevent to pick the date
        }
    });
        

    // set grid-item click function 
    
    $('.dropdown-selection').click((e) => {
        const tgt = e.currentTarget;
        cuisine = $(tgt).attr('value');
        const cuisineDisplay = $(tgt).text();
        $('#dropdownMenu1').html(cuisineDisplay + arrowSpan);
    });

    
    $('#searchBtn').click((e)=> {
        e.preventDefault();
        searchRestaurant();
    })

    // set function for close button in order popover block
    $('#close-button').click((e) => {
        $('#make-order-holder').hide();
        $('#order-body-holder').hide();
    });

    $('#close-button2').click((e) => {
        $('#make-order-holder').hide();
        $('#order-result-holder').hide();
    });

});