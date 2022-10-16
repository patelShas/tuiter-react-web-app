const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/public">
       <i class="fab fa-twitter"></i></a>
     <a href="../home.html" class="list-group-item list-group-item-action"><i class="fas fa-home"></i>
         <span class="d-none d-xl-inline"> home</span></a>
     <a href="#" class="list-group-item list-group-item-action active"><i class="fas fa-hashtag"></i>
         <span class="d-none d-xl-inline"> explore</span></a>
     <a href="../../notifications.html" class="list-group-item list-group-item-action"><i class="fas fa-bell"></i>
         <span class="d-none d-xl-inline"> notifications</span></a>
     <a href="../../messages.html" class="list-group-item list-group-item-action"><i class="fas fa-envelope"></i>
         <span class="d-none d-xl-inline"> messages</span></a>
     <a href="../bookmarks/index.html" class="list-group-item list-group-item-action"><i class="fas fa-bookmark"></i>
         <span class="d-none d-xl-inline"> bookmarks</span></a>
     <a href="../../lists.html" class="list-group-item list-group-item-action"><i class="fas fa-list"></i>
         <span class="d-none d-xl-inline"> lists</span></a>
     <a href="../profile.html" class="list-group-item list-group-item-action"><i class="fas fa-user"></i>
         <span class="d-none d-xl-inline"> profile</span></a>
     <a class="list-group-item"><i class="fas fa-chevron-circle-down"></i>
         <span class="d-none d-xl-inline"> more</span></a>
   </div>
   <div class="d-grid mt-2">
     <a href="../tuit.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;