import random

def play_game():
    print("Welcome to Rock, Paper, Scissors!")
    print("Enter your choice: 1 for Rock, 2 for Paper, 3 for Scissors")

    # Choices dictionary for mapping user input to choices
    choices = {1: "Rock", 2: "Paper", 3: "Scissors"}

    user_score = 0
    computer_score = 0

    while True:
        # Get user choice
        user_choice = int(input("Your choice: "))
        
        # Check if user choice is valid
        if user_choice not in choices.keys():
            print("Invalid choice. Please enter a valid choice.")
            continue

        # Generate computer's random choice
        computer_choice = random.randint(1, 3)
        
        print(f"You chose: {choices[user_choice]}")
        print(f"Computer chose: {choices[computer_choice]}")

        # Determine the winner
        if user_choice == computer_choice:
            print("It's a tie!")
        elif (user_choice == 1 and computer_choice == 3) or \
             (user_choice == 2 and computer_choice == 1) or \
             (user_choice == 3 and computer_choice == 2):
            print("Congratulations! You won!")
            user_score += 1
        else:
            print("Oops! You lost!")
            computer_score += 1

        print(f"Scores: User - {user_score}, Computer - {computer_score}")

        play_again = input("Do you want to play again? (y/n): ")
        if play_again.lower() != "y":
            break

    print("Game over. Final score summary:")
    print(f"User: {user_score} wins")
    print(f"Computer: {computer_score} wins")
    print("Thanks for playing!")

# Start the game
play_game()
