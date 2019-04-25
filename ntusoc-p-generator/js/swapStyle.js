$(function() {

    var randomColor = (function lol(m, s, c) {
        return s[m.floor(m.random() * s.length)] +
            (c && lol(m, s, c - 1));
    })(Math, '89ABCDE', 4);

    var gradient = "radial-gradient(circle at top left, #" + randomColor +" 20%, rgba(255,255,255,0.5))";

    $(".bg-svg").css({
        backgroundImage: gradient,
    });

    $(".title-speaker-host").css({
        color: '#' + randomColor
    });

});