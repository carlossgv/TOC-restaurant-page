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

const contactLoad = () => {
  const completeTabs = document.querySelector('.complete-tabs');

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('tab-info');
  contactDiv.classList.add('contact-div');

  const title = document.createElement('h2');
  title.innerHTML = 'Contact Us!';

  const contactInfo = document.createElement('p');
  contactInfo.innerHTML = lorem.generateParagraphs(3);

  contactDiv.appendChild(title);
  contactDiv.appendChild(contactInfo);

  contactDiv.style.display = 'None';

  completeTabs.appendChild(contactDiv);
};

export default contactLoad;
