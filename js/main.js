let firstInput = document.getElementById('firstInput');
let secInput = document.getElementById('secInput');
let errorMessage = document.getElementById('error-message')
let tbody = document.getElementById('tbody');
let bookmarks = [];




if (localStorage.getItem('bookmarks') == null) {
    bookmarks = [];
}
else {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    display(bookmarks)
}

function submitbtn() {
    let newbookmark = {
        webName: firstInput.value,
        webURL: secInput.value,
    };
    bookmarks.push(newbookmark);
    console.log(bookmarks);
    display(bookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    clearform()
}

function display(array) {
    cartoona = `<thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Website Name</th>
              <th scope="col">Visit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>`
    for (let i = 0; i < array.length; i++) {
        cartoona += `
        
          <tr>
            <th scope="row">${i + 1}</th>
            <td  class="websitename">${array[i].webName}</td>
            <td><a href="${array[i].webURL}" class="btn" target="_blank">Visit</a></td>
            <td>  <button id="delete" class="btn" onclick="deletebtn(${i})"> delete</button></td>
          </tr>          
        `
    }
    tbody.innerHTML = cartoona
}
function clearform() {
    firstInput.value = null;
    secInput.value = null;
}

function deletebtn(i) {
    bookmarks.splice(i, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    display(bookmarks)
}

function validation() {
    var validation = {
        webName: new RegExp("^[a-zA-Z]{3,}$"),
        webURL: new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?"),
    }

    if (firstInput.value != "" || secInput.value != "") {
        if (!validation.webName.test(firstInput.value) == true) {
            errorMessage.innerHTML = "plz enter vaild website name!"
            errorMessage.style.visibility = 'visible'
            return false;
        }
        else if (!validation.webURL.test(secInput.value) == true) {
            errorMessage.innerHTML = "plz enter vaild url!"
            errorMessage.style.visibility = 'visible'
            return false;
        }
        else {

            errorMessage.style.visibility = "hidden";
            return true;
        }
    } else {
        errorMessage.style.visibility = "visible";
        errorMessage.innerHTML = "Your Data Cannot Be Empty";
        return false;
    }
}
    


// var regex =

// if (regex.test("http://google.com")) {
//     alert("Successful match");
// } else {
//     alert("No match");
// }
// if (validation()) {
//     for (const user of usersData) {
//         if (user.email.toLowerCase() === userEmail.value.toLowerCase()) {
//             errorMessage.style.visibility = "visible";
//             errorMessage.innerHTML = "This email address is already exists.";
//             return;
//         }
//     }
//     usersData.push(signUpData);
//     localStorage.setItem("users-data", JSON.stringify(usersData));
//     errorMessage.style.visibility = "visible";
//     errorMessage.innerHTML = `
//           <div class="login-text m-0 p-0 text-success">
//             You account created successfully you can login from here
//             <a class='ms-3' href="./login.html" >Log In</a>
//           </div>
//         `;
// }

// if(firstInput==null || secInput==null){
//     alert('fill the inputs plz <3');
//     return false;
// }

// const expression =/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
// const regex = new RegExp(expression);
// if (secInput.match(regex)) {
//     alert("Successful match");
// } else {
//     alert("No match");
// }