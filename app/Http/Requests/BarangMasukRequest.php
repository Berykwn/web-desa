<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BarangMasukRequest extends FormRequest
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
            'jumlah_masuk' => 'required|string',
            'keterangan' => 'required|string',
        ];
    }

    public function messages()
    {
        return [
            'barang_id.required' => 'Kolom barang_id harus diisi.',
            'barang_id.string' => 'Format kolom barang_id tidak valid.',
            'barang_id.max' => 'Panjang kolom barang_id tidak boleh melebihi 255 karakter.',

            'jumlah_masuk.required' => 'Kolom jumlah masuk harus diisi.',
            'jumlah_masuk.string' => 'Format kolom jumlah masuk tidak valid.',

            'keterangan.required' => 'Kolom keterangan harus diisi.',
            'keterangan.string' => 'Format kolom keterangan tidak valid.',
        ];
    }
}
