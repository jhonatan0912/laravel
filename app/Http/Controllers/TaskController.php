<?php

namespace App\Http\Controllers;

use App\Http\Requests\TaskRequest;
use App\Models\Task;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $tasks = Task::where('user_id', $user->id)->get();
        return response()->json(['tasks' => $tasks]);
    }

    public function records()
    {
        $user = Auth::user();
        dd($user);
        $tasks = Task::list();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaskRequest $request)
    {
        $task = new Task();
        $task->name = $request->name;
        $task->description = $request->description;
        $task->completed = $request->completed ?? false;
        $task->priority = $request->priority;
        $task->user_id = Auth::id();

        $task->save();
        return response()->json($task, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function show(Task $task)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function edit(Task $task)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, string $taskId)
    {
        $task = Task::find($taskId);

        if (!$task) {

            return response()->json(
                ['message' => 'Task not found'],
                404
            );
        }

        $task->name = $request->name;
        $task->description = $request->description;
        $task->completed = $request->completed ?? false;
        $task->priority = $request->priority;

        $task->save();

        return response()->json(
            ['message' => 'Task updated successfully'],
            200
        );
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Task  $task
     * @return \Illuminate\Http\Response
     */
    public function destroy(string $taskId)
    {
        $task = Task::find($taskId);

        if (!$task) {

            return response()->json(
                ['message' => 'Task not found'],
                404
            );
        }

        $task->delete();

        return response()->json(
            ['message' => 'Task deleted successfully'],
            200
        );
    }

}
