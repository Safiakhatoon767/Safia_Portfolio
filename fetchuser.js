const button = document.querySelector('#fetchBtn')
const user_list = document.querySelector('#userList')

button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(data => {
            data.forEach(user => {
                let li = document.createElement('li')
                li.textContent = user.name
                user_list.append(li)
            });
        })

})