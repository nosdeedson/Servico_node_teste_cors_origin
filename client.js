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

function login(email, senha) {
    const json = `{"email": "${email}", "senha": "${senha}"}`;
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

function loginHeroku( email, senha) {
    const json = `{"email": "${email}", "senha": "${senha}" }`;
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

let requestTo = ''
let requestHeroku = false;

function limpar(){
    requestHeroku = false
    requestTo = ''
    $('#email').val('');
    $('#senha').val('');
    $("#heroku").prop("checked").checked = false;
}

function listaUsuarios() {
    alert(requestTo)
    $.ajax({
        url: requestTo,
        type: "get",
        headers: {Authorization : "Bearer " + token},
        success: function (response) {
            $("#conteudo").text(JSON.stringify(response._embedded.usuários));
            limpar()
        }
    });
}

$('#botao').click(function() {
    const email = $('#email').val();
    const senha = $('#senha').val();
    requestHeroku = $("#heroku").prop('checked')
    if(requestHeroku){
        alert("heroku")
        requestTo = 'https://ejs-algafood.herokuapp.com/usuarios'
        loginHeroku(email, senha)
    }else{
        alert('local')
        requestTo = 'http://localhost:8080/usuarios'
        login(email, senha);
    }
    
})
$('#botaoUsuario').click(listaUsuarios)
