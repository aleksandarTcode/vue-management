<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user' => $this->user->name,
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->descritpion,
            'created_at' => $this->created_at->diffForHumans(),
        ];
    }
}
