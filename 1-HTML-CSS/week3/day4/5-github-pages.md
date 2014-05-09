---
layout: notes
topic: tools
title: GitHub Pages
---

#GitHub Pages
GitHub pages can be used to create websites for you and your projects, hosted directly from your GitHub repository.

You can made a website for your user account, organization or individual projects. You get one site per GitHub account and organization, and unlimited project sites.

##Project site
Let's start with a new site for an individual project. There are two options:

* generate a site with one of the pre-built themes
* create a site from scratch

###Create a site from scratch

1. Head over to GitHub.com and create a new repository including a read me file. **If using an existing repo, skip to step 3.**
1. Clone the repo to make a local copy. Then cd (change directory) into the new repo. 

	```
	$ git clone https://github.com/username/repo-name.git
	$ cd repo-name
	```

1. Create and switch to the gh-pages branch.

	```
	$ git checkout --orphan gh-pages
	```
	`checkout` switches the branch. `--orphan` is referring to an "orphaned" branch.  It's an empty, standalone branch that's disconnected from the branch it was created from, and it starts with no commits. 

	We should get this message to confirm the switch:
	
	```
	Switched to a new branch 'gh-pages'
	```

	You may get an error message saying you don’t have admin privileges, in which case you’ll need to type `sudo` at the start of that command.

1. Add an index.html file if this is a new repository or make a change to your local copy. Then **add**, **commit** and **push** the update via the GUI or command line.

	**NOTE:** We will be pushing our updates to the gh-pages branch, not master.

	In the GitHub GUI, go to the **Branches** tab and ensure gh-pages is selected. In the command line, your push command will be:

	```
	$ git push origin gh-pages
	```

To get our website up and running using [github.com](http://github.com), your files must be pushed to the `gh-pages` branch. However, this does not automatically update/sync your master branch.

Your site can be viewed at **http://username.github.io/repository**.

**NOTE:** You can run `git status` to check which branch you are currently on if using the command line.

### Synching branches

Go to the branch that you want to *update*. In the above exercise, we made the changes to the `gh-pages` branch so we need to switch to `master` to update it.

	$ git checkout master

Bring the current branch up to date with branch containing the changes. Use `rebase`. The below example will take the commits from gh-pages and put it into master.

	$ git rebase gh-pages

Now we have to `push` it into the repository.

	$ git push origin master
		
[Read more about rebasing here.](http://gitready.com/intermediate/2009/01/31/intro-to-rebase.html)


###Site with pre-built theme
1. Go to [github.com](http://github.com) and create a **new repo**.
2. Click on Settings on the right hand side.
3. Scroll down to the GitHub Pages module and select Automatic Page Generator.
4. Use the editor to add content to your index.html. When you're done, click Continue to Layouts.
5. Pick a theme and select Publish. Fin!

Your site url is **http://username.github.io/repository**. It may take a couple of minutes for your page to show up the first time.

###Optional: Make gh-pages the default branch
In the repository, go to the **Settings** page. Then in **Options** in the top section, set the default branch in the dropdown.

###Extra resources & references

* [GitHub Pages](https://pages.github.com/)  
* [Get Started With GitHub Pages (Plus Bonus Jekyll)](http://24ways.org/2013/get-started-with-github-pages/)
* [Easily keep gh-pages in sync with master](http://lea.verou.me/2011/10/easily-keep-gh-pages-in-sync-with-master/)
* [GitHub Help](https://help.github.com/)
* [Intro to rebase](http://gitready.com/intermediate/2009/01/31/intro-to-rebase.html)
