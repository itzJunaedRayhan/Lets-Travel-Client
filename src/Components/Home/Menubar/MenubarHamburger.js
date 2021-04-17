const closeNav = () => {
    document.getElementById('menu').style.visibility = 'hidden';
    document.getElementById('menu').style.transition = 'visibility 0.5s ease-in'
}
const openNav = () => {
    document.getElementById('menu').style.visibility = 'visible'
    document.getElementById('menu').style.transition = 'visibility 0.5s ease-in'
}