const langs = [
    { title: 'English', path: '/home', matchPath: /^\/(home|ecosystem|support)/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];

docute.init({
    landing: 'landing.html',
    title: 'APlayer',
    repo: 'DIYgod/APlayer',
    twitter: 'DIYgod',
    'edit-link': 'https://github.com/MoePlayer/APlayer/tree/master/docs',
    nav: {
        default: [
            {
                title: 'Home', path: '/home'
            },
            {
                title: 'Ecosystem', path: '/ecosystem'
            },
            {
                title: 'Support APlayer', path: '/support'
            },
            {
                title: 'Languages', type: 'dropdown', items: langs
            }
        ],
        'zh-Hans': [
            {
                title: '首页', path: '/zh-Hans/'
            },
            {
                title: '生态', path: '/zh-Hans/ecosystem'
            },
            {
                title: '支持 APlayer', path: '/zh-Hans/support'
            },
            {
                title: '选择语言', type: 'dropdown', items: langs
            }
        ],
    },
    plugins: [
        docsearch({
            apiKey: '',
            indexName: 'aplayer',
            tags: ['english', 'zh-Hans'],
            url: 'https://aplayer.js.org'
        }),
        evanyou(),
        player()
    ]
});

function player () {
    return function (context) {
        context.event.on('landing:updated', function () {
            console.log('landing:updated');
            clearPlayer();
            aplayer0();
            aplayer1();
        });
        context.event.on('content:updated', function () {
            console.log('content:updated');
            clearPlayer();
            for (let i = 0; i < document.querySelectorAll('.load').length; i++) {
                document.querySelectorAll('.load')[i].addEventListener('click', function () {
                    window[this.parentElement.id] && window[this.parentElement.id]();
                });
            }
        });
    };
}

function clearPlayer () {
    for (let i = 0; i < 10; i++) {
        if (window['ap' + i]) {
            window['ap' + i].destroy();
        }
    }
}

function aplayer1 () {
    window.ap1 = new APlayer({
        container: document.getElementById('aplayer1'),
        theme: '#F57F17',
        lrcType: 3,
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247755.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running-in-the-Night---FM-84、Ollie-Wride.3hvbva9kr6a0.jpg',
            lrc: '歌词1',
            theme: '#ebd0c2'
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
            lrc: '歌词2',
            theme: '#46718b'
        }, {
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
            lrc: '歌词3',
            theme: '#505d6b'
        }]
    });
}

function aplayer0 () {
    window.ap0 = new APlayer({
        container: document.getElementById('aplayer0'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
            lrc: '歌词3',
            theme: '#505d6b'
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
            lrc: '歌词2',
            theme: '#46718b'
        }, {
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            lrc: '歌词1',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer2 () {
    window.ap2 = new APlayer({
        container: document.getElementById('aplayer2'),
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer3 () {
    window.ap3 = new APlayer({
        container: document.getElementById('aplayer3'),
        mini: false,
        autoplay: false,
        loop: 'all',
        order: 'random',
        preload: 'auto',
        volume: 0.7,
        mutex: true,
        listFolded: false,
        listMaxHeight: 90,
        lrcType: 3,
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            lrc: '歌词1',
            theme: '#ebd0c2'
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
            lrc: '歌词2',
            theme: '#46718b'
        }, {
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
            lrc: '歌词3',
            theme: '#505d6b'
        }]
    });
}

function aplayer4 () {
    window.ap4 = new APlayer({
        container: document.getElementById('aplayer4'),
        lrcType: 3,
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            lrc: '歌词1',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer5 () {
    window.ap5 = new APlayer({
        container: document.getElementById('aplayer5'),
        lrcType: 3,
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            lrc: '歌词1',
            theme: '#ebd0c2'
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
            lrc: '歌词2',
            theme: '#46718b'
        }, {
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
            lrc: '歌词3',
            theme: '#505d6b'
        }]
    });
}

function aplayer6 () {
    window.ap6 = new APlayer({
        container: document.getElementById('aplayer6'),
        mini: true,
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            theme: '#ebd0c2'
        }]
    });
}

function aplayer7 () {
    window.ap7 = new APlayer({
        container: document.getElementById('aplayer7'),
        audio: [{
            name: 'Running in the Night(HLS)',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3串流',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            theme: '#ebd0c2',
            type: 'hls'
        }, {
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            theme: '#ebd0c2'
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
            theme: '#46718b'
        }, {
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
            theme: '#505d6b'
        }]
    });
}

function aplayer8 () {
    window.ap8 = new APlayer({
        container: document.getElementById('aplayer8'),
        theme: '#e9e9e9',
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
        }, {
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
        }]
    });

    const colorThief = new ColorThief();
    window.ap8.on('switchaudio', function (index) {
        if (!window.ap8.options.audio[index].theme) {
            colorThief.getColorAsync(window.ap8.options.audio[index].cover, function (color) {
                window.ap8.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
            });
        }
    });
}

function aplayer9 () {
    window.ap9 = new APlayer({
        container: document.getElementById('aplayer9'),
        fixed: true,
        lrcType: 3,
        audio: [{
            name: 'Running in the Night',
            artist: 'FM-84、Ollie Wride',
            url: 'https://link.jscdn.cn/sharepoint/aHR0cHM6Ly96Z3FpbmMtbXkuc2hhcmVwb2ludC5jb20vOnU6L2cvcGVyc29uYWwvemdxX3pncWluY19vbm1pY3Jvc29mdF9jb20vRWQ4dC1hYVhyNXhLb2ljNXZXLUZEdzRCbWdSQzM5YlNtaF91c18zNWotTzlTQT9lPWJ1WlVsdg.mp3',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Running%20in%20the%20Night%20-%20FM-84%E3%80%81Ollie%20Wride.jpg',
            lrc: '歌词1',
            theme: '#ebd0c2'
        }, {
            name: 'Takes All Night',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507247802.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Takes%20All%20Night%20-%20LeBrock.jpg',
            lrc: '歌词2',
            theme: '#46718b'
        }, {
            name: 'Please Dont Cry',
            artist: 'LeBrock',
            url: 'https://zgqincblog.files.wordpress.com/2022/03/wp-1647507584182.mp4',
            cover: 'https://cdn.jsdelivr.net/gh/ZGQ-inc/HTML-music-player@master/assets/cover/Please%20Dont%20Cry%20-%20LeBrock.jpg',
            lrc: '歌词3',
            theme: '#505d6b'
        }]
    });
}