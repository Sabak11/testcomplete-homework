var common=require("Unit3")

  function printName(){

     var connection = common.getConnection();
     connection.Execute("INSERT INTO orders (customerName, street, city,state) values('luka','rustaveli str','telavi','kakheti')")

    }