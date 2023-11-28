<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AgendaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nama' => 'required|string|max:255',
            'tema' => 'required|string',
            'isi' => 'required|string',
            'tanggal' => 'required',
            'author' => 'required|string|max:255',
        ];
    }

    public function messages()
    {
        return [
            'nama.required' => 'Kolom nama harus diisi.',
            'nama.string' => 'Format kolom nama tidak valid.',
            'nama.max' => 'Panjang kolom nama tidak boleh melebihi 255 karakter.',

            'tema.required' => 'Kolom tema harus diisi.',
            'tema.string' => 'Format kolom tema tidak valid.',

            'isi.required' => 'Kolom isi harus diisi.',
            'isi.string' => 'Format kolom isi tidak valid.',

            'tanggal.required' => 'Kolom tanggal harus diisi.',

            'author.required' => 'Kolom author harus diisi.',
            'author.string' => 'Format kolom author tidak valid.',
            'author.max' => 'Panjang kolom author tidak boleh melebihi 255 karakter.',
        ];
    }
}
