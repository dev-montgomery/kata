6kyu Closed Brackets String

https://www.codewars.com/kata/64b771989416793927fbd2bf/train/javascript

The function is given a string consisting of a collection of three characters:

"(" open bracket
")" closed bracket
"J" Joker, which can be replaced by "(", ")" or ""
Develop a solution to determine if the given string represents a proper sequence of parenthesis; return True / False. Each open bracket on the left should have a corresponding closed bracket on the right. For example "(()())" is a proper sequence, "()(()" is not a proper sequence. The presence of Jokers adds an extra level of difficulty to the analysis because each "J" makes three possibilities to consider. An empty string is considered a valid string because it does not contain unbalanced brackets.

Examples
closed_brackets("(J))") ➞ True
# J can be replaced with (

closed_brackets("(") ➞ False
# Unbalanced open bracket.

closed_brackets("") ➞ True
# Empty string is a valid sequence.

closed_brackets("()J(") ➞ False
# Not possible to balance the brackets.

closed_brackets("J") ➞ True
# J can be replaced with an empty string.

closed_brackets(")(") ➞ False
# Numbers of ( and ) are the same but they are in the wrong places.

closed_brackets("J)(J") ➞ True
# First 'J' can be replaced with '(' and second with ')'

closed_brackets("()") ➞ True
# A proper sequence of balanced brackets.

Input Constraints
0 <= len(s) <= 100