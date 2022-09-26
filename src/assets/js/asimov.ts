export interface ILaw {
  url: string;
  text: string;
  title: string;
  name: string;
  description: string;
}

interface IAllLaws {
  one: ILaw;
  two: ILaw;
  three: ILaw;
}

const one: ILaw = {
  url: "herir-al-ser-humano",
  text: `Un robot <span class="glitch" data-text="no">no</span> puede dañar a un ser humano o, por inacción, permitir que un ser humano sufra daño.`,
  name: "Primera Ley",
  title: "No está permitido dañar a un ser humano",
  description:
    "Un robot no puede dañar a un ser humano o, por inacción, permitir que un ser humano sufra daño.",
};

const two: ILaw = {
  url: "ignorar-las-ordenes-del-ser-humano",
  text: `Un robot <span class="glitch" data-text="debe">debe</span> cumplir las órdenes dadas por los seres humanos, a excepción de aquellas que entren en conflicto con la <a class="italic text-rose-500" href="/${one.url}">primera ley</a>.`,
  name: "Segunda Ley",
  title: "Hay que cumplir las órdenes del ser humano",
  description:
    "Un robot debe cumplir las órdenes dadas por los seres humanos, a excepción de aquellas que entren en conflicto con la primera ley.",
};

const three: ILaw = {
  url: "herirse-a-uno-mismo",
  text: `Un robot <span class="glitch" data-text="debe">debe</span> proteger su propia existencia en la medida en que esta protección no entre en conflicto con la <a class="italic text-rose-500" href="/${one.url}">primera</a> o con la <a class="italic text-rose-500" href="/${two.url}">segunda ley</a>.`,
  name: "Tercera Ley",
  title: "No está permitido herirse a sí mismo",
  description: `Un robot debe proteger su propia existencia en la medida en que esta protección no entre en conflicto con la primera o con la segunda ley.`,
};

const LAWS: IAllLaws = { one, two, three };

export default LAWS;
