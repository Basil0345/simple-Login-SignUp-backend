//README

create .env in root directory and add following variables in it ->
1. MONGO_URL - add your mongodb connection string
2. JWT_TOKEN = Json web token secret key 
3. PORT = backend server port number || Default port is 5000

           <--- Routes --->

/                -> API Running Message

/api/user/signup -> For registering user 
                 -> Takes username, email and password.
                 -> a default profile picture is added for all users in database, when they register.
                 -> as response you will get user information and jwt token.

/api/user/signin -> For Login user
                 -> Takes email and password.
                 -> as response you will get user information and jwt token.
