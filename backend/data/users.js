import bcryptjs from 'bcryptjs'

const users =[
    {
       name: 'Admin User',
        email: 'admin@myshop.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true,
},
{
    name: 'Fred Flintsone',
    email: 'fred@myshop.com',
    password: bcryptjs.hashSync('123456', 10),
    isAdmin: true,  
},
{
    name: 'Barnry Rubble',
        email: 'barney@myshop.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true,
}
]

export default users