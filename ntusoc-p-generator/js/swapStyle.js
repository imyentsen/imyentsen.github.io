$(function() {

    var randomColor = (function lol(m, s, c) {
        return s[m.floor(m.random() * s.length)] +
            (c && lol(m, s, c - 1));
    })(Math, '89ABCDE', 4);

    $(".bg-svg").css({
        backgroundColor: '#' + randomColor,
    });

    $(".title-speaker-host").css({
        color: '#' + randomColor
    });

});

