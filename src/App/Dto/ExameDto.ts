export enum ExameTipo {
  ANALISE_CLINICA = 'analise',
  IMAGEM = 'imagem'
}

export default class ExameDto {
  id?: string | number;
  nome: string;
  tipo: ExameTipo;
  status?: number;
}
