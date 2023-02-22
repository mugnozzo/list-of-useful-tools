# List of useful tools

This is a list of tools that I find useful. Most of them are FLOSS, minimal and follow the KISS rule.

## file transfer/sync/download
- [transfer.sh](https://transfer.sh "transfer.sh") - Online tool to transfer files from/to command line
- [croc](https://schollz.com/blog/croc6/ "croc") - Copy files/texts from a computer to another from the command line (code available [here](https://github.com/schollz/croc "croc source code on github"))
- [rsync](https://rsync.samba.org/ "rsync") - Sync files between two folders
- [rclone](https://github.com/rclone/rclone "rclone") - Sync files between computers/clouds. It allows you data compression/encryption and multiple cloud spaces union
- [syncthing](https://syncthing.net/ "syncthing") - Keep folder pairs synchronized on different devices (available for different operative systems, including Android)
- [aria2](https://github.com/aria2/aria2 "aria2") - Client to download files supporting several protocols (including bittorrent)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp "yt-dlp") - CLI command to download videos from Youtube and other video platforms. Fork of [youtube-dl](https://github.com/ytdl-org/youtube-dl "youtube-dl")

## window managers
- [i3](https://github.com/i3/i3 "i3") - A window manager based on tiling
- [dwm](https://dwm.suckless.org/ "dwm") - Dynamic Window Manager for X based on tiling and made by [suckless](https://suckless.org/ "suckless") team

## terminal
- [st](https://st.suckless.org/ "st") - Simple Terminal for X bade by [suckless](https://suckless.org/ "suckless") team

## multimedia/graphics
- [obs](https://obsproject.com/ "obs") - Cool software with GUI interface for recording/streaming videos
- [ffmpeg](https://ffmpeg.org/ "ffmpeg") - Command line tool to manage/convert video/audio/subtitles streams
- [imagemagick](https://imagemagick.org/ "imagemagick") - Command line tool to convert images
- [rubberband](https://breakfastquay.com/rubberband/ "rubberband") - Command line tool to time-stretch and pitch-shift audio files
- [mpv](https://mpv.io/ "mpv") - A really cool and simple media player
- [sox](https://github.com/chirlu/sox "Sound eXchange") - Sound eXchange, the Swiss Army knife of audio manipulation
- [mpd](https://www.musicpd.org/ "Music Player Daemon") - flexible, powerful, server-side application for playing music
- [ncmpc](https://github.com/MusicPlayerDaemon/ncmpc "ncmpc") - curses client for the Music Player Daemon
- [ncmpcpp](https://github.com/ncmpcpp/ncmpcpp "ncmpcpp") - featureful ncurses based MPD client inspired by ncmpc
- [feh](https://github.com/derf/feh "feh") - Simple, lightweight image viewer
- [sxiv](https://github.com/xyb3rt/sxiv "sxiv") - Simple, lightweight image viewer
- [flameshot](https://github.com/flameshot-org/flameshot "flameshot") - A simple but very powerful tool to make screenshots on your PC
- [gimp](https://www.gimp.org/ "GNU Image Manipulation Program") - Advanced GUI image editor
- [inkscape](https://inkscape.org/ "Inkscape") - vector graphics editor

## 3d
- [blender](https://blender.org "Blender") - Advanced software for 3d modeling, animating, shading/texturing/rendering, rigging, basic video editing, motion tracking, etc...
- [freecad](https://www.freecad.org/ "FreeCAD") - 3d parametric modeling software

## navigate through directories in CLI
- [ranger](https://ranger.github.io/ "ranger") - Command line file manager
- [midnight commander](https://midnight-commander.org/ "midnight commander") - Command line, orthodox file manager
- [vifm](https://github.com/vifm/vifm "vifm") - Command line file manager
- [fasd](https://github.com/clvv/fasd "fasd") - Smart command to jump quickly to a directory, based on "frecency"
- [zoxide](https://github.com/ajeetdsouza/zoxide "zoxide") - Smart command to jump quickly to a directory, based on "frecency"
- [broot](https://github.com/Canop/broot "broot") - CLI tool to have a tree view of a folder and its subfolder. provides fuzzy search and a command to change directory

## manipulate data streams, text and text files
- [sed](https://www.gnu.org/software/sed/ "sed") - Non-interactive advanced text editor that allows you to manipulate files with commands and regular expressions
- [awk](http://awklang.org/ "awk") - CLI command and language to manipulate text, extract data, with special functions to manage "columns" in structured data (e.g. CSV)
- [grep](https://www.gnu.org/software/grep/ "grep") - CLI command to process a text (from a file or stdin) and print only lines that match an expression (it can be a regexp)
- [neovim](https://neovim.io/ "neovim") - CLI advanced but very lightweight and simple text editor ([code on](https://github.com/neovim/neovim "neovim on github")). It's an improved fork of vim
- [emacs](https://www.gnu.org/software/emacs/ "emacs") - An interactive CLI/GUI text editor
- [poke](https://www.gnu.org/software/poke/ "GNU Poke") - CLI tool to edit binary files
- [hexyl](https://github.com/sharkdp/hexyl "hexyl") - CLI hexadecimal viewer
- [jc](https://github.com/kellyjonbrazil/jc "jc") - JSON Convert: convert to JSON the stdout of a lot shell commands and files
- [jq](https://github.com/stedolan/jq "jq") - JSON processor: process JSON from stdin/file
- [ttyplot](https://github.com/tenox7/ttyplot "ttyplot") - ASCII-based CLI tool that plots data from stdin
- pv - linux CLI command to manage the progress of data
- qrencode - create QR Codes and save them in various bitmap, vector graphics format or print it in ascii
- xclip - linux CLI command to read/write the clipboards

## browsers
- [links](http://links.twibright.com/ "links") - linux CLI text-based internet browser
- [qutebrowser](https://qutebrowser.org/ "qutebrowser") - minimal, vim-oriented browser
- [librewolf](of Firefox, focused on privacy, security and freedom "librewolf") - fork of Firefox, focused on privacy, security and freedom

## mail clients
- [neomutt](https://github.com/neomutt/neomutt "neomutt") - CLI mail client
- [aerc](https://aerc-mail.org/ "aerc") - CLI mail client

# fuzzy-search menus
- [fzf](https://github.com/junegunn/fzf "fzf") - CLI command that read lines from stdin, allow you to find and select one with fuzzy search and print it to stdout
- [fzy](https://github.com/jhawthorn/fzy "fzy") - Same as fzy but slightly different
- [dmenu](https://wiki.archlinux.org/title/Dmenu "dmenu") - Similar to fzf and fzy but the search/select menu works work on window manager and not on CLI
- dmenu2 - Improved dmenu fork

# screen/kbd/mouse lockers
- xtrlock - A command that locks your mouse and keyboard leaving the screen visible
- [slock](https://tools.suckless.org/slock/ "slock") A screen, keyboard and mouselocker made by [suckless](https://suckless.org/ "suckless") team

- [entr](https://github.com/eradman/entr "entr") - file watcher: execs shell scripts when a file changes
- [activitywatch](https://github.com/ActivityWatch/activitywatch "activitywatch") - monitor your activity, collect data and view stats about your life
- [watson](https://github.com/TailorDev/Watson "watson") - CLI minimal tool to track your time

# android apps or android related stuff
- [termux](https://github.com/termux/termux-app "termux") - emulate a Linux CLI on your Android smartphone
- [tasker](https://tasker.joaoapps.com/ "Tasker") - awesome Android app that lets you run tasks when events are triggered
- [termux:tasker](https://github.com/termux/termux-tasker "Termux:Tasker") - Tasker plugin to execute termux commands/scripts as activities
- [black player](https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree "Black Player Free") - app to listen music on your smartphone ([free](https://play.google.com/store/apps/details?id=com.musicplayer.blackplayerfree "Black Player Free") and [paid](https://play.google.com/store/apps/details?id=com.kodarkooperativet.blackplayerex "Black Player EX") versions available)
- [scrcpy](https://github.com/Genymobile/scrcpy "Screen Copy") - a tool to project your Android smartphone screen on your PC  and interact with it with keyboard and mouse

## (neo)vim plugins
- [telescope](https://github.com/nvim-telescope/telescope.nvim "neovim telescope") - neovim plugin that through fuzzy search allows you to quickly jump to a file, perform grep searches and jump to the result, see git commits and a lot of other stuff
- [fugitive](https://github.com/tpope/vim-fugitive) - vim plugin to manage git projects

## misc
- [neofetch](https://github.com/dylanaraps/neofetch "neofetch") - CLI tool to get info about your OS
- [tmux](https://github.com/tmux/tmux "tmux") - CLI terminal multiplexer. It allows you to manage multiple shell tabs/panes into a single terminal window (or into a single tty no-GUI session)
- [scribus](https://www.scribus.net/ "scribus") - publishing software
- [zathura](https://github.com/pwmt/zathura "zathura") - highly customizable document viewer with vi-styled keybindings
- nmap - scan IP ranges on arbitrary ports and get info on open ports
- [beautifulsoup](https://beautiful-soup-4.readthedocs.io/en/latest/ "Beautiful Soup") - python library for getting structured data from HTML/XML (good for web scraping) 
- [wttr.in](https://wttr.in/ "wttr.in") - weather forecast service accessible via CLI ([code/guide/features](https://github.com/chubin/wttr.in "wttr.in on github"))
- [pyphoon](https://github.com/chubin/pyphoon "pyphoon") - view the Moon phase in ASCII art in your terminal

## other lists
- [awesome command line apps](https://git.herrbischoff.com/awesome-command-line-apps/about/ "awesome command-line apps") - a list of awesome apps that are reachable from CLI
- [awesome testing](https://github.com/TheJambo/awesome-testing "awesome testing") - a curated list of testing software, extensions and resources
- [sindresorhus/awesome](https://github.com/sindresorhus/awesome#gaming "sindresorhus/awesome") - Awesome stuff lists
- [commandlinefu.com](https://www.commandlinefu.com/ "commandilnefu.com") - dynamic list of useful CL commands
