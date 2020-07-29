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
    os.chdir(r'C:\Users\majab\Desktop\QUizapp\QuizApp-questions\QuizApp-questions\questions')
    filename = open("1.txt","r")
    print(filename.read())
    os.chdir(r'C:\Users\majab\Desktop\QUizapp\QuizApp-answers\QuizApp-answers\answers')
    cwd = os.getcwd()
    filename = open("1.txt","r")
    print(filename.read())
    filename = "1.txt"
    filename.split("/n")
    with open(filename) as f_obj:
        answers = f_obj.read(1)
        answer_to_check = input("Your answer: ")
        if answer_to_check in answers:
            
            print("You are right!")
        else:
            print("You are wrong :c")



def whers_star():
      import os
      os.chdir(r'C:\Users\majab\Desktop\QUizapp\QuizApp-questions\QuizApp-questions\questions')
      filename = open("1.txt","r")
      print(filename.read())
      os.chdir(r'C:\Users\majab\Desktop\QUizapp\QuizApp-answers\QuizApp-answers\answers')
      filename = open("1.txt","r")
      print(filename.read())
      filename = "1.txt"
      filename.splitlines("/n")
      with open(filename) as f_obj:
        answer_to_check = input("Your answer: ")
        if "*" in f_obj.readline():
             if answer_to_check in f_obj.readlines(1):
                 print("You are right!")
             else:
                 print("You are wrong!")
        elif "*" in f_obj.readlines(2):
             if answer_to_check in f_obj.readlines(2):
                 print("You are right!")
             else:
                 print("You are wrong!")
        elif "*" in f_obj.readlines(3):
             if answer_to_check in f_obj.readlines(3):
                 print("You are right!")
             else:
                 print("You are wrong!")
        else:
            if answer_to_check in f_obj.readlines(4):
                 print("You are right!")
            else:
                 print("You are wrong!")

whers_star() 
