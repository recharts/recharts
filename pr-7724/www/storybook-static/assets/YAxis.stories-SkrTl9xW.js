import{R as t}from"./iframe-BMDGt33G.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Bb9GrcYH.js";import{R as h}from"./zIndexSlice-DCVNKZSi.js";import{L as A}from"./LineChart-B2WH9o6A.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D_fcGPSa.js";import{X as f}from"./XAxis-BLwPYlxb.js";import{L as E}from"./Legend-BLAXFxYE.js";import{L as n}from"./Line-DesYXgxV.js";import{T as v}from"./Tooltip-CxdSCIpl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-l14yVQ5q.js";import"./Text-DYkDw-5j.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./DOMUtils-DBrlboks.js";import"./isWellBehavedNumber-D73nv25y.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CaEles3w.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./RechartsWrapper-CU85gN_Z.js";import"./axisSelectors-DoXQrKNQ.js";import"./throttle-DHXzdyrx.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./index-B-bSR3iB.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./CartesianAxis-D9IiMPGB.js";import"./Layer-CjUZiXYs.js";import"./types-BuxhmSle.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./Symbols-1hycImks.js";import"./symbol-DkqqIOyx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAEYehLF.js";import"./uniqBy-BujAWGSb.js";import"./iteratee-Bncw5-E9.js";import"./Curve-CIJakMM0.js";import"./step-B_y4L6H0.js";import"./AnimatedItems-DPSFxYpd.js";import"./useAnimationId-B5h3AUKS.js";import"./ActivePoints-CHdXi4sp.js";import"./Dot-CYm9TxQB.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getRadiusAndStrokeWidthFromDot-CYss6dEa.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CHNDSXAv.js";import"./Rectangle-DB4jjQ5C.js";import"./util-Dxo8gN5i.js";import"./Sector-dMXSO2iG.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Xt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
