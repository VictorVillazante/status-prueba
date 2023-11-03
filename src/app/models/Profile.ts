export class Profile {
    private _name: string | undefined;
    private _lastName: string | undefined;
    private _country: string | undefined;
    private _imageUrl: string | undefined;
  
    get name(): string | undefined {
      return this._name;
    }
  
    set name(value: string | undefined) {
      this._name = value;
    }
  
    get lastName(): string | undefined {
      return this._lastName;
    }
  
    set lastName(value: string | undefined) {
      this._lastName = value;
    }
  
    get country(): string | undefined {
      return this._country;
    }
  
    set country(value: string | undefined) {
      this._country = value;
    }
  
    get imageUrl(): string | undefined {
      return this._imageUrl;
    }
  
    set imageUrl(value: string | undefined) {
      this._imageUrl = value;
    }
  }