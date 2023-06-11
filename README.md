# Application mobile gestion des enqueteurs et planing

Application mobile pour la gestion du planning des vacations des enqueteurs Kisio

## Installation du projet

### prérequis

- [NodeJs](https://nodejs.org/en)
- l'application [Expo Go](https://docs.expo.dev/)

### procédure d'installation

1. cloner le projet et placer vous à la racine du projet (terminal)
2. installer les dépendances du projet en tapant : `npm ci`
3. lancer le serveur de developpement en tapant la commande : `npm start`
4. scanner le QR-core du terminal avec l'application Expo Go ( le téléphone doit etre dans le même réseau )
gitmoji

procedure d'installation ssh

### install 

ouvrir le terminale 
wsl


ssh keygen

dossier ?
paraphrase?


### capture la clef public

cat ~/.ssh/id_rsa.pub

selectionner le texte =copier

### sur github  

setting
ssh and gpg keys

new ssh key

nom de la clef(pour info je les fait depuis wsl pour x cession du pc) == wsl jean-seb-code

coller le texte de la clef

add ssh key 


### signature

ouvrir le terminal
wsl

gpg --full-generate-key

remplir les informations
 type/durer/email/avec ou sans paraphrase..


### lister les clefs

 gpg --list-secret-keys --keyid-format=long

### reponse

-------------------------------
sec   rsa3072/7623C6DABAAC42 2023-06-11 [SC]
      A4BBFD9130F0CBD8D2AA87623C6DABAC6AC42
uid                 [ultimate] sign-keys
user <mail>
ssb   rsa3072/3FDB1278CF07D 2023-06-11 [E]

la key ID est : 3FDB1278CF07D


### edition

gpg --edit-key 3FDB1278CF07D


### gpg

adduid


(mise a jour utilisateur)


Real Name: OCTOCAT
Email address: "octocat@github.com"
Comment: GITHUB-KEY
Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?


save

### sortie du menu gpg


### edition de la clef public

 gpg --armor --export 3FDB1278CF07D
Prints the GPG key, in ASCII armor format

selectionner et copier 

### compte gihub
 setting
 ssh and gpg keys

 ### gpg keys

 new gpg key
  

  titre

  coller le texte de la clef

  add gpg keys


  ### reglage git config

git config --global user.signingkey 3FDB1278CF07D

## avoir les banch sur le terminale wsl 


editer depuis le contenaire lunux 


nano ~/.bashrc

If you have no nano use:

apt install nano

Add to the end of the file:

parse_git_branch() {
   git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\[\033[33m\]$(parse_git_branch)\[\033[00m\]\$ '

### save et quite

### terminer :-)