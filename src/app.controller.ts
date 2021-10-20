import { Controller, Get, Post, Param, Body, Put } from '@nestjs/common';
import { AppService } from './app.service';
import Vehicules from '../vehicules.json';
var fs = require('fs');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getReturnAll(): object {
    return Vehicules;
  }

  @Get('/vehicules')
  getReturnVehicules(): object {
    return Vehicules;
  }

  @Get('/vehicules/:type')
  getReturnVehiculesType(@Param() params): object {
    return Vehicules.filter(vehicule => vehicule.type === params.type);
  }

  @Get('/vehicules/:type/:id')
  getReturnVehiculesTypeId(@Param() params): object {
    return Vehicules.filter(vehicule => (vehicule.type === params.type) && (vehicule.id === parseInt(params.id)));
  }

  @Post('/vehicules/:type/')
  PostVehicules(@Body() body, @Param() param): void {
     
    fs.readFile('./vehicules.json', 'utf-8', function(err, data) {
      if (err) throw err
    
      body.id = parseInt(body.id);
      body.type = param.type
      var arrayOfObjects = JSON.parse(data)
      arrayOfObjects.push(body)
    
      console.log(arrayOfObjects)
      fs.writeFileSync('./vehicules.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
         if (err) throw err
      })
    })
  }

  @Put('/vehicules/:type/:id')
  PutVehicules(@Body() body, @Param() params): void {
    
  }

 
}
