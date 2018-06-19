function  Stack() {
    this.dataStore=[];

    this.push=function (element) {
        this.dataStore[this.dataStore.length]=element;
    }

    this.pop=function () {
        if (this.dataStore.length<1){
          return null;
        }
       var buffer= this.dataStore[this.dataStore.length-1];
        this.dataStore[this.dataStore.length-1]=null;
        this.dataStore.length--;
        return buffer;
    }
    this.length=function () {
        return this.dataStore.length;
    }
    this.peek=function () {
        var length=this.dataStore.length;
        var buffer=this.dataStore[0];
        for(var i=0;i<length-1;i++){
            this.dataStore[i]=this.dataStore[i+1];
        }
        this.dataStore[length-1]=null;
        this.dataStore.length--;
        return buffer;
    }
    this.forEach=function (call) {
        var length=this.dataStore.length;
        for(var i=length-1;i>=0;i--){
            var it=this.dataStore[i];
            call(it);
        }

    }
    this.isPa

}
