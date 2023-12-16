# cd aliases
# ln -s ~/tannalwork/.bash_aliases ~/.bash_aliases
alias cdd='cd ~/Documents'
alias cdp='cd ~/Projects'
alias cdb='cd ~/Desktop'

# Directory listing aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

# Git aliases
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'

# File and directory operations
alias cp='cp -i'
alias mv='mv -i'
alias rm='rm -i'

# Network-related aliases
alias myip='curl ipinfo.io/ip'
alias pinggoogle='ping -c 5 google.com'
alias portscan='nc -zv <host> <start-port>-<end-port>'

# File searching
alias f='find . -name'
alias fgrep='grep -r -n --color=auto'
alias fd='find . -type d -name'

# Text manipulation
alias cat='bat'
alias grep='grep --color=auto'
alias sed='sed -r'