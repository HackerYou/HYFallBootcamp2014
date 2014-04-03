##Branch Workflow Setup

This is a sample git workflow for your own repos that uses a test branch to stage all updates. All major additions or updates get their own feature branch, which only get merged into test branch.  The test branch is staging area to test and preview all your changes.  When everything is good on test, test gets merged into master.

![](http://cl.ly/image/3a3M3U2S0v3X/gitbranches.png)

###Create a new test branch

`git checkout -b test` //create a new trackable branch  
`git push origin test` //send it to github  

###Create a new feature branch

`git checkout -b MYFEATURE` //create a new trackable branch  

##Working on a Feature Branch

`git checkout MYFEATURE`  //switch to your feature branch  
`git pull origin master`  //make sure you're up to date with the latest from master  
// make your changes  

###If you need to switch to another branch before you're ready to commit
`git stash`  //put away your changes for later  
// go do other stuff in another branch  
`git checkout MYFEATURE` //come back to your feature branch    
`git stash apply` //bring back what you put away on this branch   

###When you're ready to commit your changes
`git add -A` //add all untracked and changed files  
`git commit -m "this is what I did"` //commit your changes with a message  
`git push origin MYFEATURE` //send your changes to github  

##Merging your feature into test and master

###Merge feature branch changes into test branch

`git checkout test`  //switch back to test branch  
`git pull origin master` //make sure you're up to date with the latest from master  
`git merge MYFEATURE`  //merge in your feature branch  
`git commit origin test`  //commit your merge  
`git push origin test` //send your merge to github 
// test on staging server (or in test branch)

###Merge test into master
`git checkout master` //switch back to test  
`git merge test`  //merge in your feature branch  
`git commit origin master`  //commit your merge  
`git push origin master` //send your merge to github   

###(Optional) Delete the feature branch if you don't need to come back to it
`git checkout master` //go somewhere that's not the branch you want to delete  
`git push orign :MYFEATURE`  //delete the MYFEATURE branch on github (upstream)  
`git branch -d MYFEATURE` //delete the branch on your computer

