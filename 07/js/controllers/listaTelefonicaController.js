angular.module("listaTelefonica")
	.controller("listaTelefonicaController", function ($scope, $http, contatosApi) {
	$scope.app = "Lista Telefônica";
	
	// Carregar lista de uma API
	var carregarContatos = function () {
		$http.get("https://jsonplaceholder.typicode.com/users");
		// .then(function (response) {
		// 	$scope.contatos = response.data;
		// });
	}

	$scope.operadoras = [
		{ nome: "Oi", codigo: 31, categoria: "Celular", preco: 2 },
		{ nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1 },
		{ nome: "Tim", codigo: 41, categoria: "Celular", preco: 3 },
		{ nome: "Claro", codigo: 21, categoria: "Celular", preco: 1 },
		{ nome: "GVT", codigo: 25, categoria: "Fixo", preco: 2 },
		{ nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 4 }
	];
	$scope.adicionarContato = function (contato) {
		// $scope.contatos.push(angular.copy(contato));
		$scope.contatos.push(contato);
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if(!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function(contatos) {
		// Percorre o array de contatos, e retorna true se algum estiver selecionado
		return contatos.some(function (contato) {
			return contato.selecionado;
		});
	};
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
	carregarContatos();
});