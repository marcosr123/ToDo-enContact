export class Todo {
  id: string;
  texto: string;

  constructor(todoTexto: string) {
    this.texto = todoTexto;
    this.id = Date.toString();
  }
}
