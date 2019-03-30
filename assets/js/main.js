$(document).ready(function () {
    console.log("Stayed at the ace hotel!");

    $('#search').on('click', function() {

    });

    $('#clearResults').on('click', function() {
        event.preventDefault();
        $('#results').empty();
        console.log('Results have been cleared.');
    });

});