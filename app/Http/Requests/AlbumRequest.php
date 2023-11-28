<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AlbumRequest extends FormRequest
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
            'gambar' => 'required|file|mimes:jpeg,png,jpg,gif|max:2048',
        ];
    }

    public function messages()
    {
        return [
            'nama.required' => 'Kolom nama harus diisi.',
            'nama.string' => 'Format kolom nama tidak valid.',
            'nama.max' => 'Panjang kolom nama tidak boleh melebihi 255 karakter.',

            'gambar.required' => 'gambar harus diunggah.',
            'gambar.image' => 'File harus berupa gambar.',
            'gambar.mimes' => 'Format gambar tidak valid. Gunakan format jpeg, png, jpg, atau gif.',
            'gambar.max' => 'Ukuran gambar tidak boleh melebihi 2 MB.',
        ];
    }
}
