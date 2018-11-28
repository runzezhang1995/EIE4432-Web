import $ from './common';
import '../../style/restaurantList.css';
import '@chenfengyuan/datepicker';
import '../../node_modules/@chenfengyuan/datepicker/dist/datepicker.js';
import '../../node_modules/@chenfengyuan/datepicker/dist/datepicker.css';
import moment from 'moment';

const arrowSpan = '&nbsp <span class="caret"></span>'
let cuisine = '';
let restaurants = [];
let uid = '';


// get list of restaurants from server 


function searchRestaurant() {
    const data = {
        'cuisine':cuisine,
        'keyword':$('#search_input').val()
    };
    $.post('/EIE4432-WEB/src/server/api/getRestaurant.php',data, (data, status, xhr)=> {
        console.log(data);
        if(status === 'success') {
            restaurants = data.restaurants;
            $('#restaurant-grid').empty();
            if (!restaurants || restaurants.length === 0) {
                $('#restaurant-grid').append('<h3 class="text-center">No restaurant found</h3>');
                return;
            }
            restaurants.forEach(restaurant => {
                if (restaurant.restaurant === null) {
                    
                } else {
                    const costNTimeString = restaurant.average_cost + ' ' +
                        moment(restaurant.start,'HH:mm:ss').format('HH:mm') + ' - ' + 
                        moment(restaurant.close,'HH:mm:ss').format('HH:mm') ;

                    $('#restaurant-grid').append(`
                        <div class="grid-item  col-md-3 col-lg-2" style="text-align:center;min-height:200px" data-restaurant_id="${restaurant.restaurant_id}">
                            <div style="display:inline-block;position:relative">
                                <img class="img-responsive grid-item-img" id="img-${restaurant.restaurant_id}" src='../../public/no_image.jpg'} alt=${restaurant.restaurant_id} data-restaurant_id="${restaurant.restaurant_id}"/>
                            </div>
                            <p class="restaurant-info restaurant-name">${restaurant.restaurant}</p>
                            <p class="restaurant-info restaurant-cuisine">${restaurant.cuisines}</p>
                            <p class="restaurant-info restaurant-cost-and-time">${costNTimeString}</p>
                            <div class="hover-cover" data-restaurant_id="${restaurant.restaurant_id}">
                                <h1 style="color:white; margin: 35px auto">Order</h1>
                            </div>
                        </div>
                    `);
                    
                }
            });

            $('.hover-cover').click((e)=> {
                const tgt = e.currentTarget;
                const restaurantId = $(tgt).data('restaurant_id');
                console.log(restaurantId);

                let restaurant = null;
                restaurants.forEach(rt => {
                    if(rt.restaurant_id == restaurantId) {
                        restaurant = rt;
                    }
                });

                console.log(restaurant);
                $('#restaurant-address-label').text(restaurant.address);
                $('#restaurant-phone-label').text(restaurant.phone);
                $('#restaurant-website-label').text(restaurant.website);
                $('#restaurant-cuisine-label').text(restaurant.cuisines);
                $('#restaurant-name-label').text(restaurant.restaurant);
                const startTime = moment(restaurant.start, 'HH:mm:ss');
                const endTime = moment(restaurant.close, 'HH:mm:ss');

                $('#time-selection-list').empty();
                
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
                    const dateString = moment(date, 'MM/DD/YYYY');
                    console.log(dateString);


                    const today = moment();
                    
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
                        "user_id": uid,
                        "restaurant_id": restaurantId,
                        "numberofpeople": noOfPeople,
                        "orderdate":moment(date, 'MM/DD/YYYY').format('YYYY-MM-DD'),
                        "orderperiod": time,
                        "ordername":customerName,
                        "Ophone": phoneNumber,
                        "ordertime": moment().format(),
                    }
                    console.log(dataToSubmit);
                    $.post('/EIE4432-WEB/src/server/api/Order.php', dataToSubmit, (data, status) => {
                        console.log(data);
                        console.log(status);
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
    uid = $('#uid').val();
    searchRestaurant();
    //init calendar 

    $('[data-toggle="datepicker"]').datepicker();
    const today_string = moment().format('MM/DD/YYYY');

    $('[data-toggle="datepicker"]').datepicker('setDate',today_string);
    $('[data-toggle="datepicker"]').on('pick.datepicker', function (e) {
        if (e.date < new Date()) {
        e.preventDefault(); // Prevent to pick the date
        }
    });
    // set grid-item click function 
    
    $('.dropdown-selection').click((e) => {
        const tgt = e.currentTarget;
        console.log(tgt);
        cuisine =cuisine =$(tgt).text();
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