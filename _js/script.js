$(document).ready(function() {
    var html = "";
    var celula = 0;
    var arrayCampos = [];
    var objCampos = {};
    var totalDeCelulas = 100;
    var totalDeMinas = 30;
    var celulasComMinas = [];
    
    for (var x = 0; x < 30; x++) {
        var campoSorteado = parseInt(Math.random() * 100);

        while (celulasComMinas.indexOf(campoSorteado) != -1) {
            campoSorteado = parseInt(Math.random() * 100);
        }
        
        celulasComMinas.push(campoSorteado);
        
        objCampos = {
            indice: campoSorteado
        };
        
        arrayCampos.push(objCampos);
    }
    
    
    
    
    for (var x = 0; x < 10; x++) {
        html += "<tr>";
        for (var y = 0; y < 10; y++) {
            if (celulasComMinas.indexOf(celula) != -1) {
//                arrayCampos[celula] = {
//                    temBomba: true
//                }
                
//                objCampos = {
//                    temBomba: true
//                };
                html += "<td><span style = 'color: red'>X</span></td>";
            } else {
//                arrayCampos[celula] = {
//                    temBomba: false
//                }
//                objCampos = {
//                    temBomba: false
//                };
                html += "<td>" + celula + "</td>";
            }
//            
            celula++;
        }
    }
//    console.log(arrayCampos);
    $("#tblCampo").html(html);
});