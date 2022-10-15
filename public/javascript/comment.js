const commentFormHandler = async function (event) {
    event.preventDefault();

    const postId = document.querySelector('input[name="post-id"]').value;
    const commentText = document.querySelector('textarea[name="comment-body"]').value.trim();

    if (body) { 
        await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        document.location.reload();
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);    
