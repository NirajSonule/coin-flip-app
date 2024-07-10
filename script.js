let win_output = document.getElementById('win_text');
        let lose_output = document.getElementById('lose_text');

        const score = (JSON.parse(localStorage.getItem('score'))) || {
            wins: 0,
            lose: 0
        };
        
        function playGame(guess){        
            
            let display = document.getElementById('display');

            const randomNumber = Math.random();
            const result = randomNumber < 0.5 ? 'Heads' : 'Tails';
            
            console.log(guess === result ? 'You Won' : 'You Lose');
            
            function output () {
                if (guess === result) {
                    let result = score.wins++;
                    display.innerHTML = "You Won";
                }
                else {
                    let result = score.lose++;
                    display.innerHTML = "You Lose";
                }
            }
    
            output();
            
            win_output.innerHTML = score.wins;
            lose_output.innerHTML = score.lose;

            localStorage.setItem('score', JSON.stringify(score));

            console.log(score);
        }
        

        win_output.innerHTML = score.wins;
        lose_output.innerHTML = score.lose;
        