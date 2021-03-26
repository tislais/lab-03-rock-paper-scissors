## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps


# My Rock Paper Scissors Plan

## HTML Setup
1) Introduction and rules blurb
    - This could be an unordered list
2) Inputs for rock, paper, and scissors
    - Radio buttons with corresponding images inside label tags
3) Play button
4) Blub that summarizes results of last game
    - You threw "paper" and machine threw "scissors", you lose.
5) Feedback showing results of Wins, Losses, and Draws
    - Three separate divs holding each value


## Initialize State
1) wins: 0
2) losses: 0
3) draws: 0
4) computer throw: rock, paper, or scissors

## What Happens When
1) User clicks Play
    - randomly pick a computer throw
    - get the user's choice
    - compare user's choice with computer's selection
    - display results of the match: who won?
    - increment the corresponding outcome's totals (win loss or draw)
    - display new values for outcome totals
    - reset displays and show playagain button?