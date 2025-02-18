<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BarangRequest extends FormRequest
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
            'nama_barang' => 'required|string|max:255',
            'kode_barang' => 'required|string',
            'jenis_barang' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'nama_barang.required' => 'Kolom nama barang harus diisi.',
            'nama_barang.string' => 'Format kolom nama barang tidak valid.',
            'nama_barang.max' => 'Panjang kolom nama barang tidak boleh melebihi 255 karakter.',

            'kode_barang.required' => 'Kolom kode_barang harus diisi.',
            'kode_barang.string' => 'Format kolom kode_barang tidak valid.',

            'jenis_barang.required' => 'Kolom jenis_barang harus diisi.',
            'jenis_barang.string' => 'Format kolom jenis_barang tidak valid.',
        ];
    }
}
