  newFilter(){
    let result = JSON.parse(JSON.stringify(jsonOp));
    result.infoFil.shift();
    let optionsToFilter: any[] = [];
    this.arrayAux = [];
    
    result.infoFil.forEach(element => {
      if(element.isChecked){
        if(element.opcionSeleccionado == 'objetivo' || element.opcionSeleccionado == 'tipo' || element.opcionSeleccionado == 'canal'){
          const key = element.opcionSeleccionado.toString().charAt(0).toUpperCase()+element.opcionSeleccionado.toString().slice(1);
          const newElement = {[`up${key.charAt(0).toUpperCase()+key.slice(1)}`]: element.datoSeleccionado};
          optionsToFilter.push(newElement);
          return;
        }
        optionsToFilter.push({[`${element.opcionSeleccionado}`]: element.datoSeleccionado});
      }
    });
    
    this.forEachActivedFilter(optionsToFilter);

    console.log(this.arrayAux);
  }

  forEachActivedFilter(pushedSelectedFilter: any){
    let result = []
    let lastElement: any = [];
    var ctrPushedElements = 0;
    pushedSelectedFilter.forEach((element, index, array) => {
      ctrPushedElements++;
      if(Object.keys(lastElement)[0] !== Object.keys(element)[0]){
        this.ctrSameType = 0;
      }
      this.originalData = [...this.dataSource.data];
      result = this.filterDataBySelectedOption(element, this.originalData, result);
      lastElement = element;
      if (ctrPushedElements === array.length) {
        this.addDataToAuxArray(result);
      }
    });
  }

  filterDataBySelectedOption(element:any, dataSourceFilter:any, result: any): any{
    console.log(Object.keys(element)[0])
    if(Object.keys(element)[0]=== 'estado'){
      if(this.ctrSameType>0){
        this.ctrSameType++;
        return result = [...result, ...dataSourceFilter.filter(item => item.estado === Object.values(element)[0].toString())];
      }
      return dataSourceFilter.filter(item => item.estado === Object.values(element)[0].toString());
    }
    if(Object.keys(element)[0]=== 'upTipo'){
      if(this.ctrSameType>0){
        this.ctrSameType++;
        return result = [...result, ...dataSourceFilter.filter(item => item.upTipo === Object.values(element)[0].toString())];
      }
      this.ctrSameType++;
      return dataSourceFilter.filter(item => item.upTipo === Object.values(element)[0].toString());
    }
    if(Object.keys(element)[0]=== 'fecha'){
      const value = Object.values(element)[0].toString().split(',');
      const ini = new Date(value[0]);
      const fin = new Date(value[1]);

      if(this.ctrSameType>0){
        this.ctrSameType++;
        return result = [...result, ...dataSourceFilter.filter(item => {
          const dd = item.fecha.substring(0, 2);
          const mm = item.fecha.substring(3, 5);
          const yy = item.fecha.substring(6, 10);
          const date = new Date(mm + '-' + dd + '-' + yy);
          return (date >= ini && date <= fin);
        })];
      }
      this.ctrSameType++;
      return dataSourceFilter.filter(item => {
        const dd = item.fecha.substring(0, 2);
        const mm = item.fecha.substring(3, 5);
        const yy = item.fecha.substring(6, 10);
        const date = new Date(mm + '-' + dd + '-' + yy);
        return (date >= ini && date <= fin);
      });
    }
  }

  addDataToAuxArray(arrayToAdd:any){
    if(this.arrayAux.length == 0){
      this.arrayAux = arrayToAdd;
      return;
    }
    this.arrayAux = this.arrayAux.filter(element => arrayToAdd.includes(element));
  }
