import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import {AfterViewInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl:'./table.component.html',
  styleUrls:['./table.component.css']
})

export class TableComponent  {
  
  //collegato con NgModel nel HTML
  nome: string = '';
  cognome: string = '';
  indirizzo: string = '';
  email: string = '';
  comune: string = '';
  provincia: string = '';
  localita: string = '';
  note: string = '';
  //array datiPersone
  tabellaDati: any[] = [];

  //form group validazione per l'indirizzo email
  form: FormGroup;
  //filtro
  filtro: string = '';

  ordinamentoColonna: string = '';
  cambiaOrdinamento(colonna: string) {
    if (this.ordinamentoColonna === colonna) {
      this.ordinamentoColonna = '-' + colonna;
    } else {
      this.ordinamentoColonna = colonna;
    }
  }

  constructor(private fb: FormBuilder,private router: Router) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  aggiungiDati()
  {
    //validazione dei requisisti obbligatori
    if (this.nome && this.cognome && this.email) {
      this.tabellaDati.push({
        nome: this.nome,
        cognome: this.cognome,
        indirizzo: this.indirizzo,
        email: this.email,
        comune: this.comune,
        provincia:this.provincia,
        localita:this.localita,
        note:this.note
      });
      // Pulisci i campi di input
      this.nome = '';
      this.cognome = '';
      this.indirizzo = '';
      this.email = '';
      this.comune='';
      this.provincia='';
      this.localita='';
      this.note='';
      //alert
      Swal.fire('Dati confermati', '', 'success');
    }
    
  }
  filtraDati(): any[] {
    const filtroMinuscolo = this.filtro.toLowerCase();
    return this.tabellaDati.filter(dato => {
      return (// almeno una condizione
        dato.nome.toLowerCase().includes(filtroMinuscolo) ||
        dato.cognome.toLowerCase().includes(filtroMinuscolo) ||
        dato.email.toLowerCase().includes(filtroMinuscolo) ||
        dato.comune.toLowerCase().includes(filtroMinuscolo)
      );
    });
  }

  ordinaDati(dati: any[], ordinamento: string): any[] {
    if (!ordinamento) {
      return dati;
    }

    const isAsc = ordinamento[0] !== '-';
    const colonna = isAsc ? ordinamento : ordinamento.substring(1);

    return dati.sort((a, b) => {
      if (a[colonna] < b[colonna]) {
        return isAsc ? -1 : 1;
      }
      if (a[colonna] > b[colonna]) {
        return isAsc ? 1 : -1;
      }
      return 0;
    });
  }
  eliminaDato(DeleteData:any){
    const indice = this.tabellaDati.indexOf(DeleteData);//indexOf per cercare l'indice dell'oggetto datoDaEliminare all'interno dell'array tabellaDati.
                                                        //Permette di determinare la posizione dell'oggetto all'interno dell'array.
    if (indice !== -1) { // != da -1 esiste nell'array
      this.tabellaDati.splice(indice, 1); // Rimuovi il dato dall'array
      Swal.fire('Dati eliminati con successo', '', 'success');
    }
  }

  modificaDato(dato: any) {
    // dato=> a ModificaComponent
    // this.router.navigate(['/modifica', dato.id]);
    this.router.navigate(['/modifica', { tabellaDati: JSON.stringify(this.tabellaDati), id: dato.id }]);
  } 
  // getTabellaDati(): any[]{
  //   return this.tabellaDati;
  // }
  // getDato(index:number){
  //   return this.tabellaDati[index]
  // }
  
}
