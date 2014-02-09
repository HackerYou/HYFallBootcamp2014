# Git and GitHub

Version control allows us to keep a record of what has changed in our directories/files so that we can revert back if needed. Git is a version control system. With Git we:

1. take snapshots of our project folder whenever we want (every type of file is saved, it doesn't have to be code)
2. can "time travel" between snapshots
3. can easily collaborate with team members on code
4. can easily share our code with others by using GitHub.com

## Download & Install Git

Windows: http://msysgit.github.com/
Mac: http://code.google.com/p/git-osx-installer

## Configure Git

When Git takes snapshots of your code it can associate them with your name and email address. This is useful when collaborating and sharing your work. Once you have git installed, open up the command line and type the following commands:

```
$ git config --global user.name "Your Actual Name"
$ git config --global user.email "Your Actual Email"
```

Confirm that everything is working by typing:

```
$ git config --get user.name
$ git config --get user.email
```

It should print the name and email address that you set.

## Initialize a Git Repository

From the command line go into any directory and type `$ git init` to turn any directory into a Git repository. The directory will not visibly change in any way. The `git init` command actually creates a hidden folder called "git" inside of the directory.

## Git in a nutshell

We can get most of the benefits of Git with pretty much two commands. To help you understand when to use these commands visualize your directory as being in one of three stages:

1. Working Directory (you're working and haven't taken a snapshot)
2. Staging Area (you collect files/folders here to eventually be saved in a snapshot)
3. Git repository (snapshot taken)

The workflow then looks like this:

1. Work (code, write a story, photoshop images, etc.)
2. Add files to staging area when you're ready (`$ git add <file>`)
3. Take a snapshot (`$ git commit -m "a useful commit message here"`)

### Exercise

* Open up the folder for your Week-2 project and make it a Git repository. 
* Add all of the files into the staging area.
* Take a snapshot by committing with the message "initial commit".


## Git Status

To see which files are in the working directory and which are in the staging area just type `$ git status`.

## Git push

Your Git repository can be shared with others by putting it on github.com. 

1. Create a free account on github.com
2. Follow the instructions for creating a repository: https://help.github.com/articles/create-a-repo but skip the "Create a README for your repository" section.
3. From the command line navigate to your local repository
4. Add the Github repository as a remote `$ git remote add origin https://github.com/<username>/<repo-name>.git`
5. Push your code `git push origin master -u`

That's it! Now you have a local (your machine) repository and a remote (Github) repository.

**Workflow from now on**:

1. Work (code, write a story, photoshop images, etc.)
2. Add files to staging area when you're ready (`$ git add <file>`)
3. Take a snapshot (`$ git commit -m "a useful commit message here"`)
4. `$ git push` to update GitHub

### Exercise

Github is a great place to put all of your web development work. Your GitHub account will become a portfolio to showcase your code. 

**Your task**: put all of your work on GitHub!

## Learning more

Atlassian has created a great resource for learning Git. Look through it to learn a few tricks that might come in handy:

https://www.atlassian.com/git/tutorial/git-basics

## The golden rule of source control

**Commit Early - Commit Often** is a rule that you should go by from now on. Your goal for the rest of the day is to turn every project that you have into a Git repository and push it to GitHub. Every project from now on should be a  Git repository. Make Git part of your workflow; commit early and commit often.

## Collaborating with GitHub

When working in teams or on open source projects, you will often use GitHub to collaborate. To make your own contributions to someone else's code, it's common practice to make a fork (your own copy), make your changes, then ask for your changes to be approved and incorporated.

###Forking a Repo

To fork a repo, visit its GitHub page and click the Fork button.
![](http://f.cl.ly/items/0d2K0n2l1M131S170j3v/Bootcamp-Fork.png).

Now visit your own GitHub page, click on the Repositories tab, and you'll see you have your own copy! 

###Cloning your fork locally

To work on your forked copy, you'll need to get it on your local machine.  That's where cloning comes in.

1. From your forked copy on GitHub.com, find and copy the SSH clone URL  
![](http://f.cl.ly/items/3s1A0d0s0u2R3r3o0G2R/Screen%20Shot%202014-02-06%20at%202.44.44%20PM.png)
2. From the command line, navigate to where you'd like to keep the project files.
3. Type `git clone COPIED.URL.FROM.STEP1 ` to make a local copy

###Pulling updates from the original source
We want to set up your clone to be able to stay up to date with the original repo. We call the original the `upstream` copy and tell your local copy where to find it.

1. `cd` into your newly cloned repository from above (i.e. `cd name-of-project`)
2. Find the original repo on GitHub.com and get the SSH clone URL (It shouldn't contain your username! If it does, you're looking at the wrong copy.)
3. Run `git remote add upstream COPIED.URL.FROM.STEP2` to tell your local copy where the original is located.
4. To grab any new updates from the original copy, run `git pull upstream master`. You'll want to do this periodically to keep up to date with the original.

###Making your own changes

Work on your own copy, and use the new workflow we learned above - make changes, add files to a staging area, committ and push. They'll only affect your forked copy so far.

###Asking for your changes to be incorporated

If you want the original owner to incorporate your changes, you can 
ask with something called a `pull request`. To open a new pull request:

1. Head back to your forked repository page on GitHub.com
2. Click the green Compare and Review button.  
![](http://f.cl.ly/items/0N203l3v3O0f1v47051c/Screen%20Shot%202014-02-07%20at%2010.16.33%20AM.png)
3. On the next page, click "Create Pull Request."  
![](http://f.cl.ly/items/462Q1S101A2h2I2B2C3j/Screen%20Shot%202014-02-07%20at%2010.18.43%20AM.png)
4. Add a useful title (and optionally, a desription) describing your changes and click "Send pull request."  
![](http://f.cl.ly/items/2m3F442l1r371O1q0s47/Screen%20Shot%202014-02-07%20at%2010.35.30%20AM.png)
6. You're done! It's now up to the original owener to approve your changes. 

###Exercise
Our course notes are stored in a GitHub repository! https://github.com/HackerYou/web_dev_full_time 

Visit the repo and create your own fork and local clone of the notes.  Set up the upstream branch so you can check for updates on the fly. From now on, you'll be getting the notes here instead of having them emailed to you.

**Bonus:** Make a helpful edit or fix a typo in the course notes and submit a pull request for you fix!
