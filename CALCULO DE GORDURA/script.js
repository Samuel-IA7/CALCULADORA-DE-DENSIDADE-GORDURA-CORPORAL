document
  .getElementById("calcularForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var dbP = parseFloat(document.getElementById("dbP").value);
    var dbABS = parseFloat(document.getElementById("dbABS").value);
    var dbCOXA = parseFloat(document.getElementById("dbCOXA").value);
    var dbTRICEPS = parseFloat(document.getElementById("dbTRICEPS").value);
    var dbSUBESCAPULAR = parseFloat(
      document.getElementById("dbSUBESCAPULAR").value
    );
    var dbSUPRAILIACA = parseFloat(
      document.getElementById("dbSUPRAILIACA").value
    );
    var dbAXILAR = parseFloat(document.getElementById("dbAXILAR").value);
    var idade = parseFloat(document.getElementById("idade").value);

    var somatorio =
      dbP +
      dbABS +
      dbCOXA +
      dbTRICEPS +
      dbSUBESCAPULAR +
      dbSUPRAILIACA +
      dbAXILAR;

    var Dc =
      1.112 -
      0.00043499 * somatorio +
      0.00000055 * Math.pow(somatorio, 2) +
      0.00028826 * idade;

    var gc1 = (4.95 / Dc - 4.5) * 100;
    var gc2 = (4.57 / Dc - 4.142) * 100;

    document.getElementById("resultado").innerHTML =
      "GC1: " + gc1.toFixed(2) + "%, GC2: " + gc2.toFixed(2) + "%";
  });
