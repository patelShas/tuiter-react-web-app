const PostSummaryItem = (post) => {
    return(`
        <div class="list-group-item">
            <div class="row d-flex align-items-center">
                <div class="col-8">
                    <p class="text-muted">
                        ${post.topic}<br/>
                        <b class="text-white">${post.userName}</b> <i class="fas fa-circle" style="color: white"></i>${post.time}<br/>
                        <span class="text-white">${post.title}</span>
                        ${post.tweets ? post.tweets : ""}
                    </p>
                </div>
                <div class="col-4">
                    <img src=${post.image}
                         class="img-fluid float-end rounded" alt="${post.userName}-icon" style="max-height: 100px">
                </div>
            </div>
        </div>
        <br/>
    `);
}
export default PostSummaryItem;