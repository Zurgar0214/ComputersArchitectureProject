import { OperacionInstruccion } from "../Enums/operacion-instruccion";

export class ALU {
  operacionAEjecutar: OperacionInstruccion | undefined;
  operando1: number = 0;
  operando2: number = 0;

  ejecutarOperacion(tipoOperacion: OperacionInstruccion, operando1: number, operando2: number): number {
    this.operacionAEjecutar = tipoOperacion;
    this.operando1 = operando1;
    this.operando2 = operando2;

    switch (this.operacionAEjecutar) {
      case OperacionInstruccion.ADD:
        return this.add(operando1, operando2);
      case OperacionInstruccion.SUB:
        return this.sub(operando1, operando2);
      case OperacionInstruccion.MUL:
        return this.multiply(operando1, operando2);
      case OperacionInstruccion.DIV:
        return this.divide(operando1, operando2);
      case OperacionInstruccion.AND:
        return this.andoper(operando1, operando2);
      case OperacionInstruccion.OR:
        return this.oroper(operando1, operando2);
      case OperacionInstruccion.NOT:
        return this.notoper(operando1);
      case OperacionInstruccion.LESS:
        return this.less(operando1,operando2);
      case OperacionInstruccion.GREATER:
        return this.greater(operando1,operando2);
      case OperacionInstruccion.EQUALS:
        return this.equals(operando1,operando2);
      default:
        return 0;
    }
  }

  private add(operando1: number, operando2: number): number {
    return operando1 + operando2;
  }

  private sub(operando1: number, operando2: number): number {
    return operando1 - operando2;
  }

  private multiply(operando1: number, operando2: number): number {
    return operando1 * operando2;
  }

  private divide(operando1: number, operando2: number): number {
    try {
      return operando1 / operando2;
    } catch (error) {
      return 0;
    }
  }

  private andoper(operando1: number, operando2: number): number {
    return operando1*operando2    
  }

  private oroper(operando1: number, operando2: number): number {
    if (operando1==1 && operando2==1){
      return 1
    }else{
      return operando1+operando2
    }
        
  }

  private notoper(operando1: number): number {
    if (operando1==1){
      return 0
    }
    if (operando1==0){
      return 1
    }
    return 0    
  }

  private less(operando1: number, operando2: number): number {
    if (operando1 < operando2){
      return 1
    }else{
      return 0
    }
        
  }

  private greater(operando1: number, operando2: number): number {
    if (operando1 > operando2){
      return 1
    }else{
      return 0
    }        
  }

  private equals(operando1: number, operando2: number): number {
    if (operando1 == operando2){
      return 1
    }else{
      return 0
    }
        
  }

  
}
