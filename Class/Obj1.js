//Singleton Objects
const user = new Object();
console.log(user);
const user1 ={};//NON-Singleton obj
console.log();
user1.Id=7;
user1.name ="hari";
user1.isLogin = true;
console.log(user1);

//Obj inside obj
const user3 = {
    Email:"xyz@",
    UName:{
        fullName:{
            fNmae:"This is first name !!",
            sName:"this is surname!!"
        }

    }
}
console.log(user3);
console.log(user3.UName.fullName.fNmae);
