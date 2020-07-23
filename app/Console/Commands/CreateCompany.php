<?php

namespace App\Console\Commands;

use App\Company;
use Illuminate\Console\Command;

class CreateCompany extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:company {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a company which can be used for users';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        Company::create([
            "name" => $this->argument('name')
        ]);
        $this->info('Company '.$this->argument('name').' has been created');
    }
}
