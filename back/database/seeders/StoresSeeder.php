<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\settings\Store;

class StoresSeeder extends Seeder
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
                "store_name" => "EDURUBIK'S",
                "slogan" => "Eslogan de la tienda",
                "nit" => "12345678-9",
                "cell_phone" => "12345678",
                "landline" => "12345678",
                "email" => "EDURUBIK@gmail.com",
                "country" => "Colombia",
                "department" => "DC",
                "city" => "Bogotá",
                "address" => "Bogotá",
                "state" => 1
            ]
        ];

        // DB::table('stores')->truncate();

        foreach ($data as $fact){
            Store::create($fact);
        }
    }
}