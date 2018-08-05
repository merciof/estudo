function Cilindro() {
    this._nome = null;
    this._dado = null;

}

Cilindro.prototype.getNome = function() {
    return this._nome;
}

Cilindro.prototype.setNome = function(nome) {
    this._nome = nome;
}