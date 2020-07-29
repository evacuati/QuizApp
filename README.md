### TODO: Change README.md before exposing the project

# Git fundamentals:

1. Master branch should be the latest stable (tested and working properly) version of the project!
2. The idea of branches is so that the developers (Karo & Maja) can work parallelley without interrupting each other or easily revert changes if mistakes were made.
Workflow:
* create a branch (copy the state of the master branch)
* add new features/changes-> test them if everything works fine
* once you're sure the task is done, works properly and doesn't destroy anything previously done, start a merge/pull request
* ask your collaborator to test your changes and approve
```python
collaborator = "Maja" if my_name()=="Karolina" else "Karolna"
```
**Warning** - you might experience a merge conflict (TODO: Learn what it is, when one could occur, how to resolve).
3. The green button on GitHub interface exposes https or ssh address which is used to clone the repository and initialise git on your device - go to the directory where you want to have your project and type the following command using a terminal
```bash
git clone {github_url}
```
when you're in the directory with the project, you can use git commands, for instance:
```bash
git status
```
4. How to upload (TODO: Learn the relevant commands):
* Create a branch and switch (use self-explanatory names on what you are going to do)
* Work on your changes (do the coding)
* Add files to git
* Commit the changes (this kinda saves them so you can go back to work from another device)
* Create a merge/pull request
* Merge to the master branch


If you have any questions, use the Google search. If this doesn't help, you can ask your buddy wiksla :)
