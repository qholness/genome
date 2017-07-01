var clearchildren = function(divobj) {
            while (divobj.hasChildNodes()) {
                divobj.removeChild(divobj.lastChild);
            }
        }