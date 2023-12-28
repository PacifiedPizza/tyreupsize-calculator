
var odiameter = 0;
var ocircumstance = 0;
var ndiameter = 0;
var ncircumstance = 0;

function Calculate1() {
    var owidth = parseFloat($("#owidth").val());
    var oratio = parseFloat($("#oratio").val());
    var orimsize = parseFloat($("#orimsize").val());

    if (owidth != "" && oratio != "" && orimsize != "") {
        odiameter = (((((owidth * oratio) / 100) * 2) / 25.4) + orimsize) * 25.4;

        $("#odiameter").val(odiameter.toFixed(2));

        ocircumstance = odiameter * 22 / 7;
        $("#ocircumstance").val(ocircumstance.toFixed(2));
    } else {
        alert("Enter all details.");
    }
}

function Calculate2() {
    var nwidth = parseFloat($("#nwidth").val());
    var nratio = parseFloat($("#nratio").val());
    var nrimsize = parseFloat($("#nrimsize").val());

    if (nwidth != "" && nratio != "" && nrimsize != "") {
        ndiameter = (((((nwidth * nratio) / 100) * 2) / 25.4) + nrimsize) * 25.4;

        $("#ndiameter").val(ndiameter.toFixed(2));

        ncircumstance = ndiameter * 22 / 7;
        $("#ncircumstance").val(ncircumstance.toFixed(2));
    } else {
        alert("Enter all details.");
    }
}

var circ = 0;

function Difference() {
    if (ndiameter > 0 && odiameter > 0 && ncircumstance > 0 && ocircumstance > 0) {
        var diff = ndiameter - odiameter;
        $("#difference").val(diff.toFixed(2));

        circ = ncircumstance - ocircumstance;
        $("#difference1").val(circ.toFixed(2));

        var per = circ / ocircumstance * 100;
        $("#percent").val(per.toFixed(2));

        $(".value").html(circ.toFixed(2) + "mm");
        $(".percentage").html(per.toFixed(2) + "%");

    } else {
        alert("Enter all details");
    }
}


