<?php
$pasta = __DIR__; // Caminho da pasta atual onde o arquivo PHP está localizado

// Obtém a lista de arquivos na pasta
$arquivos = scandir($pasta);

foreach ($arquivos as $arquivo) {
    if ($arquivo !== '.' && $arquivo !== '..') {
        $novoNome = str_replace(' ', '_', strtolower($arquivo));
        echo "$arquivo\n";
    }
}
?>