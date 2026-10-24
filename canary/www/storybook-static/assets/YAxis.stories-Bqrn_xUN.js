import{R as t}from"./iframe-CHJ8qNn-.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BiD1d_mO.js";import{R as h}from"./zIndexSlice-DNIXTlyt.js";import{L as A}from"./LineChart-B4bXXO0G.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-KqJXt-cq.js";import{X as f}from"./XAxis-L9UrmdET.js";import{L as E}from"./Legend-CtgsxT5S.js";import{L as i}from"./Line-DI2at8cX.js";import{T as v}from"./Tooltip-DV20MK05.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B11lJlmF.js";import"./Text-CNSLXPSH.js";import"./resolveDefaultProps-DpVu8JOQ.js";import"./pageBackground-DmOvuMA2.js";import"./isWellBehavedNumber-BRib7OTz.js";import"./useId-DMQKzmZX.js";import"./useBackwardsCompatibleTheme-BpzyF9ZD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D300_86G.js";import"./index-D97GqZNj.js";import"./index-D2V1f5dZ.js";import"./dataEntryStyles-DVh89c5p.js";import"./axisSelectors-BBd7_xKf.js";import"./throttle-XqMRt2jJ.js";import"./d3-scale-Tozs6n73.js";import"./CartesianAxis-Durs5z8j.js";import"./Layer-D78kPmJv.js";import"./types-Dz3e-B0c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C8683P8v.js";import"./index-BKlKJCZc.js";import"./index-BzI6syEB.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BJlTvsU4.js";import"./index-CoSZFYA7.js";import"./CartesianChart-BhRxeAbm.js";import"./chartDataContext-BkqAIBWa.js";import"./CategoricalChart-CQg4LCLR.js";import"./Symbols-AUdiU7pc.js";import"./symbol-B3rYpPSJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BalShxiV.js";import"./uniqBy-CEOdNzvN.js";import"./iteratee-B1w-dxbF.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Dy3LXOkF.js";import"./step-BMByuFVF.js";import"./activeStyles-ujvHG1pk.js";import"./useAnimationId-CQYAMcX9.js";import"./ActivePoints-DnpLdJfX.js";import"./Dot-C7lzuZIa.js";import"./RegisterGraphicalItemId-BoIM166p.js";import"./ErrorBarContext-gVyy4V_e.js";import"./GraphicalItemClipPath-CRFACIVC.js";import"./SetGraphicalItem-CGS7hoc8.js";import"./getRadiusAndStrokeWidthFromDot-Dlc5cKW5.js";import"./ActiveShapeUtils-5-Co5jK-.js";import"./useEffectiveDataKey-BD8sCJ8W.js";import"./Cross-D2aMjNTl.js";import"./Rectangle-B0Mkl8MZ.js";import"./util-Dxo8gN5i.js";import"./Sector-Ct6CV9fW.js";const zt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Bt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Bt as __namedExportsOrder,zt as default};
