require('../src/db/mongoose')
const User = require ('../src/models/users')


//User.findByIdAndUpdate('5e03d9e518931707dcc1a77e',{age:1}).then((user)=>{
  //  console.log(user)
    //return User.countDocuments({age: 1})
//}).then((result)=>{
  //  console.log(result)
//}).catch((e)=>{
   // console.log(e)
//})

/*const updateAgeAndCount = async (id,age) =>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count 
}

updateAgeAndCount ('5e03d9e518931707dcc1a77e',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})*/

/*const deleteTaskAndCount = async (id) =>{
    const task = await Lask.findByAndDelete(id)
    const count = await Lask.countDocuments({completed:false})
    return count 

}
deleteTaskAndCount('').then((count)=>{
     console.log(count)
}).catch((e)=>{
      console.log(e)
})*/