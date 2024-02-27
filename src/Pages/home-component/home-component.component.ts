import { Component, OnInit, } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { DomSanitizer } from '@angular/platform-browser';


// jQuery
import $ from 'jquery';
interface bacanora {
  id: string;
  stock: number;
  cantidad_compra: number;
  titulo: string;
  descripcion: string[];
  imgUrl: string;
}
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {
  listaItemsCarrito: bacanora[] | undefined;
  bacanorasList: bacanora[] = [
    {
      id: '1', stock: 0, cantidad_compra: 1, titulo: 'Bacanora Blanco', descripcion: ['100% Artesanal', 'Doble Destilado'
        , '42 grados de alcohol', 'Cristalino', 'Contenido neto 750 ml Botella vidrio'
        , '650', 'Envió Gratis'], imgUrl: "assets/images/Blaco-frente.png"
    },
    {
      id: '2', stock: 0, cantidad_compra: 1, titulo: 'Bacanora Blanco Pachita', descripcion: ['100% Artesanal', 'Doble Destilado'
        , '42 grados de alcohol', 'Cristalino', 'Contenido neto 250 ml Botella vidrio'
        , '350', 'Envió Gratis'], imgUrl: "assets/images/Blaco-frente.png"
    },
    {
      id: '3', stock: 0, cantidad_compra: 1, titulo: 'Bacanora Con café y crema', descripcion: ['100% Artesanal', 'Doble Destilado'
        , '42 grados de alcohol', 'Crema de leche sabor café con bacanora artesanal', 'Contenido neto 750 ml Botella vidrio'
        , '500', 'Envió Gratis'], imgUrl: "assets/images/Cafe-frente.png"
    },
    {
      id: '4', stock: 0, cantidad_compra: 1, titulo: 'Bacanora Con café y crema pachita', descripcion: ['100% Artesanal', 'Doble Destilado'
        , '42 grados de alcohol', 'Crema de leche sabor café con bacanora artesanal', 'Contenido neto 200 ml Botella vidrio'
        , '300', 'Envió Gratis'], imgUrl: "assets/images/Blaco-frente.png"
    },
    //{ titulo: 'Cafe Con Bacanora', descripcion: "valor2", imgUrl: "assets/images/Cafe-frente.png" },
    {
      id: '5', stock: 0, cantidad_compra: 1, titulo: 'Bacanora Reposado', descripcion: ['100% Artesanal', 'Doble Destilado'
        , '42 grados de alcohol', 'Bacanora Reposado  excelente toque y sabor', 'Contenido neto 750 ml Botella vidrio'
        , '750', 'Envió Gratis'], imgUrl: "assets/images/Blaco-frente.png"
    },
    /*{ titulo: 'Bacanora Blanco', descripcion: "valor2", imgUrl: "assets/images/Blaco-frente.png" },
    { titulo: 'Cafe Con Bacanora', descripcion: "valor2", imgUrl: "assets/images/Cafe-frente.png" },*/
    {
      id: '6', stock: 0, cantidad_compra: 1, titulo: 'Bacanora Reposado pachita', descripcion: ['100% Artesanal', 'Doble Destilado'
        , '42 grados de alcohol', 'Bacanora Reposado  excelente toque y sabor', 'Contenido neto 200 ml Botella vidrio'
        , '400', 'Envió Gratis'], imgUrl: "assets/images/Cafe-frente.png"
    },

  ];

  public imageSlider: any[] = [
    'assets/images/image-1.jpg',
    'assets/images/image-2.jpg',
    'assets/images/image-3.jpg',
    'assets/images/image-4.jpg',
    'assets/images/image-5.jpg'
  ];
  public AddtoCart(bacanoraId: string) {
    //console.log(bacanoraId);

    const botellaEncontrada = this.buscarBacanoraPorId(bacanoraId);

    let itemCarrito: bacanora = {
      id: botellaEncontrada.id,
      stock: botellaEncontrada.stock,
      cantidad_compra: botellaEncontrada.cantidad_compra,
      titulo: botellaEncontrada.titulo,
      descripcion: botellaEncontrada.descripcion,
      imgUrl: botellaEncontrada.imgUrl
    }
    if (localStorage.getItem('carrito') === null) {

      let carrito: bacanora[] = [itemCarrito];
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.listaItemsCarrito = carrito;
    } else {

      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito: bacanora[] = JSON.parse(carritoStorage);
      const bacanoraExistente = carrito.find(bacanora => bacanora.id === itemCarrito.id);
      if (bacanoraExistente) {

        bacanoraExistente.cantidad_compra += 1;
      } else {

        carrito.push(itemCarrito);
      }

      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.listaItemsCarrito = carrito;
      //console.log(this.listaItemsCarrito);
    }


  }
  public eliminarElementoPorId(id: String): void {
    console.log("entro");
    let itemsActuales = localStorage.getItem('carrito');
    let carrito: any[] = itemsActuales ? JSON.parse(itemsActuales) : [];
    const indexEliminar = carrito.findIndex(item => item.id == id);
    if (indexEliminar !== -1) {
      carrito.splice(indexEliminar, 1);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.listaItemsCarrito = carrito;
    }
  }
  public calcularTotal(): String {
    if (localStorage.getItem('carrito') !== null) {
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito: bacanora[] = JSON.parse(carritoStorage);
      let total: number = 0;

      carrito.forEach(producto => {
        // Obtener el precio del producto desde la descripción
        //const precioIndex = producto.descripcion.findIndex(item => item.startsWith('Contenido neto'));
        const precioTexto = producto.descripcion[producto.descripcion.length - 2];
        //console.log('Precio original:', precioTexto);
        const precioNumerico = parseFloat(precioTexto);
        //console.log('Precio numérico:', precioNumerico);
        total += producto.cantidad_compra * precioNumerico;
      });

      //console.log('Total del carrito:', total);
      return total.toString();
    }


  }
  public calcularSubTotal(id: string): String {
    if (localStorage.getItem('carrito') !== null) {
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito: bacanora[] = JSON.parse(carritoStorage);
      let total: number = 0;
      const bacanoraExistente = carrito.find(bacanora => bacanora.id === id);
      const precioTexto = bacanoraExistente.descripcion[bacanoraExistente.descripcion.length - 2];
      const precioNumerico = parseFloat(precioTexto);
      total = bacanoraExistente.cantidad_compra * precioNumerico;
      //console.log(bacanoraExistente.cantidad_compra);
      return total.toString();
    }

  }
  private buscarBacanoraPorId(id: string): bacanora | undefined {
    return this.bacanorasList.find(bacanora => bacanora.id === id);
  }
  restarCantidad(id: string): void {
    console.log("entro restar");
    if (localStorage.getItem('carrito') !== null){
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito: bacanora[] = JSON.parse(carritoStorage);
      const bacanoraExistente = carrito.find(bacanora => bacanora.id === id);
      bacanoraExistente.cantidad_compra --;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.listaItemsCarrito = carrito;
      
    } 
  }
  sumarCantidad(id: string): void {
    console.log("entro sumar id",id);
    if (localStorage.getItem('carrito') !== null){
      let carritoStorage = localStorage.getItem('carrito') as string;
      let carrito: bacanora[] = JSON.parse(carritoStorage);
      const bacanoraExistente = carrito.find(bacanora => bacanora.id === id);
      bacanoraExistente.cantidad_compra ++;
      localStorage.setItem('carrito', JSON.stringify(carrito));
      this.listaItemsCarrito = carrito;
      
    } 
  }

  constructor(
    private spinner: NgxSpinnerService, private sanitizer: DomSanitizer, 

  ) { }


  ngOnInit() {
    // show spinner
    /* this.spinner.show();
    setTimeout(() => {
      // spinner ends after 5 seconds 
      this.spinner.hide();
    }, 5000); */

    // init scrollable menu
    this.initMenuScrollable();
  }

  initMenuScrollable() {
    $(function () {
      /* $("html, body").animate(
        {
          scrollTop: 0
        },
        1000
      ); */

      $("#btn-covid").trigger("click");
      let scroll = window.scrollY;
      if (scroll > 0) {
        $('#menu').addClass('menu-sm');
      } else {
        $('#menu').removeClass('menu-sm');
      }
      function scrollFunction() {
        //console.log('asda');
        scroll = window.scrollY;
        //console.log(scroll);
        if (scroll > 0) {
          $('#menu').addClass('menu-sm');
        } else {
          $('#menu').removeClass('menu-sm');
        }
      }
      window.onscroll = scrollFunction;
      $('.menu-link, .nav-link').click(function () {
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).attr('href') == '#home') {
          console.log('home');
          $("html, body").animate(
            {
              scrollTop: 0
            },
            1000
          );
          return;
        }
        var target = $(this.hash);
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
        }
      });
    });
  }

}
