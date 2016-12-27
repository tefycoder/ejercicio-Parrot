
function calcular()
{
	var talking = document.getElementById("talking").value;
	var hora = parseInt(document.getElementById("hora").value);

	var isTalking = true;

	var salida = document.getElementById("salida");

	if(talking == "1")
	{
		isTalking = true;
		// habla
		
	}
	if(talking == "2")
	{
		isTalking = false;
		//no habla
		
	}
	if(isTalking)
	{
		if(hora < 7 || hora>20 )
		{
			//estamos en problemas
			salida.innerHTML = "1";
		
		document.getElementById("mensajes").innerHTML = '<div class="alert_num"><p>Estamos en Problemas</p></div>';
	
		}
		else
		{
			//no estamos en problemas
			salida.innerHTML = "0";

		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger"><p>No Estamos en Problemas</p></div>';
	
		}
	}
	if(!isTalking)
	{
		if(hora <= 23 )
		{
			//no estamos en problemas
			salida.innerHTML = "0";

		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger"><p>No Estamos en Problemas</p></div>';
	
		}

	}

}
