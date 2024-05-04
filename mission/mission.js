// replace with code to select dropdown element out of the HTML
const changeTheme = document.querySelector('body')
const themeSelector = document.querySelector('select')
const changeLogo = document.querySelector('img')
const blueLogo = 'byui-logo_blue.webp'
const whiteLogo = 'byui-logo_white.png'

themeSelector.addEventListener('change', () => {
    //grabs selector
    //console.log(i got it)
    
    if(themeSelector.value == 'dark') {
        //grab the dark value
        //console.log('I selected dark')

        changeTheme.classList.add('dark')
        //changes body class .dark
        if(blueLogo) {
            changeLogo.setAttribute('src', whiteLogo)
            //logo changes to white logo
        }
        

    } else {
        changeTheme.classList.remove('dark')
        //removes .dark class

        if(whiteLogo) {
            changeLogo.setAttribute('src', blueLogo)
            //logo changes back to blue logo
        }
    }
    
})