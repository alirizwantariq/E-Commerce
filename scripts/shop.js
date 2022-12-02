var token = sessionStorage.getItem("token");
if (token == "true") {
} else {
  window.location.href = "../pages/logIn.html";
}

fetch("https://dummyjson.com/products")
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
                <div class="modal fade rounded-2 shadow-lg" id="cardModal_${index}" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">Product Detail</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <img src="${value.images[2]}" class="img-fluid">
                      <h6 class="my-2">${value.title}</h6>
                      <h6>${value.brand}</h6>
                      <p>${value.description}</p>
                      <p class="mb-1 fw-bold">Category:${value.category}</p>
                      <span class="mb-1 fw-bold">${value.price}<small>(${value.discountPercentage}%)</small></span>
                      <p class="mb-1">${value.rating}</p>
                      <p>Stock ${value.stock}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>`;
      $("#products-list").append(list);
      window.addEventListener('scroll',()=>{
	    const {scrollHeight,scrollTop,clientHeight} = document.documentElement;
	    if(scrollTop + clientHeight > scrollHeight - 5){
		  setTimeout(createPost(),2000);

	}
});
    });
  });
 function createPost(){
  fetch("https://dummyjson.com/products")
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
                <div class="modal fade rounded-2 shadow-lg" id="cardModal_${index}" tabindex="-1" aria-labelledby="modalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="modalLabel">Product Detail</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                      <img src="${value.images[2]}" class="img-fluid">
                      <h6 class="my-2">${value.title}</h6>
                      <h6>${value.brand}</h6>
                      <p>${value.description}</p>
                      <p class="mb-1 fw-bold">Category:${value.category}</p>
                      <span class="mb-1 fw-bold">${value.price}<small>(${value.discountPercentage}%)</small></span>
                      <p class="mb-1">${value.rating}</p>
                      <p>Stock ${value.stock}</p>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>`;
      $("#products-list").append(list);
    });
  });

 }
  function signout(){
    localStorage.clear();
  }


