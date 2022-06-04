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
    const json = '{"email":"josemariazumira+joseGER@gmail.com", "senha": "1234"}';
    const data = JSON.parse(json);

    console.log(JSON.stringify(data))
    alert("teste")
    $.ajax({
        url: "http://localhost:8080/login",
        type: "post",
        data: JSON.stringify(data),
        success: function (response) {
            $("#conteudo").text(JSON.stringify(response.token));
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

$('#botao').click(login)