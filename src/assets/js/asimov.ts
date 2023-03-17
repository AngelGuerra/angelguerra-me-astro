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
  url: "harming-humans",
  text: `A robot <span class="glitch" data-text="may not">may not</span> injure a human being or, through inaction, allow a human being to come to harm.`,
  name: "First Law",
  title: "A robot may not injure a human",
  description:
    "A robot may not injure a human being or, through inaction, allow a human being to come to harm.",
};

const two: ILaw = {
  url: "ignoring-human-orders",
  text: `A robot <span class="glitch" data-text="must">must</span> obey the orders given it by human beings except where such orders would conflict with the <a class="italic text-rose-500" href="/${one.url}">First Law</a>.`,
  name: "Second Law",
  title: "A robot must obey the orders given it by human",
  description:
    "A robot must obey the orders given it by human beings except where such orders would conflict with the First Law.",
};

const three: ILaw = {
  url: "harm-to-self",
  text: `A robot <span class="glitch" data-text="must">must</span> protect its own existence as long as such protection does not conflict with the <a class="italic text-rose-500" href="/${one.url}">First</a> or <a class="italic text-rose-500" href="/${two.url}">Second</a> Law.`,
  name: "Third Law",
  title: "A robot must protect its own existence",
  description:
    "A robot must protect its own existence as long as such protection does not conflict with the First or Second Law",
};

const LAWS: IAllLaws = { one, two, three };

export default LAWS;
