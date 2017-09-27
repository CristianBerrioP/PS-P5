import Ember from 'ember';

export default Ember.Controller.extend({

text: "",
textFilas: "",
division: null,
logaritmos: null,
promedio: null,
varianza: null,
desviacion:null,
logVeryShort:null,
logShort:null,
logMedium:null,
logLong:null,
logVeryLong:null,
veryShort:null,
short:null,
medium:null,
long:null,
veryLong:null,

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
     /*document.getElementById('sumasInput').disabled = true;
     document.getElementById('sumasInput').hidden = true;
     document.getElementById('cuadInput').hidden = false;
     document.getElementById("resultado1").innerHTML = "Sumatoria de X= " + (sumX);
     document.getElementById("resultado2").innerHTML = "Sumatoria de Y= " + sumY;
     document.getElementById("resultado3").innerHTML = "Numero de datos= " + tam;*/
   },

   metodo_calcularLog: function() {
     var div = this.get('division');
     var log = [];
     for (var i = 0; i < div.length; i++) {
       log[i] = Math.round(Math.log(div[i])*10000)/10000;
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
     prom = Math.round(prom*10000)/10000;
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
     vari = Math.round(vari*10000)/10000;
     this.set('varianza',vari);
   },

   metodo_calcularDesviacion: function(){
     var vari = this.get('varianza');
     var desvi = 0;
     desvi = Math.sqrt(vari);
     desvi = Math.round(desvi*10000)/10000;
     this.set('desviacion',desvi);
   },

   metodo_cacularRangos: function(){
     var logvs = 0;
     var logs = 0;
     var logm = 0;
     var logl = 0;
     var logvl = 0;
     var prom = this.get('promedio');
     var desvi = this.get('desviacion');
     var dif = 2*desvi;
     logvs = prom - dif;
     logs = prom - desvi;
     logm = prom;
     logl = prom + desvi;
     logvl = prom + dif;
     logvs = Math.round(logvs*10000)/10000;
     logs = Math.round(logs*10000)/10000;
     logm = Math.round(logm*10000)/10000;
     logl = Math.round(logl*10000)/10000;
     logvl = Math.round(logvl*10000)/10000;
     this.set('logVeryShort',logvs);
     this.set('logShort',logs);
     this.set('logMedium',logm);
     this.set('logLong',logl);
     this.set('logVeryLong',logvl);
   },

   metodo_calcularExpRangos: function() {
     var logvs = this.get('logVeryShort');
     var logs = this.get('logShort');
     var logm = this.get('logMedium');
     var logl = this.get('logLong');
     var logvl = this.get('logVeryLong');
     var vs = Math.exp(logvs);
     var s = Math.exp(logs);
     var m = Math.exp(logm);
     var l = Math.exp(logl);
     var vl = Math.exp(logvl);
     vs = Math.round(vs*10000)/10000;
     s = Math.round(s*10000)/10000;
     m = Math.round(m*10000)/10000;
     l = Math.round(l*10000)/10000;
     vl = Math.round(vl*10000)/10000;
     this.set('veryShort',vs);
     this.set('short',s);
     this.set('medium',m);
     this.set('long',l);
     this.set('veryLong',vl);
   }
}
});
