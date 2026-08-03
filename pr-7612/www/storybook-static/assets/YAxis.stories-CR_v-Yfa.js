import{R as t}from"./iframe-DJpt453r.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CLwOmL6r.js";import{R as h}from"./zIndexSlice-BEI9HpJP.js";import{L as A}from"./LineChart-Bk8Ao9Ga.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-B3Ac_-Ob.js";import{X as f}from"./XAxis-BA-ddF1e.js";import{L as E}from"./Legend-BILPZMtv.js";import{L as n}from"./Line-CECxQR0F.js";import{T as v}from"./Tooltip-C_bob3zv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dDyJmDxJ.js";import"./Text-Bi21htDl.js";import"./resolveDefaultProps-CLx3DpUR.js";import"./DOMUtils-DAtMTnWN.js";import"./isWellBehavedNumber-DKWCRCpD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-K-94Fkyc.js";import"./index-DoMIVr-B.js";import"./index-BXFZGfKa.js";import"./RechartsWrapper-DPF1jiXq.js";import"./index-D2X8nAMV.js";import"./index-DNypUe5l.js";import"./throttle-DmwBytCC.js";import"./renderedTicksSlice--nt2FmmR.js";import"./axisSelectors-CK35li4D.js";import"./d3-scale-B7WR5FSF.js";import"./CartesianAxis-C6-8NriX.js";import"./Layer-BYTSm4Ec.js";import"./types-C91tVnYw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DM-6Q2RL.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-m4WNSH7S.js";import"./chartDataContext-D5OCzkMp.js";import"./CategoricalChart-Dhlk9IOH.js";import"./Symbols-B9aizUb6.js";import"./symbol-BC04pMTr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CtGMFqoH.js";import"./uniqBy-zULCev5m.js";import"./iteratee-VLem8QJ3.js";import"./Curve-DXMTS4fM.js";import"./step-DLRDUC9Q.js";import"./AnimatedItems-CECphMY_.js";import"./useAnimationId-BTloGm3i.js";import"./ActivePoints-DNbR-YxP.js";import"./Dot-1UuNdg9e.js";import"./RegisterGraphicalItemId-DBh3uGfr.js";import"./ErrorBarContext-KgdOLmDh.js";import"./GraphicalItemClipPath-CbnfZ2S6.js";import"./SetGraphicalItem-CyMh2I00.js";import"./graphicalItemIdentity-DEqpaJdn.js";import"./ActiveShapeUtils-ML-GG5dE.js";import"./Cross-DrmSnxpC.js";import"./Rectangle-Bb9l30Tv.js";import"./util-Dxo8gN5i.js";import"./Sector-BxnUayGt.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,Wt as default};
