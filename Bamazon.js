var mySQL = require("mysql");
var inquirer = require("inquirer");

// create inquirer app
//var app = inquirer ();
// create the connection information for the sql database
var connection = mySQL.createConnection({
    host: "localhost",
  
   // Your port; if not 3306
   port: 3306,

   // Your username
   user: "root",
 
   // Your password
   password: "",
   database: "bamazon"
 });
 

 // connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    storeOpen();
    console.log("server connected");
  });
  
  function storeOpen (err, result){
    inquirer
    .prompt ({
      name: "storeOpen",
      type: "rawlist",
      message: "Would you like to purchase an item?",
      choices: ["YES", "NO"]
    })
  
  .then(function(answer) {
    switch (answer.storeOpen) {
      case "YES":
        merchandice();
        
        break;

      case "NO":
        console.log('Maybe another time......');
        break;

    }

    });
}

 //intial database information with all available items
 function merchandice (err, results) {
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err; 
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
           
        //console.log(result);
        console.log(result);
      }
    
      productId();
      
    });
    
  };

//function for buying products

function productId () {
 //prompts for purchase 
    inquirer
    .prompt ([
    {
    name: "purchase",
    type: "input",
    message: "What is the item number of the product you would like to purchase?"
    },
    { 
      name: "stockQuanity",
      type: "input",
      message: "How many products would you like to purchase?"
      }     
    ])
  
    .then(function(answer, amount) {
     
      var answer_one = parseInt(answer.purchase);

      var amount = parseInt(answer.stockQuanity);
      
      //console.log(amount);
      // query showing all products matching item_id 
      connection.query("SELECT * FROM products WHERE ?", {item_id: answer_one},   function(err, results) {
        if (err) throw err; 
        //console.log(answer);
       //console.log(amount);
        console.log("Your item has been added to the cart: " +
          "Item Id:" +
          results[0].item_id +
          "|| Product:" +
          results[0].product_name +
          //"|| Department:" +
          //results[0].department_name +
          "|| Price:" +
          results[0].price 
          //"|| Stock Amount:" +
          //results[0].stock_quanity
        )
       var cost = results[0].price;
        var name = results[0].item_id;
        var stock =  results[0].stock_quanity;
        var price = cost.toFixed(2);        
        var stock_amt = parseInt(stock);
        //console.log(price);
        //console.log((parseInt(name)));
       
        //console.log(stock);
        //console.log(itemName);
        //console.log(stock_amt);
          //if statement showing cost based on quanity input and price
        if(stock_amt >= amount) {
          //var stockUpdate = (results[0].stock_quanity)
          var finalCost = ((amount * price));
         
          console.log("Your total today is: $" + finalCost.toFixed(2) );
          //console.log(amount);
          //console.log(stock_amt);
          var final_quanity = ((stock_amt - amount));
        //console.log(final_quanity);
        connection.query(
          "UPDATE products SET ? WHERE ?", 
          [
            {
              stock_quanity: final_quanity
            },
            {
              stock_quanity: stock_amt
            }
          ],
          
         
        
        function(err, results) {
          if (err) throw err; 
        //console.log(results.affectedRows);
        //console.log(affected.result);
        //console.log(final_quanity)
       // var finalUpdate = final_quanity;
          //console.log("what" + finalUpdate);
        
        })
          connection.query( "SELECT * FROM products WHERE ?", {item_id: answer_one} 
          ,  function(err, results) {
            if (err) throw err; 
     //console.log(results);
      for (var i = 0; i < results.length; i++) {
        //var result = results[i];
           
        //console.log(result);
        //console.log(result);
        console.log( "Thank you, for your order of !!!!" +
        "Item Id:" +
        results[0].item_id +
        "|| Product:" +
        results[0].product_name +
        "|| Department:" +
        results[0].department_name+
        "|| Price:" +
        results[0].price +
        "|| Stock Amount:" +
        results[0].stock_quanity
        )

        //console.log(results[0].stock_quanity);
       
      
       
       
      };
    })
  }
    else {
            
      console.log( "Insufficient quantity!");
      
  }
    })
    //readProducts();
 
      });
     
      
    };
    
   /* function readProducts() {
      console.log("Selecting all products...\n");
      connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
      });
    }*/
    
    //connection.end();
    //merchandice();
  
    //merchandice();
        

       
    
   
    
    
     

    
      
      

        
        
      
     
  
  

    