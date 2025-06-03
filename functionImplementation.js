function functionImplemented(){
   
    
    const productArr = [

        { name: "Laptop", category: "Electronics", price: 1200 },
      
        { name: "Phone", category: "Electronics", price: 800 },
      
        { name: "Shoes", category: "Fashion", price: 100 }
      
        
      
      ];
      
      

    const filteredPrice=productArr.filter(function(products){
        console.log(`The name:${products.name}      category:${products.category}     price:${products.price}`);
            return products.price>=500;
         });
         console.log(filteredPrice);

    const filteredProduct=filteredPrice.map(function(products){
        const discount=products.price*0.8;
        console.log(`Discount applied to  ${products.name} are: +${discount}`);
        return {name:products.name, category:products.category, price:products.price, discountedPrice:discount};
    });
    console.log(filteredProduct);
    
    const totalprice=filteredProduct.reduce(function(total, products){
        return total+products.discountedPrice;    
    },0);
    console.log(`Total discount price is: ${totalprice}`);
    
}
    functionImplemented();

    




/*=>{
        return price-discount;
    },0);
    console.log(totalprice);*/ 


    /* const productArr=[products={
        name:this.name,
        category:this.category,
        price:this.price,

    },] */