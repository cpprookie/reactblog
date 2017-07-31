var axios = require('axios')

for (let time = 40; time < 50; ++time) {
  axios.put(`http://localhost:3000/user/59787ddffff5435b4f3c4437/post`, {
    post: {
      title: `Title${time}`,
      content: `This is test ${time}`
    }
  }).then((res)=> {
    if(res.data.success === true) {
      console.log('success')
    }
  }).catch(e => console.log(e.message))
}