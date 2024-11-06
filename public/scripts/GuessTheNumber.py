#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import random

num = random.randint(1,100)

while True: 
    guess = int(input("Guess the number: "))
    
    if guess<num:
        print("This guess is too low!")
    elif guess>num:
        print("This guess is too high!")
    else:
        print("Correct!", num, "is the right answer!")
        break
    

