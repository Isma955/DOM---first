const wrap = document.createElement('div')
document.body.append(wrap)
// wrap.style.backgroundColor = 'red'
const text = document.createElement('div')
wrap.append(text)
const links = document.createElement('div')
wrap.append(links)
const lorem = document.createElement('p')
lorem.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio rem. Aut temporibus blanditiis.'
text.append(lorem)
text.style.border =  '1px solid red'
text.style.borderRadius =  '10px'
text.style.paddingLeft =  '5px'






const links_a = document.createElement('a')
links_a.textContent = 'intocode'
links_a.href = "#"
links_a.style.target = "blank"

const links_b = document.createElement('a')
links_b.textContent = 'google'
links_b.href = "https://www.google.com/"
links_b.target = "_blank"

const links_c = document.createElement('a')
links_c.textContent = 'instagram'
links_c.href = "instagram.com"
links_c.target = 'blank'

links.append(links_a,links_b,links_c);
wrap.append(links)
document.body.style.boxSizing = 'border-box' 

wrap.style.width = '30%'
wrap.style.padding = '10px'
wrap.style.margin = 'auto'

links.style.display = 'flex'
links.style.justifyContent = 'space-between'







// const links_b = document.createElement('a')
// const links_c = document.createElement('a')
// links.append(links_a,links_b,links_c)


// lorem.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, distinctio rem. Aut temporibus blanditiis.'
// document.body.style.backgroundColor = 'green'

// const title = document.querySelector('h1')
// const text = document.querySelector('.text')
// const button = document.getElementById('send-message')
// const items = document.querySelectorAll('li')

// items[0].style.color = 'blue'
// items[1].style.color = 'pink'
// items[2].style.color = 'grey'

// title.style.color = 'red';
// text.style.color = 'white';
// button.style.fontSize = '50px'

// let div = document.createElement('div')
// div.className = 'alert'
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// document.body.append(div)



// let textNode = document.createTextNode('а вот и я')


// const wrap = document.createElement('wrap')
// const text = document.createElement('div')
// text.c

// const header = document.createElement('h1')
// header.textContent = ('Привет всем!')
// header.style.color = 'red'
// header.style.fontSize = '22px'

// const div = document.querySelector('div')

// div.before(header)


// const ul = document.createElement('ul')

// const item_1 = document.createElement('li')
// const item_2 = document.createElement('li')
// const item_3 = document.createElement('li')

// item_1.textContent = 'html'
// item_3. textContent  = 'js'
// item_2.textContent = 'css'

// ul.append(item_1,item_2,item_3)

// document.body.prepend(ul)

