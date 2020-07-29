user_points = []

#Question 1
def question_1_1():
    print("Humans and chimpanzees share roughly how much DNA?")
    print(" A) 70% \n B) 98% \n C) 9% \n D) 38%")
    user_answer=input("Your answer: ")
    if user_answer=="B" or user_answer=="b" or user_answer== "98%" or user_answer== "98":
        user_points.append(1)
        print("You are right!")
    else:
            print("You are wrong :c")
            user_points.append(0)


def question_1_2():
    import os
    os.chdir(r'C:\Users\majab\Desktop\QUizapp\QuizApp-answers\QuizApp-answers\answers')
    cwd = os.getcwd()
    filename = '1.txt'
    with open(filename) as f_obj:
        answers = f_obj.read()
        answer_to_check = input("Your answer: ")
        if answer_to_check in answers:
            print("You are right!")
        else:
            print("You are wrong :c")

question_1_2()
