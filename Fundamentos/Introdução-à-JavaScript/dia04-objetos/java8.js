let order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  function customerInfo(order) {
    let entregador = order.order.delivery.deliveryPerson
    let cliente = order.name
    let contact = order.phoneNumber
    let street = order.address.street
    let number = order.address.number
    let apartment = order.address.apartment
    console.log('Ola, ' + entregador + ', entrega para: ' + cliente + ', Telefone: ' + contact + ', R. ' + street + ', Nº : ' + number + ', AP: ' + apartment);
  }
    
  customerInfo(order);
  
  function orderModifier(order) {
    // Adicione abaixo as informações necessárias.
  }
  
  orderModifier(order);