let images = [
    {
        'title':'Доберман',
        'url':'1',
        'description': 'Порода короткошёрстных служебных собак, выведенная в городе Апольда в конце XIX века Карлом Фридрихом Луисом Доберманом, названа в честь своего создателя.',
    },
     {
        'title':'Бордер-колли',
        'url':'2',
        'description': 'Порода собак. Выведена на границе Шотландии и Англии. Отсюда название породы - border. Относится к пастушьим породам, первоначально была выведена для работы с овцами, однако позднее были выделены скотогонные разновидности, для пастьбы крупного рогатого скота.',
    },
     {
        'title':'Кавалер кинг чарльз спаниель',
        'url':'3',
        'description': 'Порода собак-компаньонов, маленький спаниель. Как и все спаниели, может поднимать птицу в подлеске, но всегда использовался именно в качестве домашнего любимца.', 
    },
     {
        'title':'Бернский зенненхунд',
        'url':'4',
        'description': 'Порода пастушьих собак, происходящая из швейцарского кантона Берн.',
    },
    
    {
        'title':'Самоедская собака',
        'url':'5',
        'description': 'Одна из древнейших пород собак. Относится к примитивным (аборигенным) породам. По одной из версий, самоед ведёт происхождение от ненецкой лайки. В настоящее время существует 7 стандартов породы самоед',
    },

    {
        'title':'Немецкая овчарка',
        'url':'6',
        'description': 'Порода собак, изначально использовалась в качестве пастушьей и служебно-розыскной собаки. Немецкая овчарка была получена в результате селекции и скрещивания некоторых разновидностей гуртовых собак Центральной и Южной Германии.',
    },
    {
        'title':'Немецкий дог',
        'url':'7',
        'description': 'Порода собак гигантского размера. Порода признана FCI, CKC, AKC, ANKC, NKC, NZKC, APRI, UKC, ACR.',
    },
    {
        'title':'Немецкий боксер',
        'url':'8',
        'description': 'Выведенная в Германии порода короткошёрстных служебных собак среднего размера. Предками боксёров были брабантский боевой пёс и английский бульдог. ',
    },
    
]

const title = document.querySelector('.title')
const desc = document.querySelector('.desc')
const img = document.querySelector('img')
const num = document.querySelector('.num')

let counter=0
length = images.length
btnLeft = document.querySelector('#btnLeft')
btnRight =document.querySelector('#btnRight');

function init(i=counter) {
    title.innerText=images[i]['title']
    desc.innerText = images[i]['description']
    img.src = `img/${images[i]['url']}.jpg`
    num.innerText= `${i+1}/${length}`
}
init()


btnLeft.addEventListener('click', slideLeft);
function slideLeft() {
    if (counter>=1) {
        counter--
    } else {
        counter=length-1
    }
    init(counter)
}

btnRight.addEventListener('click', slideRight);
function slideRight() {
    if (counter<length-1) {
        counter++
    } else {
        counter=0
    }
    init(counter)
}