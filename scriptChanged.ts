import { type } from 'jquery';

let Strings: string[];

Strings['Kiana in darkness'] = ['Нх... что со мной произошло?'];
Strings['Kiana/setRoof'] = [
  'Хм...? Это... разве не Академия Чиба?',
  'Что... почему я вообще здесь?',
];
Strings['unknown'] = ['Старайся не двигаться.'];
Strings['Kiana'] = ['A?'];
Strings['Kevin/removeKia'] = ['......'];
Strings['Kiana/setKiana'] = ['Ты... Кевин Каслана!'];
Strings['Kevin'] = [
  'Ты пыталась закрыть Воображаемую Cингулярность, но Воображаемый конструкт устроил тебе засаду. Ты упала с неба.',
  'Я смог остановить твое падение, но твои раны серьезны.',
  'Твои силы пустоты сильно ослабли, но это может дать тебе больше времени.',
];
Strings['Kiana2'] = ['Почему... почему ты спас меня?'];
Strings['Kevin2'] = [
  '......',
  'Благодари Райден Мей. Это она спасла тебя.',
  'Нагазора больше не твоя забота. Катaстрофа закончилась. Мей спасла город ради тебя.',
];
Strings['Kiana3'] = ['Что?! Мей...?'];
Strings['Kevin4'] = ['Я позволю ей самой все объяснить.', '...Она здесь.'];
Strings['Kiana/M appearence'] = [
  'Мей...',
  'Что произошло... почему ты так выглядишь?',
];
Strings['Mei/setMei'] = ['......'];
Strings['Kevin5/setKevin'] = ['Ты сделала свой выбор'];
Strings['Mei2'] = ['...Я пойду с тобой.'];
Strings['Kevin6'] = ['Хорошо.', 'Добро пожаловать в Ёрмунганд, Райден Мей.'];
Strings['Kiana5'] = ['-----ПОДОЖДИ!'];
Strings['Kiana6/setKiana'] = [
  'Что ты сейчас сказала? Мей... ты собираешься присоединиться к Ёрмунганду?',
];
Strings['Mei3'] = ['......'];
Strings['Kiana7'] = ['Что с тобой произошло, Мей? Что он сделал с тобой?'];
Strings['Mei4'] = [
  'Я говорю от своего имени, Киана.',
  'Я сама сделала этот выбор. Тебе не нужно больше заботиться обо мне.',
];
Strings['Kiana8'] = ['Почему...'];
Strings['Mei5'] = ['......'];
Strings['Kiana9'] = [
  'Это какая-то глупая шутка? Я определенно не согласна',
  'Я не позволю тебе вступить в Ёрмунганд!',
];
Strings['Mei6'] = ['......Киана......'];
Strings['Kevin7'] = [
  'Похоже у вас есть незаконченные дела.',
  'Скажи ей все, что хочешь, но быстрее.',
];
Strings['Mei7'] = ['......'];
Strings['Mei8/inDarkness'] = [
  'Сказать ей что хочу?',
  'Поймет ли она мои причины? Смогу ли я уйти мирно?',
  'Нет, она лишь будет винить себя и я только усилю её боль...',
  '......',
  'Я бессчисленное количество раз говорила себе то что, хотела бы сказать ей...',
  'Киана, я счастлива, что встретила тебя. Мы столько сделали вместе и разделили много прекрасных моментов.',
  'Стремись к тому, чего ты хочешь и исполни свои мечты...',
  '...позволь мне войти в темноту и вернуть тебе счастье.',
];
Strings['Kiana10/setLightning'] = [
  'Мей... Почему...',
  'Ты знаешь, что они сделали...',
];
Strings['Mei9'] = ['Мне все равно.'];
Strings['Kiana11'] = ['...Ты идиотка!', 'Я не позволю тебе уйти!'];
Strings['Kiana12/setBattleScene'] = [
  'Ещё не всё...',
  'Я не позволю тебе уйти...',
  'НИКОГДА!',
];
Strings['Mei10/setKiaHerrsher'] = [
  'Ты не должна использовать эту силу снова, Киана.',
];
Strings['Kiana13'] = ['Мей...'];
Strings['Mei11'] = ['Это он.'];
Strings['Kiana14/setKurikara'] = ['Мей...!!!'];
Strings['Mei12'] = ['Достаточно.'];
Strings['Narrator/inDarkness/AnimationShort'] = ['......'];
Strings['Narrator2/setNagazora'] = [
  'В темной комнате, погруженный в свои мысли мужчина смотрел на монитор.',
  'Результаты его первого эксперимента превзошли все его ожидания.',
  '*Дзынь*',
  'Появилось сообщение от Эмбер.',
  'Mужчина был ошеломлен отчетами.',
  'Райден Мей вступила в Ёрмунганд; К423 ушла с Гиперионом; 5-ый Судья скоро появится.',
  'Баланс мира может быть снова разрушен. Но это на данный момент не входит в число его основных забот.',
  '......',
  'Тереза позаботится о ней.',
  'Ночь еще только начинается.',
  'У него так много дел, которые надо сделать.',
];

let n: number = 0;
let l: number = 0;
let k: number = 0;
let interval: number | boolean;
let timeOut: number | TimerHandler;
var autoPlayStatus: boolean = false;
let timeoutWaitingSkip: number;
let timeoutCloseSkip: number;
let timeoutLoad: number;
var showSkipClaim: boolean = true;
let StringsKeys: string[] = Object.keys(Strings);

$(window).on('load', (): void => {
  timeoutLoad = setTimeout((): void => {
    changeText();
    $('.wrapper').removeClass('pointer-events-none');
  }, 400);
});
$(document).on('click', '.display__TextBox:not(.working)', (): void => {
  if (typeof timeOut == 'number') clearTimeout(timeOut);
  changeText();
});
$(document).on('click', '.display__TextBox.working', (): void => {
  if (typeof interval == 'number') clearInterval(interval);
  if (typeof timeOut == 'number') clearTimeout(timeOut);
  $('.display__TextBox__text').html(Strings[StringsKeys[k]][n]);
  if (
    $('.display__TextBox__text').prop('scrollHeight') >
    $('.display__TextBox__text').prop('clientHeight')
  ) {
    $('.display__TextBox__text').addClass('SmallText');
  }
  $('.display__TextBox__triangleBlock').removeClass('hidden');
  $(this).removeClass('working');
  n++;
  AddToHistory(k, n);
  if (autoPlayStatus) {
    timeOut = setTimeout(changeText, 2000);
  }
});

function changeText() {
  if (Strings[StringsKeys[k]][n] == undefined) {
    k++;
    n = 0;
    l = 0;
    if (Strings[StringsKeys[k]] == undefined) {
      $('.wrapper').addClass('pointer-events-none lightOff');
      return;
    } else {
      var changingScene = changeScene(k);
      if (changingScene == false) return;
    }
  }
  if (Strings[StringsKeys[k]][n] !== undefined) {
    let text: string;
    $('.display__TextBox').addClass('working');
    let String: string = Strings[StringsKeys[k]][n].split('');
    $('.display__TextBox__text').removeClass('SmallText');
    $('.display__TextBox__triangleBlock').addClass('hidden');
    $('.display__TextBox__text').html('');
    let startType: number = new Date().valueOf();
    let endType: number;
    let l: number = 0;
    interval = setInterval((): void => {
      text += String[l];
      $('.display__TextBox__text').html(text);
      l++;
      if (
        $('.display__TextBox__text').prop('scrollHeight') >
        $('.display__TextBox__text').height()
      ) {
        $('.display__TextBox__text').addClass('SmallText');
      }
      if (String[l] == undefined) {
        if (typeof interval == 'number') clearInterval(interval);
        interval = false;
        endType = new Date().valueOf();
        $('.display__TextBox').removeClass('working');
        $('.display__TextBox__triangleBlock').removeClass('hidden');
        if (autoPlayStatus) {
          timeOut = setTimeout(changeText, endType - startType + 500);
        }
        n++;
        AddToHistory(k, n);
      }
    }, 50);
  }
}

const changeScene: Function = (NumScene: number): boolean => {
  if (NumScene != 27 && NumScene != 35 && NumScene != 38) {
    $('.display__TextBox__text').html('');
  }
  switch (NumScene) {
    case 1: {
      $('.wrapper').append(
        `<audio loop autoplay> <source src="sound/HOYO-MiX%20-%20Loneliness.mp3">  </audio>`
      );
      $('audio')[0].volume = '0.3';
      setCharacter('Kiana');
      $('.wrapper').css('background-image', 'url(img/SchoolRoof.jpg)');
      break;
    }
    case 2: {
      $('.display__TextBox__name').html('???');
      $('.display__TextBox').css('color', '#9b2c2c');
      break;
    }
    case 16:
    case 3: {
      setKianaText();
      break;
    }
    case 25:
    case 4: {
      $('.display__characters').empty();
      setCharacter('Kevin');
      setKevinText();
      break;
    }
    case 5: {
      $('.display__characters').append(
        '<img src="img/Kiana.webp" class="Kiana">'
      );
      ChangeActiveCharacter();
      setKianaText();
      break;
    }
    case 15:
    case 10:
    case 8:
    case 6: {
      ChangeActiveCharacter();
      setKevinText();
      break;
    }
    case 33:
    case 30:
    case 23:
    case 21:
    case 19:
    case 9:
    case 7: {
      ChangeActiveCharacter();
      setKianaText();
      break;
    }
    case 11: {
      $('.wrapper').append(`<div class='video FullScreenVideo'>
<video src="img/thunder.mp4"  autoplay></video></div>`);
      $('body').append(
        `<audio src="sound/thunder.wav#t=2,8" autoplay>    </audio>`
      );
      $('.video').append($('.menu__Skip').clone());
      $('.wrapper').children().not('.video').addClass('hidden');
      autoPlayStatus = false;
      if (typeof timeOut == 'number') clearTimeout(timeOut);
      $('audio')[0].pause();
      ChangeActiveCharacter();
      $('.Kevin').remove();
      setKianaText();
      $('#on').remove();
      $('.wrapper').removeClass('lightOn');
      break;
    }
    case 26:
    case 12: {
      $('.display__characters').empty();
      setCharacter('Mei');
      setMeiText();
      break;
    }
    case 13: {
      setKevinText();
      ChangeActiveCharacter();
      setCharacter('Kevin');
      break;
    }
    case 36:
    case 34:
    case 29:
    case 24:
    case 22:
    case 20:
    case 18:
    case 14: {
      setMeiText();
      ChangeActiveCharacter();
      break;
    }
    case 17: {
      setKianaText();
      $('.Kevin').remove();
      setCharacter('Kiana');
      break;
    }
    case 27: {
      $('.wrapper').addClass('pointer-events-none');
      $('audio')[0].pause();
      $('.wrapper').addClass('lightOff');
      setTimeout((): void => {
        $('.display__characters').empty();
        $('.wrapper').css('background-image', '');
        $('.wrapper').removeClass('lightOff');
        $('.wrapper').removeClass('lightOn');
        $('.wrapper').removeClass('pointer-events-none');
        changeText();
      }, 3000);
      return false;
    }
    case 28: {
      $('.wrapper').addClass('pointer-events-none');
      $('.wrapper').css('background-image', 'url(img/SchoolRoof.jpg)');
      $('.wrapper').prepend(
        '<div class="backgroungLayer2 lightningBlick"></div>'
      );
      $('.backgroungLayer2').css('background-image', 'url(img/lightning.png)');
      setCharacter('KianaWithBat');
      setCharacter('MeiWithGun', false);
      setKianaText();
      $('.wrapper').addClass('lightOn');
      $('source').attr(
        'src',
        'sound/HOYO-MiX%20-%20Never%20Let%20You%20Go.mp3'
      );
      $('audio')[0].load();
      $('audio')[0].play();
      setTimeout((): void => {
        $('.wrapper').removeClass('pointer-events-none');
      }, 4000);
      break;
    }
    case 31: {
      setKianaText();
      $('.backgroungLayer2').remove();
      $('.display__characters').empty();
      $('.wrapper').css('background-image', 'url(img/KianaMeiBattle.png)');
      break;
    }
    case 32: {
      setMeiText();
      $('.wrapper').css('background-image', 'url(img/SchoolRoof.jpg)');
      $('.wrapper').prepend(
        '<div class="backgroungLayer2 lightningBlick"></div>'
      );
      $('.backgroungLayer2').css('background-image', 'url(img/lightning.png)');
      setCharacter('MeiWithGun');
      setCharacter('KianaHerrscher', false);
      break;
    }
    case 35: {
      $('.wrapper').addClass('pointer-events-none');
      $('.wrapper').addClass('lightOff');
      $('.backgroungLayer2').remove();
      $('.lightOff').css('animation-duration', '1.5s');
      $('body').append(
        `<audio src="sound/dragon.mp3#t=1,4" autoplay>    </audio>`
      );
      setTimeout((): void => {
        $('.display__characters').empty();
        setKianaText();
        $('.wrapper').css('background-image', 'url(img/Kurikara.jpg)');

        $('.wrapper').removeClass('lightOff lightOn');
        $('.lightOff').css('animation-duration', '3s');
        changeText();
      }, 1500);
      setTimeout((): void => {
        $('.wrapper').removeClass('pointer-events-none');
        $('audio')[1].remove();
      }, 3000);
      return false;
    }
    case 37: {
      $('.wrapper').append(
        `<div class='video'> <video src="img/Animated%20Short%20%5BLament%20of%20the%20Fallen%5D%20Japanese%20Dub%20Version.mp4" autoplay></video></div>`
      );
      $('.wrapper').css('background-image', '');
      $('.video').append($('.menu__Skip').clone());
      $('.wrapper').children().not('.video').addClass('hidden');
      autoPlayStatus = false;
      $('audio')[0].pause();
      $('#on').remove();
      $('.display__TextBox__name').text('');
      $('.display__TextBox__line').css('background', 'none');
      $('.display__TextBox').css('color', 'grey');
      $('.wrapper').removeClass('lightOff lightOn');
      break;
    }
    case 38: {
      $('.wrapper').addClass('lightOff pointer-events-none');
      setTimeout((): void => {
        $('.wrapper').css('background-image', 'url(img/Nagazora.jpg)');
        $('.wrapper').removeClass('lightOff lightOn pointer-events-none');
        changeText();
      }, 3000);
      return false;
    }
  }
};

const hideInterface: Function = (): void => {
  $('.menu').toggleClass('opacity-0 pointer-events-none cursor-none');
  $('.display__TextBox').toggleClass(
    'opacity-0 pointer-events-none cursor-none'
  );
  autoPlayStatus = false;
  $('#on').remove();
  setTimeout((): void => {
    $('body').toggleClass('interfaceHidden');
  }, 10);
};
const setKianaText: Function = (): void => {
  $('.display__TextBox__name').html('Киана');
  $('.display__TextBox').css('color', '#146a8d');
};
const setKevinText: Function = (): void => {
  $('.display__TextBox__name').html('Кевин');
  $('.display__TextBox').css('color', 'black');
};
const setMeiText: Function = (): void => {
  $('.display__TextBox__name').html('Мей');
  $('.display__TextBox').css('color', 'purple');
};
const ChangeActiveCharacter: Function = (): void => {
  $('.display__characters').children().toggleClass('activeCharacter');
};
const setCharacter: Function = (
  character: string,
  active: boolean = true
): void => {
  let src: string;
  switch (character) {
    case 'Kiana': {
      src = 'img/Kiana.webp';
      break;
    }
    case 'Mei': {
      src = 'img/Mei.webp';
      break;
    }
    case 'Kevin': {
      src = 'img/Kevin.webp';
      break;
    }
    case 'KianaWithBat': {
      src = 'img/KianaWithBat%20.png';
      break;
    }
    case 'MeiWithGun': {
      src = 'img/MeiWithGun.png';
      break;
    }
    case 'KianaHerrscher': {
      src = 'img/KianaHerrscher.webp';
      break;
    }
  }
  $('.display__characters').append(
    '<img src="' + src + '" class="' + character + '">'
  );
  if (active) {
    $('.' + character).addClass('activeCharacter');
  }
};

const removeVideo: Function = (): void => {
  $('.video').remove();
  $('.wrapper').addClass('lightOn pointer-events-none');
  setTimeout(function () {
    $('.wrapper').removeClass('lightOn pointer-events-none');
  }, 4000);
  $('.wrapper').children().removeClass('hidden');
  clearTimeout(timeoutWaitingSkip);
  clearTimeout(timeoutCloseSkip);
  RemoveSkipClaim();
  clearTimeout(timeoutLoad);
  if (typeof timeOut == 'number') clearTimeout(timeOut);
  if ($('audio')[1]) $('audio')[1].remove();
  switch (k) {
    case 11: {
      $('source').attr('src', 'sound/HOYO-MiX%20-%20Why.mp3');
      $('audio')[0].load();
      $('audio')[0].play();
      break;
    }
    case 37: {
      $('source').attr('src', 'sound/HOYO-MiX%20-%20Gathered%20Pace.mp3');
      $('audio')[0].load();
      $('audio')[0].play();
      break;
    }
  }
};

const SkipPart: Function = () => {
  autoPlayStatus = false;
  if (typeof interval == 'number') clearInterval(interval);
  if (typeof timeOut == 'number') clearTimeout(timeOut);
  let startK: number = k;
  let startN: number = n;
  $('.display__TextBox__text').html('');
  $('#on').remove();
  $('.wrapper').children().not('.video').addClass('hidden');
  $('.display__characters').empty();
  if (k < 11) {
    clearTimeout(timeoutLoad);
    if (!$('audio')[0]) {
      $('.wrapper').append(`<audio loop autoplay> <source src="">  </audio>`);
      $('audio')[0].volume = '0.3';
    }
    $('.wrapper').append(`<div class='video FullScreenVideo'>
<video src="img/thunder.mp4"  autoplay></video></div>`);
    $('body').append(
      `<audio src="sound/thunder.wav#t=2,8" autoplay>    </audio>`
    );
    $('.video').append($('.menu__Skip').clone());
    $('audio')[0].pause();
    setCharacter('Kiana');
    setKianaText();
    $('.wrapper').css('background-image', 'url(img/SchoolRoof.jpg)');
    k = 11;
    n = 0;
    changeText();
  } else if (k < 37) {
    $('.wrapper').append(
      `<div class='video'> <video src="img/Animated%20Short%20%5BLament%20of%20the%20Fallen%5D%20Japanese%20Dub%20Version.mp4" autoplay></video></div>`
    );
    $('.wrapper').css('background-image', '');
    $('.video').append($('.menu__Skip').clone());
    $('audio')[0].pause();
    $('.display__TextBox__name').text('');
    $('.display__TextBox__line').css('background', 'none');
    $('.display__TextBox').css('color', 'grey');
    k = 37;
    n = 0;
    changeText();
  } else {
    $('.wrapper').children().removeClass('hidden');
    $('.wrapper').removeClass('lightOff');
    $('.wrapper').addClass('pointer-events-none lightOff');
  }
  while (startK < k) {
    let name: string;
    if (StringsKeys[startK].indexOf('Kiana') >= 0) name = 'Киана';
    if (StringsKeys[startK].indexOf('Kevin') >= 0) name = 'Кевин';
    if (StringsKeys[startK].indexOf('Mei') >= 0) name = 'Мей';
    if (StringsKeys[startK].indexOf('unknown') >= 0) name = '???';
    AddToHistory(startK, startN + 1, name);
    if (Strings[StringsKeys[startK]][startN + 1] == undefined) {
      startK++;
      startN = 0;
      name = '';
    } else {
      startN++;
    }
  }
};
const setSkipClaim: Function = (): void => {
  autoPlayStatus = false;
  $('#on').remove();
  if (typeof timeOut == 'number') clearTimeout(timeOut);
  $('.wrapper').addClass('lock');
  $('.wrapper').children().addClass('hidden');
  $('.wrapper').removeClass('lightOn lightOff');
  $('.wrapper').append(`<dialog class='skipClaim' >
  <div class='skipClaim__contentBlock relative'>
  <div class='skipClaim__header'>Skip</div>
  <div class='skipClaim__text text-white'>Are you sure you want to skip the story?<br><font color='#e34141'>(You may not be able to unlock certain CG in the Collection if you skip.)</font></div>
  <div class='skipClaim__line flex'>
  <div class='skipClaim__lineFirstPart'></div>
  <div class='skipClaim__lineDiamond'></div>
  <div class='skipClaim__lineSecondPart'></div>
  </div>
  <div class='skipClaim___buttons flex text-black'>
  <button type='button' class='skipClaim__button skipClaim__buttonCancel'>Cancel</button>
  <button type='button' class='skipClaim__button skipClaim__buttonConfirm'>Confirm</button>
  </div>
  <div class='skipClaim__exitBtn absolute top-0 right-0'>x</div>
 </div>
  <div class='skipClaim__checkboxBlock flex justify-center'>
  <input type="checkbox" name="showClaim" id='skipClaim__checkbox'><label for='skipClaim__checkbox' class='skipClaim__checkboxLabel items-center relative'><span></span>Don't show me this again today</label>
  </div>
  </dialog>`);
  $('.skipClaim').addClass('pointer-events-auto');
  let dialog: HTMLCollection = document.getElementsByClassName('skipClaim');
  dialog[0].showModal();
};
const RemoveSkipClaim: Function = (): void => {
  $('.wrapper').removeClass('lock');
  $('.skipClaim').remove();
};
const AddToHistory: Function = (k: number, n: number, name: string = '') => {
  $('.history__content').append('<div class="history__string"></div>');
  $('.history__string:last').append(
    $('<div>', {
      class: 'history__stringName text-white',
      text: $('.display__TextBox__name').html(),
    })
  );
  $('.history__string:last').append(
    $('<div>', {
      class: 'history__stringText',
      text: Strings[StringsKeys[k]][n - 1],
    })
  );
  if ($('.display__TextBox__name').html() == '')
    $('.history__stringName:last').html('&nbsp');
  if (name.length > 0) $('.history__stringName:last').html(name);
};

document.addEventListener(
  'play',
  (e): void => {
    if ($(e.target).is('video')) $('.history').addClass('hidden');
  },
  true
);
document.addEventListener(
  'ended',
  (e): void => {
    if ($(e.target).is('video')) removeVideo();
  },
  true
);
$(document).on('click', '.video .menu__Skip', (): void => {
  if (showSkipClaim) setSkipClaim();
  else removeVideo();
});
$(document).on('click', '.menu .menu__Skip', (): void => {
  if (showSkipClaim) setSkipClaim();
  else SkipPart();
});
$(document).on('click', '.skipClaim__buttonConfirm', (): void => {
  if ($('#skipClaim__checkbox').is(':checked')) {
    showSkipClaim = false;
  }
  if ($('video').length) {
    removeVideo();
  } else {
    SkipPart();
  }
  RemoveSkipClaim();
});
$(document).on('click', '.interfaceHidden', hideInterface);
$(document).on(
  'click',
  '.skipClaim__exitBtn,.skipClaim__buttonCancel',
  (): void => {
    RemoveSkipClaim();
    $('.wrapper').children().removeClass('hidden');
  }
);
$(document).on('click', '.video', (): void => {
  $('.video .menu__Skip').removeClass('lightOff');
  $(this).children('.menu__Skip').toggleClass('absolute top-0 right-0 ');
  $('.video .menu__Skip').css('animation-duration', '1.5s!important');
  if (timeoutWaitingSkip >= 0 && timeoutCloseSkip >= 0) {
    clearTimeout(timeoutWaitingSkip);
    clearTimeout(timeoutCloseSkip);
  }
  timeoutWaitingSkip = setTimeout((): void => {
    $('.video .menu__Skip').addClass('lightOff');
  }, 4000);
  timeoutCloseSkip = setTimeout((): void => {
    $('.video .menu__Skip').toggleClass('absolute top-0 right-0 ');
  }, 7000);
});
$('.menu__hide').click(hideInterface);
$('.menu__AutoPlay').click((): void => {
  if (autoPlayStatus) {
    autoPlayStatus = false;
    $('#on').remove();
    if (typeof interval == 'number') clearInterval(interval);
  } else {
    autoPlayStatus = true;
    $(this).children('img').before('<span id="on">ON</span>');
  }
  if (interval <= 0 && autoPlayStatus) changeText();
  if (interval <= 0 && !autoPlayStatus) {
    if (typeof timeOut == 'number') clearTimeout(timeOut);
  }
});
$('.menu__history').click((): void => {
  $('.wrapper').toggleClass('lock');
  $('.history').toggleClass('hidden');
  let history: HTMLCollection =
    document.getElementsByClassName('history__content');
  history[0].scrollTop = history[0].scrollHeight;
});
$('.history__exitBtn').click((): void => {
  $('.wrapper').toggleClass('lock');
  $('.history').toggleClass('hidden');
});
