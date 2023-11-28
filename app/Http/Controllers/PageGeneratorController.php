<?php

namespace App\Http\Controllers;


class PageGeneratorController extends Controller
{
    public static function getPage($title, $name, $url)
    {
        return [
            'title' => $title,
            'name' => $name,
            'url' => $url,
        ];
    }
}
