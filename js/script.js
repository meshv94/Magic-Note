
let addBtn = document.getElementById('addBtn');
let n = 1;

load();




//------------------ add button function  -------------------
addBtn.addEventListener('click', function (e) {

    let inpTxt = document.getElementById('inpTxt').value;
    let inpTitle = document.getElementById('inpTitle').value;


    let notes = localStorage.getItem('notes');

    if (localStorage.getItem('notes') == null) {
        notesarr = [];
        // create object to store both value in array   [object-array]

        let inputObj = {
            ETitle : inpTitle,
            EText :  inpTxt
        }

        notesarr.push(inputObj);
        localStorage.setItem('notes', JSON.stringify(notesarr))
        location.reload();
        


    }
    else {
        let notesarr = JSON.parse(localStorage.getItem('notes'));
        // create object to store both value in array   [object-array]

        let inputObj = {
            ETitle : inpTitle,
            EText :  inpTxt
        }
        notesarr.push(inputObj);
        localStorage.setItem('notes', JSON.stringify(notesarr))  /*upadte storage*/
        location.reload();

    }

    showElement(inpTxt);   // function that display notes to user



})


//------------ this function show element in div ------------------
function showElement() {
    let inpTxt = document.getElementById('inpTxt').value;
    let inpTitle = document.getElementById('inpTitle').value;

    let code = `
    <div class="card text-center note mx-3 my-5" style="width: 18rem;">
        <div class="card-body">
        <h5 class="card-title">${inpTitle}</h5>
        <p class="card-text">${inpTxt}</p>
        <button class="dtlBtn btn btn-danger">delete</button>
        </div>
    </div>
    `;


    let card = document.createElement('div');
    card.innerHTML = code;

    let showArea = document.getElementById('showArea');
    showArea.appendChild(card);
    n++;
}



//---------------- display previous notes that you have added ---------------
function load() {


    let notesarr = JSON.parse(localStorage.getItem('notes'));

    if (notesarr != null) {
        notesarr.forEach(element => {
            let code = `
            <div class="card text-center note mx-3 my-5" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${element.ETitle}</h5>
                      <p class="card-text">${element.EText}</p>
                      <button class="dtlBtn btn btn-danger" onclick="remove(${n})">delete</button>
                    </div>
                  </div>
            `;

            let card = document.createElement('div');
            card.innerHTML = code;

            let showArea = document.getElementById('showArea');
            showArea.appendChild(card);
            n++;
        });
    }


}


//-----------------  delete button function ---------------------
function remove(n) {

    opn = confirm("Want to delete?");

    if (opn == true) {
        let notesarr = JSON.parse(localStorage.getItem('notes'));
        console.log(notesarr)
        notesarr.splice(n-1 , 1)
        console.log(notesarr)
        localStorage.setItem('notes', JSON.stringify(notesarr));   //update array in local storage
        location.reload();
    }
}


//------------------ clear all button function ------------ 
function clr() {

    opn = confirm("Are you sure? Want to delete all items");
    if (opn == true) {
        localStorage.clear();
        localStorage.getItem('notes');
        location.reload();
    }

}










// backup for code

    
// let addBtn = document.getElementById('addBtn');
// let n = 1;

// load();




// //------------------ add button function  -------------------
// addBtn.addEventListener('click', function (e) {

//     let inpTxt = document.getElementById('inpTxt').value;


//     let notes = localStorage.getItem('notes');

//     if (localStorage.getItem('notes') == null) {
//         notesarr = [];
//         notesarr.push(inpTxt);
//         localStorage.setItem('notes', JSON.stringify(notesarr))
//         location.reload();


//     }
//     else {
//         let notesarr = JSON.parse(localStorage.getItem('notes'));
//         notesarr.push(inpTxt);
//         localStorage.setItem('notes', JSON.stringify(notesarr))  /*upadte storage*/
//         location.reload();
//     }

//     showElement(inpTxt);   // function that display notes to user



// })


// //------------ this function show element in div ------------------
// function showElement() {
//     let inpTxt = document.getElementById('inpTxt').value;

//     let code = `
// <div class="showArea" id="showArea">
// <div class="note">
//     <h3>Note ${n} </h3>
//     <p>${inpTxt}</p>
//     <button class="dtlBtn">delete</button>
// </div>
// `;

//     let card = document.createElement('div');
//     card.innerHTML = code;

//     let showArea = document.getElementById('showArea');
//     showArea.appendChild(card);
//     n++;
// }



// //---------------- display previous notes that you have added ---------------
// function load() {


//     let notesarr = JSON.parse(localStorage.getItem('notes'));

//     if (notesarr != null) {
//         notesarr.forEach(element => {
//             let code = `
//     <div class="showArea" id="showArea">
//     <div class="note">
//         <h3>Note ${n}</h3>
//         <p>${element}</p>
//         <button class="dtlBtn" onclick="remove(${n})">delete</button>
//     </div>
//     `;
//             let card = document.createElement('div');
//             card.innerHTML = code;

//             let showArea = document.getElementById('showArea');
//             showArea.appendChild(card);
//             n++;
//         });
//     }


// }


// //-----------------  delete button function ---------------------
// function remove(n) {

//     opn = confirm("Want to delete?");

//     if (opn == true) {
//         let notesarr = JSON.parse(localStorage.getItem('notes'));
//         console.log(notesarr)
//         notesarr.splice(n - 1, 1)
//         console.log(notesarr)
//         localStorage.setItem('notes', JSON.stringify(notesarr));   //update array in local storage
//         location.reload();
//     }
// }


// //------------------ clear all button function ------------ 
// function clr() {

//     opn = confirm("Are you sure? Want to delete all items");
//     if (opn == true) {
//         localStorage.clear();
//         localStorage.getItem('notes');
//         location.reload();
//     }

// }

