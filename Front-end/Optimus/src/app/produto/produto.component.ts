import { Component, OnInit } from '@angular/core';
import { Imagem } from '../model/Imagem';
import { Produto } from '../model/Produto';
import { ImagemService } from '../service/imagem.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  listaProduto: Produto[]
  produtoModal: Produto = new Produto()
  imagem: Imagem = new Imagem()
  lista: Imagem[]

  constructor(
    private produtoService: ProdutoService,
    private imagemService: ImagemService
  ) { }

  ngOnInit() {
    this.findAll()
    this.find()
  }

  find(){
    this.imagemService.findAllImagem().subscribe((resp: Imagem[]) => {
      this.lista = resp
    })
  }
  

  produtoAtivo(status: number){
    let ok: boolean = false;

    if(status == 1) {
      ok = true;
    }
    return ok;
  }

  findAll(){
    this.produtoService.findAll().subscribe((resp: Produto[]) => {
      this.listaProduto = resp
    })
  }

  findById(id: number){
    this.produtoService.findById(id).subscribe((resp: Produto) => {
      this.produtoModal = resp
      this.findByIdProjeto(id)
    })
  }

  findByIdProjeto(id: number){
    this.imagemService.findByIdProjeto(id).subscribe((resp: Imagem) => {
      this.imagem = resp
    })
  }

}
