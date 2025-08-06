import { Component } from '@angular/core';

@Component({
  selector: 'app-departamentos-pesquisa',
  templateUrl: './departamentos-pesquisa.component.html',
  styleUrls: ['./departamentos-pesquisa.component.css']
})
export class DepartamentosPesquisaComponent {

   departamentos = [
    { id: 1, nomeDepartamento: 'Recursos Humanos' },
    { id: 2, nomeDepartamento: 'Financeiro' },
    { id: 3, nomeDepartamento: 'Marketing' },
    { id: 4, nomeDepartamento: 'TI' },
    { id: 5, nomeDepartamento: 'Jurídico' },
    { id: 6, nomeDepartamento: 'Compras' },
    { id: 7, nomeDepartamento: 'Logística' },
    { id: 8, nomeDepartamento: 'Produção' },
    { id: 9, nomeDepartamento: 'Vendas' },
    { id: 10, nomeDepartamento: 'Suporte' },
    { id: 11, nomeDepartamento: 'Qualidade' }
  ];

  termoBusca: string = '';
  departamentosFiltrados = [...this.departamentos];

  departamentoEditando: any = null;

  buscar() {
  const termo = this.termoBusca.trim().toLowerCase();

  if (!termo) {
    // Se o termo estiver vazio, mostra todos
    this.departamentosFiltrados = [...this.departamentos];
    return;
  }

  const termoNumero = Number(termo);

  if (!isNaN(termoNumero)) {

    this.departamentosFiltrados = this.departamentos.filter(d => d.id === termoNumero);
  } else {

    this.departamentosFiltrados = this.departamentos.filter(d =>
      d.nomeDepartamento.toLowerCase().includes(termo)
    );
  }
}


  editar(departamento: any) {
    console.log('Editando departamento:', departamento);
    this.departamentoEditando = { ...departamento };
  }

  excluir(departamento: any) {
  this.departamentos = this.departamentos.filter(dep => dep.id !== departamento.id);
  this.buscar();
}


}
