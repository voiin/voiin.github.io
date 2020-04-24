const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    loop: 'all',
    autoplay: true,
    preload: 'auto',
    listFolded: false,
    //listMaxHeight: 100,
    lrcType: 1,
    audio: [
       {
	name: 'Heroes (we could be)',
	artist: 'Alesso / Tove Lo',
	url: 'https://axrni.cn/dist/music/Hero.mp3',
	cover: 'https://axrni.cn/dist/music/Hero.jpg',
	lrc: "[00:07.970]We go hideaway in daylight\n[00:11.770]We go undercover when under sun\n[00:15.550]Got a secret side in plain sight\n[00:19.330]Where the streets are empty\n[00:20.590]That’s where we run\n[00:22.430]Everyday people do\n[00:24.170]Everyday things but I\n[00:26.060]Can’t be one of them\n[00:30.050]I know you hear me now\n[00:31.740]We are a different kind\n[00:33.700]We can do anything\n[00:36.690]We could be heroes\n[00:44.060]We could be heroes\n[00:48.120]Me and you\n[00:52.000]We could be heroes\n[00:59.520]We could be heroes\n[01:03.500]Me and you\n[01:07.150]We could be\n[01:23.630]Anybody’s got the power\n[01:27.810]They don’t see it\n[01:28.700]‘Cos they don’t understand\n[01:31.540]Spin around and run for hours\n[01:35.380]You and me we got the world in our hands\n[01:38.520]Everyday people do\n[01:40.520]Everyday things but I\n[01:42.810]Can’t be one of them\n[01:46.290]I know you hear me now\n[01:48.190]We are a different kind\n[01:50.180]We can do anything\n[01:53.020]We could be heroes\n[02:00.440]We could be heroes\n[02:04.270]Me and you\n[02:08.110]We could be heroes\n[02:15.670]We could be heroes\n[02:19.410]Me and you\n[02:23.190]We could be\n[02:38.530]We could be heroes\n[02:45.950]We could be heroes\n[02:50.330]Me and you\n[02:54.060]We could be\n[02:55.700]All we're looking for is love and a little light\n[02:58.990]Love and a little light\n[03:01.770](We could be)\n[03:03.310]All we're looking for is love and a little light\n[03:06.460]Love and a little light\n[03:09.400]We could be heroes\n[03:17.010]We could be heroes\n[03:20.900]Me and you\n[03:24.630]We could be\n"
       },
       {
        name: 'Where Is The Love',
        artist: 'Ellena Soule',
        url: 'https://axrni.cn/dist/music/Love.mp3',
        cover: 'https://axrni.cn/dist/music/Love.jpg',
        lrc: "[00:35.34]People killin' People dyin'\n[00:37.53]Children hurt and you hear them crying\n[00:39.76]Can you practice what you preach\n[00:41.85]Or would you turn the other cheek\n[00:44.11]Father father father, help us\n[00:46.32]Send some guidance from above\n[00:46.97]Cause right now people have me questionin'\n[00:48.87]Where is the love?\n[00:51.84]The love\n[00:54.58]The love\n[00:56.77]Where is the love, the love, my love?\n[00:58.35]Where is the love?\n[01:02.78]Where is the love?\n[01:04.97]Where is the love, the love, my love?\n[01:07.08]What's wrong with the world, mama?\n[02:38.98]People livin' like they ain't got no mamas\n[02:40.45]I think the whole world's addicted to the drama\n[02:42.61]Only attracted to the things that'll bring the trauma\n[02:44.76]Overseas ya we tryin' to stop terrorism\n[02:47.00]But we still got terrorists here livin'\n[02:49.08]In the U.S.A, the big C.I.A\n[02:51.30]The bloods and the crips, and the KKK\n[02:53.68]But if you only got love for your own ways\n[02:55.90]Then you only leave space to discriminate\n[02:58.13]To discriminate only generates hate\n[03:00.28]And when you hate, then you're bound to get irate\n[03:02.74]Madness is what you demonstrate\n[03:05.47]And that's exactly how anger works and operates\n[03:07.04]Man ya gotta have love, this'll set us straight\n[03:09.40]Take control of your mind and meditate\n[03:11.35]Let your soul gravitate\n[03:13.64]to the love ya'll (to the love ya'll)\n[03:14.88]to the love ya'll (to the love ya'll)\n[03:19.35]to the love ya'll (to the love ya'll)\n[03:23.65]to the love ya'll (to the love ya'll)\n[03:28.03]People killin' People dyin'\n[03:32.44]Children hurt and you hear them crying\n[03:34.73]Can you practice what you preach\n[03:36.88]Or would you turn the other cheek\n[03:39.03]Father father father, help us\n[03:41.27]Send some guidance from above\n[03:43.30]Cause right now people have me questionin'\n[03:45.38]Where is the love?\n[03:48.38]The love\n[03:51.54]The love\n[03:53.82]Where is the love, the love, my love?\n[03:55.49]Where is the love?\n[03:59.92]Where is the love?\n[04:02.10]Where is the love, the love, my love?\n[04:04.21]"
      },
      {
        name: 'Sway',
        artist: 'Syn Cole / Newe',
        url: 'https://axrni.cn/dist/music/Sway.mp3',
        cover: 'https://axrni.cn/dist/music/Sway.jpg',
        lrc: '[00:01.321]作曲：Rene "Syn Cole" Pais/William Rappapor/Keeley Bumford\n[00:02.321]作词：Rene "Syn Cole" Pais/William Rappapor/Keeley Bumford\n[00:11.321]ah~\n[00:13.321]Pay respect to the rumours\n[00:16.321]We break wars for the future\n[00:20.321]You and me caught up in the sway,sway\n[00:26.321]Keep off,we are the trigger\n[00:29.321]Giving our control is over\n[00:34.321]Enemies caught up in the sway, sway\n[00:40.321]These machines try to push us back but we won’t move\n[00:46.321]Victory for the dreamers nothing left to prove\n[00:52.321]Standing our ground out in the rain\n[00:55.321]Why don’t you say it to our face?\n[00:58.321]Swallow the paper soldiers\n[01:01.321]Get out of the way\n[01:05.321]Sway\n[01:18.321]Sway\n[01:31.321]Sway\n[01:32.321]ah~ye~\n[01:36.321]ah~ye~\n[01:40.321]ah~ye~\n[01:44.321]ah~\n[01:46.321]Don’t think we are the sleepers\n[01:49.321]We’re the truth getting deeper\n[01:53.321]You and me caught up in the sway,sway\n[01:59.321]Open fire on the system\n[02:02.321]We’ll light up the resistance\n[02:06.321]Always be caught up in the sway, sway\n[02:12.321]These machine try to push us back but we won’t move\n[02:18.321]Victory for the dreamers nothing left to prove\n[02:25.321]Standing our ground out in the rain\n[02:28.321]Why don’t you say it to our face？\n[02:31.321]Swallow the paper soldiers\n[02:35.321]Get out of the way\n[02:38.321]Sway\n[02:51.321]Sway\n[03:04.321]Sway'
      },
      {
        name: 'Save Me',
        artist: 'DEAMN',
        url: 'https://axrni.cn/dist/music/Save.mp3',
        cover: 'https://axrni.cn/dist/music/Save.jpg',
        lrc: "[00:02.300]Get me oh\n[00:05.700]Get me oh oh\n[00:07.300]I see the light inside your eyes\n[00:10.500]You make me feel like\n[00:12.400]I'm awake\n[00:15.400]I don't know why you make me shine\n[00:18.350]like a star in the sky\n[00:20.300]I'm ok\n[00:22.400]\n[00:23.300]I wanna take a breathe\n[00:25.600]I'm falling in love\n[00:28.300]I'm falling in love\n[00:31.300]I wanna hold your hand\n[00:33.500]Don't leave me alone\n[00:35.500]Don't leave me alone\n[00:38.400]\n[00:39.300]You get me high oh yeah\n[00:44.300]Be by my side\n[00:45.600]Baby yeah\n[00:48.300]Only you can save me\n[00:52.300]Only you can save me\n[00:55.300]Get me oh oh\n[00:57.300]Get me oh oh yeah\n[00:59.300]Get me oh oh oh (Get me)\n[01:01.600]You can save me\n[01:03.000]Get me oh oh\n[01:05.300]Get me oh oh yeah\n[01:08.300]Oh yeah\n[01:09.400]\n[01:10.300]I hold you tight\n[01:12.000]You blow my mind\n[01:13.300]Like a bottle of wine\n[01:15.400]I'm insane\n[01:18.300]I come alive\n[01:20.400]You drive me wild\n[01:21.300]When I kiss you at night\n[01:23.400]I'm ok\n[01:25.400]\n[01:26.300]I wanna take a breathe\n[01:28.600]I'm falling in love\n[01:31.300]I'm falling in love\n[01:34.300]I wanna hold your hand\n[01:36.500]Don't leave me alone\n[01:38.500]Don't leave me alone\n[01:42.400]\n[01:43.300]You get me high oh yeah\n[01:47.300]Be by my side\n[01:48.600]Baby yeah\n[01:51.300]Only you can save me\n[01:55.300]Only you can save me\n[01:58.300]Get me oh oh\n[02:00.300]Get me oh oh yeah\n[02:02.300]Get me oh oh oh (Get me)\n[02:04.600]You can save me\n[02:06.000]Get me oh oh\n[02:08.300]Get me oh oh yeah\n[02:11.300]Oh yeah\n[02:13.400]\n[02:14.300]You get me high oh yeah\n[02:20.000]Baby yeah\n[02:22.800]Only you can save me\n[02:26.300]Only you can save me\n[02:29.400]Get me oh oh\n[02:31.300]Get me oh oh yeah\n[02:33.300]Get me oh oh oh (Get me)\n[02:35.600]You can save me\n[02:37.000]Get me oh oh\n[02:39.300]Get me oh oh yeah\n[02:42.300]Oh yeah\n[02:45.300]Get me oh oh\n[02:47.300]Get me oh oh yeah\n[02:49.300]Get me oh oh oh (Get me)\n[02:51.600]You can save me\n[02:53.000]Get me oh oh\n[02:55.300]Get me oh oh yeah\n[02:58.300]Oh yeah\n[02:59.400](Save me)"
      }
    ]
});
