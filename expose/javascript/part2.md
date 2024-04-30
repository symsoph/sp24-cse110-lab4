1. What will happen at line 12 and why? If the code causes an error, explain why.
   - In Line 12, the console prints 3 because that is the final value of ```i``` which represents iterating through the entire length of the ```prices``` array. 
2. What will happen at line 13 and why? If the code causes an error, explain why.
   - At Line 13, the code prints ```150``` because that is the last calculated value of ```discountedPrice``` once the ```for``` loop exits.  
3. What will happen at line 14 and why? If the code causes an error, explain why. 
   - At line 14, the code returns ```150``` because that is the last and most recent value of the variable ```finalPrice```. 
4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
   - This function returns the array of discounted prices; however, we are not able to see anything "returned" because the ```return``` statement does not print to the console. 

5. What will happen at line 12 and why?  If the code causes an error, explain why.
   - The code causes an error because at line 12, ```i``` was declared as a ```let``` and is being called outside the scope of the for loop. ```i``` does not exist outside the for loop.
6. What will happen at line 13 and why? If the code causes an error, explain why. 
   - The code causes an error because at line 13, ```discountedPrice``` was declared as a ```let``` and is being called outside the scope of the for loop. ```discountedPrice``` does not exist outside the for loop. 
7.  What will happen at line 14 and why? If the code causes an error, explain why. 
    - At line 14, the console prints ```150``` because that is the most recent value of ```finalPrice```, and we are able to access ```finalPrice``` because it is in the scope of the entire function. 
8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
   - This function returns the array of discounted prices; however, we are not able to see anything "returned" because the ```return``` statement does not print to the console. 

9. What will happen at line 11 and why? If the code causes an error, explain why. 
   - The code causes an error because at line 11, ```i``` was declared as a ```let``` and is being called outside the scope of the for loop. 
10. What will happen at line 12 and why? If the code causes an error, explain why.
    - At line 12, the code prints 3 because that is the unchanged value of the ```const``` called ```length```. 
11. What will this function return? Give a brief explanation. If the code causes an error, explain why. 
    -  This function returns the array of discounted prices. Yes, this array has values that were pushed despite ```discounted``` being a ```const```; however, we are not able to see anything "returned" because the ```return``` statement does not print to the console. 

12. Given the above Object, write the notation for:  (These should be in your part2.md)
  - Accessing the value of the name property in the student object
    - ```alert(student.name);```
  - Accessing the value of the Grad Year property in the student object
    - ```alert(student['Grad Year']);```
  - Calling the function for the greeting property in the student object
    - ```alert(student.greeting());``` 
  - Accessing the name property of the object in the Favorite Teacher property in student
    - ```alert(student['Favorite Teacher'].name); ```
  - Access index zero in the array of the courseLoad property of the student object
    - ```alert(student.courseLoad[0]);```

13. Arithmetic
- '3' + 2 is ```'32'```
- '3' - 2 is ```1```
- 3 + null is ```3```
- '3' + null is ```'3null'```
- true + 3 is ```4```
- false + null is ```0```
- '3' + undefined is ```'3undefined'```
- '3' - undefined is ```NaN```
1.  Comparison
- '2' > 1 is ```true```
- '2' < '12' is ```false```
- 2 == '2' is ```true```
- 2 === '2' is ```false```
- true == 2 is ```false```
- true === Boolean(2) is ```true```
- Explain the difference between the == and === operators.
  - The double equal signs converts values to numbers, so '2' is the integer 2 and thus 2 == 2 is true whereas the triple === is a strict equality check without type conversion. 

16. in js file
17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
    - The result of the function ```modifyArray``` is to return the modified array whose elements are double the value of the original array elements.  I arrived at this result by swapping the return statement in line 6 with ```console.log``` in order to confirm my hypothesis. I trace from the function header and parameters to the return statement.  I found that we iterate through the parameter array and use the callback function ```doSomething``` to double the array element.  Then we push the doubled element into the new array which is returned at the end. 
18. in js file
19. The output was:
```
1
4
3
2
```