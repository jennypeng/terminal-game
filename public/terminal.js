$(document).ready(function($) {
    $('#terminal').terminal(function(command, term) {
    	term.echo("Hello World!");
    	term.flush();
    	if (command == 'test') {
        	term.echo("you just typed 'test'");
    	} else {
        	term.echo('unknown command');
    	}
    }, { prompt: '>', name: 'test' });
});