let input = document.querySelector('#file');
let dropzone = document.querySelector('.drop');
let nameBox = document.querySelector('.drop span');
let bt=document.getElementById("upload")
bt.style.visibility="hidden";
let file=''

input.addEventListener('dragover', function () {
    dropzone.classList.add('active');
});

input.addEventListener('dragleave', function () {
    dropzone.classList.remove('active');
});


input.addEventListener('change', function () {
    if (!input.files) {
        return null;
      }
      file = input.files[0];
    bt.style.visibility="visible";
    dropzone.classList.remove('active');

    //Take the file name and show it
    fileName = input.value;
    
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
   
    if (nameBox.innerHTML !== '' && uploadBtn.innerHTML !== '') {
        this.innerHTML = 'Uploading...'
        loadBar.classList.add('active');
        Tesseract.recognize(
            file,
            'eng',
            { logger: m => console.log(m) }
          ).then(({ data: { text } }) => {
            document.getElementById("paragraph").value = text;
            //Hide dropzone and show loading arrows
            dropzone.classList.add('hidden');
            loadArrows.classList.remove('hidden');
            loadArrows.classList.add('active');
    
            //After 1 second show checkmark
            setTimeout(function () {
                loadArrows.classList.add('hidden');
                checkmark.classList.remove('hidden');
                uploadBtn.innerHTML = '';
                uploadBtn.remove()
    
            }, 1000);
          })

    }
});


