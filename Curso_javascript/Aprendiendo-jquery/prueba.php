
<?php

// Ejemplo de una clase PHP simple
class Persona
{
  private $nombre;
  private $edad;

  public function __construct($nombre, $edad)
  {
    $this->nombre = $nombre;
    $this->edad = $edad;
  }

  public function getNombre()
  {
    return $this->nombre;
  }

  public function getEdad()
  {
    return $this->edad;
  }

  public function saludar()
  {
    return "Hola, mi nombre es " . $this->nombre . " y tengo " . $this->edad . " años.";
  }
}

// Crear una instancia de la clase Persona
$persona = new Persona("Juan", 25);

// Llamar a un método de la instancia de Persona
echo $persona->saludar();

?>
