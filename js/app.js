const slider = document.getElementById('slider')
slider.defaultValue = 33
const react1 = document.querySelector('#react1')
const react2 = document.querySelector('#react2')
const react3 = document.querySelector('#react3')
const valueslider = document.getElementById('textInput')
const textInputr = document.getElementById('textInputr')
const btn1 = document.getElementById('stats1')
const btn2 = document.getElementById('stats2')

const client1 = document.getElementById('client1')
const client2 = document.getElementById('client2')
const client3 = document.getElementById('client3')
const client4 = document.getElementById('client4')

function changeHandler(e) {
    console.log(valueslider.value)
    switch (true) {
        case (0 <= valueslider.value && valueslider.value < 33):
            react1.style.display = 'block'
            react2.style.display = 'none'
            react3.style.display = 'none'
            break;
        case (34 <= valueslider.value && valueslider.value < 66):
            react2.style.display = 'block'
            react1.style.display = 'none'
            react3.style.display = 'none'
            break;
        case (67 <= valueslider.value && valueslider.value < 100):
            react3.style.display = 'block'
            react1.style.display = 'none'
            react2.style.display = 'none'

            break;
    }
}

function updateTextInput(val) {
    const color_1 = 'linear-gradient(to right, #0D59EF 0%, #0D59EF ' + val + '%, white ' + val + '%, white 100%)'
    const color_2 = '#FFFFFF'
    var rounded = Math.ceil(val / 33)
    document.getElementById('textInputr').value = rounded;
    document.getElementById('textInput').value = val;
    textInputr.style.marginLeft = val - 2 + '%';
    slider.style.background = color_1;
}

function stats1() {
    btn1.style.display = 'block';
    btn2.style.display = 'none';
}

function stats2() {
    btn1.style.display = 'none';
    btn2.style.display = 'block';

}


function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  


function displayClient(){
    const arr = ['client1', 'client2', 'client3', 'client4'];
   
    var rands = getMultipleRandom(arr, 4);
    const client11 = document.getElementById(rands[1])
    const client22 = document.getElementById(rands[0])
    const client33 = document.getElementById(rands[3])
    const client44 = document.getElementById(rands[2])
    client11.style.display = 'block';
    client22.style.display = 'block';
    client33.style.display = 'none';
    client44.style.display = 'none';

}

function displayClient2(){
    const arr = ['client1', 'client2', 'client3', 'client4'];
    var rands = getMultipleRandom(arr, 4);
    const client11 = document.getElementById(rands[1])
    const client22 = document.getElementById(rands[0])
    const client33 = document.getElementById(rands[3])
    const client44 = document.getElementById(rands[2])
    client11.style.display = 'block';
    client22.style.display = 'none';
    client33.style.display = 'none';
    client44.style.display = 'none';

}

const scrollM = document.getElementById('scrollM')
document.getElementById('scrollM').style.display = 'block';

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 60) {
        scrollM.style.display = 'none';
  
    } else 
    {
        scrollM.style.display = 'block';

    }
  });