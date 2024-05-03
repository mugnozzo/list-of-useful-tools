const elements = [
	{
		name:'activitywatch',
		url:'https://github.com/ActivityWatch/activitywatch',
		description:'monitor your activity, collect data and view stats about your life',
		tags:['free of charge', 'watcher', 'work-tool']
	},
	{
		name:'adminer',
		url:'https://www.adminer.org/',
		description:'a database manager in a single php file (like phpMyAdmin but lighter)',
		tags:['database', 'database manager', 'mysql']
	},
	{
		name:'aerc',
		url:'https://aerc-mail.org/',
		description:'CLI mail client',
		tags:['CLI', 'mail client']
	},
	{
		name:'arch linux',
		url:'https://archlinux.org/',
		description:'A lightweight, bleeding edge, minimal, rolling release, KISS, linux distro.',
		tags:['arch linux', 'linux', 'operating system']
	},
	{
		name:'aria2',
		url:'https://github.com/aria2/aria2',
		description:'Client to download files supporting several protocols (including bittorrent)',
		tags:['downloader']
	},
	{
		name:'assimil',
		url:'https://www.assimil.com/',
		description:'a method/website with book and audio to learn foreign languages by listening/reading everyday conversation and doing exercises to fix in your mind the concepts present in the daily lessons',
		tags:['app', 'language learning', 'languages']
	},
	{
		name:'Arch User Repository',
		url:'https://aur.archlinux.org/',
		description:'The community user repository for Arch Linux.',
		tags:['arch linux', 'linux', 'repository']
	},
	{
		name:'awesome blender',
		url:'https://github.com/agmmnn/awesome-blender',
		description:'a list of awesome tools (free and paid) for Blender',
		tags:['blender', 'list']
	},
	{
		name:'awesome command line apps',
		url:'https://git.herrbischoff.com/awesome-command-line-apps/about/',
		description:'a list of awesome apps that are reachable from CLI',
		tags:['CLI', 'list']
	},
	{
		name:'awesome testing',
		url:'https://github.com/TheJambo/awesome-testing',
		description:'a curated list of testing software, extensions and resources',
		tags:['list']
	},
	{
		name:'awk',
		url:'http://awklang.org/',
		description:'CLI command and language to manipulate text, extract data, with special functions to manage "columns" in structured data (e.g. CSV)',
		tags:['CLI', 'FLOSS', 'linux', 'text manipulation']
	},
	{
		name:'barcode',
		url:'',
		description:'linux CLI tool to create barcodes and save them in various formats',
		tags:['CLI', 'barcode']
	},
	{
		name:'beautifulsoup',
		url:'https://beautiful-soup-4.readthedocs.io/en/latest/',
		description:'python library for getting structured data from HTML/XML (good for web scraping)',
		tags:['python', 'python module']
	},
	{
		name:'binocle',
		url:'https://github.com/sharkdp/binocle',
		description:'A graphical tool to visualize binary data',
		tags:['binary data manipulation']
	},
	{
		name:'binvis.io',
		url:'https://binvis.io/',
		description:'An online tool to visualize binary data',
		tags:['binary data manipulation']
	},
	{
		name:'black player',
		url:'https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree',
		description:'app to listen music on your smartphone (<a href="https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree" target="_blank" alt="Black Player Free">free</a> and <a href="https://play.google.com/store/apps/details?id=com.kodarkooperativet.blackplayerex" target="_blank"alt="Black Player EX">paid</a> versions available)',
		tags:['app', 'free or paid', 'music', 'music player']
	},
	{
		name:'blender',
		url:'https://blender.org',
		description:'Advanced software for 3d modeling, animating, shading/texturing/rendering, rigging, basic video editing, motion tracking, etc...',
		tags:['3d', '3d animation', '3d modeling', '3d rendering', '3d rigging', 'FLOSS', 'free of charge']
	},
	{
		name:'broot',
		url:'https://github.com/Canop/broot',
		description:'CLI tool to have a tree view of a folder and its subfolder. provides fuzzy search and a command to change directory',
		tags:['CLI', 'fuzzy search']
	},
	{
		name:'bín',
		url:'https://bin.arnastofnun.is/',
		description:'A section of arnastofnun website where you can search words and find declensions and conjugations',
		tags:['icelandic', 'languages']
	},
	{
		name:'cameron\'s world',
		url:'https://www.cameronsworld.net/',
		description:'A web-collage of text and images excavated from the buried neighbourhoods of archived GeoCities pages (1994–2009). I recommend to turn on sounds with the top-right button.',
		tags:['archive', 'gif']
	},
	{
		name:'chatgpt',
		url:'https://chat.openai.com/',
		description:'artificial intelligence chatbot',
		tags:['AI', 'chat bot', 'free or paid']
	},
	{
		name:'commandlinefu.com',
		url:'https://www.commandlinefu.com/',
		description:'dynamic list of useful CL commands',
		tags:['command line']
	},
	{
		name:'croc',
		url:'https://schollz.com/blog/croc6/',
		description:'Copy files/texts from a computer to another from the command line (<a href="https://github.com/schollz/croc" target="_blank" alt="croc source code on github">code on github</a>)',
		tags:['CLI', 'file transfer']
	},
	{
		name:'dall-e',
		url:'https://labs.openai.com/',
		description:'deep learning model to generate images from a text description',
		tags:['AI', 'free or paid', 'image generation']
	},
	{
		name:'dict.cc',
		url:'https://www.dict.cc/',
		description:'An online dictionary (from/to English and German to/from a lot of languages) mantained by everybody (there is a forum too)',
		tags:['dictionary', 'languages']
	},
	{
		name:'dmenu',
		url:'https://wiki.archlinux.org/title/Dmenu',
		description:'Similar to fzf and fzy but the search/select menu works work on window manager and not on CLI',
		tags:['fuzzy search']
	},
	{
		name:'dmenu2',
		url:'',
		description:'Improved dmenu fork',
		tags:['fuzzy search']
	},
	{
		name:'dotfyle.com',
		url:'https://dotfyle.com/',
		description:'A website where you can share your neovim dotfiles with the community',
		tags:['dotfiles']
	},
	{
		name:'Draculatheme list of free fonts for programming',
		url:'https://draculatheme.com/blog/best-free-fonts-for-programming',
		description:'a list of free fonts for programming',
		tags:['font']
	},
	{
		name:'dwm',
		url:'https://dwm.suckless.org/',
		description:'Dynamic Window Manager for X based on tiling and made by <a href="https://suckless.org/" target="_blank" alt="suckless">suckless</a> team',
		tags:['suckless', 'tiling', 'window manager']
	},
	{
		name:'electron',
		url:'https://github.com/electron/electron/',
		description:'A Node-based framework to write cross-platform applications. The application windows are chromium windows showing the pages that the user creates. Electron exposes APIs to give the Chromium web application access to the system',
		tags:['framework']
	},
	{
		name:'emacs',
		url:'https://www.gnu.org/software/emacs/',
		description:'An interactive CLI/GUI text editor',
		tags:['FLOSS', 'IDE', 'text editor']
	},
	{
		name:'endoflife.date',
		url:'https://endoflife.date/',
		description:'A website collecting the information about lifecycles of various products.',
		tags:['website']
	},
	{
		name:'epy-reader',
		url:'https://github.com/wustho/epy',
		description:'A CLI ebook reader. Supports, epub, mobi and other formats.',
		tags:['CLI','ebook-reader','FLOSS']
	},
	{
		name:'etherpad',
		url:'https://github.com/ether/etherpad-lite',
		description:'A real-time, collaborative, web-based document editor.',
		tags:['FLOSS', 'document editor']
	},
	{
		name:'entr',
		url:'https://github.com/eradman/entr',
		description:'file watcher: execs shell scripts when a file changes',
		tags:['CLI', 'file watcher']
	},
	{
		name:'fasd',
		url:'https://github.com/clvv/fasd',
		description:'Smart command to jump quickly to a directory, based on "frecency"',
		tags:['CLI', 'FLOSS']
	},
	{
		name:'feh',
		url:'https://github.com/derf/feh',
		description:'Simple, lightweight image viewer',
		tags:['image visualizer']
	},
	{
		name:'ffmpeg',
		url:'https://ffmpeg.org/',
		description:'Command line tool to manage/convert video/audio/subtitles streams',
		tags:['CLI', 'FLOSS', 'audio', 'media manipulation', 'multimedia', 'video']
	},
	{
		name:'flamenco',
		url:'https://flamenco.blender.org/',
		description:'Render management software for Blender',
		tags:['3d', '3d rendering', 'FLOSS', 'free of charge']
	},
	{
		name:'flameshot',
		url:'https://github.com/flameshot-org/flameshot',
		description:'A simple but very powerful tool to make screenshots on your PC',
		tags:['screenshot']
	},
	{
		name:'foliate',
		url:'https://johnfactotum.github.io/foliate/',
		description:'A lightweight ebook reader for Linux (<a href="https://github.com/johnfactotum/foliate" target="_blank" alt="foliate source code on github">code on github</a>).',
		tags:['ebook-reader','FLOSS']
	},
	{
		name:'freecad',
		url:'https://www.freecad.org/',
		description:'3d parametric modeling software',
		tags:['3d', '3d modeling', 'CAD', 'free of charge', 'parametric modeling']
	},
	{
		name:'fugitive',
		url:'https://github.com/tpope/vim-fugitive',
		description:'vim plugin to manage git projects',
		tags:['(neo)vi(m)', 'git', 'vim', 'vim plugin']
	},
	{
		name:'fzf',
		url:'https://github.com/junegunn/fzf',
		description:'CLI command that read lines from stdin, allow you to find and select one with fuzzy search and print it to stdout',
		tags:['CLI', 'fuzzy search']
	},
	{
		name:'fzy',
		url:'https://github.com/jhawthorn/fzy',
		description:'Same as fzy but slightly different',
		tags:['CLI', 'fuzzy search']
	},
	{
		name:'ghostwriter',
		url:'https://github.com/KDE/ghostwriter',
		description:'An editor for markdown files',
		tags:['markdown', 'text editor']
	},
	{
		name:'gimp',
		url:'https://www.gimp.org/',
		description:'Advanced GUI image editor',
		tags:['FLOSS', 'audio manipulation', 'graphics', 'image manipulation']
	},
	{
		name:'gpsvisualizer.com',
		url:'https://www.gpsvisualizer.com/',
		description:'A website where you can process geographic data, visualize it, convert from/to different formats, add height to coordinates, ...',
		tags:['GPS', 'GPX', 'geolocation', 'map']
	},
	{
		name:'gpxsee',
		url:'https://www.gpxsee.org/',
		description:'Qt-based GPS log file viewer and analyzer that supports all common GPS log file formats (<a href="https://github.com/tumic0/GPXSee" target="_blank" alt="gpxsee - GitHub">code on github</a>)',
		tags:['FLOSS', 'GPS', 'GPX', 'geolocation', 'map']
	},
	{
		name:'grep',
		url:'https://www.gnu.org/software/grep/',
		description:'CLI command to process a text (from a file or stdin) and print only lines that match an expression (it can be a regexp)',
		tags:['CLI', 'FLOSS', 'linux', 'text manipulation']
	},
	{
		name:'grymoire',
		url:'https://grymoire.com/',
		description:'A minimal website with some interesting guides about tools like grep, sed, awk, ...',
		tags:['guide']
	},
	{
		name:'haveibeenpwned.com',
		url:'https://haveibeenpwned.com/',
		description:'A website where you can enter your e-mail address and see if some of your personal data could have been compromised by a data breach',
		tags:['security']
	},
	{
		name:'hexyl',
		url:'https://github.com/sharkdp/hexyl',
		description:'CLI hexadecimal viewer',
		tags:['CLI']
	},
	{
		name:'i3',
		url:'https://github.com/i3/i3',
		description:'A window manager based on tiling',
		tags:['tiling', 'window manager']
	},
	{
		name:'imagemagick',
		url:'https://imagemagick.org/',
		description:'Command line tool to convert images',
		tags:['CLI', 'image processing']
	},
	{
		name:'inkscape',
		url:'https://inkscape.org/',
		description:'vector graphics editor',
		tags:['FLOSS', 'vector graphics']
	},
	{
		name:'internet archive',
		url:'https://archive.org/',
		description:'a digital library that provides a collection of websites and media material',
		tags:['archive']
	},
	{
		name:'ipfs',
		url:'https://ipfs.tech/',
		description:'InterPlanetary File System - A peer-to-peer hypermedia protocol',
		tags:['protocol']
	},
	{
		name:'ithkuil',
		url:'https://www.ithkuil.net/',
		description:'A constructed logical language made to minimize semantic ambiguity',
		tags:['languages', 'ithkuil']
	},
	{
		name:'jc',
		url:'https://github.com/kellyjonbrazil/jc',
		description:'JSON Convert: convert to JSON the stdout of a lot shell commands and files',
		tags:['CLI', 'JSON']
	},
	{
		name:'jq',
		url:'https://github.com/stedolan/jq',
		description:'JSON processor: process JSON from stdin/file',
		tags:['CLI', 'JSON']
	},
	{
		name:'Kinsta list of programming fonts',
		url:'https://kinsta.com/blog/best-programming-font',
		description:'another list of programming fonts',
		tags:['font']
	},
	{
		name:'la sutysisku',
		url:'https://la-lojban.github.io/sutysisku/en/',
		description:'A lojban online dictionary (<a href="https://github.com/La-Lojban/sutysisku/" target="_blank" alt="la sutysisku - GitHub">code on github</a>)',
		tags:['languages', 'lojban']
	},
	{
		name:'learn x in y minutes',
		url:'https://learnxinyminutes.com/',
		description:'A website with short guides to quickly learn the basic of some programming languages (<a href="https://github.com/adambard/learnxinyminutes-docs" target="_blank" alt="learn x in y minutes - GitHub">code on github</a>)',
		tags:['learning', 'programming']
	},
	{
		name:'library of babel',
		url:'https://libraryofbabel.info/',
		description:'A website inspired by Jorge Luis Borges\' short story "The Library of Babel"',
		tags:['books']
	},
	{
		name:'librewolf',
		url:'https://librewolf.net/',
		description:'fork of Firefox, focused on privacy, security and freedom',
		tags:['FLOSS', 'firefox', 'web browser']
	},
	{
		name:'links',
		url:'http://links.twibright.com/',
		description:'linux CLI text-based internet browser',
		tags:['CLI', 'FLOSS', 'linux', 'web browser']
	},
	{
		name:'Lojban - The Incomplete Lojban Language',
		url:'https://la-lojban.github.io/uncll/romoi/xhtml_section_chunks/index.html',
		description:'The community version of the Complete lojban language. <a href="https://la-lojban.github.io/uncll/romoi/xhtml_no_chunks/" target="_blank">Here</a> the single html page version. <a href="https://github.com/La-Lojban/uncll" target="_blank">Here</a> the project on GitHub where, for every version, you can also download the PDF and the ePub and you can see the diffs from the official CLL.',
		tags:['languages', 'lojban']
	},
	{
		name:'lojban.org',
		url:'https://mw.lojban.org/',
		description:'Lojban is a constructed logical language that gives you the capability of talking about everything with no ambiguity',
		tags:['languages', 'lojban']
	},
	{
		name:'mastodon',
		url:'https://joinmastodon.org/',
		description:'Social network part of the Fediverse and name of the software that run the social network service',
		tags:['fediverse', 'FLOSS', 'social network']
	},
	{
		name:'midnight commander',
		url:'https://midnight-commander.org/',
		description:'Command line, orthodox file manager',
		tags:['CLI', 'FLOSS', 'file manager']
	},
	{
		name:'monkeytype.com',
		url:'https://monkeytype.com/',
		description:'Website for testing your typing speed in many languages (including programming languages) and getting stats',
		tags:['type speed']
	},
	{
		name:'mozilla common voice',
		url:'https://commonvoice.mozilla.org/',
		description:'a project to collect voices to train machines',
		tags:[]
	},
	{
		name:'mpd',
		url:'https://www.musicpd.org/',
		description:'flexible, powerful, server-side application for playing music',
		tags:['media player']
	},
	{
		name:'mpv',
		url:'https://mpv.io/',
		description:'A really cool and simple media player',
		tags:['CLI', 'FLOSS', 'media player']
	},
	{
		name:'mullvad',
		url:'https://mullvad.net/',
		description:'vpn service base in Sweden. You can pay with several methods, including cryptocurrencies and cash',
		tags:['VPN']
	},
	{
		name:'ncmpc',
		url:'https://github.com/MusicPlayerDaemon/ncmpc',
		description:'curses client for the Music Player Daemon',
		tags:['media player']
	},
	{
		name:'ncmpcpp',
		url:'https://github.com/ncmpcpp/ncmpcpp',
		description:'featureful ncurses based MPD client inspired by ncmpc',
		tags:['media player']
	},
	{
		name:'neofetch',
		url:'https://github.com/dylanaraps/neofetch',
		description:'CLI tool to get info about your OS',
		tags:['CLI']
	},
	{
		name:'neomutt',
		url:'https://github.com/neomutt/neomutt',
		description:'CLI mail client',
		tags:['CLI', 'mail client']
	},
	{
		name:'neovim',
		url:'https://neovim.io/',
		description:'CLI advanced but very lightweight and simple text editor (<a href="https://github.com/neovim/neovim" target="_blank" alt="neovim on github">code on github</a>). It\'s an improved fork of vim',
		tags:['FLOSS', 'IDE', 'no GUI', 'text editor']
	},
	{
		name:'nmap',
		url:'',
		description:'scan IP ranges on arbitrary ports and get info on open ports',
		tags:['CLI']
	},
	{
		name:'obs',
		url:'https://obsproject.com/',
		description:'Cool software with GUI interface for recording/streaming videos',
		tags:['FLOSS', 'multimedia']
	},
	{
		name:'octave',
		url:'https://octave.org/',
		description:'scientific programming language',
		tags:['programming language']
	},
	{
		name:'openstreetmaps',
		url:'https://www.openstreetmap.org/',
		description:'A website where you can navigate a map of the entire planet',
		tags:['FLOSS', 'GPS', 'GPX', 'geolocation', 'map']
	},
	{
		name:'phind',
		url:'https://www.phind.com/',
		description:'AI search engine for developers',
		tags:['ai', 'search engine']
	},
	{
		name:'pimsleur',
		url:'https://www.pimsleur.com/',
		description:'A method/website/app to learn foreign languages by listening and repeating everyday conversation and focusing on pronunciation',
		tags:['app', 'language learning', 'languages']
	},
	{
		name:'pixabay',
		url:'https://pixabay.com/',
		description:'Royalty-free, downloadable images, videos and music',
		tags:['images']
	},
	{
		name:'poke',
		url:'https://www.gnu.org/software/poke/',
		description:'CLI tool to edit binary files',
		tags:['CLI']
	},
	{
		name:'protonvpn',
		url:'https://protonvpn.com/',
		description:'vpn service offered by Proton AG',
		tags:['VPN']
	},
	{
		name:'pv',
		url:'',
		description:'linux CLI command to manage the progress of data',
		tags:['CLI']
	},
	{
		name:'pyphoon',
		url:'https://github.com/chubin/pyphoon',
		description:'view the Moon phase in ASCII art in your terminal',
		tags:['ASCII art']
	},
	{
		name:'qrencode',
		url:'',
		description:'linux CLI tool to create QR Codes and save them in various bitmap, vector graphics format or print it in ascii',
		tags:['CLI', 'qrcode']
	},
	{
		name:'qutebrowser',
		url:'https://qutebrowser.org/',
		description:'minimal, vim-oriented browser',
		tags:['FLOSS', 'vim oriented', 'web browser']
	},
	{
		name:'ranger',
		url:'https://ranger.github.io/',
		description:'Command line file manager',
		tags:['CLI', 'FLOSS', 'file manager']
	},
	{
		name:'rclone',
		url:'https://github.com/rclone/rclone',
		description:'Sync files between computers/clouds. It allows you data compression/encryption and multiple cloud spaces union',
		tags:['CLI', 'cloud', 'file synchronization']
	},
	{
		name:'redis',
		url:'https://redis.io/',
		description:'REmote DIctionary Server - an in-memory data structure store',
		tags:[]
	},
	{
		name:'refold',
		url:'',
		description:'a guide to language learning; refold explains a method to learn a foreign language from scratch to fluency',
		tags:['language learning', 'languages']
	},
	{
		name:'ripgrep',
		url:'https://github.com/BurntSushi/ripgrep',
		description:'Kinda "grep" like tool, but automatically searches recursively inside the files in the current directory and the default search string is a regex pattern',
		tags:['CLI', 'FLOSS', 'linux', 'text manipulation']
	},
	{
		name:'RSSHub',
		url:'https://github.com/DIYgod/RSSHub',
		description:'A tool to generate RSS feed from pretty much everything',
		tags:['RSS']
	},
	{
		name:'rsync',
		url:'https://rsync.samba.org/',
		description:'Sync files between two folders',
		tags:['CLI', 'file synchronization']
	},
	{
		name:'rubberband',
		url:'https://breakfastquay.com/rubberband/',
		description:'Command line tool to time-stretch and pitch-shift audio files',
		tags:['CLI', 'audio']
	},
	{
		name:'scrcpy',
		url:'https://github.com/Genymobile/scrcpy',
		description:'a tool to project your Android smartphone screen on your PC  and interact with it with keyboard and mouse',
		tags:['FLOSS', 'android', 'linux']
	},
	{
		name:'scribus',
		url:'https://www.scribus.net/',
		description:'publishing software',
		tags:['desktop publishing', 'editor']
	},
	{
		name:'sed',
		url:'https://www.gnu.org/software/sed/',
		description:'Non-interactive advanced text editor that allows you to manipulate files with commands and regular expressions',
		tags:['CLI', 'FLOSS', 'linux', 'text manipulation']
	},
	{
		name:'sindresorhus/awesome',
		url:'https://github.com/sindresorhus/awesome#gaming',
		description:'Awesome stuff lists',
		tags:['list']
	},
	{
		name:'slock',
		url:'https://tools.suckless.org/slock/',
		description:'screen, keyboard and mouselocker made by <a href="https://suckless.org/" target="_blank" alt="suckless">suckless</a> team',
		tags:['display locker']
	},
	{
		name:'snapdrop',
		url:'https://snapdrop.net',
		description:'Online web tool to share files with other devices in the same network. <a href="https://github.com/RobinLinus/snapdrop" target="_blank" alt="snapdrop on github">Code on Github</a> team',
		tags:['display locker']
	},
	{
		name:'sox',
		url:'https://github.com/chirlu/sox',
		description:'Sound eXchange, the Swiss Army knife of audio manipulation',
		tags:['CLI', 'FLOSS', 'media manipulation']
	},
	{
		name:'speakly',
		url:'',
		description:'a method/website/app to learn foreign languages (it currently has 8 languages available) by learning the 4000 most frequent words/expressions/sentences in the target languages with listening/speaking/flashcard exercises',
		tags:['app', 'language learning', 'languages']
	},
	{
		name:'sprunge.us',
		url:'https://sprunge.us/',
		description:'pastebin accessible via CLI ([code on github](http://github.com/rupa/sprunge))',
		tags:['CLI', 'pastebin']
	},
	{
		name:'sqlite',
		url:'https://www.sqlite.org',
		description:'a lightweight and fast SQL database engine',
		tags:['database', 'programming language', 'sqlite']
	},
	{
		name:'sqlitebrowser',
		url:'https://sqlitebrowser.org/',
		description:'a GUI browser for SQLite databases (<a href="https://github.com/sqlitebrowser/sqlitebrowser" target="_blank" alt="sqlitebrowser code on github">code on github</a>)',
		tags:['database', 'sqlite']
	},
	{
		name:'sqliteman',
		url:'',
		description:'a GUI browser for SQLite databases',
		tags:['database', 'sqlite']
	},
	{
		name:'ssh tunnels',
		url:'https://www.howtogeek.com/168145/how-to-use-ssh-tunneling/',
		description:'an article which explain how the 3 types of tunnels work and how to use them',
		tags:['ssh']
	},
	{
		name:'st',
		url:'https://st.suckless.org/',
		description:'Simple Terminal for X made by <a href="https://suckless.org/" target="_blank" alt="suckless">suckless</a> team',
		tags:['CLI', 'suckless', 'terminal']
	},
	{
		name:'stackexchange',
		url:'https://stackexchange.com/',
		description:'Well, I\'m sure you already know it',
		tags:['help']
	},
	{
		name:'stofnun árna magnússonar',
		url:'https://arnastofnun.is',
		description:'Árna Magnússon\'s Foundation for Icelandic Studies',
		tags:['icelandic', 'languages']
	},
	{
		name:'sxiv',
		url:'https://github.com/xyb3rt/sxiv',
		description:'Simple, lightweight image viewer',
		tags:['image visualizer']
	},
	{
		name:'syncthing',
		url:'https://syncthing.net/',
		description:'Keep folder pairs synchronized on different devices (available for different operative systems, including Android)',
		tags:['app', 'file synchronization', 'web GUI']
	},
	{
		name:'tails',
		url:'https://tails.boum.org/',
		description:'A portable distro, focused on privacy and protection against surveillance and censorship',
		tags:['anonimity', 'linux', 'operating system', 'security']
	},
	{
		name:'tasker',
		url:'https://tasker.joaoapps.com/',
		description:'awesome Android app that lets you run tasks when events are triggered',
		tags:['app', 'free or paid']
	},
	{
		name:'tatoeba',
		url:'https://tatoeba.org/en/',
		description:'A collection of sentences translated in multiple languages. You can contribute with new sentences or by reviewing existing ones',
		tags:['languages']
	},
	{
		name:'telescope',
		url:'https://github.com/nvim-telescope/telescope.nvim',
		description:'neovim plugin that through fuzzy search allows you to quickly jump to a file, perform grep searches and jump to the result, see git commits and a lot of other stuff',
		tags:['(neo)vi(m)', 'fuzzy search', 'vim', 'vim plugin']
	},
	{
		name:'temp.sh',
		url:'https://temp.sh/',
		description:'Online tool to transfer files from/to command line or browser',
		tags:['CLI', 'file transfer']
	},
	{
		name:'termbin.com',
		url:'https://termbin.com/',
		description:'pastebin accessible via CLI ([code on github](https://github.com/solusipse/fiche))',
		tags:['CLI', 'pastebin']
	},
	{
		name:'termux',
		url:'https://github.com/termux/termux-app',
		description:'emulate a Linux CLI on your Android smartphone',
		tags:['CLI', 'free or paid', 'mobile app', 'terminal']
	},
	{
		name:'termux:tasker',
		url:'https://github.com/termux/termux-tasker',
		description:'Tasker plugin to execute termux commands/scripts as activities',
		tags:['paid']
	},
	{
		name:'thetruesize.com',
		url:'https://thetruesize.com',
		description:'A map where you can drag countries to see their real dimensions compared. Distorsions of a world map normally change a lot the size of a country, especially when they are far from the equator. Dragging them at the sami latitude restores their actual size.',
		tags:['comparison', 'map']
	},
	{
		name:'timeshift',
		url:'https://github.com/linuxmint/timeshift',
		description:'Linux tool to make incremental snapshots of the file system, available to be restored later',
		tags:['CLI', 'linux']
	},
	{
		name:'tmux',
		url:'https://github.com/tmux/tmux',
		description:'CLI terminal multiplexer. It allows you to manage multiple shell tabs/panes into a single terminal window (or into a single tty no-GUI session)',
		tags:['CLI']
	},
	{
		name:'transfer.sh',
		url:'https://transfer.sh',
		description:'Online tool to transfer files from/to command line or browser (<a href="https://github.com/dutchcoders/transfer.sh" target="_blank" alt="transfer.sh code">code on github</a>; <a href="https://github.com/dutchcoders/transfer.sh-web" target="_blank" alt="transfer.sh web frontend">web client</a>)',
		tags:['CLI', 'file transfer']
	},
	{
		name:'ttyplot',
		url:'https://github.com/tenox7/ttyplot',
		description:'ASCII-based CLI tool that plots data from stdin',
		tags:['CLI', 'FLOSS', 'plot']
	},
	{
		name:'twa',
		url:'https://github.com/trailofbits/twa',
		description:'nice CLI tool to test websites',
		tags:['CLI']
	},
	{
		name:'typespeed',
		url:'',
		description:'linux CLI program for testing your typing speed that supports many languages, inclunding some programming languages',
		tags:['CLI', 'type speed']
	},
	{
		name:'ventoy',
		url:'https://www.ventoy.net/en/index.html',
		description:'A Free and Open Source tool to create bootable drives that allow you to choose between more than one image to boot (<a href="https://github.com/ventoy/Ventoy" target="_blank">git repo</a>)',
		tags:['FLOSS', 'boot']
	},
	{
		name:'vidir',
		url:'https://github.com/trapd00r/vidir',
		description:'A CLI tool to manage filenames (or even delete files) inside a text editor.',
		tags:['CLI', 'FLOSS', 'file renamer']
	},
	{
		name:'vifm',
		url:'https://github.com/vifm/vifm',
		description:'Command line file manager',
		tags:['CLI', 'FLOSS', 'file manager']
	},
	{
		name:'vimgolf',
		url:'https://www.vimgolf.com/',
		description:'A game/challenge where you have to do tasks in vim using as few keystrokes as possible',
		tags:['game', 'vim']
	},
	{
		name:'watson',
		url:'https://github.com/TailorDev/Watson',
		description:'CLI minimal tool to track your time',
		tags:['CLI', 'free of charge', 'time tracker', 'work-tool']
	},
	{
		name:'whisper',
		url:'https://openai.com/research/whisper',
		description:'neural net for speech recognition',
		tags:['AI', 'free of charge', 'speech-to-text']
	},
	{
		name:'word reference',
		url:'https://www.wordreference.com/',
		description:'An online dictionary (there is a forum too)',
		tags:['dictionary', 'languages']
	},
	{
		name:'wttr.in',
		url:'https://wttr.in/',
		description:'weather forecast service accessible via CLI <a href="https://github.com/chubin/wttr.in" target="_blank" alt="wttr.in on github">code/guide/features</a>)',
		tags:['ASCII art', 'CLI', 'weather']
	},
	{
		name:'xclip',
		url:'',
		description:'linux CLI command to read/write the clipboards',
		tags:['CLI', 'clipboard']
	},
	{
		name:'xev',
		url:'',
		description:'Bash command to detect and print X events (mouse movements and clicks, keyboard events, ...)',
		tags:['CLI', 'mouse', 'keyboard']
	},
	{
		name:'xtrlock',
		url:'',
		description:'A command that locks your mouse and keyboard leaving the screen visible',
		tags:['display locker']
	},
	{
		name:'yt-dlp',
		url:'https://github.com/yt-dlp/yt-dlp',
		description:'CLI command to download videos from Youtube and other video platforms. Fork of <a href="https://github.com/ytdl-org/youtube-dl" target="_blank" alt="youtube-dl">youtube-dl</a>',
		tags:['CLI', 'video downloader']
	},
	{
		name:'zathura',
		url:'https://github.com/pwmt/zathura',
		description:'highly customizable document viewer with vi-styled keybindings',
		tags:['PDF', 'viewer']
	},
	{
		name:'zbar',
		url:'',
		description:'linux CLI application and library for reading bar codes from cameras and images',
		tags:['CLI', 'barcode']
	},
	{
		name:'zoxide',
		url:'https://github.com/ajeetdsouza/zoxide',
		description:'Smart command to jump quickly to a directory, based on "frecency"',
		tags:['CLI', 'FLOSS']
	},
];

function getAllUniqueTags() {
    const allTags = [];
    elements.forEach(element => {
        allTags.push(...element.tags);
    });
    return [...new Set(allTags)];
}
