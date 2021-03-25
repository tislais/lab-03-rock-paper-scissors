// IMPORT MODULES under test here:
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('Player throws rock and computer throws paper, player loses.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws rock and computer throws scissors, player wins.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws paper and computer throws rock, player wins.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws paper and computer throws scissors, player loses.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws scissors and computer throws rock, player loses.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'loss';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws scissors and computer throws paper, player wins.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'win';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws rock and computer throws rock, it is a draw.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('rock', 'rock');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws paper and computer throws paper, it is a draw.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('paper', 'paper');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Player throws scissors and computer throws scissors, it is a draw.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 'draw';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = didUserWin('scissors', 'scissors');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});