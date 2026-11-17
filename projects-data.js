// McKay Masonry — the Projects page reads this list. One block per job.
// To add a job: copy a block, fill it in, put the photos in site/img (tools/resize-photos.ps1 does that).
// Only facts found in the job folders are in here. Lines marked CHECK need Chad's eyes before going live.
window.MCKAY_PROJECTS = [
  {
    name: "La Plata Hospital Addition", where: "La Plata, MD", type: "commercial", status: "done",
    text: "The masonry on the regional medical center addition: Arriscraft stone and Belden face brick matched to the existing hospital, topped with cast stone coping.",
    gc: "W.M. Davis", architect: "CRGA Design", tags: ["Face brick", "Arriscraft", "Cast stone"],
    photos: ["laplata-1", "laplata-2", "laplata-3", "laplata-4", "laplata-5", "laplata-6", "laplata-10", "laplata-7", "laplata-8", "laplata-9", "laplata-11", "laplata-12"]
  },
  {
    name: "Park Place Apartments", where: "Southern Maryland", type: "commercial", status: "live", // CHECK town
    text: "An apartment community with more than 63,000 square feet of masonry, including about 25,000 square feet of thin brick, manufactured stone veneer, cast stone sills and reinforced block.",
    gc: "CMI", architect: "Jerome F. Jochum Architect", tags: ["Thin brick", "Stone veneer", "Cast stone", "CMU"], photos: []
  },
  {
    name: "Hollywood Volunteer Rescue Squad", where: "Hollywood, MD", type: "commercial", status: "live",
    text: "A new station for the rescue squad: modular face brick over reinforced block, with split-face block accents. The mock-up panel is approved and the brick is on order.",
    gc: "W.M. Davis", architect: "Patuxent Architects", tags: ["Face brick", "Split-face block", "Reinforced CMU"], photos: []
  },
  {
    name: "Smartronix Renovation", where: "Southern Maryland", type: "commercial", status: "live", // CHECK name spelling + town
    text: "Brick veneer and precast stone on an office building renovation.",
    architect: "CMI Design Build", tags: ["Brick veneer", "Precast stone"], photos: []
  },
  {
    name: "Chesapeake Hills Golf Course Clubhouse", where: "Lusby, MD", type: "commercial", status: "done", // CHECK town (Lusby?). Photos confirmed by McKay's own LinkedIn post (2024)
    text: "The new clubhouse at Chesapeake Hills: foundation block, a custom stone wainscot with a cast stone cap, and a custom stone fireplace inside and out, with a herringbone firebrick firebox and a cast stone surround.",
    gc: "W.M. Davis", architect: "Whitney Bailey Cox & Magnani (WBCM)", tags: ["Stone veneer", "Fireplace", "Firebrick", "Cast stone"], photos: ["chesli-04", "chesli-03", "chesli-01", "chesli-05", "chesli-02", "chesli-07", "chesli-06", "chesli-08", "ches-2", "ches-1", "club-1", "club-2", "club-3", "footing", "ches-found"]
  },
  {
    name: "Parklands Clubhouse", where: "White Plains, MD", type: "commercial", status: "done", // Photo match: Chad said 'I think so' on 2026-11-16
    text: "New England ledgestone veneer on the St. Charles community clubhouse and its stone piers, plus the block for the fire tables and outdoor kitchen.",
    gc: "W.M. Davis", architect: "KTGY Architecture + Planning", tags: ["Ledgestone veneer", "Stone piers", "CMU"], photos: ["parklands-1", "parklands-2", "parklands-6", "parklands-5", "parklands-7", "parklands-8", "parklands-3", "parklands-4"]
  },
  {
    name: "Stone Steps, Porches and Walks", where: "Southern Maryland homes", type: "residential", status: "done",
    text: "Natural stone veneer, bluestone treads and flagstone walks for homeowners. Curved steps, porch skirts and foundation veneer, all cut and fitted on site.",
    tags: ["Stone veneer", "Bluestone", "Flagstone"],
    photos: ["res-0", "res-1", "res-2", "res-3", "res-4", "res-5", "res-6", "res-7"]
  },
  {
    name: "Stone Wainscot on a Shop Building", where: "Southern Maryland", type: "residential", status: "done", // client name left off the site on Chad's word, 2026-11-16
    text: "A stone wainscot with a chiseled cap, wrapped around the base of a shop building for a Southern Maryland business owner.",
    tags: ["Stone veneer", "Wainscot"], photos: ["barn-1", "barn-2", "barn-3"]
  },
  {
    name: "Maryland Heritage Interpretive Center", where: "St. Mary's City, MD", type: "commercial", status: "done",
    text: "For Historic St. Mary's City and St. Mary's College of Maryland: Glen-Gery face brick and thin brick, a brick seat wall, a garden wall, two service-yard screen walls and glass block.",
    gc: "W.M. Davis", architect: "SmithGroup", tags: ["Face brick", "Thin brick", "Glass block"], photos: ["mhic-1", "mhic-2", "mhic-3"] // mhic-1: phone photo April 2024, confirmed by Chad 2026-11-16; mhic-2/3: the mock-up panel
  },
  {
    name: "Ladies of Charity Food Pantry", where: "North Beach, MD", type: "commercial", status: "done",
    text: "Split-face and reinforced block for the rebuilt community food pantry.",
    gc: "W.M. Davis", architect: "Thomas K. Reinecker AIA", tags: ["Split-face block", "Reinforced CMU"], photos: []
  },
  {
    name: "Cedar Point Federal Credit Union", where: "Prince Frederick, Lexington Park and Leonardtown, MD", type: "commercial", status: "done", // CHECK scope line
    text: "Masonry work at three credit union branches.", gc: "W.M. Davis", tags: ["Bank branches"], photos: []
  },
  {
    name: "Schaefer and Montgomery Halls", where: "St. Mary's College of Maryland", type: "commercial", status: "done",
    text: "Four masonry piers in block and Glen-Gery face brick for the college's chiller and boiler plant upgrade.",
    gc: "Koch Kent Island Mechanical", engineer: "Chestmont Engineering", tags: ["Face brick", "CMU"], photos: [] // engineer named on McKay's own proposal
  },
  {
    name: "All Saints Church", where: "Leonardtown, MD", type: "commercial", status: "done", // CHECK: proposal dated 2026-10-15; is this done, under way or still to start?
    text: "Exterior masonry restoration: brick cleaning, new caulk at the control joints, doors and windows, and brick repair.",
    tags: ["Restoration", "Brick repair"], photos: []
  }
];
