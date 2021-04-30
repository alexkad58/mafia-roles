const BG_COLOUR = 'white';

const socket = io('https://mafia-roles.alexkad58.repl.co');

// socket.on('init');


const queueText = document.getElementById('queue')
const rollButton = document.getElementById('roll')

rollButton.on('click', getQueue())

function getQueue() {

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

    let rolesArr = ['маф','маф','маф','ком','мир','мир','мир','мир','мир','мир']
    shuffle(rolesArr)
    let queueString = ''
    let arr = [1,2,3,4,5,6,7,8,9,10]
    shuffle(arr)
    arr.forEach((e, i) => {
        
        queueText.innerHTML(`${e} `)
    })
}
