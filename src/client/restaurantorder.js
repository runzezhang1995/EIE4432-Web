import $ from './common';
import '../../style/restaurantorder.css';
const arrowSpan = '&nbsp <span class="caret"></span>'
let cuisine = '';
let restaurantId = '';

function searchOrder(params) {
    const data = {
        "restaurant_id": restaurantId
    };
    $.post('/EIE4432-WEB/src/server/api/ReceivedOrder.php',data, (data, status, xhr)=> {
        console.log(data);
        if(status === 'success') {
            const orders = data.orders;
            $('.infoblock').empty();
            if (!orders||orders.length === 0) {
                $('.infoblock').append('<h3 class="text-center">No order found</h3>');
                return;
            }
            orders.forEach(order => {
                console.log(order);
                var disabledtrigger = true;
                if (order.Orderstatus=="waiting"){
                    
                }else{
                    disabledtrigger="disabled";
                };

                $('.infoblock').append(`
                <div class="infoblock-item " data-order_id="${order.order_id}">
                    <div class="infoloop infoblock-ordertime">
                        <p class="order-info ">Order Time</p>
                        <p class="order-info ">${order.Ordertime}</p>
                    </div>
                    <div class="infoloop infoblock-inner-text">
                        <p class="order-info ">Customer Name: ${order.Ordername}</p>
                        <p class="order-info ">Order Date: ${order.Orderdate}</p>
                        <p class="order-info ">Order Period: ${order.Orderperiods}</p>
                        <p class="order-info ">Number of Customers: ${order.Ordernumber}</p>
                        <p class="order-info ">Status: ${order.Orderstatus}</p>
                    </div>
                    <div class="infoloop infoblock-button">
                        <button class="btn btn-success acceptbtn" data-order_id="${order.order_id}" value="accept" ${disabledtrigger}>
                            <span class="glyphicon glyphicon-ok" aria-hidden="true">&nbsp</span>Accept
                        </button>
                        <br/>
                        <button class="btn btn-danger rejectbtn" data-order_id="${order.order_id}" value="reject" ${disabledtrigger}>
                            <span class="glyphicon glyphicon-remove" aria-hidden="true">&nbsp</span>Reject
                        </button>
                    </div>
                </div>
            `);
                
            });

            $(".rejectbtn, .acceptbtn").click(decideOrder);

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

    const data = {
        'restaurant_id':restaurantId,
        'order_id':orderid,
        'status':orderstatus
    };
    console.log(data);
    if(orderstatus =="accept"){
        $.post('/EIE4432-WEB/src/server/api/HandleOrder.php',data,(data,status)=>{
            if(status==="success"){
                console.log("success");
                $(`[data-order_id="${orderid}"].acceptbtn`).attr('disabled',true);
                $(`[data-order_id="${orderid}"].rejectbtn`).hide();
                alert("Accept the order successfully !");
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
        $.post('/EIE4432-WEB/src/server/api/HandleOrder.php',data,(data,status)=>{
            if(status==="success"){

                
                console.log("success");
                $(`[data-order_id="${orderid}"].rejectbtn`).attr('disabled',true);
                $(`[data-order_id="${orderid}"].acceptbtn`).hide();

                alert("Reject the order successfully !");


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

    $('#logout-btn').click(()=> {
        $.cookie('uid', null);
        $.cookie('rid', null);
        $.cookie('uname', null);
        $.cookie('rname', null);
        window.location.href = "/EIE4432-WEB/src/server/login.php";
    });
    
    restaurantId = $('#rid').val();
    searchOrder();
});
