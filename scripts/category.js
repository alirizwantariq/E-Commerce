data();
async function data() {
  let response = await fetch("https://dummyjson.com/products/categories");
  let user = await response.json();
  let resultCategoryList = user;

  // console.log(resultCategoryList);

  resultCategoryList.map((value) => {
    // console.log(value);

    let list = `<div class="btn-group pb-2" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck" autocomplete="off">
  <label class="btn btn-outline-light" for="btncheck">${value}</label>
</div>`;

    $("#category").append(list);
  });
}
