<?php

namespace App\Imports;

use App\Excels;
use App\Models\Voucher;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithStartRow;
// use Maatwebsite\Excel\Concerns\FromCollection;


//use Maatwebsite\Excel\Concerns\ToCollection;
class ImportExcel implements WithStartRow, ToCollection
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function startRow(): int
    {
        return 2;
    }

    public function collection(Collection $rows)
    {
        // dd($rows);
        foreach ($rows as $row) {
            $voucher_type = isset($row[1]) ? $row[1] : "";
            $voucher_no = isset($row[2]) ? $row[2] : "";
            $cheque_no = isset($row[3]) ? $row[3] : "";
            $voucher_name = isset($row[4]) ? $row[4] : "";

            $data = new Voucher();
            $data->voucher_type = $voucher_type;
            $data->voucher_no = $voucher_no;
            $data->cheque_no = $cheque_no;
            $data->voucher_name = $voucher_name;

            $data->save();
        }
    }
}
