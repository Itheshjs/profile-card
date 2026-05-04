let getProducts=async()=>{
    let apiFirstRes=await fetch(`https://jsonplaceholder.typicode.com/todos/1`)
    let finalRes=await apiFirstRes.json()
    console.log(finalRes.products)
}


getProducts()  