function ValideRecherche() {
  //recuperer l'element html
  let form = document.getElementById("form_recherche");
	
	if (form)
	{
		
		form.addEventListener('submit', function(event) {
			let input_textbox = event.currentTarget.querySelector('input');

			//verifie si la valeur est renseignee
			if(!input.value){
				console.log("caca");
				event.preventDefault();
				$('#myModal').modal('show');
			}
		});
	}
}
ValideRecherche();