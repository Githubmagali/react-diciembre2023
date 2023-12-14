
const initialState = {
    productos: [
      { id: 1, nombre: 'producto 1' },
      { id: 2, nombre: 'producto 2' },
      { id: 3, nombre: 'producto 3' }
    ],
    carrito: [],
    tarjeta: [
      {id:1, nombre:'ICBC', texto:'20% descuento miercoles y viernes'},
      {id:2, nombre:'Visa', texto:'20% descuento jueves y sabados'},
      {id:2, nombre:'AMEX', texto:'20% descuento lunes y domingos'}
    ]
};

const reducer = (estado = initialState, accion) => {
    try {
        switch (accion.type) {
            case 'AGREGAR_PRODUCTO':
                const { idProducto, nombre } = accion;
                const productoExistente = estado.carrito.find(producto => producto.id === idProducto);

                if (productoExistente) {
                    return {
                        ...estado,
                        carrito: estado.carrito.map(producto =>
                            producto.id === idProducto
                                ? { ...producto, cantidad: Math.min(100, producto.cantidad + 1) }
                                : producto
                        )
                    };
                } else {
                    const nuevoProducto = { id: idProducto, nombre: nombre, cantidad: 1 };
                    return { ...estado, carrito: [...estado.carrito, nuevoProducto] };
                }
            case 'QUITAR_PRODUCTO':
                return {
                    ...estado,
                    carrito: estado.carrito.map(producto =>
                        producto.id === accion.idProducto
                            ? { ...producto, cantidad: Math.max(0, producto.cantidad - 1) }
                            : producto
                    )
                };

            default:
                return estado;
        }
    } catch (error) {
        console.error('Error en el reducer:', error);
        return estado;
    }
};


export default reducer;
