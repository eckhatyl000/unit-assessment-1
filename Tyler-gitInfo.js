/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "Git is a distributed version control system designed to track changes in source code during software development. It allows developers to collaborate, manage, and maintain different versions of their codebase efficiently.";

console.log(gitDefinition);


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "GitHub is a web-based platform that provides hosting for software development and version control using Git. It offers collaboration features, such as issue tracking, code review, and project management, allowing developers to work together on projects and contribute to open-source software.";

console.log(gitHubDefinition);


//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "The 'git init' command is used to initialize a new Git repository. It sets up the necessary Git configuration files and directory structure, allowing you to start tracking changes and using version control for your project.";

console.log(gitInitDefinition);


//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = "The 'git clone' command is used to create a copy of a remote Git repository on your local machine. It downloads the entire repository, including its history and branches, allowing you to work on the project, make changes, and contribute back to the original repository if needed.";

console.log(gitCloneDefinition);


//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = "The 'git status' command is used to display the current state of your working directory. It shows information about modified, staged, and untracked files, as well as which branch you are on and if there are any commits to be pushed or pulled. It helps you understand the differences between your working directory and the most recent commit.";

console.log(gitStatusDefinition);


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = "The 'git add' command is used to stage changes in your working directory for the next commit. It adds modified or new files to the staging area, preparing them to be included in the next commit. This allows you to selectively choose which changes you want to include in a commit.";

const gitAddCode = "git add .";

console.log(gitAddDefinition);
console.log(gitAddCode);


//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = "The 'git commit' command is used to create a new snapshot of the changes in your working directory and save it to the project's history. It records the changes you've staged with 'git add' and assigns a unique identifier to the new commit, allowing you to track and reference specific versions of your code.";

const gitCommitCode = 'git commit -m "initial commit"';

console.log(gitCommitDefinition);
console.log(gitCommitCode);



//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "The 'git push' command is used to upload your local repository changes to a remote repository. It transfers commits from your local machine to the remote repository, synchronizing the project's history and ensuring that both repositories have the same state. This allows you to share your work with others and collaborate on projects.";

console.log(gitPushDefinition);
