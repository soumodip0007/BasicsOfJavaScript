//object literals

// const blogs = [
//     {title: 'how to defeat pekka with 1 megaknight only', likes: 40},
//     {title: 'why we use ewiz instead of electro drag', likes: 30}
// ];

let user = {
    name: 'wiz', 
    age: 25,
    email: 'abc@gmail.com',
    location: 'India',
    blogs: [
        {title: 'how to defeat pekka with 1 megaknight only', likes: 40},
        {title: 'why we use ewiz instead of electro drag', likes: 30}
    ],
    login: function(){
        console.log('user logged in');
    },
    logout: function(){
        console.log('user logged out')
    },
    logBlogs:function () {
        console.log(this.blogs);
        console.log('write a blog')
        this.blogs.forEach(blog =>{
            console.log(blog.title, blog.likes);
        })
    },
 };

user.login();

const name = 'wiz';
name.toUpperCase();

user.logBlogs();
console.log(this);

