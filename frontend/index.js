const BG_COLOUR = 'white';

const socket = io('https://mafia-roles.alexkad58.repl.co');

socket.on('init', handleInit);


const queueText = document.getElementById('queue')
const rollButton = document.getElementById('roll')

rollButton.onclick(getQueue())

function getQueue() {
    let rolesArr = ['маф','маф','маф','ком','мир','мир','мир','мир','мир','мир']
    shuffle(rolesArr)
    let queueString = ''
    let arr = [1,2,3,4,5,6,7,8,9,10]
    shuffle(arr)
    arr.forEach((e, i) => {
        
        queueText.innerHTML(`${e} `)
    })
}
