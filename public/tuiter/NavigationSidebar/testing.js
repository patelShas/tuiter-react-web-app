import NavigationSidebar from "./index.js";

$('#wd-navbar').append(`
   <div class="container">
       <h1>Navigation Bar example</h1>
       ${NavigationSidebar()}
   </div>
`);