export const categories = [
  {
    id: 'crypt',
    folderName: 'Crypt',
    title: 'Crypt',
    description: 'Deciphering hidden messages, cracking ciphers, and breaking encryption. The codes of the underworld.',
    icon: '🗝️',
  },
  {
    id: 'networking',
    folderName: 'Networking',
    title: 'Networking',
    description: 'Analyzing pcap files, investigating network traffic, and uncovering hidden communications on the wire.',
    icon: '📻',
  },
  {
    id: 'osint',
    folderName: 'Osint',
    title: 'Osint',
    description: 'Gathering intel from public sources, tracking down suspects. Everyone leaves a trail.',
    icon: '📰',
  },
  {
    id: 're',
    folderName: 'RE',
    title: 'RE',
    description: 'Disassembling malware, analyzing binaries, and understanding malicious code. Take the gun apart.',
    icon: '⚙️',
  },
  {
    id: 'stegno',
    folderName: 'Stegno',
    title: 'Stegno',
    description: 'Finding hidden data within images, audio, or other files. Secrets hidden in plain sight.',
    icon: '👁️',
  },
  {
    id: 'web',
    folderName: 'Web',
    title: 'Web',
    description: 'Uncovering vulnerabilities in suspect web applications and exploiting them. Picking the lock.',
    icon: '🕸️',
  }
];

export const githubBaseUrl = "https://raw.githubusercontent.com/febin-ani/Spider-Noir-CTF/main/Challenges";

export const challengesData = {
  crypt: [
    { name: "Dragons Vault", file: "Dragons Vault/challenge01.zip" }
  ],
  networking: [
    { name: "Operation Cronos", file: "OPERATIONCRONOS/ff3f96ef-ec8b-434b-b7f4-2c22d86f9cff-operation_chronos.pcap" }
  ],
  osint: [
    { name: "YOU CANT SEE ME", file: "YOU CANT SEE ME/you can't see me.zip" },
    { name: "l Love Comics", file: "l Love Comics/spider_noir_case.jpg" }
  ],
  re: [
    { name: "Kingpins Frequency", file: "Kingpins Frequency/radio_wiretap.zip" },
    { name: "THINK AGAIN", file: "THINK AGAIN/challenge_package.zip" },
    { name: "The Broken Needle", file: "The Broken Needle/jukebox.7z" },
    { name: "The Onyx Telegram", file: "The Onyx Telegram/telegram_decoder.bin.zip" },
    { name: "Vault", file: "Vault/ca7763e7-2fef-4b76-95a8-6f561b19c416-chall" }
  ],
  stegno: [
    { name: "Lemon Juice", file: "Lemon Juice/spider_noir_challenge.avi.zip" },
    { name: "Marvel", file: "Marvel/httpswww.reddit.commediaurl=https%3A%2F%2Fi.redd.it%2F9i54oqscxdx61.jpg" },
    { name: "NoirZip", file: "NoirZip/evidence.zip" },
    { name: "Spider MAN", file: "Spider MAN/heymj.zip" },
    { name: "Spider", file: "Spider/Spider.jpg" },
    { name: "The Colorless Cube", file: "The Colorless Cube/noir_cube_challenge.mp3.zip" },
    { name: "Hello Kitty - Log", file: "hello kityy/TeamViewer-Auth_26-06-18_16_00_57.log" },
    { name: "Hello Kitty - Image", file: "hello kityy/fjkqfkjqfkjfbkfb.jpg" },
    { name: "Hidden", file: "hidden/hidden.zip" }
  ],
  web: [
    { 
      name: "The Missing Detective", 
      description: "New York City, 1933. The masked vigilante Spider-Man has vanished into the shadows. As a hard-boiled detective, you must navigate through corrupt police reports, hidden evidence, and a conspiracy involving Fisk Industries to uncover the truth.",
      endpoint: "docker run -d -p 8080:80 anv1000/spider-noir-ctf:latest",
      isWeb: true
    },
    { 
      name: "Black Out", 
      description: "YOU CAN FIND THE WAY BUT YOU CAN'T CATCH UP",
      endpoint: "http://65.2.38.57",
      isWeb: true
    },
    { 
      name: "SpiderNoir", 
      description: "Search for the Spider web",
      endpoint: "http://65.2.38.79",
      isWeb: true
    },
    { 
      name: "SPIDERNOIR", 
      description: "MYBE YOU CAN BE A DETECTIVE",
      endpoint: "http://3.110.120.123",
      isWeb: true
    },
    { 
      name: "Spider Nest", 
      description: "Spider Crawling",
      endpoint: "http://3.111.170.199",
      isWeb: true
    }
  ]
};
