function validation(form){

  function removeError(input){
    if (input.classList.contains('error')){
      
      input.classList.remove('error');
    }
  }

  function createError(input, text){
  
      
      input.classList.add('error');


  return res;
}

  let res = true;
  const allInputs = form.querySelectorAll('input');
  for (const input of allInputs){
    removeError(input);
    if (input.value == ''){
      console.log('hhh');
      createError(input, 'ппп')
      
      res = false;
    }
    


  }
  
  
}

 
 
 
 document.getElementById('add-form').addEventListener('submit', function(event){
    event.preventDefault();
    if (validation(this) == true){
      alert('Форма')
    }
  });






function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('menu_time_show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.menu_time');
  for (let elm of elements) {
    observer.observe(elm);
  }


$(function(){
  $('#faq_text').hide();
  $('#faq_title').hover(function(){
    $('#faq_text').show();
  },
   function() {
      $('#faq_text').hide()
});
});

$(function(){
  $('#faq_text2').hide();
  $('#faq_title2').hover(function(){
    $('#faq_text2').show();
  },
   function() {
      $('#faq_text2').hide()
});
});

$(function(){
  $('#faq_text3').hide();
  $('#faq_title3').hover(function(){
    $('#faq_text3').show();
  },
   function() {
      $('#faq_text3').hide()
});
});

$(function(){
  $('#faq_text4').hide();
  $('#faq_title4').hover(function(){
    $('#faq_text4').show();
  },
   function() {
      $('#faq_text4').hide()
});
});

$(function(){
  $('#faq_text5').hide();
  $('#faq_title5').hover(function(){
    $('#faq_text5').show();
  },
   function() {
      $('#faq_text5').hide()
});

});



$(function(){
  const images  = document.querySelectorAll('.review_img');
  const but_img = document.querySelectorAll('.but_img');
  let imageIndex = 0;

  function show(index){
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
  }

  but_img.forEach((e)=>{
    e.addEventListener('click',()=> {
      if (event.target.classList.contains('prev')){
        let index = imageIndex - 1;

        if (index < 0){
          index = image.length - 1;
        }
        show(index);
       

      } else if (event.target.classList.contains('next')){
        let index = imageIndex +  1;
        if (index >= images.length){
          index = 0;
        }
        show(index);
        
      }
    })
  })
  show(imageIndex);



const inputs = document.querySelectorAll('input');
const squareInput = document.querySelector('#square_input');
const squareRange = document.querySelector('#square_range');
const widthS = document.querySelector('#widthS');
const heightS = document.querySelector('#heightS');
const allCount = document.querySelector('#count_all');


squareRange.addEventListener('input', function(){
  squareInput.value = squareRange.value;
})

squareInput.addEventListener('input', function(){
  squareRange.value = squareInput.value;
  console.log(squareInput.value);
})


function calc(){
  let count = parseFloat(widthS.value)*parseFloat(heightS.value);
  if (parseInt(squareRange.value) > 7){
   count = parseInt(count)*2;
   allCount.innerText = count;
}
else{
  allCount.innerText = parseInt(count);
}

}


calc()


for (const input of inputs) {
  input.addEventListener('input',function(){
    calc();

  })
  
}



});


document.addEventListener("DOMContentLoaded", function () {
    var phoneInputs = document.querySelectorAll('input[data-tel-input]');

    var getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }

    var onPhonePaste = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        var pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            var pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    var onPhoneInput = function (e) {
        var input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            var firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    var onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        var inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    for (var phoneInput of phoneInputs) {
        phoneInput.addEventListener('keydown', onPhoneKeyDown);
        phoneInput.addEventListener('input', onPhoneInput, false);
        phoneInput.addEventListener('paste', onPhonePaste, false);
    }
})