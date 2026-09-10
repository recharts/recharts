import{R as t}from"./iframe-D-sDuIqM.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-C3R1kIjz.js";import{R as h}from"./zIndexSlice-DkRDAG1K.js";import{L as A}from"./LineChart-DYK0mMsv.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CXK2QrMX.js";import{X as f}from"./XAxis-C9qauAI0.js";import{L as E}from"./Legend-CVfH-3p0.js";import{L as i}from"./Line-Dg79dF8E.js";import{T as v}from"./Tooltip-Ba02LnDa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-mzqnfF5y.js";import"./Text-cGP75sAD.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./DOMUtils-BlK1UfYz.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./RechartsWrapper-BR0dPwJa.js";import"./axisSelectors-CcFzWzBk.js";import"./throttle-BwwGSoU-.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianAxis-Bbla4SrJ.js";import"./Layer-C3zxw81n.js";import"./types-D7y8jC37.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./Symbols-BZPRKGG7.js";import"./symbol-v3MbjgbN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CnzQeRxh.js";import"./uniqBy-B7ZujxYX.js";import"./iteratee-pAczANug.js";import"./Curve-CiGjQv1I.js";import"./step-CSXkfkZq.js";import"./AnimatedItems-CAyQvTlC.js";import"./useAnimationId-BdWTgj5e.js";import"./ActivePoints-Ctj_jtde.js";import"./Dot-nUj7Emhk.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./getRadiusAndStrokeWidthFromDot-CyWtRfsI.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./useGraphicalItemIdentity-CglCalgl.js";import"./Cross-CFjweDtM.js";import"./Rectangle-cVKynJUN.js";import"./util-Dxo8gN5i.js";import"./Sector-Clw-GRhk.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
