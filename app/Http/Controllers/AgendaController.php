<?php

namespace App\Http\Controllers;

use App\Http\Requests\AgendaRequest;
use App\Models\Agenda;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgendaController extends Controller
{
    private function getAgenda()
    {
        return Agenda::latest()->get();
    }

    private function getAgendaPerPage($perPage)
    {
        return Agenda::latest()->paginate($perPage);
    }

    public function userAgenda()
    {
        return Inertia::render("Agenda", [
            'pages' => PageGeneratorController::getPage('Agenda', 'Agenda', 'agenda'),
            'agenda' => $this->getAgendaPerPage(8),
            'allAgenda' => $this->getAgenda(),
        ]);
    }

    public function userShowAgenda(Agenda $agenda, Request $request)
    {
        $agendaDetail = $agenda->find($request->id);

        return Inertia::render('DetailAgenda', [
            'agenda' => $agendaDetail,
            'pages' => PageGeneratorController::getPage('Detail Agenda', 'Agenda', 'show.agenda'),
        ]);
    }

    public function index()
    {
        return Inertia::render("Admin/Agenda/Agenda", [
            'pages' => PageGeneratorController::getPage('Dashboard Agenda', 'Agenda', 'dashboard.agenda'),
            'agenda' => $this->getAgendaPerPage(8),
            'allAgenda' => $this->getAgenda(),
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Agenda/Tambah', [
            'pages' => PageGeneratorController::getPage('Tambah Agenda', 'Agenda', 'dashboard.agenda.create'),
        ]);
    }

    public function store(AgendaRequest $request)
    {
        Agenda::create($request->validated());

        return redirect()->route('dashboard.agenda')->with('message', 'Data agenda berhasil ditambahkan.');
    }

    public function show(Agenda $agenda, Request $request)
    {
        $agendaDetail = $agenda->find($request->id);

        return Inertia::render('Admin/Agenda/Detail', [
            'agenda' => $agendaDetail,
            'pages' => PageGeneratorController::getPage('Detail Agenda', 'Agenda', 'dashboard.agenda.show'),
        ]);
    }

    public function edit(Agenda $agenda, Request $request)
    {
        $agenda = $agenda->find($request->id);

        return Inertia::render('Admin/Agenda/Edit', [
            'agenda' => $agenda,
            'pages' => PageGeneratorController::getPage('Edit Agenda', 'Agenda', 'dashboard.agenda.edit'),
        ]);
    }

    public function update(AgendaRequest $request, $id)
    {
        $agenda = Agenda::findOrFail($id); // cari data berdasarkan id

        $agenda->update($request->validated()); // update data yang lolos validasi

        return redirect()->route('dashboard.agenda')->with('message', 'Data agenda berhasil diupdate.');
    }

    public function destroy(Agenda $agenda, Request $request)
    {
        $agenda = Agenda::find($request->id);

        $agenda->delete();

        return redirect()->route('dashboard.agenda')->with('message', 'Data agenda berhasil dihapus!');
    }
}
