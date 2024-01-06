//Initial program
//need to make directories before
//doesn't make directories on its own
//repository for other .ext is required as well
//preliminary--- need to be a cli independent of index.js and so on...
const path = require('path')
const fs = require('fs')
//console.log(__dirname)
fs.readdir(__dirname,(err,files)=>{
  if(err){
    throw err
  }
  for(let eachFile = 0; eachFile < files.length; eachFile++){
    //console.log(files[eachFile])
    var extName = path.extname(path.join(__dirname, files[eachFile]))
    console.log(extName)
    if(extName == ".js" && path.basename(files[eachFile])!= "index.js" && path.basename(files[eachFile])!= "package.json"){
      const jsDir = path.join(__dirname,"javascript")
      fs.rename(path.join(__dirname,files[eachFile]),path.join(jsDir,files[eachFile]),(err)=>{
        if(err){
          throw err
        }
        console.log("Transfer complete")
      })
    }
    else if(extName == ".py"){
      const pyDir = path.join(__dirname,"python")
      fs.rename(path.join(__dirname,files[eachFile]),path.join(pyDir,files[eachFile]),(err)=>{
        if(err){
          throw err
        }
        console.log("Transfer complete")
      })
    }
    else if(extName ==".java"){
      const javaDir = path.join(__dirname,"java")
      fs.rename(path.join(__dirname,files[eachFile]),path.join(javaDir,files[eachFile]),(err)=>{
        if(err){
          throw err
        }
        console.log("Transfer complete")
      })
    }
    else if(extName == ".rs"){
      const rustDir = path.join(__dirname,"rust")
      fs.rename(path.join(__dirname,files[eachFile]),path.join(rustDir,files[eachFile]),(err)=>{
        if(err){
          throw err
        }
        console.log("Transfer complete")
      })
    }
  }
})
