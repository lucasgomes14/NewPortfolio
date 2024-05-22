const scrollToSection = (event) => {
    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href")
        return document.querySelector(id).offsetTop
    }

    function nativeScroll(getDistanceFromTheTop) {
        window.scroll({
            top: getDistanceFromTheTop,
            behavior: "smooth"
        })
    }

    event.preventDefault()
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 88
    nativeScroll(distanceFromTheTop)
}

export default scrollToSection