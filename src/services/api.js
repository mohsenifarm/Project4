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

