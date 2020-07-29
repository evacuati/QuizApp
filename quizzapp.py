user_points = []

#Question 1
def question_1():
    print("Humans and chimpanzees share roughly how much DNA?")
    print(" A) 70% \n B) 98% \n C) 9% \n D) 38%")
    user_answer=input("Your answer: ")
    if user_answer=="B" or user_answer=="b" or user_answer== "98%" or user_answer== "98":
        user_points.append(1)
        print("You are right!")
    else:
            print("You are wrong :c")
            user_points.append(0)


question_1()
