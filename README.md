Laravel React Blog Application 

Hello,I am Adnan hossain khan,I am submitting my laravel-react-blog Website.
There are two files in folder .One is for Backend one is for frontend.

1.Laravel-react-blog folder is the backend laravel folder.
2.Laravel-react-blog-frontend is the Frontend React folder.



For backend Part-
1.Run Composer dependencies.
2.Run migration and run php artisan db:seed for seeding roles.
3.Php artisan serve on Laravel-react-blog (backend folder)
4.There is a Authentication system in Laravel.First you need to be role as Admin for
register.Then you can see admin dashboard.You wont see admin dashboard if your role is User.
5.After login as admin you can see the admin dashboard at
http://127.0.0.1:8000/admin/dashboard.
6.There are two functionality I have created.The Blogs section where all blogs can be seen and
another section is Polling where admin can start the polls.There are other option such as
update,delete the polls by admin but unfortunately I ran out of time.You can see polls routes in
the web.php file.



For Frontend Part
1.To run the frontend server you need to run npm run dev.The server will open
http://localhost:5173. (Note:There are cors policy issues so you need to run serve on same
address.If you address changes then you need to add your address to config->cors
policy->Allow access origin->your server address.
2.I have create loging and Registration api and connecting it with frontend.you can see the
frontend after login.(Note:For password you need to type a special character along with Captial
letter,small letter.For example: Admin@1234)
3. You Can click on each Card component of blog to see the details and delete if necessary.4.I applied infinite scroll on blogs home page.
5.you can create blog and give necessary information to your blog
