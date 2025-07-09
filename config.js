module.exports = {
  bot: {
    token: 'MTM4OTI2ODgyMzczMDk0NjIzOA.GgVuPI.5e05MX-2ewbyVOsNKOvRDRj1T2W4RYZBz8DCY4',

    presence: {
      enabled: true,
      activity: 'Playing', 
      text: {
        online: 'lagi main {playeronline}/{playermax} players', 
        offline: 'Server sedang Offline', 
      },
      status: {
        online: 'online', 
        offline: 'idle', 
      },
    },
  },
  mcserver: {
    ip: 'play.voracity.my.id', // IP of  MC server.
    port: 19132, // Port number of MC server. Default Port - Java: 25565, Bedrock: 19132.
    type: 'java / bedrock', 
    name: 'Voracity SMP', 
    version: 'Gunakan Versi 1.21 - 1.21.4', 
    icon: 'https://imgur.com/a/iqpNc0c#7tV7SQq', 
    vote: 'https://minecraft-mp.com/server/344722/vote/', 
  },

  settings: {
    logging: {
      inviteLink: true, 
      debug: false, 
      error: true, 
      serverInfo: true, 
    },
  },

  autoChangeStatus: {
    enabled: true,
    updateInterval: 60, 
    isOnlineCheck: true, 
  },

  playerCountCH: {
    enabled: true,
    guildID: '1362303638478782567', // COY TOLONG BACA Playcountstats kalau ga ada buat manual ya ke /src/ lalu buka data.json
    channelId: '1385865992219000915',  // bagian PlayerCountStats kasih channel id VOICE ya bukan text
    onlineText: '🟢 {playeronline}/{playermax} Players playing',
    offlineText: '🔴 Offline', 
  },

  autoReply: {
    enabled: true,
    version: {
      enabled: true,
      triggerWords: ['versi berapa?', 'versi'],
      replyText: "Gunakan versi: **`{version}`**",
    },
    ip: {
      enabled: true,
      triggerWords: ['ipnya apa', 'ip'],
      replyText: '**IP: `{ip}`\nPort: `{port}`**',
    },
    vote: {
      enabled: true,
      triggerWords: ['website link', 'website', 'url', 'site', 'link vote'],
      replyText: "Website link: **<{vote}>**",
    },
    status: {
      enabled: true,
      triggerWords: ['server on ga', 'is server offline', 'status of the server'],
      onlineReply: 'Servernya sedang on **`🟢ONLINE`** with **`{playerOnline}/{playerMax}`** yang lagi main',
      offlineReply: 'servernya lagi **`🔴OFFLINE`**.',
    },
  },

  commands: {
    slashCommands: true,
    prefixCommands: {
      enabled: true,
      prefix: '!', 
    },
    language: 'id', 
    ip: {
      enabled: true, 
      alias: ['ip-address'], 
    },
    vote: {
      enabled: true, 
      alias: ['vote', 'link'], 
    },
    version: {
      enabled: true, 
      alias: [], 
    },
    players: {
      enabled: true, 
      alias: ['plist'], 
    },
    status: {
      enabled: true, 
      alias: ['info'], 
    },
    motd: {
      enabled: true, 
      alias: [], 
    },
    help: {
      enabled: true, 
      alias: ['commands'],
    },
  },
}
