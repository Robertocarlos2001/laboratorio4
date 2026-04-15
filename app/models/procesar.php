<?php
header("Content-Type: application/json");

$nombre = $_POST['nombre'] ?? '';
$edad   = intval($_POST['edad'] ?? 0);
$sueldo = floatval($_POST['sueldo'] ?? 0);

$sueldo_neto     = $sueldo - ($sueldo * 0.10);
$sueldo_neto_fmt = number_format($sueldo_neto, 2);

if ($edad >= 18 && $sueldo_neto > 450.00) {
    $respuesta = [
        "status"  => true,
        "mensaje" => "Felicidades $nombre, su perfil es apto. Su sueldo neto tras impuestos será de $$sueldo_neto_fmt."
    ];
} else {
    $respuesta = [
        "status"  => false,
        "mensaje" => "Solicitud rechazada. El perfil no cumple con los criterios mínimos de edad o ingresos (Ingreso calculado: $$sueldo_neto_fmt)."
    ];
}

echo json_encode($respuesta);
?>
