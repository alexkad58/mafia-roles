const BG_COLOUR = 'white';

const socket = io('https://mafia-roles.alexkad58.repl.co');

// socket.on('init');


const queueText = document.getElementById('queue')
const rollButton = document.getElementById('roll')

// rollButton.onclick(getQueue())

document.addEventListener('DOMContentLoaded', function() {
  function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    
    let rolesArr = [4,3,3,2,1,1,1,1,1,1]
    shuffle(rolesArr)
    let queueString = ''
    let arr = [1,2,3,4,5,6,7,8,9,10]
    shuffle(arr)

    const maf = document.getElementById(`maf`)
    const kom = document.getElementById(`kom`)
    const mir = document.getElementById(`mir`)
 
    arr.forEach((e, i) => {
      console.log(rolesArr, rolesArr[i] )
      queueEl = document.getElementById(`${i + 1}`)
      queueEl.innerHTML = ` ${e} `;
      queueEl.style.fontWeight = "700"
      queueEl.style.fontSize = 'x-large'
      if (rolesArr[i] == 4) {
        queueEl.style.color = 'black'
        text = maf.innerHTML
        maf.style.color = 'black'
        maf.style.fontWeight = "700"
        maf.style.fontSize = 'x-large'
        maf.style.margin = '10px'
        maf.innerHTML = `${text} ${e}`
      }
      if (rolesArr[i] == 3) {
        queueEl.style.color = 'red'
        text = maf.innerHTML
        maf.style.color = 'red'
        maf.style.fontWeight = "700"
        maf.style.fontSize = 'x-large'
        maf.style.margin = '10px'
        maf.innerHTML = `${text} ${e}`
      }
      if (rolesArr[i] == 2) {
        queueEl.style.color = 'blue'
        text = kom.innerHTML
        kom.style.color = 'blue'
        kom.style.fontWeight = "700"
        kom.style.fontSize = 'x-large'
        kom.style.margin = '10px'
        kom.innerHTML = `${text} ${e}`
      }
      if (rolesArr[i] == 1) {
        queueEl.style.color = '#28a745'
        text = mir.innerHTML
        mir.style.color = '#28a745'
        mir.style.fontWeight = "700"
        mir.style.fontSize = 'x-large'
        mir.style.margin = '10px'
        mir.innerHTML = `${text} ${e}`
      }
      queueEl.style.display = 'inline'
      queueEl.style.margin = '10px'
      maf.style.wordSpacing = '10px'
      kom.style.wordSpacing = '10px'
      mir.style.wordSpacing = '10px'
      
    })
   
}, false);


function getQueue() {

    
}
