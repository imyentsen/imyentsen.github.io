$(function() {

    var randomColor = (function lol(m, s, c) {
        return s[m.floor(m.random() * s.length)] +
            (c && lol(m, s, c - 1));
    })(Math, '789ABCD', 4);

    var gradient = "radial-gradient(circle at top left, #" + randomColor +" 25%, rgba(40,40,40,0.3) 90%, rgba(0,0,0,0.0) 95%)";

    $(".bg-svg").css({
        backgroundImage: gradient,
    });

    $(".title-speaker-host").css({
        color: '#' + randomColor
    });

});