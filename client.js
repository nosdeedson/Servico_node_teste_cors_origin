let token = '';
function consultarRestaurantes() {
    alert("teste")
    $.ajax({
        url: "http://localhost:8080",
        type: "get",

        success: function (response) {
            $("#conteudo").text(response);
        }
    });
}

function login() {
    const json = '{"email":"", "senha": ""}';
    const data = JSON.parse(json);
    $.ajax({
        url: "http://localhost:8080/login",
        type: "post",
        data: JSON.stringify(data),
        success: function (response) {
            token = response.token;
            $("#conteudo").text(token);
        }
    });
}

function endpoints() {
    // alert("teste")
    $.ajax({
        url: "http://localhost:8080/root",
        type: "get",

        success: function (response) {
            $("#conteudo").text(JSON.stringify(response));
        }
    });
}

function loginHeroku() {
    const json = '{"email":"", "senha": ""}';
    const data = JSON.parse(json);
        
    $.ajax({
        url: "https://ejs-algafood.herokuapp.com/login",
        type: "post",
        data: JSON.stringify(data),
        success: function (response) {
            $("#conteudo").text(JSON.stringify(response.token));
            token = response.token;
            // listaUsuarios(token);
        }
    });

}

function listaUsuarios() {
    $.ajax({
        url: "https://ejs-algafood.herokuapp.com/usuarios",
        type: "get",
        headers: {"Authorization": "Bearer " + token},
        success: function (response) {
            $("#conteudo").text(JSON.stringify(response._embedded.usuários));
        }
    });
}


$('#botao').click(loginHeroku)
$('#botaoUsuario').click(listaUsuarios)