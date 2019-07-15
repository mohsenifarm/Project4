export function getAll(){
    return fetch(`/api/posts`).then(function(res) {
        return res.json();
    })
}

export function createPost(post){
    return fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: post.title,
          content: post.content
        }),
        headers: {
          'content-type': 'application/json'
        }
      })
    }

export function showPost(id){
  return fetch(`/api/posts/${id}`).then(function(res){
    return res.json();
  })
}

export function deletePost(id){
  console.log('handle delete is calling in service function')
  // return fetch(`/api/posts/deletePost/${id}`, {
  //   method:'POST',
  //   body: JSON.stringify({
  //     id: "Meisam"
  //   }),
  //   headers: {'content-type': 'application/json'}
  // })
  return fetch(`/api/posts/deletePost/${id}`, {
    method: 'delete'
  }).then(function(res) {
    return res.json()
  });
}

export function editPost(post) {
  return fetch(`/api/posts/${post.id}/edit`, {
    method: 'PUT',
    body: JSON.stringify({
      title: post.title,
      content: post.content
    }),
    headers: {
      'content-type': 'application/json'
    }
  })
}