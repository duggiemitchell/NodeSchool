var a = 1, b = 2, c = 3; // global variable

(function firstFunction(){
    var b = 5, c = 6; //b cannot be accessed outside of firstFrunction but can be accessed by functions defined inside firstFunction

    (function secondFunction(){
        var b = 8;
        console.log("a: "+a+", b: "+b+", c: "+c);
//  a: 1, b: 8,c: 6 printed to console
        (function thirdFunction(){
            var a = 7, c = 9; // a & c variable is created inside thirdFunction scope, changes made here do not affect the old "a" & "b" variables
            (function fourthFunction(){
                var a = 1, c = 8;

            })();
        })();
    })();
})();
