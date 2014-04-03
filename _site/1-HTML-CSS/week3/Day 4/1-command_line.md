# Command Line

The command line (terminal in Mac, powershell in PC) is a tool that allows us to interact directly with the operating system. The Operating System's user interface is pretty much just a layer on top of the command line. We can do tasks that the UI does through the command line (open files, edit files, delete files, run programs etc.). 

## Why should a front-end developer learn to use the command line?

* Tools like Git (we'll be learning this next) rely on you being comfortable with the command line. Git allows you to take snapshots of your work and retrieve them after you've royally messed up.
* Production servers (i.e. your web host) don't have a user interface so knowing how to use the command line will be handy.
* Many tools that speed up development rely on the command line (e.g. Grunt, Saas/LESS, etc.).
* You'll feel like a hacker and that's super awesome.

## Opening the command line

If you are using a Mac then just open up the application called "Terminal". If you're using a Windows PC then follow these instructions:

1. Click Start
2. Click "Search programs and files"
3. Type "powershell" and hit enter

What you should see is a relatively blank window. The terminal (Mac) has a white background and the powershell (Windows) has a blue/black background.

## The prompt

Think of the command line as a direct interface to your computer. You give it one instruction, it **R**eads it, **E**xecutes it, **P**rints a response (when appropriate) and then returns/**L**oops (ready to do the next task). This behaviour is called REPL (Read, Evaluate/Execute, Print, Loop) and you will see it again when we get to programming.

The place where you put your instruction is called the **Prompt**. In the powershell you'll see `PS C:\Users\your-username>` and then a blinking curser. In the terminal you will see `$` and a blinking cursor. From now on we'll refer to the prompt with a dollar sign (`$`) - don't actually type the `$`.

## Command Line Tools

The command line gives us access to many small tools that can be used to perform tasks. Each tool is a piece of software much like Sublime Text or Google Chrome, the big difference is that these tools are tiny.

In the command prompt we usually type: `$ <tool_name> <arguments>`. options, and Arguments are used to set various options and are optional for some tools.

## See where you are

`$ pwd` this is a tool that says "present working directory", which is equivalent to asking "Where am I?". Go ahead try it!

Notice that the paths are shown using forward slashes `/`.  Here are some examples:

`/`  => "root" directory
`/Users` => directory called "Users" which is a sub-directory of the / "root" directory.
`/Users/lukeskywalker` => lukeskywalker is a subdirectory of /Users

## Make a directory

`$ mkdir HYCommandLine` means make a directory (folder) called "HYCommandLine". `mkdir` is the name of the tool and `HYCommandLine` is an argument or piece of information that we give the tool. 

## Moving around

`$ cd HYCommandLine` means go inside the "HYCommandLine" directory. Try that, then confirm that you're there by typing `pwd`. 

There are a few helpful shortcuts so that you don't have to type too much. `.` is the current directory, `..` is the parent directory, and `~` is home. So `cd ..` means change up to the parent directory.

**Relative Paths**:
The "paths" that you saw above which started with the `/` are absolute paths, meaning that they start at the root directory. Relative paths omit the `/` and use the current location as a starting point. So `lukeskywalker/Obi-Wan` means the subdirectory called "Obi-Wan" inside the directory called "lukeskywalker" which is a subdirectory of the current directory that I am in.

## Manual

The command line has a manual tool `man` which gives us information about all of the command line tools. Type `$ man ls` to see this in action. What we're doing is asking for the manual for the tool `ls`.

> You will see a colon at the bottom of the screen and you will not be able to type anything. Don't panic, this means you are in a command line program that extends beyond the view/window. To see more press the **Enter** key. To exit press the **q** key.

**Exercise 1**:
Use the man pages to explore the following command-line tools: `ls`, `cp`, `mv`, `rm`, `rmdir`, `touch`, `cat`. The "command-line" folder has all of the files and folders that you will need for this exercise.

* Change directory into `command-line`
* List the directory contents of `command-line`
* Change directory into `dir5` and move back up to `command-line`
* Move `move-me.txt` to the `files` directory
* Remove `delete-me.txt` and `delete-me-too.txt`
* Remove the directory `remove-me`
* Create a text file called `create-me.txt`
* List the hidden contents of the directory `secrets`
* Print the contents of the files in the directory `samples`


**Exercise 2**:

Watch Star Wars from your command line! Just type the following in the prompt and press enter: `telnet towel.blinkenlights.nl`.

After doing this exercise you might want a few minutes of your life back...