import Mock from  'mockjs'

Mock.mock('/signin', options => {
  var body = JSON.parse(options.body)
  if(body.username === "mocktest" && body.password === "1234qwer") {
    return {
      user: {
        userId: 'test01',
        username: 'mocktest',
        avatar: 'https://avatars0.githubusercontent.com/u/18083815?v=4&s=40' 
      },
      status: 200
    }
  }
  return {
    status: 404
  }
})

export default Mock