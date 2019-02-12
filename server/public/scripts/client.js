console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('.addJokeButton').on('click', addJoke)
}
function addJoke(){
    let newJoke = {
        whoseJoke: $('whoseJokeIn').val(),
        jokeQuestion: $('questionIn').val(),
        punchLine: $('punchlineIn').val()
   }
        $.ajax({
            method: 'POST',
            url: '/joke',
            data: newJoke
        })
}

