export class Argument {
  name: string;
  description: string;
  required: boolean;
  sample: string;
  input: string;

  constructor(name: string, description: string, required: boolean, sample: string) {
    this.name        = name;
    this.description = description;
    this.required    = required;
    this.sample      = sample;
  }
}