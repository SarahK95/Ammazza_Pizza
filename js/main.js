// var sizePrice;
// var toppingPrice;
// var crustPrice;
// var totalPrice;



$(document).ready(function(){

    $("#order").on('click' , function(){

        var pizzaType = $(".ptype").find(":selected").val();
        var pizzaSize = $(".psize").find(":selected").val();
        var pizzaTop = $(".ptop").find(":selected").val();
        var pizzaCrust = $(".pcrust").find(":selected").val();
        var total = parseInt(pizzaSize)+ parseInt(pizzaTop) + parseInt(pizzaCrust);
        var order = 1;
        var priceTotal = 0;

        $("#type").html($(".ptype").find(":selected").text()+"-"+pizzaType); 
        $("#size").html($(".psize").find(":selected").text()+"-"+pizzaSize);  //get text as input (eg.medium)
        $("#toppings").html($(".ptop").find(":selected").text()+"-"+pizzaTop);
        $("#crust").html($(".pcrust").find(":selected").text()+"-"+pizzaCrust);
        $("#total").html(total);

      
function pizza (type,size,toppings,crust,total,orderNo){

    this.type = type;
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.total = total;
    this.orderNo = orderNo;

}
        


        $("#add").on('click', function(){
            var pizzaType = $(".ptype").find(":selected").val();
            var pizzaSize = $(".psize").find(":selected").val();
            var pizzaTop = $(".ptop").find(":selected").val();
            var pizzaCrust = $(".pcrust").find(":selected").val();
            var total = parseInt(pizzaSize)+ parseInt(pizzaTop) + parseInt(pizzaCrust);
             order = order + 1;
             priceTotal = priceTotal + total;


            var newPizza = new pizza(pizzaType, pizzaSize, pizzaTop, pizzaCrust, total, order);
           

            var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".ptype").find(":selected").text()+" - " + newPizza.type + '</th><td id="size">' + $(".psize").find(":selected").text()+" - " + newPizza.size + '</td><td id="toopings">' +$(".ptop").find(":selected").text()+ " - " + newPizza.toppings + '</td><td id="crust">'+ $(".pcrust").find(":selected").text()+" - " + newPizza.crust+ '</td><td id="total">' + newPizza.total + '</td></tr>'
            $("#pizza").append(newRow)


        })

        



        


            
    })

})
