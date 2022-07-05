import geraSenha from "./geradores";
const senhaGerada = document.querySelector(".senha-gerada");
const qtdCaracter = document.querySelector(".qtd-caracter");
const maiusculas = document.querySelector(".maiusculas");
const minusculas = document.querySelector(".minusculas");
const simbolos = document.querySelector(".simbolos");
const numeros = document.querySelector(".numeros");
const gerarSenha = document.querySelector(".gera-senha");
const copy = document.querySelector(".copy");

export default () => {
  copy.setAttribute("disabled", 'true');
  let senha;
  gerarSenha.addEventListener("click", () => {
    if (!qtdCaracter.value) {
      alert("campo de quantidade deve ser preenchido");
    } else if (
      !(
        maiusculas.checked ||
        minusculas.checked ||
        numeros.checked ||
        simbolos.checked
      )
    ) {
      alert("Ao menos um dos checkbox devem estar marcados");
    } else {
      senha = geraSenha(
        qtdCaracter.value,
        maiusculas.checked,
        minusculas.checked,
        numeros.checked,
        simbolos.checked
      );
      senhaGerada.innerHTML = senha;
      copy.removeAttribute('disabled');

    }
  });

    copy.addEventListener('click', () =>{
      navigator.clipboard.writeText(senhaGerada.innerHTML).then(() => {
        alert('texto copiado')
      })
    })
};
