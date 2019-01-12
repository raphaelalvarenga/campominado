$(document).ready(function() {
    var html = "";
    var celula = 0;
    var vetorCampos = [];
    var objCampos = {};
    var totalDeCelulas = 100;
    var totalDeMinas = 30;
    var celulasComMinas = [];
    var totalDeLinhas = 0;
    
    
    //Sorteia os campos que terão bombas
    for (var x = 0; x < 30; x++) {
        var campoSorteado = parseInt(Math.random() * 100);
        
        while (celulasComMinas.indexOf(campoSorteado) != -1) {
            campoSorteado = parseInt(Math.random() * 100);
        }
        celulasComMinas.push(campoSorteado);

    }
    
    
    //Declara os campos
    for (var x = 0; x < 100; x++) {
        if (celulasComMinas.indexOf(x) == -1) {
            objCampos = {
                indice: x,
                temBomba: false
            };
        } else {
            objCampos = {
                indice: x,
                temBomba: true
            };
        }
        vetorCampos.push(objCampos);
        objCampos = {};
    }
    
    //Cria as tags <tr> e <td>
    for (var x = 0; x < 10; x++) {
        totalDeLinhas++;
        html += "<tr>";
        for (var y = 0; y < 10; y++) {
            if (vetorCampos[celula].temBomba == true) {
                html += "<td id = 'td" + celula + "'></td>";
            } else {
                html += "<td id = 'td" + celula + "'></td>";
            }
            celula++;
        }
        html += "</tr>";
    }
    $("#tblCampo").html(html);
    console.log($("#td1").text());
    celula = 0;
    
    //Popula as tags <td>
    for (var x = 0; x < 100; x++) {
        
        //Se tiver bombas
        if (vetorCampos[x].temBomba == true) {
            $("#td" + x).text("X").css("backgroundColor", "red");
        }
        
        //Se não tiver bombas
        else {
            var linha = $("#td" + x).parent().index();
            var coluna = $("#td" + x).index();
            var regiao = "";
            
            if (linha == 0 && coluna == 0) {//É a quina superior esquerda?
                regiao = "quinaSuperiorEsquerda";
            } else if (linha == 0 && coluna == 9) {//É a quina superior direita?
                regiao = "quinaSuperiorDireita";
            } else if (linha == 9 && coluna == 0) {//É a quina inferior esquerda?
                regiao = "quinaInferiorEsquerda";
            } else if (linha == 9 && coluna == 9) {//É a quina inferior direita?
                regiao = "quinaInferiorDireita";
            } else if (linha == 0) {//É a primeira linha?
                regiao = "primeiraLinha";
            } else if (linha == 9) {//É a última linha?
                regiao = "ultimaLinha";
            } else if (coluna == 0) {//É a primeira coluna?
                regiao = "primeiraColuna";
            } else if (coluna == 9) {//É a última coluna?
                regiao = "ultimaColuna";
            } else {
                regiao = "campoDoMeio";
            }
            
            camposSemBombas(regiao);
            
        }
    }
    
    function camposSemBombas(regiao) {
        var bombasEmVolta = 0;
        var indiceAtual = $("#td" + x).attr("id");
//        console.log(x);
        indiceAtual = indiceAtual.replace("td", "");
        
        var indice1 = parseInt(indiceAtual) - 11;
        var indice2 = parseInt(indiceAtual) - 10;
        var indice3 = parseInt(indiceAtual) - 9;
        var indice4 = parseInt(indiceAtual) - 1;
        var indice5 = parseInt(indiceAtual) + 1;
        var indice6 = parseInt(indiceAtual) + 9;
        var indice7 = parseInt(indiceAtual) + 10;
        var indice8 = parseInt(indiceAtual) + 11;
        
        //É a quina superior esquerda?
        switch(regiao) {
            case "quinaSuperiorEsquerda":
                console.log($("#td1").text());
                console.log($("#td10").text());
                console.log($("#td11").text());
                
                if ($("#td" + indice5).text == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice7).text == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice8).text == "X") {
                    bombasEmVolta++;
                }
                
//                console.log("Campo 0: " + bombasEmVolta + " em volta");
//                console.log("Testou quina superior esquerda");
                break;
            
            case "quinaSuperiorDireita":
//                console.log("Testou quina superior direita");
                break;
                
            case "quinaInferiorEsquerda":
//                console.log("Testou quina inferior esquerda");
                break;
                
            case "quinaInferiorDireita":
//                console.log("Testou quina inferior direita");
                break;
                
            case "primeiraLinha":
//                console.log("Testou primeira linha");
                break;
                
            case "ultimaLinha":
//                console.log("Testou última linha");
                break;
                
            case "primeiraColuna":
//                console.log("Testou primeira coluna");
                break;
                
            case "ultimaColuna":
//                console.log("Testou última coluna");
                break;
                
            case "campoDoMeio":
//                console.log("Testou campo do meio");
                break;
        }
        
        //É a quina superior direita?
        
        
        //É a quina inferior esquerda?
        
        
        //É a quina inferior direita?
        
        
        //É a primeira linha?
        
        //É a última linha?
        
        //É a primeira coluna?
        
        //É a última coluna?
        
        
        
        
        
        
        
        
        //Caso seja um campo que está no meio
//                var bombasEmVolta = 0;
//                var indiceAtual = $(this).attr("id");
//
//                indiceAtual = indiceAtual.replace("td", "");
//
//                for (var x = -11; x < -8; x++) {
//                    var indiceAnterior = parseInt(indiceAtual) + x;
//
//                    if (indiceAnterior >= 0) {
//                        if (vetorCampos[indiceAnterior].temBomba == true) {
//                            bombasEmVolta++;
//                        }
//                    }
//                }
//
//                for (var x = -1; x < 2; x + 2) {
//
//                }

    }
    
    
});