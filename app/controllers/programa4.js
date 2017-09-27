import Ember from 'ember';

export default Ember.Controller.extend({

text: "",
textFilas: "",
division: null,
logaritmos: null,
promedio: null,
varianza: null,
desviacion:null,

actions:{
  metodo_leerArchivo: function(evt){
    var vector_archivos = evt.target.files[0];
    var texto_contenido = "";
    var esto = this;
    if (vector_archivos) {
      var objeto_lector = new FileReader();
      objeto_lector.onload = function(objeto_evento){
        texto_contenido = objeto_evento.target.result;
        document.getElementById("texto").innerHTML = texto_contenido;
        esto.set('text', texto_contenido);
      };
      objeto_lector.readAsText(vector_archivos);
      }else {
       alert("Failed to load file");
      }
   },

   metodo_dividirLOCMetodos: function() {
     var texto = this.get('text');
     var texto_sin_enter = texto.replace(/\n/g, '¬');
     var texto_filas = texto_sin_enter.split("¬");
     var texto_numeros = 0;
     var div = [];
     for (var i = 0; i < texto_filas.length; i++) {
       texto_numeros=texto_filas[i].split(",");
       div[i] = texto_numeros[1]/texto_numeros[2];
     }
     this.set('division',div);
   },

   metodo_calcularLog: function() {
     var div = this.get('division');
     var log = [];
     for (var i = 0; i < div.length; i++) {
       log[i] = Math.log(div[i]);
     }
     this.set('logaritmos',log);
   },

   metodo_calcularProm: function() {
     var log = this.get('logaritmos');
     var prom = 0;
     var suma = 0;
     var size = log.length;
     for (var i = 0; i < log.length; i++) {
       suma = suma + log[i];
     }
     prom = suma / size;
     this.set('promedio',prom);
   },

   metodo_calcularVarianza: function() {
     var prom = this.get('promedio');
     var log = this.get('logaritmos');
     var suma = 0;
     var vari = 0;
     var num = 0;
     var denom = log.length - 1;
     for (var i = 0; i < log.length; i++) {
       num = log[i]-prom;
       num = Math.pow(num,2);
       suma = suma + num;
     }
     vari = suma / denom;
     this.set('varianza',vari);
   },

   metodo_calcularDesviacion: function(){
     var vari = this.get('varianza');
     var desvi = 0;
     desvi = Math.sqrt(vari);
     this.set('desviacion',desvi);
   },

   metodo_cacularRangos: function(){
     var vs = 0;
     var s = 0;
     var m = 0;
     var l = 0;
     var vl = 0;
     var prom = this.get('promedio');
     var desvi = this.get('desviacion');
     vs = Math.log()
   }
}
});
