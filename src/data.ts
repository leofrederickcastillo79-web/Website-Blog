import introImage from './assets/images/regenerated_image_1779892463037.png';
import biologicalImage from './assets/images/regenerated_image_1779893027722.jpg';
import environmentalImage from './assets/images/regenerated_image_1779893028886.png';
import lifeImage from './assets/images/regenerated_image_1779893031386.png';

export type Category =
  | "Overview"
  | "Biological Factors"
  | "Environmental Factors"
  | "Life Experiences"
  | "Analysis"
  | "Conclusion";

export interface SubSection {
  title?: string;
  content?: string[];
  quote?: string;
  listType?: "timeline" | "cards" | "styled-list";
  listItems?: {
    marker: string;
    title: string;
    description: string;
  }[];
  imagePlaceholder?: { url: string; alt: string; caption?: string };
}

export interface SectionData {
  id: string;
  category: Category;
  title: string;
  subsections: SubSection[];
}

export const filters: Category[] = [
  "Overview",
  "Biological Factors",
  "Environmental Factors",
  "Life Experiences",
  "Analysis",
  "Conclusion",
];

export const sectionsData: SectionData[] = [
  {
    id: "intro",
    category: "Overview",
    title: "I. Introduction",
    subsections: [
      {
        title: "A. Brief overview of José Rizal",
        content: [
          "José Protasio Rizal Mercado y Alonso Realonda was born on June 19, 1861, in Calamba, Laguna. He was the seventh of eleven children of Francisco Mercado Rizal and Teodora Alonso. Rizal became known as a physician, novelist, intellectual, artist, educator, and patriot whose writings helped inspire the Philippine struggle against Spanish colonial rule (Sutherland, 2025; National Historical Commission of the Philippines [NHCP], n.d.-c).",
          "Rizal is most widely remembered for his novels <em>Noli Me Tangere</em>, published in Berlin in 1887, and <em>El Filibusterismo</em>, published in Ghent in 1891. These works portrayed oppression, corruption, abuse of power, and the suffering of Filipinos under colonial rule. Beyond writing, he founded La Liga Filipina in 1892, an organization intended to promote Filipino unity, protection against injustice, education, agriculture, commerce, and social reform. His reform activities led to his arrest and exile in Dapitan, where he continued to serve through medicine, education, and community projects (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d; Sutherland, 2025).",
          "Rizal’s life is historically important because it demonstrates how personal ability becomes meaningful when directed toward the welfare of others. His education, writings, medical service, civic organizing, and final sacrifice reveal that his heroism was not formed in a single moment. It developed through the combined influence of family, schooling, experiences of injustice, international exposure, moral choices, and the challenges he endured.",
        ],
        imagePlaceholder: {
          url: introImage,
          alt: "Old academic books representing Rizal's intellect",
          caption:
            "Rizal's extensive writing and intellectual pursuits formed the core of his heroism.",
        },
      },
      {
        title:
          "B. Thesis statement on the factors shaping his character and heroism",
        content: [
          "José Rizal’s character and heroism were shaped by the interaction of his intellectual and artistic abilities, family upbringing, educational formation, exposure to colonial injustice, experiences abroad, and deliberate commitment to use writing, medicine, civic action, and personal sacrifice in defending Filipino dignity.",
        ],
      },
      {
        title: "OPENING TIMELINE TABLE",
        listType: "timeline",
        listItems: [
          {
            marker: "June 19, 1861",
            title: "Birth in Calamba, Laguna",
            description:
              "Beginning of Rizal’s life within an educated and intellectually supportive family environment. (Sutherland, 2025; Ravin, 2001)",
          },
          {
            marker: "February 17, 1872",
            title: "Execution of GOMBURZA",
            description:
              "Became a lasting symbol of colonial injustice in Rizal’s political consciousness. (NHCP, n.d.-e; Rizal, 1912)",
          },
          {
            marker: "1887",
            title: "Publication of Noli Me Tangere",
            description:
              "Exposed abuses and oppression in colonial society through literature. (Intramuros Administration, n.d.; Sutherland, 2025)",
          },
          {
            marker: "1891",
            title: "Publication of El Filibusterismo",
            description:
              "Presented a stronger critique of injustice and was dedicated to GOMBURZA. (Rizal, 1912; Sutherland, 2025)",
          },
          {
            marker: "1892",
            title: "Founding of La Liga Filipina and exile to Dapitan",
            description:
              "Demonstrated Rizal’s commitment to civic reform and Filipino unity. (NHCP, n.d.-c, n.d.-d)",
          },
          {
            marker: "December 30, 1896",
            title: "Execution at Bagumbayan",
            description:
              "Established Rizal as an enduring symbol of patriotic sacrifice. (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f)",
          },
        ],
      },
    ],
  },
  {
    id: "biological",
    category: "Biological Factors",
    title: "II. Biological Factors",
    subsections: [
      {
        title: "A. Inherited traits",
        content: [
          "Historical sources describe Rizal as a gifted student, poet, painter, sculptor, physician, and political thinker. He developed skills in literature, the arts, science, and medicine, eventually becoming especially known for his novels and his work in ophthalmology. While historical sources do not establish that these abilities were biologically inherited, they document the intellectual and artistic capacities that became important foundations of his development (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "These abilities became historically important because Rizal chose to direct them toward public concerns. His literary skill enabled him to portray the suffering of Filipinos in his novels. His medical education enabled him to treat patients. His capacity for observation and analysis helped him understand the social problems of colonial society. In this sense, his documented abilities were personal foundations of his development, while his experiences and environment gave those abilities their patriotic purpose.",
        ],
      },
      {
        title: "B. Physical characteristics and their impact",
        content: [
          "Rizal’s physical appearance does not provide a valid explanation for his heroism. There is no reliable historical evidence that his bodily features caused his nationalist beliefs or achievements. A more historically supported physical influence in his life was his mother’s failing eyesight.",
          "Rizal pursued medicine and later trained in ophthalmology partly because he wanted to help his mother, Teodora Alonso, whose vision was deteriorating. After studying medicine in the Philippines and Madrid, he continued ophthalmological training under Louis de Wecker in Paris and Otto Becker in Heidelberg. His specialization later allowed him to practice as an eye physician and to treat his mother’s eye condition (Ravin, 2001; Sutherland, 2025).",
          "This aspect of Rizal’s life is important because it demonstrates the connection between personal experience and professional purpose. His medical path was connected to compassion and responsibility within his family. Later, during his exile in Dapitan, his medical skill also became a means of serving the wider community (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
        ],
        imagePlaceholder: {
          url: biologicalImage,
          alt: "Old academic medical environment",
          caption:
            "His mother's failing eyesight profoundly guided his decision to specialize in ophthalmology.",
        },
      },
      {
        title: "TIMELINE: BIOLOGICAL AND PERSONAL DEVELOPMENT",
        listType: "timeline",
        listItems: [
          {
            marker: "Before 1882",
            title: "Rizal studied Philosophy & Medicine (UST)",
            description:
              "Connected education with his desire to help his mother. (Intramuros Administration, n.d.; Sutherland, 2025)",
          },
          {
            marker: "1882–1884",
            title: "Continued medical studies in Madrid",
            description:
              "Strengthened his academic discipline and professional preparation. (Sutherland, 2025)",
          },
          {
            marker: "1885–1886",
            title: "Trained in ophthalmology (Paris & Heidelberg)",
            description:
              "Developed specialized medical skill and service-oriented purpose. (Ravin, 2001)",
          },
          {
            marker: "1892–1896",
            title: "Practiced medicine during exile in Dapitan",
            description:
              "Used personal expertise for community service. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
        ],
      },
    ],
  },
  {
    id: "environmental",
    category: "Environmental Factors",
    title: "III. Environmental Factors",
    subsections: [
      {
        title: "A. Family background and upbringing",
        content: [
          "<strong>1861: Birth and Family Formation:</strong> José Rizal was born in Calamba, Laguna, on June 19, 1861. His parents were Francisco Mercado Rizal and Teodora Alonso, and he was the seventh of their eleven children. Historical accounts describe his family environment as intellectually supportive and capable of providing educational opportunities for the children (Ravin, 2001; Sutherland, 2025).",
          "Rizal’s mother played an especially significant role in his early development. The official Museo ni Rizal account identifies Teodora Alonso as his first teacher. His parents later hired private tutors to teach him subjects including Spanish and Latin. In June 1870, he studied in Biñan under Maestro Justiniano Aquino Cruz before proceeding to formal education in Manila (Intramuros Administration, n.d.).",
          "<strong>Influence on Character:</strong> Rizal’s family environment encouraged intellectual discipline, responsibility, and appreciation for education. His mother introduced him to learning, while his family’s investment in his schooling enabled his abilities to develop. His understanding of injustice was also influenced by his family’s experience under colonial authority. Ravin (2001) records that Teodora Alonso was imprisoned following an accusation and identifies this experience as one of the influences on Rizal’s political thought.",
        ],
      },
      {
        title: "B. Educational experiences",
        content: [
          "Education was among the strongest influences on Rizal’s growth. His studies shaped him into a scholar, physician, and writer capable of examining Philippine society critically.",
          "<strong>1870: Studies in Biñan:</strong> Rizal studied in Biñan under Maestro Justiniano Aquino Cruz. This marked his transition from home-based learning to formal education outside his family environment. The experience developed his discipline and prepared him for more advanced schooling in Manila (Intramuros Administration, n.d.).",
          "<strong>1872–1877: Ateneo Municipal de Manila:</strong> Rizal entered Ateneo Municipal de Manila in Intramuros and studied there from 1872 to 1877. The NHCP historical marker states that he earned his Bachelor of Arts degree on March 23, 1877. His Ateneo years strengthened his academic formation and prepared him for higher studies (Intramuros Administration, n.d.; NHCP, n.d.-b).",
          "<strong>Studies at the University of Santo Tomas:</strong> After Ateneo, Rizal studied Philosophy and Letters and later pursued Medicine at the University of Santo Tomas. His medical studies were closely associated with his desire to help address his mother’s eyesight problem. This period connected his education with practical family responsibility and future public service (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "<strong>1882–1884: Studies in Madrid:</strong> In 1882, Rizal travelled to Madrid to continue his studies. He later obtained a Licentiate in Medicine from the Universidad Central de Madrid. His European education exposed him to wider intellectual, scientific, and political environments, providing a broader perspective from which to evaluate the conditions of the Philippines (Sutherland, 2025).",
        ],
        imagePlaceholder: {
          url: environmentalImage,
          alt: "Ateneo or old university architecture",
          caption:
            "His formal education served as the foundation for his critical analysis of Philippine society.",
        },
      },
      {
        title: "EDUCATIONAL DEVELOPMENT TIMELINE TABLE",
        listType: "timeline",
        listItems: [
          {
            marker: "Early childhood",
            title: "Instruction under Teodora Alonso",
            description:
              "Formed his earliest habits of learning. (Intramuros Administration, n.d.; Ravin, 2001)",
          },
          {
            marker: "1870",
            title: "Schooling in Biñan",
            description:
              "Developed discipline in formal education. (Intramuros Administration, n.d.)",
          },
          {
            marker: "1872 - 1877",
            title: "Ateneo Municipal de Manila",
            description:
              "Strengthened his academic formation. (Intramuros Administration, n.d.; NHCP, n.d.-b)",
          },
          {
            marker: "1877 - 1882",
            title: "University of Santo Tomas",
            description:
              "Directed him toward medicine and service to his mother. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "1882 - 1884",
            title: "Universidad Central de Madrid",
            description:
              "Expanded his intellectual and professional world. (Sutherland, 2025)",
          },
          {
            marker: "1885 - 1886",
            title: "Medical training in Paris and Heidelberg",
            description: "Prepared him as an ophthalmologist. (Ravin, 2001)",
          },
        ],
      },
      {
        title: "C. Social and political context of the Philippines",
        content: [
          "<strong>1872: The Execution of GOMBURZA:</strong> One of the most significant historical events connected to Rizal’s later nationalism was the execution of Fathers Mariano Gomes, José Burgos, and Jacinto Zamora, remembered collectively as GOMBURZA. Official NHCP records state that the three priests were executed by Spanish colonial authorities on February 17, 1872, following accusations of complicity in the Cavite Mutiny (NHCP, n.d.-e).",
          "Rizal later dedicated <em>El Filibusterismo</em> to GOMBURZA, identifying their deaths with the injustice that his work sought to expose. The dedication provides direct evidence that the memory of GOMBURZA became an important part of Rizal’s mature political consciousness (Rizal, 1912).",
          "<strong>The Imprisonment of Teodora Alonso:</strong> Rizal’s concern for injustice was intensified by his family’s own experience. His mother, Teodora Alonso, was imprisoned following an accusation and endured humiliating treatment before being acquitted. Ravin (2001) identifies this experience as one of the events that influenced Rizal’s political thinking and his representation of injustice in <em>Noli Me Tangere</em>.",
          "<strong>Colonial Conditions and the Demand for Reform:</strong> Rizal lived in a society marked by colonial hierarchy, unequal treatment, restrictions on Filipino advancement, and institutional abuses that he later portrayed in his novels and reform writings. Through <em>Noli Me Tangere</em> and <em>El Filibusterismo</em>, he represented the effects of abusive authority and inequality on Filipino lives. His writing connected personal observation, national experience, and historical injustice with the demand for social reform (Intramuros Administration, n.d.; Ravin, 2001; Rizal, 1891/1912; Sutherland, 2025).",
        ],
      },
      {
        title: "INFLUENTIAL PEOPLE IN RIZAL’S DEVELOPMENT",
        listType: "cards",
        listItems: [
          {
            marker: "Francisco Mercado Rizal",
            title: "Father",
            description:
              "Helped sustain a family environment supportive of education and discipline. (Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Teodora Alonso",
            title: "Mother and first teacher",
            description:
              "Formed his early education; her eye condition influenced his medical specialization. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Paciano Rizal",
            title: "Older brother",
            description:
              "Member of Rizal’s immediate family and later a participant in the revolutionary struggle. (Intramuros Administration, n.d.)",
          },
          {
            marker: "Maestro Justiniano Aquino Cruz",
            title: "Teacher in Biñan",
            description:
              "Guided Rizal during his early formal schooling. (Intramuros Administration, n.d.)",
          },
          {
            marker: "GOMBURZA",
            title: "Executed priests",
            description:
              "Became enduring symbols of colonial injustice in Rizal’s writing. (NHCP, n.d.-e; Rizal, 1912)",
          },
          {
            marker: "Louis de Wecker",
            title: "Medical mentor in Paris",
            description:
              "Helped develop Rizal’s ophthalmological training. (Ravin, 2001)",
          },
          {
            marker: "Otto Becker",
            title: "Medical mentor in Heidelberg",
            description:
              "Strengthened Rizal’s medical expertise. (Ravin, 2001)",
          },
          {
            marker: "Pio Valenzuela",
            title: "Katipunan emissary",
            description:
              "His visit revealed Rizal’s cautious position toward immediate armed revolution. (NHCP, n.d.-a)",
          },
        ],
      },
    ],
  },
  {
    id: "life",
    category: "Life Experiences",
    title: "IV. Life Experiences",
    subsections: [
      {
        title: "A. Experiences Abroad",
        content: [
          "<strong>1882: Departure for Spain:</strong> In 1882, Rizal left the Philippines for Spain to continue his education. In Madrid, he pursued medicine and obtained his Licentiate in Medicine in 1884. This period brought him into contact with wider European academic environments and Filipino reform discussions abroad (Sutherland, 2025).",
          "<strong>Significance:</strong> His education abroad gave him a broader basis for comparing the conditions of the Philippines with other societies. It strengthened his ability to evaluate colonial inequality and developed his belief in reform through education and reason.",
          "<strong>1885–1886: Medical Training in Paris and Heidelberg:</strong> Rizal continued his training in ophthalmology under Louis de Wecker in Paris and Otto Becker in Heidelberg. His medical work reflected both personal motivation and professional discipline (Ravin, 2001).",
          "<strong>Significance:</strong> This experience strengthened Rizal’s scientific training and prepared him to serve patients. It also demonstrated that his development was not confined to political criticism because he pursued a profession intended to relieve suffering.",
          "<strong>1887: Publication of Noli Me Tangere:</strong> Rizal published Noli Me Tangere in Berlin in 1887. The novel addressed abuses and social problems under Spanish colonial rule. Official historical materials recognize the novel as part of Rizal’s pursuit of social equality and reform (Intramuros Administration, n.d.; Sutherland, 2025).",
          "<strong>Significance:</strong> The publication of Noli Me Tangere marked Rizal’s emergence as a public critic of colonial injustice. Through literature, he made the suffering of Filipinos visible and difficult to ignore.",
          "<strong>1889–1891: Reform Writing and El Filibusterismo:</strong> Between 1889 and 1891, Rizal contributed writings advocating political, religious, and social reform to La Solidaridad. In 1891, he published El Filibusterismo in Ghent, Belgium. The novel was dedicated to GOMBURZA and expressed a sharper critique of injustice and failed reform (Rizal, 1912; Sutherland, 2025).",
          "<strong>Significance:</strong> His second novel showed the development of Rizal’s political thinking. It connected the memory of earlier injustice with the continuing failure of colonial authorities to address Filipino grievances.",
        ],
        imagePlaceholder: {
          url: lifeImage,
          alt: "European classic architecture",
          caption:
            "His time in Europe deeply broadened his political perspectives and understanding of systemic inequality.",
        },
      },
      {
        title: "EXPERIENCES ABROAD TABLE",
        listType: "cards",
        listItems: [
          {
            marker: "1882",
            title: "Rizal Travels to Madrid",
            description:
              "Rizal continued his medical studies in Spain. Expanded his intellectual and political perspective. (Sutherland, 2025)",
          },
          {
            marker: "1885 - 1886",
            title: "Ophthalmology Training",
            description:
              "He trained in Paris and Heidelberg. Developed professional skill for practical service. (Ravin, 2001)",
          },
          {
            marker: "1887",
            title: "Noli Me Tangere Published",
            description:
              "Rizal’s first novel was published in Berlin. Publicly exposed colonial social abuses. (Intramuros Administration, n.d.; Sutherland, 2025)",
          },
          {
            marker: "1889 - 1891",
            title: "Reform Writing",
            description:
              "He wrote for La Solidaridad. Participated in the broader campaign for reforms. (Sutherland, 2025)",
          },
          {
            marker: "1891",
            title: "El Filibusterismo Published",
            description:
              "His second novel was published in Ghent and dedicated to GOMBURZA. Presented a deeper critique of oppression and failed reform. (Rizal, 1891/1912; Sutherland, 2025)",
          },
        ],
      },
      {
        title: "B. Life in Dapitan",
        content: [
          "<strong>July 3, 1892: Founding of La Liga Filipina:</strong> After returning to the Philippines, Rizal founded La Liga Filipina in Tondo, Manila, on July 3, 1892. According to the NHCP historical marker, the association aimed to unite Filipinos, attend to people’s needs, defend them against violence and injustice, encourage education, agriculture and commerce, and examine social reforms (NHCP, n.d.-d).",
          "<strong>Significance:</strong> The founding of La Liga Filipina shows that Rizal did not limit his reform work to novels and essays. He attempted to build a civic reform organization that could improve Filipino society through unity, education, mutual protection, and economic development.",
          "<strong>July 1892: Arrest and Deportation to Dapitan:</strong> The NHCP records that Rizal was arrested on July 6, 1892, for organizing La Liga Filipina and was deported to Dapitan on July 15, 1892. His exile removed him from Manila and limited his direct participation in national reform activities (NHCP, n.d.-c).",
          "<strong>Significance:</strong> His exile revealed the danger faced by reform advocates under colonial rule. Rizal was punished after attempting to organize Filipinos for civic improvement and the defense of their rights.",
          "<strong>July 1892 - July 1896: Community Service During Exile:</strong> During his exile in Dapitan, Rizal continued to practice medicine and participate in community development. Historical sources identify his activities in Dapitan as including medical service, the establishment of a school, agricultural work, and civic projects such as a waterworks system and dam (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "<strong>Significance:</strong> Dapitan is one of the clearest demonstrations of Rizal’s resilience. Although exile isolated him from Manila, he responded with constructive service. His work as a physician, teacher, and civic contributor showed that patriotism may be expressed through sustained service to ordinary people.",
          "<strong>June 1896: Meeting with Pio Valenzuela:</strong> In June 1896, Pio Valenzuela visited Rizal in Dapitan on behalf of the Katipunan. The NHCP marker records that Rizal opposed the proposed armed uprising because he believed it would be destructive and would result in deaths (NHCP, n.d.-a).",
          "<strong>Significance:</strong> This episode reveals a debated but important aspect of Rizal’s character. He was committed to national change, but he was cautious about an armed revolution he believed would endanger lives. His position reflects concern for consequences, even when other patriots believed armed struggle had become necessary.",
        ],
      },
      {
        title: "DAPITAN PERIOD TABLE",
        listType: "timeline",
        listItems: [
          {
            marker: "July 3, 1892",
            title: "Founding of La Liga Filipina",
            description:
              "Rizal organized a civic association for unity, protection, education, commerce, and reform. Demonstrated civic leadership and commitment to reform. (NHCP, n.d.-d)",
          },
          {
            marker: "July 1892",
            title: "Arrest and Exile",
            description:
              "Rizal was arrested and deported to Dapitan. Revealed colonial repression of reform activity. (NHCP, n.d.-c)",
          },
          {
            marker: "1892–1896",
            title: "Service in Dapitan",
            description:
              "Rizal practiced medicine, supported education, and contributed to local development. Demonstrated resilience and practical patriotism. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "June 1896",
            title: "Visit of Pio Valenzuela",
            description:
              "Rizal opposed an immediate armed uprising that he believed would be destructive. Revealed caution and concern for human life. (NHCP, n.d.-a)",
          },
        ],
      },
      {
        title: "C. Rizal’s Arrest, Trial, and Execution",
        content: [
          "<strong>1896: Intended Medical Service in Cuba and Arrest:</strong> In 1896, Rizal received permission to travel to Cuba as a physician. However, after the outbreak of the Philippine Revolution, he was arrested while travelling toward Spain and was brought back to Manila. The NHCP marker states that he was charged with inspiring the Philippine Revolution (NHCP, n.d.-c).",
          "<strong>Significance:</strong> The event demonstrates the power colonial authorities attributed to Rizal’s writings and influence. Although he had not led the armed uprising and had opposed the revolutionary plan presented to him in Dapitan, he was still regarded as a major threat to Spanish authority.",
          "<strong>November 3–December 29, 1896: Imprisonment at Fort Santiago:</strong> The official Museo ni Rizal records that Rizal was imprisoned at Fort Santiago for fifty-six days, from November 3 to December 29, 1896. During this period, a military court convicted him of forming an illicit organization and inciting rebellion. His death sentence was read to him on December 29, 1896 (Intramuros Administration, n.d.).",
          "<strong>Significance:</strong> His imprisonment represents the final test of his character. Facing execution, Rizal remained associated with writing, reflection, and love of country rather than the surrender of his convictions.",
          "<strong>December 30, 1896: Execution at Bagumbayan:</strong> Rizal was executed at Bagumbayan, now part of Rizal Park in Manila, on December 30, 1896. Official historical records identify his death as martyrdom that inspired Filipinos in their struggle for freedom (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f).",
          "Before his execution, Rizal completed an untitled farewell poem later known as <em>Mi Último Adiós</em>. The Museo ni Rizal identifies the alcohol stove in which the poem was hidden before Rizal gave it to his sister Narcisa on the eve of his execution (Intramuros Administration, n.d.).",
          "<strong>Significance:</strong> Rizal’s execution turned his life and works into an enduring national symbol. The colonial government could end his life, but it could not eliminate the influence of his ideas about dignity, justice, education, and country.",
        ],
      },
      {
        title: "RIZAL’S FINAL DAYS TABLE",
        listType: "timeline",
        listItems: [
          {
            marker: "1896",
            title: "Intended Service in Cuba",
            description:
              "Rizal intended to serve as a physician but was arrested while travelling. Demonstrated how strongly authorities feared his influence. (NHCP, n.d.-c; Sutherland, 2025)",
          },
          {
            marker: "Nov 3–Dec 29, 1896",
            title: "Fort Santiago Imprisonment",
            description:
              "Rizal was imprisoned while facing trial and sentencing. Represented the final test of his convictions. (Intramuros Administration, n.d.)",
          },
          {
            marker: "December 30, 1896",
            title: "Execution at Bagumbayan",
            description:
              "Rizal was executed by firing squad. His martyrdom strengthened his place in Filipino national memory. (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f)",
          },
        ],
      },
    ],
  },
  {
    id: "character_analysis",
    category: "Analysis",
    title: "V. Character Analysis",
    subsections: [
      {
        title: "A. Rizal’s Virtues and strengths",
        content: [
          "<strong>Intellectual Discipline:</strong> Rizal demonstrated a sustained commitment to learning. His education extended from early lessons under his mother to formal studies in Biñan, Ateneo Municipal de Manila, the University of Santo Tomas, Madrid, Paris, and Heidelberg. This disciplined pursuit of education equipped him to become a writer, physician, artist, and reform advocate. His intelligence became historically significant because he applied his knowledge to social concerns through literature, medicine, education, and civic organization (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "<strong>Courage in Writing and Reform:</strong> Rizal’s publication of Noli Me Tangere in 1887 and El Filibusterismo in 1891 required courage because both novels portrayed colonial oppression and abuses affecting Filipinos. His establishment of La Liga Filipina in 1892 further showed his willingness to transform reform ideas into civic action despite political risk (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d; Sutherland, 2025).",
          "<strong>Compassion and Service:</strong> Rizal’s medical career was connected to compassion, especially his desire to help his mother, whose eyesight was failing. His later ophthalmological training under Louis de Wecker and Otto Becker prepared him to serve patients professionally. During his exile in Dapitan, he continued practicing medicine and participating in community improvement projects (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "<strong>Resilience:</strong> Rizal’s exile in Dapitan could have silenced his work, yet he remained productive through medicine, education, agriculture, and civic projects such as the waterworks system and dam. His response to exile demonstrated resilience because he continued helping others despite political punishment and isolation (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "<strong>Patriotism:</strong> Rizal’s patriotism was evident in his novels, reform writings, civic organization, public service, and willingness to face imprisonment and execution. His life reflected a sustained commitment to Filipino dignity and freedom through reform advocacy and personal sacrifice (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d, n.d.-f; Sutherland, 2025).",
        ],
      },
      {
        title: "SUMMARY TABLE",
        listType: "cards",
        listItems: [
          {
            marker: "Intellectual discipline",
            title:
              "Studies in Manila and Europe; literary and medical achievements",
            description:
              "He treated education as preparation for meaningful service. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Courage",
            title: "Publication of his novels and founding of La Liga Filipina",
            description:
              "He confronted injustice despite political danger. (NHCP, n.d.-c, n.d.-d; Sutherland, 2025)",
          },
          {
            marker: "Compassion",
            title: "Ophthalmology training and medical work in Dapitan",
            description:
              "He used professional skill to help others. (Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Resilience",
            title: "Continued service during exile",
            description:
              "He responded to punishment constructively. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Patriotism",
            title: "Writings, civic activity, and final sacrifice",
            description:
              "He consistently placed Filipino dignity at the center of his work. (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f)",
          },
        ],
      },
      {
        title: "B. Rizal’s Shortcomings and weaknesses",
        content: [
          "<strong>Cautious Position Toward Armed Revolution:</strong> Rizal did not support the immediate armed uprising presented to him through Pio Valenzuela in Dapitan. Some may interpret this position as a limitation because Spanish colonial repression had already made peaceful reform extremely difficult. However, Rizal’s position should not be reduced to cowardice or lack of patriotism. The official historical marker records that he opposed the proposed uprising because he believed it would be destructive and would result in deaths. His decision therefore reveals concern for preparation, responsibility, and human consequences (NHCP, n.d.-a).",
          "<strong>Limited Immediate Success of Peaceful Reform:</strong> Rizal’s writings and La Liga Filipina did not produce the reforms he sought during his lifetime. Colonial authorities answered his advocacy with censorship, harassment, arrest, exile, trial, and execution. This limitation demonstrates that reform faced severe constraints in a political system unwilling to recognize Filipino demands fairly (NHCP, n.d.-c, n.d.-d, n.d.-f; Ravin, 2001; Sutherland, 2025).",
        ],
      },
      {
        title: "C. Rizal’s Evolution of character over time",
        listType: "timeline",
        listItems: [
          {
            marker: "Childhood in Calamba",
            title: "Developed early discipline and love of learning",
            description:
              "Evidence: Instruction under Teodora Alonso and private tutors. (Intramuros Administration, n.d.; Ravin, 2001)",
          },
          {
            marker: "Schooling in Biñan and Manila",
            title:
              "Strengthened intellectual confidence and academic formation",
            description:
              "Evidence: Biñan education and Ateneo graduation. (Intramuros Administration, n.d.; NHCP, n.d.-b)",
          },
          {
            marker: "Medical studies and European travel",
            title: "Became a professional, scholar, and social critic",
            description:
              "Evidence: Studies in Madrid, Paris, and Heidelberg. (Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Reform writing abroad",
            title: "Transformed knowledge into political and literary advocacy",
            description:
              "Evidence: Noli Me Tangere, La Solidaridad, and El Filibusterismo. (Intramuros Administration, n.d.; Rizal, 1912; Sutherland, 2025)",
          },
          {
            marker: "Return to the Philippines",
            title: "Shifted from written criticism to civic organization",
            description:
              "Evidence: Founding of La Liga Filipina. (NHCP, n.d.-d)",
          },
          {
            marker: "Exile in Dapitan",
            title: "Demonstrated resilience through practical public service",
            description:
              "Evidence: Medicine, education, agriculture, and community projects. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Arrest and execution",
            title: "Became a lasting symbol of national sacrifice",
            description:
              "Evidence: Fort Santiago imprisonment and execution at Bagumbayan. (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f)",
          },
        ],
      },
      {
        title: "ANALYTIC SUMMARY",
        content: [
          "Rizal’s character developed gradually through experience. His childhood shaped his habits of learning; his education provided the tools for critical thinking and professional service; his encounters with injustice gave urgency to his concerns; his writings transformed social criticism into public advocacy; his founding of La Liga Filipina demonstrated civic leadership; his exile in Dapitan revealed resilience; and his execution established his enduring association with patriotic sacrifice (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d, n.d.-f; Ravin, 2001; Sutherland, 2025).",
        ],
      },
    ],
  },
  {
    id: "pitfalls",
    category: "Analysis",
    title: "VI. Pitfalls and Heroism",
    subsections: [
      {
        title: "A. Challenges and obstacles faced by Rizal",
        listType: "cards",
        listItems: [
          {
            marker: "Imprisonment of his mother",
            title: "Made colonial injustice personally meaningful",
            description:
              "Contributed to his concern for fairness and human dignity. (Ravin, 2001)",
          },
          {
            marker: "Execution of GOMBURZA",
            title: "Became a lasting memory of colonial injustice",
            description:
              "Inspired the dedication of El Filibusterismo. (NHCP, n.d.-e; Rizal, 1912)",
          },
          {
            marker: "Colonial inequality and abuse",
            title: "Revealed the suffering of Filipinos under Spanish rule",
            description:
              "Motivated his novels and reform advocacy. (Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Political danger",
            title: "Exposed him and his family to official hostility",
            description:
              "Demonstrated courage in confronting abusive power. (Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Arrest after founding La Liga Filipina",
            title: "Prevented his continued civic organizing in Manila",
            description:
              "Revealed colonial intolerance of reform activity. (NHCP, n.d.-c, n.d.-d)",
          },
          {
            marker: "Exile in Dapitan",
            title: "Removed him from the center of political life",
            description:
              "Demonstrated resilience through medicine and community service. (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025)",
          },
          {
            marker: "Debate over armed revolution",
            title: "Forced him to take a controversial position",
            description:
              "Revealed concern for human lives and consequences. (NHCP, n.d.-a)",
          },
          {
            marker: "Arrest, trial, and execution",
            title: "Ended his life at thirty-five",
            description:
              "Made him an enduring national symbol of sacrifice. (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f)",
          },
        ],
      },
      {
        title: "B. How these contributed to Rizal’s heroic acts",
        content: [
          "Rizal’s heroism developed through his responses to injustice and hardship. Rather than withdrawing from public concerns, he used his education, writing, medical training, and civic leadership to challenge colonial abuses and promote Filipino dignity (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d; Ravin, 2001; Sutherland, 2025).",
          "The execution of GOMBURZA became one of the clearest historical influences visible in his writing. Rizal dedicated El Filibusterismo to Fathers Mariano Gomes, José Burgos, and Jacinto Zamora, connecting their deaths to the injustice that his novel sought to expose (NHCP, n.d.-e; Rizal, 1912).",
          "His novels were heroic acts because they publicly represented oppression and social inequality under Spanish colonial rule. Noli Me Tangere and El Filibusterismo challenged the abuses of institutions that exercised power over Filipino society and helped strengthen critical awareness of the country’s condition (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "The founding of La Liga Filipina was also a heroic act because Rizal attempted to build a civic reform organization focused on unity, protection against injustice, education, agriculture, commerce, and social reform. Its formation demonstrated that his patriotism extended beyond literary criticism into organized public action (NHCP, n.d.-d).",
          "His exile in Dapitan provides further evidence of heroism. Although he was removed from Manila and restricted politically, he continued to practice medicine, support education, engage in agriculture, and contribute to local development through civic projects such as the waterworks system and dam (Intramuros Administration, n.d.; Ravin, 2001; Sutherland, 2025).",
          "Finally, Rizal’s imprisonment and execution gave his life lasting symbolic power. He was imprisoned at Fort Santiago, convicted by a military court, and executed at Bagumbayan on December 30, 1896. Official historical records recognize his death as martyrdom that strengthened Filipino determination in the struggle for freedom (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-f).",
        ],
      },
      {
        title: "HEROISM STATEMENT",
        quote:
          "José Rizal’s heroism lay in his sustained use of intellect, conscience, professional skill, civic action, and personal sacrifice to defend the dignity and welfare of Filipinos under colonial rule (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d, n.d.-f; Ravin, 2001; Sutherland, 2025).",
      },
    ],
  },
  {
    id: "conclusion",
    category: "Conclusion",
    title: "VII. Conclusion",
    subsections: [
      {
        title: "A. Summary of findings",
        content: [
          "José Rizal’s development as a patriot and hero resulted from the interaction of personal ability and environmental influence. Historical sources document his intellectual, literary, artistic, and medical abilities, but these abilities alone do not explain his heroism. His character was formed through family guidance, education, personal encounters with injustice, awareness of colonial conditions, travels abroad, reform advocacy, exile, and the moral choices he made during moments of danger (Intramuros Administration, n.d.; NHCP, n.d.-c, n.d.-d, n.d.-e; Ravin, 2001; Sutherland, 2025).",
          "His mother shaped his earliest learning and influenced his later specialization in ophthalmology. His schooling trained him academically and professionally. The execution of GOMBURZA and the injustice experienced by his own family contributed to his concern for fairness and Filipino dignity. His experiences abroad expanded his perspective and gave him opportunities to write works that portrayed colonial abuses. His founding of La Liga Filipina demonstrated his commitment to civic reform, while his work in Dapitan demonstrated resilience and service under punishment (Intramuros Administration, n.d.; NHCP, n.d.-d, n.d.-e; Ravin, 2001; Rizal, 1912; Sutherland, 2025).",
          "Rizal was not without limitations. His reformist strategy did not secure immediate political change, and his cautious position toward armed revolution continues to invite historical discussion. Nevertheless, these limitations do not weaken his importance. They show the difficult decisions faced by a principled individual attempting to serve his country under an oppressive political system (NHCP, n.d.-a, n.d.-c, n.d.-f; Ravin, 2001).",
        ],
      },
      {
        title: "B. Reflection on Rizal's legacy",
        content: [
          "Rizal’s legacy remains important because the values connected with his life continue to matter in the present: education, critical thinking, professional responsibility, compassion, resistance to injustice, civic participation, and love of country expressed through action.",
          "Republic Act No. 1425 requires all public and private schools, colleges, and universities in the Philippines to include courses on Rizal’s life, works, and writings, particularly Noli Me Tangere and El Filibusterismo. The law identifies Rizal’s life, works, and writings as a continuing source of patriotism for the youth and places their study within the broader educational responsibility of developing moral character, personal discipline, civic conscience, and responsible citizenship (Republic of the Philippines, 1956).",
          "For students today, Rizal’s life offers a continuing challenge. Intelligence becomes valuable when it is used responsibly. Education becomes meaningful when it helps address the problems of society. Patriotism becomes genuine when it is expressed through integrity, service, informed judgment, and courage in confronting injustice.",
        ],
      },
      {
        title: "FINAL CLOSING STATEMENT",
        quote:
          "José Rizal became a hero because he transformed knowledge into conscience, conscience into service, and service into a lasting commitment to the dignity and freedom of the Filipino nation.",
      },
    ],
  },
];

export const references = [
  "Intramuros Administration. (n.d.). Museo ni Rizal. https://intramuros.gov.ph/mnr/",
  "National Historical Commission of the Philippines. (n.d.-a). Ang pagdalaw ni Valenzuela sa Dapitan. Registry of Historic Sites and Structures in the Philippines. https://philhistoricsites.nhcp.gov.ph/registry_database/ang-pagdalaw-ni-valenzuela-s-a-dapitan/",
  "National Historical Commission of the Philippines. (n.d.-b). Ateneo de Manila. Registry of Historic Sites and Structures in the Philippines. https://philhistoricsites.nhcp.gov.ph/registry_database/ateneo-de-manila/",
  "National Historical Commission of the Philippines. (n.d.-c). Jose Protacio Rizal (1861-1896). Registry of Historic Sites and Structures in the Philippines. https://philhistoricsites.nhcp.gov.ph/registry_database/jose-protacio-rizal-1861-1896/",
  "National Historical Commission of the Philippines. (n.d.-d). La Liga Filipina. Registry of Historic Sites and Structures in the Philippines. https://philhistoricsites.nhcp.gov.ph/registry_database/la-liga-filipina/",
  "National Historical Commission of the Philippines. (n.d.-e). Memore (Gomburza). Registry of Historic Sites and Structures in the Philippines. https://philhistoricsites.nhcp.gov.ph/registry_database/memore-gomburza/",
  "National Historical Commission of the Philippines. (n.d.-f). Rizal’s execution site. Registry of Historic Sites and Structures in the Philippines. https://philhistoricsites.nhcp.gov.ph/registry_database/rizals-execution-site/",
  "Ravin, T. B. (2001). José Rizal: Philippine national hero and ophthalmologist. Archives of Ophthalmology, 119(2), 280–284. https://jamanetwork.com/journals/jamaophthalmology/fullarticle/265463",
  "Republic of the Philippines. (1956, June 12). Republic Act No. 1425. Supreme Court E-Library. https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/2/14242",
  "Rizal, J. (1912). The reign of greed: A complete English version of El Filibusterismo. Project Gutenberg. https://www.gutenberg.org/files/10676/10676-h/10676-h.htm",
  "Sutherland, D. (2025). José Rizal. Singapore Infopedia, National Library Board. https://www.nlb.gov.sg/main/article-detail?cmsuuid=3b320667-437b-41ed-a536-1699ba3b3649",
];
