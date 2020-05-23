# 03 JavaScript: Password Generator

The check box on the page was chosen for consistency and intuitive usage of this page.

The methodology used to generate password is the following:

1) To keep the code clean, character codes are fetched from fromCharCode() function

2) When any criteria is chosen, all characters applicable to that criteria will be chosen

3) then a for loop is run to pick AT RANDOM an index position fromCharCode() list to use in the password

Default settings: By default the password will be 8 characters long and all lowercase letters

If the user enters a non numberic number password length, we would 
still generate a password that is 8 characters long.


