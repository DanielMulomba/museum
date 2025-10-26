function showSection(section) {
  const sections = ['home', 'staff', 'collections', 'shop'];
  const subNav = document.getElementById('sub-nav');

  // Hide sections
  sections.forEach(id => {
    const el = document.getElementById(id + '-section');
    if (el) {
      el.classList.remove('visible');
      el.classList.add('hidden');
    }
  });

  // Display the selected section
  const active = document.getElementById(section + '-section');
  if (active) {
    active.classList.remove('hidden');
    active.classList.add('visible');
  }

  // Sub-nav
  if (section === 'collections') {
    subNav.classList.remove('hidden');
    // load archeology by default
    showCollectionInfo('archaeology');
  } else {
    subNav.classList.add('hidden');
  }
}


/* Artifact */
function artifactHTML(imgSrc, imgAlt, data) {
  // data 
  return `
  <article class="artifact">
    <div class="artifact-image">
      <img src="${imgSrc}" alt="${imgAlt}">
    </div>
    <div class="artifact-info">
      <h3>Archeology</h3>
      <p><span class="meta-label">Material:</span> ${data.Material}</p>
      <p><span class="meta-label">Size / Weight / Shape:</span> ${data['Size/Weight/Shape']}</p>
      <p><span class="meta-label">Estimated Age:</span> ${data['Estimated Age']}</p>
      <p><span class="meta-label">Condition:</span> ${data['Condition']}</p>
      <p><span class="meta-label">Find Location:</span> ${data['Find Location']}</p>
      <p><span class="meta-label">Use and Function:</span> ${data['Use and Function']}</p>
      <p><span class="meta-label">Probable Purpose:</span> ${data['Probable Purpose']}</p>
      <p><span class="meta-label">Evidence of Use:</span> ${data['Evidence of Use']}</p>
      <p><span class="meta-label">Manufacturing Clues:</span> ${data['Manufacturing Clues']}</p>
      <p><span class="meta-label">Cultural Context:</span> ${data['Cultural Context']}</p>
      <p><span class="meta-label">Found With:</span> ${data['Found With']}</p>
      <p><span class="meta-label">Burial / Habitat Context:</span> ${data['Burial or Habitat Context']}</p>
      <p><span class="meta-label">Symbolism:</span> ${data['Symbolism']}</p>
      <p><span class="meta-label">Comparison:</span> ${data['Comparison']}</p>
    </div>
  </article>
  `;
}

/* artifact information */
const artifactsData = {
  archaeology: [
    {
      img: 'images/collections/aartefact arch 1.jpeg',
      alt: 'Mycenaean Serpent Dagger',
      data: {
        "Name": "Mycenaean Serpent Dagger",
        "Material": "Bronze blade and handle, inlaid with semi-precious stones (likely garnet or carnelian)",
        "Size/Weight/Shape": "Total length ~30 cm. Tapered double-edged blade; handle with coiled serpent. Est. 500–700 g.",
        "Estimated Age": "Late Bronze Age, ca. 16th–15th century BCE",
        "Condition": "Good to very good; stable bronze patina; inlays intact",
        "Find Location": "Mycenae (Greece), likely from a shaft grave",
        "Use and Function": "Ceremonial or status weapon, possibly for rituals",
        "Probable Purpose": "Ceremonial / prestige weapon",
        "Evidence of Use": "Few wear marks on blade, suggesting little use in combat",
        "Manufacturing Clues": "Finely modeled serpent, skilled inlay work — advanced bronze technique",
        "Cultural Context": "Found with other high-status funerary objects; princely grave context",
        "Found With": "Jewelry, fine pottery, other weapons",
        "Burial or Habitat Context": "Likely princely/high-ranking grave",
        "Symbolism": "Serpent motif associated with regeneration, protection, divinity",
        "Comparison": "Comparable to prestige daggers from Mycenae Grave Circles A & B; uniquely elaborate serpent design"
      }
    },
    {
      img: 'images/collections/aartefact arch 2.jpeg',
      alt: 'Nazca Ceremonial Vase',
      data: {
        "Name": "Nazca Ceremonial Vase",
        "Material": "Painted ceramic (polychrome)",
        "Size/Weight/Shape": "About 40 cm tall; globular body with flared neck; est. 3–5 kg",
        "Estimated Age": "Early Intermediate Period, Nazca culture, ca. 200–600 CE",
        "Condition": "Excellent; colors bright, motifs intact, no major fractures",
        "Find Location": "Southern coastal Peru; likely tomb or ritual context",
        "Use and Function": "Container for offerings or ritual beverages",
        "Probable Purpose": "Ceremonial / ritual vessel",
        "Evidence of Use": "No food residues; appears non-domestic",
        "Manufacturing Clues": "Fine polychrome painting and polished surface; refined brushwork",
        "Cultural Context": "Often found in funerary contexts with textiles and precious objects",
        "Found With": "Textiles, gold objects, ritual offerings",
        "Burial or Habitat Context": "Richly furnished tomb / ceremonial site",
        "Symbolism": "Depicts mythological or deity-like figures typical of Nazca iconography",
        "Comparison": "Characteristic of Nazca polychrome ceramics with mythic motifs"
      }
    },
    {
      img: 'images/collections/aartefact arch 3.jpeg',
      alt: 'Egyptian Funerary Mask',
      data: {
        "Name": "Egyptian Funerary Mask (inspired by Tutankhamun)",
        "Material": "Solid gold with inlays of lapis lazuli, carnelian, turquoise, colored glass",
        "Size/Weight/Shape": "Height ~54 cm; bust form with nemes headdress; est. 10–12 kg",
        "Estimated Age": "New Kingdom, 18th Dynasty, ca. 1323 BCE",
        "Condition": "Exceptional; gold and gemstones well preserved",
        "Find Location": "Valley of the Kings, inside royal tomb (e.g., Tutankhamun's tomb)",
        "Use and Function": "Placed over the pharaoh's mummy to preserve identity in afterlife",
        "Probable Purpose": "Essential funerary object to ensure survival of the soul",
        "Evidence of Use": "Designed to fit over head & shoulders of the mummy",
        "Manufacturing Clues": "Highest-level goldsmithing and inlay techniques",
        "Cultural Context": "Found within royal burial assemblage: nested sarcophagi, statues, jewelry",
        "Found With": "Royal treasures, nested coffins, funerary goods",
        "Burial or Habitat Context": "Inside royal sarcophagus within tomb",
        "Symbolism": "Nemes, uraeus (cobra), vulture — royal power/protection; gold = flesh of gods",
        "Comparison": "Similar to Tutankhamun's mask and other royal masks; more opulent than common noble masks"
      }
    }
  ],
  anthropology: [
    {
      img: 'images/collections/artefact antr 1.jpeg',
      alt: 'Fang Ritual Mask (Gabon)',
      data: {
        "Name": "Fang Ritual Mask (Gabon)",
        "Material": "Carved & painted wood, white kaolin, plant fibers, feathers",
        "Size/Weight/Shape": "~40–50 cm tall (excluding fiber headdress); light (~1–2 kg); stylized geometric features",
        "Estimated Age": "Late 19th – early 20th century",
        "Condition": "Good; slight patina; fibers/feathers fragile",
        "Find Location": "Gabon region, Central Africa (acquired from Fang communities)",
        "Use and Function": "Used in initiation, funerary, or Ngil secret society ceremonies",
        "Probable Purpose": "Ceremonial; representing ancestral/protective spirit",
        "Evidence of Use": "Wear marks, sweat and rubbing on inner surface indicate it was worn",
        "Manufacturing Clues": "Symmetry, stylized scarification marks, meticulous kaolin application",
        "Cultural Context": "Used in collective performances; maintained by elders / society leaders",
        "Found With": "Typically alone, but used with costumes & dances",
        "Burial or Habitat Context": "Kept in elder's house or society house; not burial object",
        "Symbolism": "White face evokes spirit-world or ancestral beings; scarifications signal lineage",
        "Comparison": "Similar to Fang Ngil masks; distinct from Punu, Kota regional styles"
      }
    },
    {
      img: 'images/collections/artefact antr 2.jpeg',
      alt: 'Tlingit Ceremonial Staff',
      data: {
        "Name": "Tlingit Ceremonial Staff (Pacific Northwest)",
        "Material": "Carved red cedar, inlaid abalone shell",
        "Size/Weight/Shape": "Approx. 1.5–2 m tall; est. 3–5 kg; upper section carved with animal & human figures",
        "Estimated Age": "Late 19th – early 20th century",
        "Condition": "Very good; minor loss of inlay possible",
        "Find Location": "Pacific Northwest Coast (Alaska / British Columbia)",
        "Use and Function": "Used in potlatches, clan ceremonies, funerals, marriages — sign of authority",
        "Probable Purpose": "Ceremonial staff / status marker / narrative object",
        "Evidence of Use": "Patina from handling; wear on frequent-contact areas",
        "Manufacturing Clues": "Typical Northwest Coast carving: ovoids, flowing lines; precise abalone inlay",
        "Cultural Context": "Passed through clan houses as family heritage; central in ceremonies",
        "Found With": "Regalia, carved panels, ceremonial robes",
        "Burial or Habitat Context": "Stored in clan houses; not typically buried",
        "Symbolism": "Eagle denotes clan lineage; human figures may be mythic ancestors",
        "Comparison": "Comparable to chiefs' staffs and totemic carvings from Tlingit, Haida, Tsimshian"
      }
    },
    {
      img: 'images/collections/artefact antr 3.jpeg',
      alt: 'Paracas Funerary Tapestry',
      data: {
        "Name": "Paracas Funerary Tapestry (Peru)",
        "Material": "Cotton and camelid fibers (alpaca/llama), natural dyes, complex embroidery",
        "Size/Weight/Shape": "About 1.5 × 1 m; dense embroidered textile; weight 1–3 kg",
        "Estimated Age": "Paracas Necropolis period, ca. 200 BCE – 200 CE",
        "Condition": "Remarkable preservation; vivid colors due to arid environment",
        "Find Location": "Wari Kayan Necropolis, Paracas Peninsula, Peru (found wrapped around mummies)",
        "Use and Function": "Funerary shroud / wrapping for high-status individuals — part of funerary bundles",
        "Probable Purpose": "Ceremonial / ritual funerary use; status marker",
        "Evidence of Use": "No daily wear; folding marks and burial placement visible",
        "Manufacturing Clues": "Complex figurative embroidery with thousands of stitches; multi-color dyeing",
        "Cultural Context": "Accompanies high-status burials with pottery, gold ornaments and other textiles",
        "Found With": "Mummy bundles, ceramics, jewelry, other textiles",
        "Burial or Habitat Context": "Placed in burial bundles within necropolis contexts",
        "Symbolism": "Bird-beings and anthropomorphic figures guiding the soul to afterlife",
        "Comparison": "Distinguished among Paracas textiles for elaborate embroidery; differs from later Nazca ceramics"
      }
    }
  ],

  assemblages: [
    {
      img: 'images/collections/assemblages.jpeg',
      alt: 'Bronze Age Burial Assemblage',
      data: {
        ObjectName: 'Bronze Age Burial Assemblage',
        Culture: 'Celtic',
        Material: 'Bronze, Clay, Textile',
        Date: 'circa 800 BCE',
        Origin: 'Central Europe',
        Dimensions: 'Various objects, approx. 1m spread',
        Description: 'A burial assemblage composed of tools, pottery, and ornaments found in a single grave site, revealing insights into Bronze Age funerary practices.',
        Provenance: 'Excavated in Hallstatt, Austria, 1952',
        Condition: 'Excellent; minor restoration on pottery',
        AccessionNumber: 'ASM-001',
        CurrentLocation: 'Museum of Cultural Memory, Vault Collection',
        DisplayStatus: 'Not on public display',
        CuratorNotes: 'Representative of collective burial artifacts; provides cultural context beyond individual items.',
        ResearchReferences: 'Jenkins et al., “European Bronze Age Burial Traditions,” 2015',
      }
    },
  ]
};

/* show archeology in collection  */
function showCollectionInfo(topic) {
  const infoDiv = document.getElementById('collection-info');
  let html = '';

  if (topic === 'archaeology') {
    html += '<h3>Archaeology</h3>';
    artifactsData.archaeology.forEach(item => {
      html += artifactHTML(item.img, item.alt, item.data);
    });
  } else if (topic === 'anthropology') {
    html += '<h3>Anthropology</h3>';
    artifactsData.anthropology.forEach(item => {
      html += artifactHTML(item.img, item.alt, item.data); 
    });
  } else {
    html = '<p>Coming Soon !!</p>';
  }

  infoDiv.innerHTML = html;
}

function showCollectionInfo(category) {
  const container = document.getElementById('collection-info');
  container.innerHTML = ''; // empty recycle

  if (!artifactsData[category]) return;

  container.innerHTML = `<h1 class="collection-title">${category.charAt(0).toUpperCase() + category.slice(1)}</h1>`;

  artifactsData[category].forEach(item => {
    container.innerHTML += artifactHTML(item.img, item.alt, item.data);
  });
}

// === MODAL LOGIC ===
function openModal(imgSrc, title, desc) {
  const modal = document.getElementById('item-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  modalImg.src = imgSrc;
  modalTitle.textContent = title;
  modalDesc.textContent = desc;

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('item-modal');
  modal.classList.add('hidden');
}

// optional: close modal when clicking outside content
window.onclick = function(e) {
  const modal = document.getElementById('item-modal');
  if (e.target === modal) {
    closeModal();
  }
};