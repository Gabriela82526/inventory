<?php

namespace Database\Seeders;

use App\Models\inventory\Category;
use Illuminate\Database\Seeder;

class CategoriesSeeder extends Seeder
{
     /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                "id" => 1,
                "store_id" => 1,
                "name" => "3X3",
                "description" => "Cubos de 3x3"
            ]
        ];

        // DB::table('roles')->truncate();

        foreach ($data as $fact){
            Category::create($fact);
        }
    }
}
