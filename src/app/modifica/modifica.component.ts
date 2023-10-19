// import { Component,Input, OnInit } from '@angular/core';
// import { ActivatedRoute, RouterLink } from '@angular/router';
// import Swal from 'sweetalert2';
// import { TableComponent } from '../table/table.component';
// import { Router } from '@angular/router';

//  @Component({
//    selector: 'app-modifica',
//    templateUrl: './modifica.component.html',
//    styleUrls: ['./modifica.component.css']
//  })

 
// export class ModificaComponent implements OnInit
//  {
//     dato: any = {}
//     datoId:any
//     //@Input() tabellaDati: any[] = [];
//     constructor(private route: ActivatedRoute, private router: Router, private tabellaDati: TableComponent) {}
    
//     ngOnInit(): void {
//       this.route.paramMap.subscribe((params) => {
//         const datoId = params.get('id');
//         this.dato = this.getDatoById(datoId);
          
//       });   
        
//      //  this.dato= this.tabella.getDati()
//     }

//     getDatoById(datoId: string | null): any {
//       const dato = this.tabellaDati.getTabellaDati().find(item => item.id == datoId);

//       return dato;
//     }


//     salvaModifiche()
//     {
//       Swal.fire('Dati modificati con successo', '', 'success');
    
//     }
//   }
// ***************************************************

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {
  tabellaDati: any[] = []; // Dichiarare la variabile per i dati
  nuovoDato: any;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      // Recupera il parametro tabellaDati e convertilo in un array
      this.tabellaDati = JSON.parse(params['tabellaDati']);
      const datoNome = params['nome']; // Recupera altri parametri se necessario
      const datoCognome = params['cognome'];
      console.log(datoCognome);
    });

  }
  salvaModifiche() {
    // Implementa qui la logica per salvare le modifiche
    Swal.fire('Dati modificati con successo', '', 'success');
    this.router.navigate([''/*, { tabellaDati: JSON.stringify(this.tabellaDati) }*/]);
  }
}



