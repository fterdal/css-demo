// console.log(document)

const navItems = ['Home', 'About', 'FAQ', 'Contact Us']

const [home, about] = navItems

console.log('home', home)
console.log('about', about)

const query = document.getElementsByTagName('nav')
const [navBar] = query

navItems.forEach(item => {
  const newNode = document.createElement('li')
  newNode.innerText = item
  navBar.appendChild(newNode)
})
// navBar

// console.log(navbar)
