# Git Excercise insights
1. After first commit, in .git tree we could see four objects, represented by long SHA1 hashes. These represent the tree, blob and commit that we did. the most recent commit it added at the end just before info and pack.

2. By using "git cat-file -t <commit id>", we understand whether it is tree, blob, commit. While applying the recent commit id it returned that it represent commit. While for 'git cat-file -p <commit-id>' commmand, it returns commit object which contains a pointer to the tree, along with metadata for the commit, such as the author and commit message. As this is our very first commit, it doesn't have a parent. The next commit we make will point to our initial commit as the parent.

3. As we apply `git ls-files -s` command, it returns the list of files which are in staging are along with its file permission which is written in 6 bytes, commit id which is 40 digit hexadecimal SHA1 hashes and the file name.

4. By `git reset` commmand, we can go back to the previos commit by mentioning its commit id. it can be of 2 types hard reset and soft reset.

5. When we want to store any incomplete work in particular branch for some time we use stash, we give `git stash save "stash-name"`command where stash name represent the desciption where as if we want to apply any particular stash we use its index value which is mentioned in stash list. Similar kind of approach is used for unstash as well, we use index number which we want to unstash.

6. Tags are a great way to version our code,it allows to tag specific points in a repository’s history and return to them at later points in time. Lightweight tags are nothing but the pointer to the specific commit. Lightweight tag don't provide you the meta data.   

7. Annotated tag are contrast to lightweight tags. These tags are stored as a full object in the Git database. These tags  contain the name of the person who created the tag, email, date and it even includes a message.With the help of  `git show tag-name` command we get all the details regarding differece between the two commit. It even displays commit id.

8. After merging branch and master file, when we check our git log we get list of commits which has been done in master as well as in branch along with there commit id, author, date and time, and commit message. It even shows particular commit has been done in which branch.

9. While changes are done in the same sample.txt on same position in two different branches, it returns conflict. 

10. By using different git log commands we get different type of output. By using oneline we get all commit details in oneline and by using since command we get detail of all the commit which comes under that filter.

11. By echo 'Hello, World!' | git hash-object --stdin command we get 40 digit hexadecimal code for the same

** My  echo 'blob 14\0Hello, World!' | openssl sha1 didn't got executed. need help in this section

12. The 'git revert' command is used to record some new commits to reverse the effect of some earlier commits 




