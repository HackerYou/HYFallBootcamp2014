# Git and Github

Version control allows us to keep a record of what has changed in our directories/files so that we can revert back if needed. Git is a Version Control System. With Git we:

1. take snapshots of our folder whenever we want (every type of file is saved, it doesn't have to be code)
2. can "time travel" between snapshots
3. can easily collaborate with team members on code
4. can easily share our code with others by using Github.com

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

## Git Status

To see which files are in the working directory and which are in the staging area just type `$git status`.

## Git push

Your Git repository can be shared with others by putting it on Github. 

1. Create a free account on Github.com
2. Follow the instructions for creating a repository: https://help.github.com/articles/create-a-repo but skip the "Create a README for your repository" section.
3. From the command line navigate to your local repository
4. Add the Github repository as a remote `$ git remote add origin https://github.com/<username>/<repo-name>.git`
5. Push your code `git push origin master -u`

That's it now you have a local (your machine) repository and a remote (Github) repository!

**Workflow from now on**:

1. Work (code, write a story, photoshop images, etc.)
2. Add files to staging area when you're ready (`$ git add <file>`)
3. Take a snapshot (`$ git commit -m "a useful commit message here"`)
4. `$ git push` to update Github


## Learning more

Atlassian has created a great resource for learning Git. Look through it to learn a few tricks that might come in handy:

https://www.atlassian.com/git/tutorial/git-basics

## The golden rule of source control

**Commit Early - Commit Often** is a rule that you should go by from now on. Your goal for the rest of the day is to turn every project that you have into a Git repository and push it to Github. Every project from now on should be a  Git repository. Make Git part of your workflow; commit early and commit often.