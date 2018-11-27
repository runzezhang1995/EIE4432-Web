import $ from './common';
import '../../style/restaurantorder.css';
const arrowSpan = '&nbsp <span class="caret"></span>'
let cuisine = '';
function searchOrder(params) {
    const data = {
        name: '1234'
    };
    $.post('http://localhost/EIE4432-WEB/src/server/api/getRestaurantOrderList.php',data, (data, status, xhr)=> {
        console.log(data);
        if(status === 'success') {
            const orders = data.orders;
            $('.infoblock').empty();
            if (orders.length === 0) {
                $('.infoblock').append('<h3 class="text-center">No order found</h3>');
                return;
            }
            orders.forEach(order => {
                console.log(order);
                // let cuisinesString = '';
                // order.cuisines.forEach(cuisine => {
                //     cuisinesString += (cuisine+' · ');
                // });
                // cuisinesString = cuisinesString.substr(0,cuisinesString.length-2)
                // const costNTimeString = order.average_cost + ' ' + order.start_time + ' - ' + order.end_time;

                $('.infoblock').append(`
                    <div class="infoblock-item " data-order_id="${order.order_id}">
                        <div class="infoloop infoblock-ordertime">
                            <p class="order-info ">Order Time</p>
                            <p class="order-info ">${order.order_time}</p>
                        </div>
                        <div class="infoloop infoblock-inner-text">
                            <p class="order-info ">Customer Name: ${order.order_name}</p>
                            <p class="order-info ">Order Date: ${order.order_date}</p>
                            <p class="order-info ">Order Period: ${order.order_period}</p>
                            <p class="order-info ">Number of Customers: ${order.numberofpeople}</p>
                        </div>
                        <div class="infoloop infoblock-button">
                            <button class="btn btn-success acceptbtn" data-order_id="${order.order_id}" value="accept">
                                <span class="glyphicon glyphicon-ok" aria-hidden="true">&nbsp</span>Accept
                            </button>
                            <br/>
                            <button class="btn btn-danger rejectbtn" data-order_id="${order.order_id}" value="reject">
                                <span class="glyphicon glyphicon-remove" aria-hidden="true">&nbsp</span>Reject
                            </button>
                        </div>
                    </div>
                `);
                
            });

            $("button").click(decideOrder);
            console.log(orders);

        } else {
            console.log(status);
            console.log(data);
            console.log(xhr);
            alert('fail to load order information');

        } 
    
    }, 'json').fail(() => {
        alert('fail to load order information');

    });
    

function decideOrder(e){
    const tgt = e.currentTarget;
    const orderid = $(tgt).data("order_id");
    const orderstatus =$(tgt).val();
    console.log(orderstatus);
    if(orderstatus =="accept"){
        $(`[data-order_id="${orderid}"].acceptbtn`).attr('disabled',true);
        $(`[data-order_id="${orderid}"].rejectbtn`).hide();
        $.post('',orderid,(data,status)=>{
            if(status==="success"){
                console.log("success");
                $(`[data-order_id="${order.order_id}"].acceptbtn`).attr('disabled',true);
                $(`[data-order_id="${order.order_id}"].rejectbtn`).hide();
            } else {
                console.log(status);
                console.log(data);
                console.log(xhr);
                alert('fail to load restaurant information');
            }
        },"json").fail(()=>{
            // alert('fail to load restaurant information')
        })
    }else if(orderstatus =="reject"){
        $(`[data-order_id="${orderid}"].rejectbtn`).attr('disabled',true);
        $(`[data-order_id="${orderid}"].acceptbtn`).hide();
        $.post('',orderid,(data,status)=>{
            if(status==="success"){

                
                console.log("success");
                $(`[data-order_id="${order.order_id}"].rejectbtn`).attr('disabled',true);
                $(`[data-order_id="${order.order_id}"].acceptbtn`).hide();




            } else {
                console.log(status);
                console.log(data);
                console.log(xhr);
                alert('fail to load restaurant information');
            }
        },"json").fail(()=>{
            // alert('fail to load restaurant information')
        })
    };
}


}

$(() => {
    console.log('ready');
    console.log('load css');
    searchOrder();
});
