const WhoToFollowListItem = (who) => {
    return(`
        <div class="list-group-item">
            <img src="../images/${who.avatarIcon}" class="rounded-circle" alt='${who.handle}-icon'
                 width="48px" height="48px">
            <div class="d-inline-block align-middle"><b>${who.userName}</b><br/>@${who.handle}</div>
            <button class="btn btn-primary float-end" style="border-radius: 24px">
                Follow
            </button>
        </div>
        <br/>
    `);
}

export default WhoToFollowListItem;