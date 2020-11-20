(function() {
    var bv = new Bideo();
    bv.init({
        // Video元素
        videoEl: document.querySelector('#background_video'),

        // 容器元素
        container: document.querySelector('body'),

        // 自适应调整
        resize: true,

        // autoplay: false,

        isMobile: window.matchMedia('(max-width: 768px)').matches,

        playButton: document.querySelector('#play'),
        pauseButton: document.querySelector('#pause'),

        // 加载视频源, 根据实际业务更换自己的视频源文件
        src: [{
                src: 'video/挑 战 B 站 壁 纸 上 限！.mp4',
                type: 'video/mp4'
            },
            {
                src: 'night.webm',
                type: 'video/webm;codecs="vp8, vorbis"'
            }
        ],

        // 一旦视频加载后即将视频封面隐藏
        onLoad: function() {
            document.querySelector('#video_cover').style.display = 'none';
        }
    });
}());