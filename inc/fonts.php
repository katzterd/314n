<?php

class Fonts {

    private static $fonts = [];

    public static function get_all() {
        if (empty(self::$fonts)) {
            self::$fonts = array(
                array("name" => "Default"),
                array("name" => "Roboto Mono"),
                array("name" => "Source Code Pro", "q" => "wght@400;700"),
                array("name" => "IBM Plex Mono"),
                array("name" => "PT Mono", "q" => "wght@400;700"),
                array("name" => "Ubuntu Mono"),
                array("name" => "Cousine"),
                array("name" => "Fira Mono", "q" => "wght@400;700"),
                array("name" => "JetBrains Mono"),
                array("name" => "Anonymous Pro"),
                array("name" => "Noto Sans Mono"),
                array("name" => "Fira Code", "q" => "wght@400;700"),
                array("name" => "Martian Mono", "q" => "wght@400;700"),
                array("name" => "Overpass Mono", "q" => "wght@400;700")
            );
        }
        return self::$fonts;
    }

    public function __construct($id=false) {
        $fonts = self::get_all();
        $this->total = count($fonts);
        if ($id!==false) {
            if ($id >= 0 && $id < $this->total) {
                $this->valid = true;
                setcookie("font", $id, time()+31556926);
                $_COOKIE['font'] = $id;
            }
            else {
                $this->valid = false;
            }
        }
        if (isset($_COOKIE['font']) && isset($fonts[$_COOKIE['font']])) {
            $this->font = $fonts[$_COOKIE['font']];
            if (!isset($this->font['q'])) {
                $this->font['q'] = "ital,wght@0,400;0,700;1,400;1,700";
            }
        }
    }

    public function getCSS($dynamic=false) {
        if (isset($this->font) && $this->font['name'] != 'Default') {
            return '<link href="https://fonts.googleapis.com/css2?family='.str_replace(' ', '+', $this->font['name']).':'.$this->font['q'].'&display=swap" rel="stylesheet">'
             . '<style>#console { font-family: "'.$this->font['name'].'", "Noto Emoji", monospace }</style>';
        }
        elseif($dynamic) {
            return '<style>#console { font-family: "Courier New", Courier, "Noto Emoji", monospace }</style>';
        }
        return '';
    }
}

?>
