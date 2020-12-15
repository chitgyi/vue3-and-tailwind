<?php

namespace App\Http\Controllers;

use App\Http\Controllers\CustomResponse;
use App\Http\Resources\ModelCollection;
use App\Models\Goods;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GoodsController extends Controller
{
    public function index()
    {
        $goods = Goods::paginate(10);
        $collection = new ModelCollection($goods);
        return CustomResponse::collection($collection);
    }

    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'price' => 'required|numeric',
            'quantity' => 'required|numeric'
        ]);

        if($validator->fails()){
            return CustomResponse::invalid($validator->errors()->toJson());
        }
        
        $goods = Goods::create($validator->validated());
        return CustomResponse::created('Created', $goods);
    }
}
