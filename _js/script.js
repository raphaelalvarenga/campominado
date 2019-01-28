var html = "";
var celula = 0;
var vetorCampos = [];
var objCampos = {};
var totalDeCelulas = 100;
var totalDeMinas = 30;
var celulasComMinas = [];
var totalDeLinhas = 0;

$(document).ready(function() {
    
    //Sorteia os campos que terão bombas
    for (var x = 0; x < 30; x++) {
        var campoSorteado = parseInt(Math.random() * 100);
        
        while (celulasComMinas.indexOf(campoSorteado) != -1) {
            campoSorteado = parseInt(Math.random() * 100);
        }
        celulasComMinas.push(campoSorteado);
    }
    
    
    //Cria o objeto e adiciona ao vetor de objetos
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
    
    //Cria as tags <tr> e <td> com os campos que possuem bombas
    for (var x = 0; x < 10; x++) {
        totalDeLinhas++;
        html += "<tr>";
        for (var y = 0; y < 10; y++) {
            if (vetorCampos[celula].temBomba == true) {
                html += "<td id = 'td" + celula + "'><span class = 'textosCampos'>X</span></td>";
            } else {
                html += "<td id = 'td" + celula + "'></td>";
            }
            celula++;
        }
        html += "</tr>";
    }
    $("#tblCampo").html(html);

    celula = "";
    
    
    //Popula as tags <td> que não possuem bombas
    for (var x = 0; x < 100; x++) {
        
        //Se não tiver bombas
        if (vetorCampos[x].temBomba == false) {
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
                if ($("#td" + indice5).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice7).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice8).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
            
            case "quinaSuperiorDireita":
                if ($("#td" + indice4).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice6).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice7).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "quinaInferiorEsquerda":
                if ($("#td" + indice2).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice3).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice5).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "quinaInferiorDireita":
                if ($("#td" + indice1).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice2).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice4).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "primeiraLinha":
                if ($("#td" + indice4).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice5).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice6).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice7).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice8).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "ultimaLinha":
                if ($("#td" + indice1).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice2).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice3).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice4).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice5).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "primeiraColuna":
                if ($("#td" + indice2).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice3).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice5).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice7).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice8).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "ultimaColuna":
                if ($("#td" + indice1).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice2).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice4).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice6).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice7).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
                
            case "campoDoMeio":
                if ($("#td" + indice1).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice2).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice3).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice4).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice5).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice6).text() == "X") {
                    bombasEmVolta++;
                }
                
                if ($("#td" + indice7).text() == "X") {
                    bombasEmVolta++;
                }

                if ($("#td" + indice8).text() == "X") {
                    bombasEmVolta++;
                }
                $("#td" + x).html("<span class = 'textosCampos'>" + bombasEmVolta + "</span>");
                break;
        }
    }
    
    //=============== E V E N T O S ==================
    
    $("#tblCampo").on("click", "td", function() {
        var texto = $(this).text();
        
        if (texto == "X") {
            for (var x = 0; x < 100; x++) {
                if (vetorCampos[x].temBomba == true) {
                    $("#td" + x).children("span").css("color", "red");
                }
            }
        } else {
            $(this).children("span").css("color", "black");
        }
    });
    
    
    
});