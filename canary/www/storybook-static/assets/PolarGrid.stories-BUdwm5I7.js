import{e as r}from"./iframe-BlTD-rim.js";import{P as s}from"./PolarGrid-Bh1fVxiF.js";import{S as c}from"./arrayEqualityCheck-rFMbtr9X.js";const d={cx:{description:"The x-coordinate of center.",table:{type:{summary:"number"},category:"General"}},cy:{description:"The y-coordinate of center.",table:{type:{summary:"number"},category:"General"}},innerRadius:{description:"The radius of the inner polar grid.",table:{type:{summary:"number"},category:"General"}},outerRadius:{description:"The radius of the outer polar grid.",table:{type:{summary:"number"},category:"General"}},polarAngles:{description:"The array of every line grid's angle.",table:{type:{summary:"Array"},category:"General"}},polarRadius:{description:"The array of every circle grid's radius",table:{type:{summary:"Array"},category:"General"}},gridType:{description:"The type of polar grids.",table:{type:{summary:"'polygon' | 'circle'"},defaultValue:"polygon",category:"General"}},radialLines:{description:"Whether to display radial lines.",table:{type:{summary:"boolean"},defaultValue:!0,category:"General"}},fill:{description:"Fill color.",table:{type:{summary:"string"},category:"General"}},fillOpacity:{description:"Fill opacity.",table:{type:{summary:"number"},category:"General"}},stroke:{description:"Stroke color.",table:{type:{summary:"string"},category:"General"}},strokeWidth:{description:"Stroke width.",table:{type:{summary:"number"},category:"General"}}},y={argTypes:d,component:s},[a,t]=[500,500],e={render:l=>r.createElement(c,{width:a,height:t,viewBox:{x:0,y:0,width:a,height:t}},r.createElement(s,{cx:250,cy:250,innerRadius:0,outerRadius:200,...l})),args:{polarAngles:[0,30,60,90,145,180,200,270,300],polarRadius:[10,20,40,80],stroke:"#ccc",strokeWidth:1,fill:"none",fillOpacity:.2}};var o,i,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Record<string, any>) => {
    return <Surface width={surfaceWidth} height={surfaceHeight} viewBox={{
      x: 0,
      y: 0,
      width: surfaceWidth,
      height: surfaceHeight
    }}>
        <PolarGrid cx={250} cy={250} innerRadius={0} outerRadius={200} {...args} />
      </Surface>;
  },
  args: {
    polarAngles: [0, 30, 60, 90, 145, 180, 200, 270, 300],
    polarRadius: [10, 20, 40, 80],
    stroke: '#ccc',
    strokeWidth: 1,
    fill: 'none',
    fillOpacity: 0.2
  }
}`,...(n=(i=e.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const p=["Simple"],h=Object.freeze(Object.defineProperty({__proto__:null,Simple:e,__namedExportsOrder:p,default:y},Symbol.toStringTag,{value:"Module"}));export{h as P,e as S};
