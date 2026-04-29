require("dotenv").config();
const mongoose = require("mongoose");

const Album = require("./src/models/album.model");
const Music = require("./src/models/music.model");
const User = require("./src/models/user.model");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    // Clean old data
    await Album.deleteMany({});
    await Music.deleteMany({});
    await User.deleteMany({});

    // Create Artist (required for music & album)
    const artist = await User.create({
      username: "demoartist",
      email: "artist@mail.com",
      password: "123456",
      role: "artist",
    });

    console.log("🎤 Artist Created:", artist._id);

    // Albums data (short sample; baaki tum add kar sakte ho)
    const albums = [
     
{
"title": "Arijit Hits",
"coverImage": "https://sm.mashable.com/mashable_in/seo/5/53956/53956_cxmu.jpg",
"songs": [
{
"title": "Dil Ki Baarish",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Tu Nazdeek Hai",
"audioUrl": "https://download.samplelib.com/mp3/sample-19s.mp3",
"duration": "0:19"
},
{
"title": "Chaand Sa Safar",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
"duration": "6:13"
}
]
},
{
"title": "Hindi Sad Songs",
"coverImage": "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Toota Hua Dil",
"audioUrl": "https://download.samplelib.com/mp3/sample-6s.mp3",
"duration": "0:06"
},
{
"title": "Khamosh Raat",
"audioUrl": "https://download.samplelib.com/mp3/sample-9s.mp3",
"duration": "0:09"
},
{
"title": "Yaadon Ka Sheher",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
"duration": "5:31"
}
]
},
{
"title": "English Pop",
"coverImage": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Neon Heartbeat",
"audioUrl": "https://download.samplelib.com/mp3/sample-9s.mp3",
"duration": "0:09"
},
{
"title": "City Lights Tonight",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Popstar Weekend",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
"duration": "5:03"
}
]
},
{
"title": "Lofi Beats",
"coverImage": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Notebook Dreams",
"audioUrl": "https://download.samplelib.com/mp3/sample-3s.mp3",
"duration": "0:03"
},
{
"title": "Late Night Revision",
"audioUrl": "https://download.samplelib.com/mp3/sample-6s.mp3",
"duration": "0:06"
},
{
"title": "Cafe Window Loop",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
"duration": "5:56"
}
]
},
{
"title": "Punjabi Party",
"coverImage": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Balle Night",
"audioUrl": "https://download.samplelib.com/mp3/sample-9s.mp3",
"duration": "0:09"
},
{
"title": "Patiala Groove",
"audioUrl": "https://download.samplelib.com/mp3/sample-19s.mp3",
"duration": "0:19"
},
{
"title": "Dhol Vibe Avenue",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
"duration": "5:34"
}
]
},
{
"title": "90s Bollywood",
"coverImage": "https://images.unsplash.com/photo-1487180144351-b8472da7d491?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Cassette Wali Yaadein",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Purani Mohabbat",
"audioUrl": "https://download.samplelib.com/mp3/sample-6s.mp3",
"duration": "0:06"
},
{
"title": "Retro Cinema Night",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
"duration": "5:20"
}
]
},
{
"title": "Workout Gym Mix",
"coverImage": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Beast Mode On",
"audioUrl": "https://download.samplelib.com/mp3/sample-9s.mp3",
"duration": "0:09"
},
{
"title": "Last Rep Energy",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Iron Pulse",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
"duration": "5:09"
}
]
},
{
"title": "Chill Evening Acoustic",
"coverImage": "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Sunset Strings",
"audioUrl": "https://download.samplelib.com/mp3/sample-6s.mp3",
"duration": "0:06"
},
{
"title": "Balcony Breeze",
"audioUrl": "https://download.samplelib.com/mp3/sample-19s.mp3",
"duration": "0:19"
},
{
"title": "Acoustic Dusk",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
"duration": "5:44"
}
]
},
{
"title": "Instrumental Focus",
"coverImage": "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Deep Work Flow",
"audioUrl": "https://download.samplelib.com/mp3/sample-3s.mp3",
"duration": "0:03"
},
{
"title": "Code and Calm",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Focus Pattern 9",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3",
"duration": "5:36"
}
]
},
{
"title": "Party EDM",
"coverImage": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Laser Drop",
"audioUrl": "https://download.samplelib.com/mp3/sample-9s.mp3",
"duration": "0:09"
},
{
"title": "Rave Control",
"audioUrl": "https://download.samplelib.com/mp3/sample-19s.mp3",
"duration": "0:19"
},
{
"title": "Midnight Festival",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3",
"duration": "6:13"
}
]
},
{
"title": "Morning Positive Vibes",
"coverImage": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Fresh Start",
"audioUrl": "https://download.samplelib.com/mp3/sample-6s.mp3",
"duration": "0:06"
},
{
"title": "Golden Sunshine",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Wake Up Light",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3",
"duration": "5:27"
}
]
},
{
"title": "Rainy Day Songs",
"coverImage": "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80",
"songs": [
{
"title": "Raindrop Letters",
"audioUrl": "https://download.samplelib.com/mp3/sample-12s.mp3",
"duration": "0:12"
},
{
"title": "Window Seat Memories",
"audioUrl": "https://download.samplelib.com/mp3/sample-19s.mp3",
"duration": "0:19"
},
{
"title": "Monsoon Loop",
"audioUrl": "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3",
"duration": "5:50"
}
]
}
] 
  

   for (const albumData of albums) {

  // 1️ Create musics
  const createdMusics = await Music.insertMany(
    albumData.songs.map((m) => ({
      title: m.title,
      uri: m.audioUrl,
      duration: m.duration,   //  if exists in music schema
      artist: artist._id,
    }))
  );

  // 2 Create album
  await Album.create({
    title: albumData.title,
    coverImage: albumData.coverImage,
    musics: createdMusics.map((m) => m._id),
    artist: artist._id,
  });
}
    console.log("🔥 Albums Seeded Successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();