### Front end split from Back end  SPA

### keyword: react react-router redux


## UI style
----

### I get a lot of ideas from `github` `medium` `koa` `mobike`UI styles to make **R&B** look like mordern blog system. I'm really appreciated about that.


## ajax docs
----

### signin (add sessionID)

```javascript
method = 'post'

path = '/signin'

request: {
  userName: String,
  password: String
}

response: {
  userID: String,
  userName: String,
}

```

### posts 

```javascript
method = 'get'

path=`/${userID}/posts`

request_param : {
  page: Number
}

response: {
  posts: [
    shortPost: {
      postID: String,
      title: String,
      autherName: String,
      autherID: String,
      date: Date,
      like: Number,
      comment: Number
    }
  ],
  totalPages: Number,
  currentPage: Number 
}
```

### history
```javascript
method = 'get'

path = `/${userID}/history`

response: {
  browsedPosts: [
    browsedPost: {
      postID: String,
      userName: String,
      userID: String,
      like: Number,
      browsedTime: Date
    }
  ]
  isEmpty: Boolean
}

```

### post
```

```
