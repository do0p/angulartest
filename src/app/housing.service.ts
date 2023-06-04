import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'https://t8qwr7rqia.execute-api.eu-central-1.amazonaws.com/default/getHousings?TableName=housings';

  constructor() { }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const json = await data.json();
    return json.Items ?? [];
  }
  
  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data: HousingLocation[] = await this.getAllHousingLocations();
    return data.find(l => l.id == id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
