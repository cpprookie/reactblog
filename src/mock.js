import Mock from  'mockjs'

/**
 * @param post-author: test4
 *        common user: test2
 */

Mock.mock('http://localhost:3000/signin', options => {
  var body = JSON.parse(options.body)
  console.log(options)
  if(body.userName === "test2" && body.password === "1234qwer") {
    return {
      user: {
        "userID": "597877211b99dbea8a245d0e",
        "userName": "test2",
        "avatar": "http://google.com/avatar/01" 
      },
      success: true,
      status: 200
    }
  }
  if(body.userName === "test4" && body.password === "1234qwer") {
    return {
      user: {
        "userID": "59787ddffff5435b4f3c4437",
        "userName": "test4",
        "avatar": "http://google.com/avatar/01" 
      },
      success: true,
      status: 200
    }
  }
})

// Mock.mock('http://localhost:3000/signup', ()=>{
//   var body = JSON.parse(options.body)

// })

Mock.mock('http://localhost:3000/posts?author=59787dcd564b105b3b969537&page=0',()=> {
    console.log('user post called!')
    return {
    "success": true,
    "message": "get posts on page undefined",
    "totalPage": 1,
    "postList": [
        {
            "lastEditTime": "2017-07-28T03:11:29.693Z",
            "__v": 0,
            "createTime": "2017-07-28T03:11:29.693Z",
            "content": "Hello this is another test",
            "author": {
                "_id": "59787dcd564b105b3b969537",
                "userName": "test3"
            },
            "title": "posttest",
            "_id": "597aab6191725bfb3800a620",
            "comments": 0
        }
    ]
    }
})

Mock.mock('http://localhost:3000/posts', ()=>{
  return {
    "success": true,
    "message": "get posts on page undefined",
    "totalPage": 3,
    "postList": [
        {
            "_id": "597c767704462b4f4c3cf44e",
            "title": "Title48",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 48",
            "createTime": "2017-07-29T11:50:15.943Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.943Z"
        },
        {
            "_id": "597c767704462b4f4c3cf44d",
            "title": "Title47",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 47",
            "createTime": "2017-07-29T11:50:15.942Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.942Z"
        },
        {
            "_id": "597c767704462b4f4c3cf44c",
            "title": "Title46",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 46",
            "createTime": "2017-07-29T11:50:15.941Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.941Z"
        },
        {
            "_id": "597c767704462b4f4c3cf44b",
            "title": "Title49",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 49",
            "createTime": "2017-07-29T11:50:15.940Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.940Z"
        },
        {
            "_id": "597c767704462b4f4c3cf44a",
            "title": "Title44",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 44",
            "createTime": "2017-07-29T11:50:15.934Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.934Z"
        },
        {
            "_id": "597c767704462b4f4c3cf449",
            "title": "Title45",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 45",
            "createTime": "2017-07-29T11:50:15.933Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.933Z"
        },
        {
            "_id": "597c767704462b4f4c3cf448",
            "title": "Title43",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 43",
            "createTime": "2017-07-29T11:50:15.933Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.933Z"
        },
        {
            "_id": "597c767704462b4f4c3cf447",
            "title": "Title42",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 42",
            "createTime": "2017-07-29T11:50:15.931Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.931Z"
        },
        {
            "_id": "597c767704462b4f4c3cf446",
            "title": "Title41",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 41",
            "createTime": "2017-07-29T11:50:15.930Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.930Z"
        },
        {
            "_id": "597c767704462b4f4c3cf445",
            "title": "Title40",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 40",
            "createTime": "2017-07-29T11:50:15.918Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T11:50:15.918Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea44",
            "title": "Title21",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 21",
            "createTime": "2017-07-29T08:39:56.863Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.863Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea42",
            "title": "Title11",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 11",
            "createTime": "2017-07-29T08:39:56.862Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.862Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea43",
            "title": "Title16",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 16",
            "createTime": "2017-07-29T08:39:56.862Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.862Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea41",
            "title": "Title23",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 23",
            "createTime": "2017-07-29T08:39:56.861Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.861Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea3f",
            "title": "Title13",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 13",
            "createTime": "2017-07-29T08:39:56.860Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.860Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea40",
            "title": "Title18",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 18",
            "createTime": "2017-07-29T08:39:56.860Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.860Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea3e",
            "title": "Title10",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 10",
            "createTime": "2017-07-29T08:39:56.859Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.859Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea3d",
            "title": "Title29",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 29",
            "createTime": "2017-07-29T08:39:56.858Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.858Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea3c",
            "title": "Title20",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 20",
            "createTime": "2017-07-29T08:39:56.853Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.853Z"
        },
        {
            "_id": "597c49dc58dea54e51f2ea3b",
            "title": "Title15",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4"
            },
            "content": "This is test 15",
            "createTime": "2017-07-29T08:39:56.851Z",
            "__v": 0,
            "lastEditTime": "2017-07-29T08:39:56.851Z"
        }
    ]
  }
})

Mock.mock('http://localhost:3000/posts?page=2', ()=>{
  const postList = Array.from(new Array(10)).map((item,index) => 
     item={"postID":index,"title": `Mock Test${index+30}`,"date":new Date(), "comments": 1}
    )
    console.log(postList)
  return {
    totalPage: 2,
    postList
  }
})

Mock.mock(`/user/59787ddffff5435b4f3c4437/history`, ()=> {
  return {
    "sucess": true,
    "message": "get user history success",
    "history": [
        {
            "_id": "597bf92e33e529567595ced0",
            "post": {
                "_id": "597a9f849e82f15214714e12",
                "title": "posttest"
            },
            "user": "597877211b99dbea8a245d0e",
            "lastViewTime": "2017-07-29T02:55:42.189Z",
            "__v": 0
        },
        {
            "_id": "597bf92833e529567595cecf",
            "post": {
                "_id": "597a9f849e82f15214714e12",
                "title": "posttest"
            },
            "user": "597877211b99dbea8a245d0e",
            "lastViewTime": "2017-07-29T02:55:36.289Z",
            "__v": 0
        },
        {
            "_id": "597bf92733e529567595cece",
            "post": {
                "_id": "597a9f849e82f15214714e12",
                "title": "posttest"
            },
            "user": "597877211b99dbea8a245d0e",
            "lastViewTime": "2017-07-29T02:55:35.768Z",
            "__v": 0
        },
        {
            "_id": "597bf92733e529567595cecd",
            "post": {
                "_id": "597a9f849e82f15214714e12",
                "title": "posttest"
            },
            "user": "597877211b99dbea8a245d0e",
            "lastViewTime": "2017-07-29T02:55:35.244Z",
            "__v": 0
        },
        {
            "_id": "597bf92633e529567595cecc",
            "post": {
                "_id": "597a9f849e82f15214714e12",
                "title": "posttest"
            },
            "user": "597877211b99dbea8a245d0e",
            "lastViewTime": "2017-07-29T02:55:34.530Z",
            "__v": 0
        }
    ]
  }
})

// put  test2
Mock.mock('http://localhost:3000/user/597877211b99dbea8a245d0e/post', options=> {
  console.log('put post called')
  if (options.type !== 'PUT') return false
  return {
    success: true,
    createPost: {
        "__v": 0,
        "title": "Close to your target ",
        "author": "59787ddffff5435b4f3c4437",
        "content": "This project is almost done",
        "createTime": "2017-07-31T10:20:50.916Z",
        "_id": "597f04822e092f188cb47149",
        "lastEditTime": "2017-07-31T10:20:50.916Z"
    }
  }
})

// get post 
Mock.mock('http://localhost:3000/post/597c767704462b4f4c3cf44e', ()=> {
  return {
    "success": true,
    "message": "find post success",
    "post": {
        "_id": "597c767704462b4f4c3cf44e",
        "title": "Close to your target ",
        "author": {
            "_id": "59787ddffff5435b4f3c4437",
            "userName": "test4",
            "avatar": "http://google.com/avatar/01"
        },
        "content": "This project is almost done",
        "createTime": "2017-07-31T10:20:50.916Z",
        "__v": 0,
        "lastEditTime": "2017-07-31T10:20:50.916Z",
        "comments": 6
    }
  }
})

// edit post 
Mock.mock('http://localhost:3000/user/59787ddffff5435b4f3c4437/post/597c767704462b4f4c3cf44e', opts => {
  if(opts.type === 'POST') {
    return {
        "success": true,
        "message": "edit post success",
        "editPost": {
            "_id": "597c767704462b4f4c3cf44e",
            "title": "Close to your target ",
            "author": {
                "_id": "59787ddffff5435b4f3c4437",
                "userName": "test4",
                "avatar": "http://google.com/avatar/01"
            },
            "content": "This project is almost done",
            "createTime": "2017-07-31T10:20:50.916Z",
            "__v": 0,
            "lastEditTime": "2017-07-31T10:20:50.916Z"
        }
    }
  }
 if(opts.type === 'DELETE') {
     return {
         success: true,
         message: 'delete Post success'
     }
 }
})


Mock.mock('http://localhost:3000/post/597c767704462b4f4c3cf44e/comment', opts => {
    if (opts.type === 'GET') {
    return {
    "success": true,
    "message": "get comments for post: 597a9f849e82f15214714e12 success",
    "comments": {
        "totalComments": 6,
        "totalPages": 1,
        "currentPage": 0,
        "commentList": [
            {
                "_id": "597aa992618c64ea44c4f6e7",
                "post": "597a9f849e82f15214714e12",
                "author": [
                    {
                        "_id": "59787ddffff5435b4f3c4437",
                        "userName": "test4",
                        "avatar": "http://google.com/avatar/01"
                    }
                ],
                "content": "comment test3",
                "timeago": "1 week ago"
            },
            {
                "_id": "597aa9c110b64df3585f5997",
                "post": "597a9f849e82f15214714e12",
                "author": [
                    {
                        "_id": "59787ddffff5435b4f3c4437",
                        "userName": "test4",
                        "avatar": "http://google.com/avatar/01"
                    }
                ],
                "content": "comment test3",
                "timeago": "1 week ago"
            },
            {
                "_id": "597aa9c210b64df3585f5998",
                "post": "597a9f849e82f15214714e12",
                "author": [
                    {
                        "_id": "59787ddffff5435b4f3c4437",
                        "userName": "test4",
                        "avatar": "http://google.com/avatar/01"
                    }
                ],
                "content": "comment test3",
                "timeago": "1 week ago"
            },
            {
                "_id": "597aaa6891725bfb3800a61c",
                "post": "597a9f849e82f15214714e12",
                "author": [
                    {
                        "_id": "59787ddffff5435b4f3c4437",
                        "userName": "test4",
                        "avatar": "http://google.com/avatar/01"
                    }
                ],
                "content": "comment test3",
                "timeago": "1 week ago"
            },
            {
                "_id": "597aaa6991725bfb3800a61d",
                "post": "597a9f849e82f15214714e12",
                "author": [
                    {
                        "_id": "59787ddffff5435b4f3c4437",
                        "userName": "test4",
                        "avatar": "http://google.com/avatar/01"
                    }
                ],
                "content": "comment test3",
                "timeago": "1 week ago"
            },
            {
                "_id": "597aaa6a91725bfb3800a61e",
                "post": "597a9f849e82f15214714e12",
                "author": [
                    {
                        "_id": "59787ddffff5435b4f3c4437",
                        "userName": "test4",
                        "avatar": "http://google.com/avatar/01"
                    }
                ],
                "content": "comment test3",
                "timeago": "1 week ago"
            }
        ]
    }
    }
    }
    if (opts.type === 'PUT') {
        return {
            success: true,
            message:  'put comment success',
            comment: {
                _id: 'ef41er31ed32413',
                content: 'hahaha',
                author: 'das213231',
                timeago: 'just now',
                post: '597a9f849e82f15214714e12'
            }
        }
    }
})

Mock.mock('http://localhost:3000/user/59787ddffff5435b4f3c4437', ()=> {
    console.log('user mock here')
    return {
    "success": true,
    "message": "get user base info success",
    "author": [
        {
            "_id": "59787ddffff5435b4f3c4437",
            "userName": "test4",
            "avatar": "http://google.com/avatar/01"
        }
    ]
    }
})

Mock.mock('http://localhost:3000/597877211b99dbea8a245d0e/signout', ()=> {
  return {logout: true}
})

export default Mock