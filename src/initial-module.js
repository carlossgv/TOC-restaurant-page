import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const pageLoad = () => {
  const content = document.getElementById('content');
  content.classList.add('container')

  const img = document.createElement('img');
  img.src =
    'https://cache.marriott.com/marriottassets/marriott/KNASI/knasi-travesia-restaurant-5586-hor-feat.jpg?downsize=1024px:*';
  img.id = "restaurant-img"

  const title = document.createElement('h1');
  title.innerHTML = 'Welcome to TOC Restaurant';

  const p = document.createElement('p');
  p.innerHTML = lorem.generateParagraphs(3);

  content.appendChild(img);

  const infoDiv = document.createElement('div')
  infoDiv.classList.add('info-div')

  infoDiv.appendChild(title);
  infoDiv.appendChild(p);

  content.appendChild(infoDiv)

  // Create tabs
  const tabsList = { menu: 'Menu', contacts: 'Contact' };

  const completeTabs = document.createElement('div')
  completeTabs.classList.add('complete-tabs')

  const tabsDiv = document.createElement('div');
  tabsDiv.classList.add('tabs-section');

  for (const item in tabsList) {
    console.log(tabsList[item]);

    const tab = document.createElement('div');
    tab.classList.add('tab-selector');
    const a = document.createElement('a');
    a.classList.add('tab-link');

    if (tabsList[item] === 'Menu') {
      a.classList.add('active');
    }

    a.id = `tab-${tabsList[item].toLowerCase()}`;
    a.innerHTML = `${tabsList[item]}`;
    tab.appendChild(a);

    tabsDiv.appendChild(tab);
  }

  const tabSection = document.createElement('div');
  tabSection.classList.add('tab-section-1');
  tabSection.classList.add('active');

  completeTabs.appendChild(tabsDiv);
  content.appendChild(completeTabs)
};

export default pageLoad;
