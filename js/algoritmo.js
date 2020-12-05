function calculo(){
    var tipo_prestamo = document.getElementById('tipo_prestamo');
    var valor = tipo_prestamo.options[tipo_prestamo.selectedIndex].text;
    var porcentaje=0;
    if(valor === 'Hipotecario'){
        document.getElementById('porcentaje').value = 0.13;
        document.getElementById('porcentaje').innerText = '13%';
    }else if(valor === 'Vivienda'){
        document.getElementById('porcentaje').value = 0.12;
        document.getElementById('porcentaje').innerText = '12%';
    }else if(valor === 'Sueldo'){
        document.getElementById('porcentaje').value = 0.8;
        document.getElementById('porcentaje').innerText = '8%';
    }else if(valor === 'Negocio'){
        document.getElementById('porcentaje').value = 0.10;
        document.getElementById('porcentaje').innerText = '10%';
    }
}

function procesar(){
    var tipo_prestamo = document.getElementById('tipo_prestamo').value;
    var importe = document.getElementById('importe').value;
    var porcentaje = document.getElementById('porcentaje').value;
    var nombre = document.getElementById('nombre').value;
    var cuotas = document.getElementById('cuotas').value;
    if(porcentaje === "" || importe === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ingrese los valores faltantes',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
        document.getElementById('Titulo').innerText = "Datos Desconocidos";
    }else if(nombre === "" || cuotas === ""){
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ingrese los valores faltantes',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true
        })
        document.getElementById('Titulo').innerText = "Datos Desconocidos";
    }else{
        document.getElementById('Titulo').innerText = "Datos Ingresados";
        if(tipo_prestamo === 1){
            tipo_prestamo = 'Hipotecario';
            total_interes = importe * porcentaje;
            total_pagar = Number(importe) + Number(total_interes);
            document.getElementById('Nombre').innerText = nombre;
            document.getElementById('Tipo_prestamo').innerText = tipo_prestamo;
            document.getElementById('Importe').innerText = importe;
            document.getElementById('Cuotas').innerText = cuotas;
            document.getElementById('Interes').innerText = total_interes;
            document.getElementById('Total').innerText = total_pagar;
            document.getElementById('total_interes').value = Math.round(total_interes);
            document.getElementById('total_pagar').value = Math.round(total_pagar);
        }else if(tipo_prestamo === 2){
            tipo_prestamo = 'Vivienda';
            total_interes = importe * porcentaje;
            total_pagar = Number(importe) + Number(total_interes);
            document.getElementById('Nombre').innerText = nombre;
            document.getElementById('Tipo_prestamo').innerText = tipo_prestamo;
            document.getElementById('Importe').innerText = importe;
            document.getElementById('Cuotas').innerText = cuotas;
            document.getElementById('Interes').innerText = total_interes;
            document.getElementById('Total').innerText = total_pagar;
            document.getElementById('total_interes').value = Math.round(total_interes);
            document.getElementById('total_pagar').value = Math.round(total_pagar);
        }else if(tipo_prestamo === 3){
            tipo_prestamo = 'Sueldo';
            total_interes = importe * porcentaje;
            total_pagar = Number(importe) + Number(total_interes);
            document.getElementById('Nombre').innerText = nombre;
            document.getElementById('Tipo_prestamo').innerText = tipo_prestamo;
            document.getElementById('Importe').innerText = importe;
            document.getElementById('Cuotas').innerText = cuotas;
            document.getElementById('Interes').innerText = total_interes;
            document.getElementById('Total').innerText = total_pagar;
            document.getElementById('total_interes').value = Math.round(total_interes);
            document.getElementById('total_pagar').value = Math.round(total_pagar);
        }else{
            tipo_prestamo = 'Negocio';
            total_interes = importe * porcentaje;
            total_pagar = Number(importe) + Number(total_interes);
            document.getElementById('Nombre').innerText = nombre;
            document.getElementById('Tipo_prestamo').innerText = tipo_prestamo;
            document.getElementById('Importe').innerText = importe;
            document.getElementById('Cuotas').innerText = cuotas;
            document.getElementById('Interes').innerText = total_interes;
            document.getElementById('Total').innerText = total_pagar;
            document.getElementById('total_interes').value = Math.round(total_interes);
            document.getElementById('total_pagar').value = Math.round(total_pagar);
        }
    }
}

function borrar(){
    document.getElementById('nombre').value = '';
    document.getElementById('importe').value = '';
    document.getElementById('cuotas').value = '';
    document.getElementById('total_interes').value = '';
    document.getElementById('total_pagar').value = '';

    document.getElementById('Nombre').innerText = '';
    document.getElementById('Tipo_prestamo').innerText = '';
    document.getElementById('Importe').innerText = '';
    document.getElementById('Cuotas').innerText = '';
    document.getElementById('Interes').innerText = '';
    document.getElementById('Total').innerText = '';
}

document.getElementById('tipo_prestamo').addEventListener('select', calculo)
document.getElementById('procesar').addEventListener('click', procesar)
document.getElementById('borrar').addEventListener('click', borrar)
