(function() {
    var names = ["Manish", "Jack Ma", "Jackson", "Jack", "Aman", "Rajesh", "Larry", "Prem", "jasime", "Jim"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();