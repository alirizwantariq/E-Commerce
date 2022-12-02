function search() {
  let query = document.getElementById("searchbox").value;
  fetch(`https://dummyjson.com/products/category?${query}`)
    .then((res) => res.json())
    .then((data) => {
      var items = data.products;
      items.map((value, index) => {
        var list = `<div id="card${index}" class="col-md">
              
            <div class="card" style="width: 18rem; height:600px;">
                <img src="${value.images[0]}" class="card-img-top h-50">
                <div class="card-body my-auto">
                <h5 class="card-title">${value.title}</h5>
                <h5 class="card-title" >${value.brand}</h5>
                <p class="card-text">${value.description}</p>
                <p><span class="fw-semibold">Rs.${value.price}<small>(${value.discountPercentage}%)</small></span></p>
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary my-3" data-bs-toggle="modal" data-bs-target="#cardModal_${index}">
                Show Details
                </button>
             </div>
            </div>`;
      });
    });
}
