#!/usr/bin/env python
# coding: utf-8

# In[ ]:


#Tanisha Zaman #100908884

old_result = 0
operation_line = """
Here are the available inputs:
For addition: '+' or 'add' or 'plus'
For subtraction: '-' or 'subtract' or 'minus'
For multiplication: '*' or 'times' or 'multiply'
For division: '/' or 'divide'
For exponents: '**' or 'raise' or 'exponent'
To exit: 'stop' or 'exit'
"""

while True:
     
    num1 = input("Please enter first number: ")
    if num1 in ['exit','stop']:
        print("Goodbye!")
        break
    print(operation_line)     
    
    opp = input("Please enter the operation name or symbol: ")
    if opp in ['exit','stop']:
        print("Goodbye!")
        break
    
    num2 = input("Please enter second number: ")
    if num2 in ['exit','stop']:
        print("Goodbye!")
        break
    
    num1 = int(num1)
    if num2:
        num2 = int(num2)
    else:
        num2 = old_result
        
    if opp in ['+', 'add', 'plus']:
        if num2 == "":
            num2 = old_result
            result = old_result+num1
        result = num1+num2
        print("The sum of", num1, 'and', num2, 'is', float(result))
        
    elif opp in ['-', 'subtract', 'minus']:
        if num2 == "":
            num2 = old_result
            result = old_result-num1
            print("The difference between", old_result, 'and', num1, 'is', float(result))
        else:
            result = num1-num2
            print("The difference between", num1, 'and', num2, 'is', float(result))
            
    elif opp in ['x', '*', 'multiply', 'times']:
        if num2 == "":
            num2 = old_result
            result = old_result*num1
            print("The product of", old_result, 'and', num1, 'is', float(result))
        else:
            result = num1*num2
            print("The product of", num1, 'and', num2, 'is', float(result))
            
    elif opp in ['/', 'divide']:
        if num2 == 0:
            print("No dividing by zero")
            continue
        if num2 == "":
            num2 = old_result
            result = old_result/num1
            print("The quotient of", old_result, 'and', num1, 'is', float(result))
        else:
            result = num1/num2
            print("The quotient of", num1, 'and', num2, 'is', float(result))
            
    elif opp in ['**', 'raise', 'exponent']:
        if num2 == "":
            num2 = old_result
        if num2 <0:
            result = 1
            for x in range(abs(num2)):
                result *= (1/num1)
            print("The base of", num1, "to the power of", num2, 'is', float(result))
        else:
            result = 1
            for x in range(num2):
                result *= num1
            print("The base of", num1, "to the power of", num2, 'is', float(result))   
            
    else:
        print("This operation is not possible")
        
    old_result = result

