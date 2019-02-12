console.log('client.js sourced');

$( document ).ready( onReady );

function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('click', addJoke)
    getJokes()
}
function getJokes(){
    $.ajax({
        method: 'GET',
        url: '/joke'
    }).then(function(taco){
        $('#jokeTable').empty()
        taco.forEach(function(ingredient){
        $('#jokeTable').append(`
        <tr>
            <td>${ingredient.whoseJoke}</td>
            <td>${ingredient.jokeQuestion}</td>
            <td>${ingredient.punchLine}</td>
        </tr>
        `)
    })
})
}
function addJoke(){
    let newJoke = {
        whoseJoke: $('#whoseJokeIn').val(),
        jokeQuestion: $('#questionIn').val(),
        punchLine: $('#punchlineIn').val()
   }
   console.log(newJoke)
        $.ajax({
            method: 'POST',
            url: '/joke',
            data: newJoke
        }).then(function(){
           console.log('post complete.')
           getJokes()
        })
}

