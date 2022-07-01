console.log('Client side javascript file is loadedaaaaaaaaaaa!')

const form = document.querySelector('form')
const input = document.querySelector('input')
const p1 = document.querySelector('#m1')
const p2 = document.querySelector('#m2')
const img = document.querySelector('img')

form.addEventListener('submit', e => {
    p1.textContent = 'Loading...'
    p2.textContent = ''
    
    e.preventDefault()

    const location = input.value

    fetch(`/weather?address=${location}`).then(
        response => {
            response.json().then(data => {
                if (data.error) {
                    p1.textContent = data.error.context?.query?.message || data.error
                } else {
                    p1.textContent = data.forecast
                    p2.textContent = data.location
                    img.src = data.icon
                }
            })
        }
    )
})
