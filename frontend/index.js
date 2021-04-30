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
    arr.forEach((e, i) => {
      console.log(rolesArr, rolesArr[i] )
      queueEl = document.getElementById(`${i + 1}`)
      queueEl.innerHTML = ` ${e} `;
      queueEl.style.fontWeight = "700"
      if (rolesArr[i] == 3) queueEl.style.color = 'red'
      if (rolesArr[i] == 2) queueEl.style.color = 'blue'
      if (rolesArr[i] == 1) queueEl.style.color = '#28a745'
      queueEl.style.display = 'inline'
      
    })
   
}, false);


function getQueue() {

    
}
