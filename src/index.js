let cakeName = document.getElementById('cake-name')
let cakeImage = document.getElementById('cake-image')
let cakeDescription = document.getElementById('description')
let cakeReviews = document.getElementById('review')
let reviewList = document.getElementById('review-list')
let reviewForm = document.getElementById('review-form')
let submitBtn = document.getElementById('button')
let cakeList = document.getElementById('cake-list')
let review1 = document.getElementById ('review1')

console.log(cakeName, cakeImage, cakeDescription, cakeReviews, reviewList, reviewForm, submitBtn, cakeList, button)

const request = async () => {
    let req = await fetch('http://localhost:3000/cakes/1')
    let res = await req.json()
    console.log(res)
    cakeName.innerHTML = res.name
    cakeDescription.innerHTML = res.description
    cakeReviews.innerHTML = res.reviews
    cakeImage.src = res.image_url
    submitBtn.addEventListener('submit', (event) => {
        event.preventDefault()
        let newReview = document.createElement('textarea')
        reviewForm.innerText = reviewForm.value
        newReview.innerText = cakeReviews.value
    })
    cakeReviews.appendChild(newReview)
}

const requestAll = async () => {
    let req = await fetch('http://localhost:3000/cakes')
    let res = await req.json()
    console.log(res)
    res.forEach((element) => {
        let nav = document.createElement('nav')
        nav.innerHTML = element.name
        cakeList.appendChild(nav)
    })

}
request()
requestAll()
