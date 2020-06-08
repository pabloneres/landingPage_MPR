const menu_li = document.querySelectorAll('li > a')

menu_li.forEach(li => {
    li.addEventListener('click', ()=>{
        event.preventDefault()
        
        const el = event.target
        const id = el.getAttribute('href')
        const position = document.querySelector(id).offsetTop

        window.scroll({
            top: position,
            behavior: "smooth"
        })
    })
})