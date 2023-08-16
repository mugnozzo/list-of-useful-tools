const elements = [
	{
		name:'blender',
		url:'https://blender.org',
		description:'Advanced software for 3d modeling, animating, shading/texturing/rendering, rigging, basic video editing, motion tracking, etc...',
		tags:['3d','3d modeling','FLOSS','3d rigging','3d animation','3d rendering','free of charge']
	},
	{
		name:'freecad',
		url:'https://www.freecad.org/',
		description:'3d parametric modeling software',
		tags:['3d','3d modeling','parametric modeling','CAD','free of charge']
	},
	{
		name:'activitywatch',
		url:'https://github.com/ActivityWatch/activitywatch',
		description:'monitor your activity, collect data and view stats about your life',
		tags:['watcher','work-tool','free of charge']
	},
	{
		name:'watson',
		url:'https://github.com/TailorDev/Watson',
		description:'CLI minimal tool to track your time',
		tags:['CLI','time tracker','work-tool','free of charge']
	},
	{
		name:'chatgpt',
		url:'https://chat.openai.com/',
		description:'artificial intelligence chatbot',
		tags:['AI','chat bot','free or paid']
	},
	{
		name:'dall-e',
		url:'https://labs.openai.com/',
		description:'deep learning model to generate images from a text description',
		tags:['AI','image generation','free or paid']
	},
	{
		name:'whisper',
		url:'https://openai.com/research/whisper',
		description:'neural net for speech recognition',
		tags:['AI','free of charge','speech-to-text']
	},
	{
		name:'phind',
		url:'https://www.phind.com/',
		description:'AI search engine for developers',
		tags:['ai','search engine']
	},
	{
		name:'mozilla common voice',
		url:'https://commonvoice.mozilla.org/',
		description:'a project to collect voices to train machines',
		tags:[]
	},
	{
		name:'termux',
		url:'https://github.com/termux/termux-app',
		description:'emulate a Linux CLI on your Android smartphone',
		tags:['mobile app','CLI','terminal','free or paid']
	},
	{
		name:'tasker',
		url:'https://tasker.joaoapps.com/',
		description:'awesome Android app that lets you run tasks when events are triggered',
		tags:['app','free or paid']
	},
	{
		name:'termux:tasker',
		url:'https://github.com/termux/termux-tasker',
		description:'Tasker plugin to execute termux commands/scripts as activities',
		tags:['paid']
	},
	{
		name:'black player',
		url:'https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree',
		description:'app to listen music on your smartphone (<a href="https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree" target="blackplayer_new" alt="Black Player Free">free</a> and <a href="https://play.google.com/store/apps/details?id=com.kodarkooperativet.blackplayerex" target="blackplayer_paid_new"alt="Black Player EX">paid</a> versions available)',
		tags:['app','free or paid','music','music player']
	},
	{
		name:'scrcpy',
		url:'https://github.com/Genymobile/scrcpy',
		description:'a tool to project your Android smartphone screen on your PC  and interact with it with keyboard and mouse',
		tags:['app','android','linux','FLOSS']
	},
	{
		name:'ssh tunnels',
		url:'https://www.howtogeek.com/168145/how-to-use-ssh-tunneling/',
		description:'an article which explain how the 3 types of tunnels work and how to use them',
		tags:['ssh']
	},
	{
		name:'stackexchange',
		url:'https://stackexchange.com/',
		description:'Well, I\'m sure you already know it',
		tags:['website','help']
	},
	{
		name:'grymoire',
		url:'https://grymoire.com/',
		description:'A minimal website with some interesting guides about tools like grep, sed, awk, ...',
		tags:['website','guide']
	},
	{
		name:'links',
		url:'http://links.twibright.com/',
		description:'linux CLI text-based internet browser',
		tags:['web browser','CLI','linux','FLOSS']
	},
	{
		name:'qutebrowser',
		url:'https://qutebrowser.org/',
		description:'minimal, vim-oriented browser',
		tags:['web browser','vim oriented','FLOSS']
	},
	{
		name:'librewolf',
		url:'https://librewolf.net/',
		description:'fork of Firefox, focused on privacy, security and freedom',
		tags:['firefox','web browser','FLOSS']
	},
	{
		name:'sed',
		url:'https://www.gnu.org/software/sed/',
		description:'Non-interactive advanced text editor that allows you to manipulate files with commands and regular expressions',
		tags:['text manipulation','FLOSS','linux','CLI']
	},
	{
		name:'awk',
		url:'http://awklang.org/',
		description:'CLI command and language to manipulate text, extract data, with special functions to manage "columns" in structured data (e.g. CSV)',
		tags:['text manipulation','FLOSS','linux','CLI']
	},
	{
		name:'grep',
		url:'https://www.gnu.org/software/grep/',
		description:'CLI command to process a text (from a file or stdin) and print only lines that match an expression (it can be a regexp)',
		tags:[]
	},
	{
		name:'ripgrep',
		url:'https://github.com/BurntSushi/ripgrep',
		description:'Kinda "grep" like tool, but automatically searches recursively inside the files in the current directory and the default search string is a regex pattern',
		tags:[]
	},
	{
		name:'neovim',
		url:'https://neovim.io/',
		description:'CLI advanced but very lightweight and simple text editor (<a href="https://github.com/neovim/neovim" target="neovim_github_new" alt="neovim on github">code on github</a>). It\'s an improved fork of vim',
		tags:[]
	},
	{
		name:'emacs',
		url:'https://www.gnu.org/software/emacs/',
		description:'An interactive CLI/GUI text editor',
		tags:[]
	},
	{
		name:'poke',
		url:'https://www.gnu.org/software/poke/',
		description:'CLI tool to edit binary files',
		tags:[]
	},
	{
		name:'hexyl',
		url:'https://github.com/sharkdp/hexyl',
		description:'CLI hexadecimal viewer',
		tags:[]
	},
	{
		name:'binocle',
		url:'https://github.com/sharkdp/binocle',
		description:'A graphical tool to visualize binary data',
		tags:[]
	},
	{
		name:'binvis.io',
		url:'https://binvis.io/',
		description:'An online tool to visualize binary data',
		tags:[]
	},
	{
		name:'jc',
		url:'https://github.com/kellyjonbrazil/jc',
		description:'JSON Convert: convert to JSON the stdout of a lot shell commands and files',
		tags:[]
	},
	{
		name:'jq',
		url:'https://github.com/stedolan/jq',
		description:'JSON processor: process JSON from stdin/file',
		tags:[]
	},
	{
		name:'ttyplot',
		url:'https://github.com/tenox7/ttyplot',
		description:'ASCII-based CLI tool that plots data from stdin',
		tags:[]
	},
	{
		name:'pv',
		url:'',
		description:'linux CLI command to manage the progress of data',
		tags:[]
	},
	{
		name:'barcode',
		url:'',
		description:'linux CLI tool to create barcodes and save them in various formats',
		tags:[]
	},
	{
		name:'qrencode',
		url:'',
		description:'linux CLI tool to create QR Codes and save them in various bitmap, vector graphics format or print it in ascii',
		tags:[]
	},
	{
		name:'zbar',
		url:'',
		description:'linux CLI application and library for reading bar codes from cameras and images',
		tags:[]
	},
	{
		name:'xclip',
		url:'',
		description:'linux CLI command to read/write the clipboards',
		tags:[]
	},
	{
		name:'ghostwriter',
			url:'https://github.com/KDE/ghostwriter',
			description:'An editor for markdown files',
			tags:[]
	},
	{
		name:'gpsvisualizer.com',
		url:'https://www.gpsvisualizer.com/',
		description:'A website where you can process geographic data, visualize it, convert from/to different formats, add height to coordinates, ...',
		tags:[]
	},
	{
		name:'octave',
		url:'https://octave.org/',
		description:'scientific programming language',
		tags:[]
	},
	{
		name:'sqlite',
		url:'https://www.sqlite.org',
		description:'a lightweight and fast SQL database engine',
		tags:[]
	},
	{
		name:'sqlitebrowser',
		url:'https://sqlitebrowser.org/',
		description:'a GUI browser for SQLite databases (<a href="https://github.com/sqlitebrowser/sqlitebrowser" target="sqlitebrowser_new" alt="sqlitebrowser code on github">code on github</a>)',
		tags:[]
	},
	{
		name:'sqliteman',
		url:'',
		description:'a GUI browser for SQLite databases',
		tags:[]
	},
	{
		name:'adminer',
			url:'https://www.adminer.org/',
			description:'a database manager in a single php file (like phpMyAdmin but lighter)',
			tags:[]
	},
	{
		name:'redis',
		url:'https://redis.io/',
		description:'REmote DIctionary Server - an in-memory data structure store',
		tags:[]
	},
	{
		name:'transfer.sh',
		url:'https://transfer.sh',
		description:'Online tool to transfer files from/to command line or browser (<a href="https://github.com/dutchcoders/transfer.sh" target="transfersh_code_new" alt="transfer.sh code">code on github</a>; <a href="https://github.com/dutchcoders/transfer.sh-web" target="transfersh_site" alt="transfer.sh web frontend">web client</a>)',
		tags:[]
	},
	{
		name:'temp.sh',
		url:'https://temp.sh/',
		description:'Online tool to transfer files from/to command line or browser',
		tags:[]
	},
	{
		name:'croc',
		url:'https://schollz.com/blog/croc6/',
		description:'Copy files/texts from a computer to another from the command line (<a href="https://github.com/schollz/croc" target="croc_new" alt="croc source code on github">code on github</a>)',
		tags:[]
	},
	{
		name:'rsync',
		url:'https://rsync.samba.org/',
		description:'Sync files between two folders',
		tags:[]
	},
	{
		name:'rclone',
		url:'https://github.com/rclone/rclone',
		description:'Sync files between computers/clouds. It allows you data compression/encryption and multiple cloud spaces union',
		tags:[]
	},
	{
		name:'syncthing',
		url:'https://syncthing.net/',
		description:'Keep folder pairs synchronized on different devices (available for different operative systems, including Android)',
		tags:[]
	},
	{
		name:'aria2',
		url:'https://github.com/aria2/aria2',
		description:'Client to download files supporting several protocols (including bittorrent)',
		tags:[]
	},
	{
		name:'yt-dlp',
		url:'https://github.com/yt-dlp/yt-dlp',
		description:'CLI command to download videos from Youtube and other video platforms. Fork of <a href="https://github.com/ytdl-org/youtube-dl" target="youtube-dl" alt="youtube-dl">youtube-dl</a>',
		tags:[]
	},
	{
		name:'ipfs',
		url:'https://ipfs.tech/',
		description:'InterPlanetary File System - A peer-to-peer hypermedia protocol',
		tags:[]
	},
	{
		name:'termbin.com',
		url:'https://termbin.com/',
		description:'pastebin accessible via shell ([code here](https://github.com/solusipse/fiche))',
		tags:[]
	},
	{
		name:'a list of free fonts for programming',
		url:'https://draculatheme.com/blog/best-free-fonts-for-programming',
		description:'a list of free fonts for programming',
		tags:[]
	},
	{
		name:'another list of programming fonts',
		url:'https://kinsta.com/blog/best-programming-font',
		description:'another list of programming fonts',
		tags:[]
	},
	{
		name:'fzf',
			url:'https://github.com/junegunn/fzf',
			description:'CLI command that read lines from stdin, allow you to find and select one with fuzzy search and print it to stdout',
			tags:[]
	},
	{
		name:'fzy',
		url:'https://github.com/jhawthorn/fzy',
		description:'Same as fzy but slightly different',
		tags:[]
	},
	{
		name:'dmenu',
		url:'https://wiki.archlinux.org/title/Dmenu',
		description:'Similar to fzf and fzy but the search/select menu works work on window manager and not on CLI',
		tags:[]
	},
	{
		name:'dmenu2',
		url:'',
		description:'Improved dmenu fork',
		tags:[]
	},
	{
		name:'vimgolf',
			url:'https://www.vimgolf.com/',
			description:'A game/challenge where you have to do tasks in vim using as few keystrokes as possible',
			tags:[]
	},
	{
		name:'tatoeba',
		url:'https://tatoeba.org/en/',
		description:'A collection of sentences translated in multiple languages. You can contribute with new sentences or by reviewing existing ones',
		tags:[]
	},
	{
		name:'dict.cc',
		url:'https://www.dict.cc/',
		description:'An online dictionary (from/to English and German to/from a lot of languages) mantained by everybody (there is a forum too)',
		tags:[]
	},
	{
		name:'refold',
		url:'',
		description:'a guide to language learning; refold explains a method to learn a foreign language from scratch to fluency',
		tags:[]
	},
	{
		name:'word reference',
			url:'https://www.wordreference.com/',
			description:'An online dictionary (there is a forum too)',
			tags:[]
	},
	{
		name:'pimsleur',
		url:'',
		description:'a method/website/app to learn foreign languages by listening and repeating everyday conversation and focusing on pronunciation',
		tags:[],
	},
	{
		name:'assimil',
		url:'',
		description:'a method/website with book and audio to learn foreign languages by listening/reading everyday conversation and doing exercises to fix in your mind the concepts present in the daily lessons',
		tags:[],
	},
	{
		name:'speakly',
		url:'',
		description:'a method/website/app to learn foreign languages (it currently has 8 languages available) by learning the 4000 most frequent words/expressions/sentences in the target languages with listening/speaking/flashcard exercises',
		tags:[],
	},
	{
		name:'lojban.org',
		url:'https://mw.lojban.org/',
		description:'Lojban is a logic artificial language that gives you the capability of talkin about everything with no ambiguity',
		tags:[]
	},
	{
		name:'la sutysisku',
		url:'https://la-lojban.github.io/sutysisku/en/',
		description:'A lojban onlyne dictionary (<a href="https://github.com/La-Lojban/sutysisku/" target="sutysisku_new" alt="la sutysisku - GitHub">code on github</a>)',
		tags:[]
	},
	{
		name:'bín',
		url:'https://bin.arnastofnun.is/',
		description:'A section of arnastofnun where you can search words and find declensions and conjugations',
		tags:[]
	},
	{
		name:'stofnun árna magnússonar',
		url:'https://arnastofnun.is',
		description:'Árna Magnússon\'s Foundation for Icelandic Studies',
		tags:[]
	},
	{
		name:'arch linux',
		url:'https://archlinux.org/',
		description:'A bleeding edge, minimall, KISS distro',
		tags:[]
	},
	{
		name:'tails',
		url:'https://tails.boum.org/',
		description:'A portable distro, focused on privacy and protection against surveillance and censorship',
		tags:[]
	},
	{
		name:'neomutt',
		url:'https://github.com/neomutt/neomutt',
		description:'CLI mail client',
		tags:[]
	},
	{
		name:'aerc',
		url:'https://aerc-mail.org/',
		description:'CLI mail client',
		tags:[]
	},
	{
		name:'neofetch',
		url:'https://github.com/dylanaraps/neofetch',
		description:'CLI tool to get info about your OS',
		tags:[]
	},
	{
		name:'scribus',
		url:'https://www.scribus.net/',
		description:'publishing software',
		tags:[]
	},
	{
		name:'zathura',
		url:'https://github.com/pwmt/zathura',
		description:'highly customizable document viewer with vi-styled keybindings',
		tags:[]
	},
	{
		name:'nmap',
		url:'',
		description:'scan IP ranges on arbitrary ports and get info on open ports',
		tags:[]
	},
	{
		name:'beautifulsoup',
		url:'https://beautiful-soup-4.readthedocs.io/en/latest/',
		description:'python library for getting structured data from HTML/XML (good for web scraping)',
		tags:[]
	},
	{
		name:'wttr.in',
		url:'https://wttr.in/',
		description:'weather forecast service accessible via CLI <a href="https://github.com/chubin/wttr.in" target="wttr_in_new" alt="wttr.in on github">code/guide/features</a>)',
		tags:[]
	},
	{
		name:'pyphoon',
		url:'https://github.com/chubin/pyphoon',
		description:'view the Moon phase in ASCII art in your terminal',
		tags:[]
	},
	{
		name:'entr',
		url:'https://github.com/eradman/entr',
		description:'file watcher: execs shell scripts when a file changes',
		tags:[]
	},
	{
		name:'twa',
		url:'https://github.com/trailofbits/twa',
		description:'nice CLI tool to test websites',
		tags:[]
	},
	{
		name:'haveibeenpwned.com',
		url:'https://haveibeenpwned.com/',
		description:'A website where you can enter your e-mail address and see if some of your personal data could have been compromised by a data breach',
		tags:[]
	},
	{
		name:'RSSHub',
		url:'https://github.com/DIYgod/RSSHub',
		description:'A tool to generate RSS feed from pretty much everything',
		tags:[]
	},
	{
		name:'dotfyle.com',
		url:'https://dotfyle.com/',
		description:'A website where you can share your neovim dotfiles with the community',
		tags:[]
	},
	{
		name:'obs',
		url:'https://obsproject.com/',
		description:'Cool software with GUI interface for recording/streaming videos',
		tags:[]
	},
	{
		name:'ffmpeg',
		url:'https://ffmpeg.org/',
		description:'Command line tool to manage/convert video/audio/subtitles streams',
		tags:[]
	},
	{
		name:'imagemagick',
		url:'https://imagemagick.org/',
		description:'Command line tool to convert images',
		tags:[]
	},
	{
		name:'rubberband',
		url:'https://breakfastquay.com/rubberband/',
		description:'Command line tool to time-stretch and pitch-shift audio files',
		tags:[]
	},
	{
		name:'mpv',
		url:'https://mpv.io/',
		description:'A really cool and simple media player',
		tags:[]
	},
	{
		name:'sox',
		url:'https://github.com/chirlu/sox',
		description:'Sound eXchange, the Swiss Army knife of audio manipulation',
		tags:[]
	},
	{
		name:'mpd',
		url:'https://www.musicpd.org/',
		description:'flexible, powerful, server-side application for playing music',
		tags:[]
	},
	{
		name:'ncmpc',
		url:'https://github.com/MusicPlayerDaemon/ncmpc',
		description:'curses client for the Music Player Daemon',
		tags:[]
	},
	{
		name:'ncmpcpp',
		url:'https://github.com/ncmpcpp/ncmpcpp',
		description:'featureful ncurses based MPD client inspired by ncmpc',
		tags:[]
	},
	{
		name:'feh',
		url:'https://github.com/derf/feh',
		description:'Simple, lightweight image viewer',
		tags:[]
	},
	{
		name:'sxiv',
		url:'https://github.com/xyb3rt/sxiv',
		description:'Simple, lightweight image viewer',
		tags:[]
	},
	{
		name:'flameshot',
		url:'https://github.com/flameshot-org/flameshot',
		description:'A simple but very powerful tool to make screenshots on your PC',
		tags:[]
	},
	{
		name:'gimp',
		url:'https://www.gimp.org/',
		description:'Advanced GUI image editor',
		tags:[]
	},
	{
		name:'inkscape',
		url:'https://inkscape.org/',
		description:'vector graphics editor',
		tags:[]
	},
	{
		name:'ranger',
		url:'https://ranger.github.io/',
		description:'Command line file manager',
		tags:[]
	},
	{
		name:'midnight commander',
		url:'https://midnight-commander.org/',
		description:'Command line, orthodox file manager',
		tags:[]
	},
	{
		name:'vifm',
		url:'https://github.com/vifm/vifm',
		description:'Command line file manager',
		tags:[]
	},
	{
		name:'fasd',
		url:'https://github.com/clvv/fasd',
		description:'Smart command to jump quickly to a directory, based on "frecency"',
		tags:[]
	},
	{
		name:'zoxide',
		url:'https://github.com/ajeetdsouza/zoxide',
		description:'Smart command to jump quickly to a directory, based on "frecency"',
		tags:[]
	},
	{
		name:'broot',
		url:'https://github.com/Canop/broot',
		description:'CLI tool to have a tree view of a folder and its subfolder. provides fuzzy search and a command to change directory',
		tags:[]
	},
	{
		name:'awesome command line apps',
		url:'https://git.herrbischoff.com/awesome-command-line-apps/about/',
		description:'a list of awesome apps that are reachable from CLI',
		tags:[]
	},
	{
		name:'awesome testing',
		url:'https://github.com/TheJambo/awesome-testing',
		description:'a curated list of testing software, extensions and resources',
		tags:[]
	},
	{
		name:'sindresorhus/awesome',
		url:'https://github.com/sindresorhus/awesome#gaming',
		description:'Awesome stuff lists',
		tags:[]
	},
	{
		name:'commandlinefu.com',
		url:'https://www.commandlinefu.com/',
		description:'dynamic list of useful CL commands',
		tags:[]
	},
	{
		name:'xtrlock',
		url:'',
		description:'A command that locks your mouse and keyboard leaving the screen visible',
		tags:[]
	},
	{
		name:'slock',
		url:'https://tools.suckless.org/slock/',
		description:'screen, keyboard and mouselocker made by <a href="https://suckless.org/" target="suckless_new" alt="suckless">suckless</a> team',
		tags:[]
	},
	{
		name:'pixabay',
		url:'https://pixabay.com/',
		description:'Royalty-free, downloadable images, videos and music',
		tags:[]
	},
	{
		name:'st',
		url:'https://st.suckless.org/',
		description:'Simple Terminal for X made by <a href="https://suckless.org/" target="suckless_new" alt="suckless">suckless</a> team',
		tags:[]
	},
	{
		name:'tmux',
		url:'https://github.com/tmux/tmux',
		description:'CLI terminal multiplexer. It allows you to manage multiple shell tabs/panes into a single terminal window (or into a single tty no-GUI session)',
		tags:[]
	},
	{
		name:'typespeed',
		url:'',
		description:'linux CLI program for testing your typing speed that supports many languages, inclunding some programming languages',
		tags:[],
	},
	{
		name:'monkeytype.com',
			url:'https://monkeytype.com/',
			description:'website for testing your typing speed in many languages (including programming languages) and getting stats',
			tags:[]
	},
	{
		name:'telescope',
		url:'https://github.com/nvim-telescope/telescope.nvim',
		description:'neovim plugin that through fuzzy search allows you to quickly jump to a file, perform grep searches and jump to the result, see git commits and a lot of other stuff',
		tags:[]
	},
	{
		name:'fugitive',
		url:'https://github.com/tpope/vim-fugitive',
		description:'vim plugin to manage git projects',
		tags:[]
	},
	{
		name:'protonvpn',
		url:'https://protonvpn.com/',
		description:'vpn service offered by Proton AG',
		tags:[]
	},
	{
		name:'mullvad',
		url:'https://mullvad.net/',
		description:'vpn service base in Sweden. You can pay with several methods, including cryptocurrencies and cash',
		tags:[]
	},
	{
		name:'i3',
		url:'https://github.com/i3/i3',
		description:'A window manager based on tiling',
		tags:[]
	},
	{
		name:'dwm',
		url:'https://dwm.suckless.org/',
		description:'Dynamic Window Manager for X based on tiling and made by <a href="https://suckless.org/" target="suckless_new" alt="suckless">suckless</a> team',
		tags:[]
	},
];

function getAllUniqueTags() {
    const allTags = [];
    elements.forEach(element => {
        allTags.push(...element.tags);
    });
    return [...new Set(allTags)];
}
