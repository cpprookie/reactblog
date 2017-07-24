import Mock from  'mockjs'

Mock.mock('/signin', options => {
  var body = JSON.parse(options.body)
  if(body.username === "mocktest" && body.password === "1234qwer") {
    return {
      user: {
        userID: 'test01',
        userName: 'mocktest',
        avatar: 'https://avatars0.githubusercontent.com/u/18083815?v=4&s=40' 
      },
      status: 200
    }
  }
  return {
    status: 404
  }
})


Mock.mock('/posts', ()=>{
  return {
    postList: [
      {"postID":0,"title":"Manchester Welcomes Mobike",authorID:"test01","authorName":"Author: Mobike UK","date":"Date: 29th June","like": 0, "comments": 1},
      {"postID":1,"title":"‘Mobike Japan’ in Fukuoka",authorID:"test02","authorName":"Author: Mobike Global","date":"Date: 22nd June","like": 0, "comments": 1},
      {"postID":2,"title":"Mobike Raises Over $600 Million in Series E Financing Led by Tencent",authorID:"test03","authorName":"Author: Mobike UK","date":"Date: 16th June", "like": 0, "comments": 1}
    ]
  }
})

Mock.mock(`/test01/history`, ()=> {
  return {
    history: [
      {"id":0,"title":"Manchester Welcomes Mobike", agree: 2},
      {"id":1,"title":"Mobike Japan in Fukuoka", agree: 3}
    ],
    isEmpty: false
  }
})

Mock.mock('/test01/signout', ()=> {
  return {logout: true}
})

export default Mock