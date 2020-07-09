function getImageURLFromMusicBrain() {
    const mbid = artist.mbid;
    if (mbid) {
      const url = 'https://musicbrainz.org/ws/2/artist/' + mbid + '?inc=url-rels&fmt=json';
      console.log(url);
      fetch(url)
        .then(res => res.json())
        .then((out) => {
          const relations = out.relations;
          console.table(relations);
          // Find image relation
          for (let i = 0; i < relations.length; i++) {
            if (relations[i].type === 'image') {
              let image_url = relations[i].url.resource;
              if (image_url.startsWith('https://commons.wikimedia.org/wiki/File:')) {
                const filename = image_url.substring(image_url.lastIndexOf('/') + 1);
                image_url = 'https://commons.wikimedia.org/wiki/Special:Redirect/file/' + filename;
              }
              console.log(image_url);
              success(image_url);
            }
          }
        })
        .catch(err => { throw console.log(err) });
    }
  }