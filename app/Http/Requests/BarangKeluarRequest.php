<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BarangKeluarRequest extends FormRequest
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
            'barang_id' => 'required|string|max:255',
            'jumlah_keluar' => 'required|string',
            'keterangan' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'barang_id.required' => 'Kolom barang_id harus diisi.',
            'barang_id.string' => 'Format kolom barang_id tidak valid.',
            'barang_id.max' => 'Panjang kolom barang_id tidak boleh melebihi 255 karakter.',

            'jumlah_keluar.required' => 'Kolom jumlah keluar harus diisi.',
            'jumlah_keluar.string' => 'Format kolom jumlah keluar tidak valid.',

            'keterangan.required' => 'Kolom keterangan harus diisi.',
            'keterangan.string' => 'Format kolom keterangan tidak valid.',
        ];
    }
}
