<?php

class Fonts {

    private static $fonts = [];

    public static function get_all() {
        if (empty(self::$fonts)) {
            self::$fonts = [
                "Default",
                "Roboto Mono",
                "Source Code Pro",
                "IBM Plex Mono",
                "PT Mono",
                "Ubuntu Mono",
                "Cousine",
                "Fira Mono",
                "JetBrains Mono",
                "Anonymous Pro",
                "Noto Sans Mono",
                "Fira Code",
                "Martian Mono",
                "Overpass Mono",
            ];
        }
        return self::$fonts;
    }

    public function __construct($id=false) {
        $fonts = self::get_all();
        $this->total = count($fonts);
        if ($id === false) {
            $id = @$_COOKIE['font'] ? $_COOKIE['font'] : 0;
        }
        $this->valid = false;
        if ((int)$id == $id) {
            $id = (int)$id;
            if ( $id >= 0 && $id < $this->total) {
                $this->valid = true;
            }
        }
        if (! $this->valid) {
            $id = 0;
        }
        setcookie("font", $id, time()+31556926);
        $this->font = $fonts[$id];
    }

    public function getCSS($dynamic=false) {
        if (isset($this->font) && $this->font != 'Default') {
            $filename = preg_replace('/ /', '_', $this->font);
            return '<link href="/css/fonts/'.$filename.'.css" rel="stylesheet">'
             . '<style>#console { font-family: "'.$this->font.'", "Noto Emoji", monospace }</style>';
        }
        elseif($dynamic) {
            return '<style>#console { font-family: "Courier New", Courier, "Noto Emoji", monospace }</style>';
        }
        return '';
    }
}

?>
