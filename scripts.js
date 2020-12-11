let randomNames = ["Andrew", "Bob", "Clive",  "David", "Edgar", "Kenez" ];
randomNames.forEach(name => {
    $('#myList').append('<li>'+name+'</li>')
});

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };

$('#myPage').append('<h2>'+additionalBlock.title+'</h2>', '<p>'+additionalBlock.text+'</p>' );