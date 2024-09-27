export interface ProductsList {
  ID_Producto: number;
  Nombre: string;
  Material: string;
  Valor: number;
  Cantidad: number;
  agregado?: boolean; // Campo opcional para el checkbox
}
