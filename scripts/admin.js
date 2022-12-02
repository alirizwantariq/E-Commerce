fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    var data = json;
    var items = data.products;

    items.map((value, index) => {
      var list = `<tr id="block${index}">
                        <td>${value.title}</td>
                        <td>${value.description}</td>
                        <td>Rs.${value.price}<small>(${value.discountPercentage})%</small></td>
                        <td><img src="${value.images[0]}" style="height:100px"></td>
                        <td> <button class="btn btn-success mb-3" onclick="edit(${index})">Edit</button></td>
                        <td><button class="btn btn-danger mb-3" onclick="del(${index})">Delete Product</button></td>
                    </tr>`;
      $("#admin-data").append(list);
    });
  });

function del(id) {
  console.log(id);
  fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(console.log);

  $(`#block${id}`).remove();
}

//Editing a Specifc Product

function edit(id) {
  const edit = document.querySelector(`#block${id}`);
  edit.setAttribute("contenteditable", "true");
}
