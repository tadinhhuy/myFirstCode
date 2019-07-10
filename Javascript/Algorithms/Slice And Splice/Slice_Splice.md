Code Explanation:

Our goal is to take all of the elements from arr1 and insert them into arr2 starting with index position n. At the same time we must ensurethat neither arr or arr2 have been mutated.

Using the slice() function we can create an exact replica of arr2 and assign the result of the operation to a variable, newArr.

Now that we have an array that we can mutate on, we can iterate through every item in the first array. For each item in the first array we can use the splice() function to insert the item into index n of newArr.

We increment the index n by one. This will ensure that every item from the arr1 is inserted into newArr in the proper index position.

Finally, we return the newArr and end the function.
