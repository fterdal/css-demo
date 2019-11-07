const faq = document.getElementById('faq')
// const navList = document.getElementsByClassName('nav-list')[0]
const navList = document.getElementById('nav-list')

// console.log('navList[0]', navList[0])

console.log(navList)

navList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.style.opacity = '20%'
  }
})

// console.log(document)

// const navItems = ['Home', 'About', 'FAQ', 'Contact Us']

// const [home, about] = navItems

// console.log('home', home)
// console.log('about', about)

// const query = document.getElementsByTagName('nav')
// const [navBar] = query

// navItems.forEach(item => {
//   const newNode = document.createElement('li')
//   newNode.innerText = item
//   navBar.appendChild(newNode)
// })
// navBar

// console.log(navbar)
