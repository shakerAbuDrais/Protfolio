/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
function openNav() {
  document.getElementById('myNav').style.display = 'block';
}

function closeNav() {
  document.getElementById('myNav').style.display = 'none';
}
const pName = ['Tonic', 'Multi-Post Stories', 'Facebook360', 'Uber Navigation'];
const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea";
const technologies = ['Html', 'Css', 'Javascript'];
const featuredimg = ['./assets/Snapshoot_Portfolio.png', './assets/Snapshoot1.png', './assets/Snapshoot2.png', './assets/desktop1.png'];
const liveLink = ['https://shakerabudrais.github.io/Portfolio/'];
const sourceLink = ['https://github.com/shakerAbuDrais/Portfolio'];
const infoArray = [
  {
    id: 0,
    name: pName[0],
    featuredimg: featuredimg[0],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    id: 1,
    name: pName[1],
    featuredimg: featuredimg[1],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    id: 2,
    name: pName[2],
    featuredimg: featuredimg[2],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
  {
    id: 3,
    name: pName[3],
    featuredimg: featuredimg[3],
    description,
    technologies,
    liveLink: liveLink[0],
    sourceLink: sourceLink[0],
  },
];

document.addEventListener('DOMContentLoaded', () => {
  //const btn = document.querySelectorAll('.btn');
  document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', () => {
      const div1 = document.createElement('div');
      div1.classList.add('div1');
      const div2 = document.createElement('div');
      div2.classList.add('div2');
      div1.appendChild(div2);
      const id = parseInt(item.parentElement.parentElement.classList[1].replace(/[^\d.]/g, ''), 10);
      const data = infoArray.find((item) => item.id === id);
      console.log(data);
      const element1 = document.querySelector('body');
      element1.appendChild(div1);
      const title1 = document.createElement('h2');
      title1.classList.add('h2-pop');
      div2.appendChild(title1);
      const closeSign = document.createElement('p');
      closeSign.classList.add('closesign');
      div2.appendChild(closeSign);
      closeSign.textContent = 'X';
      closeSign.addEventListener('click', () => {
        document.getElementsByClassName('div1')[0].style.display = 'none';
      });
      const img = document.createElement('img');
      img.classList.add('img-pop');
      div1.appendChild(img);
      title1.textContent = data.name;
      img.src = data.featuredimg;
      const para = document.createElement('p');
      para.classList.add('para-pop');
      div1.appendChild(para);
      para.textContent = data.description;
      const ul = document.createElement('ul');
      ul.classList.add('ul-pop');
      div1.appendChild(ul);
      for (let i = 0; i < technologies.length; i++) {
        const li = document.createElement('li');
        li.classList.add('li-pop');
        ul.appendChild(li);
        li.textContent = data.technologies[i];

        if (i < 2) {
          if (i === 0) {
            const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            div1.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = data.liveLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'See Live';
          } else if (i === 1) {
            const btnPop = document.createElement('button');
            btnPop.classList.add('btn-pop');
            div1.appendChild(btnPop);
            const aBtn = document.createElement('a');
            aBtn.href = data.sourceLink;
            btnPop.appendChild(aBtn);
            aBtn.textContent = 'See Source';
          }
        }
      }
    });
  });
});
