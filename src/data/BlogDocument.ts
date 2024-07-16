import { ref } from 'vue';
import { v4 } from 'uuid';

const BlogDocument = ref({
  id: v4(),
  content: `
  This is the article introduction. Nothing fancy here just some nice hellos and teasers.
   ## this is some dummy content
   \`\`\`mermaid
  graph TB
      sq[Square shape] --> ci((Circle shape))
  
      subgraph A
          od>Odd shape]-- Two line<br/>edge comment --> ro
          di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
          di==>ro2(Rounded square shape)
      end
  
      %% Notice that no text in shape are added here instead that is appended further down
      e --> od3>Really long text with linebreak<br>in an Odd shape]
  
      %% Comments after double percent signs
      e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)
  
      cyr[Cyrillic]-->cyr2((Circle shape Начало));
  
       classDef green fill:#9f6,stroke:#333,stroke-width:2px;
       classDef orange fill:#f96,stroke:#333,stroke-width:4px;
       class sq,e green
       class di orange
  \`\`\`
  `,
  title: 'Enter new Title',
  published: false,
  created: false,
  date: new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }),
});

export default BlogDocument;
