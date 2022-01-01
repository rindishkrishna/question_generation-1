// document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
//     const dropZoneElement = inputElement.closest(".addimg");

//     dropZoneElement.addEventListener("click", (e) => {
//         inputElement.click();
//     });

//     inputElement.addEventListener("change", (e) => {
//         if (inputElement.files.length) {
//             updateThumbnail(dropZoneElement, inputElement.files[0]);
//         }
//     });

//     dropZoneElement.addEventListener("dragover", (e) => {
//         e.preventDefault();
//         dropZoneElement.classList.add("drop-zone--over");
//     });

//     ["dragleave", "dragend"].forEach((type) => {
//         dropZoneElement.addEventListener(type, (e) => {
//             dropZoneElement.classList.remove("drop-zone--over");
//         });
//     });

//     dropZoneElement.addEventListener("drop", (e) => {
//         e.preventDefault();

//         if (e.dataTransfer.files.length) {
//             inputElement.files = e.dataTransfer.files;
//             updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
//         }

//         dropZoneElement.classList.remove("drop-zone--over");
//     });
// });

// /**
//  * Updates the thumbnail on a drop zone element.
//  *
//  * @param {HTMLElement} dropZoneElement
//  * @param {File} file
//  */
// function updateThumbnail(dropZoneElement, file) {
//     let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

//     // First time - remove the prompt
//     if (dropZoneElement.querySelector(".upload")) {
//         dropZoneElement.querySelector(".upload").remove();
//     }

//     // First time - there is no thumbnail element, so lets create it
//     if (!thumbnailElement) {
//         thumbnailElement = document.createElement("div");
//         thumbnailElement.classList.add("drop-zone__thumb");
//         dropZoneElement.appendChild(thumbnailElement);
//     }

//     thumbnailElement.dataset.label = file.name;

//     // Show thumbnail for image files



//     if (file.type.startsWith("image/")) {
//         const reader = new FileReader();

//         reader.readAsDataURL(file);
//         reader.onload = () => {
//             thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
//         };
//     } else {
//         thumbnailElement.style.backgroundImage = null;
//     }
// }



let input = document.querySelector('#file');
let dropzone = document.querySelector('.drop');
let nameBox = document.querySelector('.drop span');

input.addEventListener('dragover', function () {
    dropzone.classList.add('active');
});

input.addEventListener('dragleave', function () {
    dropzone.classList.remove('active');
});

input.addEventListener('change', function () {
    dropzone.classList.remove('active');

    //Take the file name and show it
    let fileName = input.value;
    let index = fileName.lastIndexOf('\\');
    fileName = fileName.substring(fileName.length, index + 1);
    nameBox.innerHTML = fileName;
    nameBox.style.opacity = '1';
});


//Create animation on clicking upload file button
let uploadBtn = document.querySelector('.uploadBtn');
let loadBar = document.querySelector('.loadBar');
let loadArrows = document.querySelector('.arrows');
let checkmark = document.querySelector('.checkmark');

uploadBtn.addEventListener('click', function () {
    if (nameBox.innerHTML !== '' && uploadBtn.innerHTML !== 'Done') {
        this.innerHTML = 'Uploading...'
        loadBar.classList.add('active');

        //Hide dropzone and show loading arrows
        dropzone.classList.add('hidden');
        loadArrows.classList.remove('hidden');
        loadArrows.classList.add('active');

        //After 3 seconds show checkmark
        setTimeout(function () {
            loadArrows.classList.add('hidden');
            checkmark.classList.remove('hidden');
            uploadBtn.innerHTML = 'Done';
        }, 3000);
    }
});


