// var dropdownList = Array.from(document.querySelectorAll(".dropdown"));
// console.log(dropdownList);
// dropdownList.forEach(function(element,index){
//     var btn = element.querySelector(".btn");
//     btn.addEventListener('click',function(event){
//         if(element.classList.value.indexOf('open') === -1){
//             element.classList.add('open');
//         }
//         else{
//             element.classList.remove('open');

//         }
//     });
// });

var form = document.getElementById('addForm');
var listItem = document.getElementById('items');
var search = document.getElementById('filter');

function addItem(e){
  e.preventDefault(); //Hủy sự kiện mặc định mà hàm có 
  //Lấy new item khi nhập vào input
  var newItem = document.getElementById('item').value;
  //clear input 
  document.getElementById('item').value = '';
  //if không nhập thông tin thì alert còn lại thì add item vào
  if(newItem === ''){
    alert('Ban chua nhap thong tin !');
  }
  else {
 // Tạo li mới để add item
 var li = document.createElement('li');
 //Add cho li vào 1 class chung
 li.className = 'list-group-item';
 //Lấy text vừa nhập từ newItem add vào li vừa tạo
 li.append(document.createTextNode(newItem));
 //Tạo nút button để click xóa
 var deletebtn = document.createElement('button');
 //Add cho button 1 class chung 
 deletebtn.className = 'btn btn-primary float-right';
 //Tạo dấu X trong nút button
 deletebtn.append(document.createTextNode('X'));
 //Add nút button vào sau li
 li.append(deletebtn);
 //Add li vào sau ul
 listItem.append(li);
  }
 
}
form.addEventListener('submit',addItem);
function removeItem(e){
  //contains để kiểm tra xem có class 'btn' hay không
  if(e.target.classList.contains('btn')){ //Kiểm tra class nếu có class 'btn' thì làm tiếp 
    if(confirm('Ban muon xoa chu??')){ //Confim dùng để hỏi bạn có muốn xóa không 
      //e.target để lấy element cha mà cha ở đây là li
      var li = e.target.parentElement;
      //remove li từ ul
      listItem.removeChild(li);
    }
  }
}
listItem.addEventListener('click',removeItem);
function filterItems(e){
  // Đổi text khi nhập vào về chữ thường
  var text = e.target.value.toLowerCase();
  // lấy 1 list li từ ul 
  var items = listItem.getElementsByTagName('li');
  // Đổi list li này sang 1 mảng array
  Array.from(items).forEach(function(item){
    //Lấy phần tử li text đầu tiên 
    var itemName = item.firstChild.textContent;
    //Đưa phần text phàn tử li này xem có == với value mình tìm không 
    if(itemName.toLowerCase().indexOf(text) != -1){ //Nếu giống thì tiếp 
      item.style.display = 'block'; //show ra
    } else {
      item.style.display = 'none'; //Hide đi
    }
  });
}
search.addEventListener('keyup',filterItems);