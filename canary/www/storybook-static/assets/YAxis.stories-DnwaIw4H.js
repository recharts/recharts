import{R as t}from"./iframe-CGMPGT_Z.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-ph0fLQn1.js";import{R as h}from"./zIndexSlice-BwRFWyAI.js";import{L as A}from"./LineChart-2TTRC4be.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-xPIg11en.js";import{X as f}from"./XAxis-DbuLqOFS.js";import{L as E}from"./Legend-C0TB2Q7_.js";import{L as i}from"./Line-DkMyEWjM.js";import{T as v}from"./Tooltip-VL4D0Geu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BCblnQ7e.js";import"./Text-DLnj5LmN.js";import"./resolveDefaultProps-05Xj8Dk4.js";import"./ZIndexLayer-9BCkhjyY.js";import"./index-DVV9xQIw.js";import"./index-BFunbtNY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BIscasf0.js";import"./throttle-eL-EEQ3_.js";import"./axisSelectors-nBPX2Xba.js";import"./d3-scale-DhJmdG6x.js";import"./CartesianAxis-B1TiLRwW.js";import"./Layer-BT_Vpx95.js";import"./types-BG6mJK46.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-h35w6byl.js";import"./index-Cc9Sc31K.js";import"./index-JIsP8NnX.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DQJBpYXH.js";import"./index-ClDVUaDb.js";import"./fillDefinitions-J_g-z9QL.js";import"./CartesianChart-BQtC3GTu.js";import"./chartDataContext-Be9WERVf.js";import"./CategoricalChart-CNkpe0ib.js";import"./Symbols-CySejNnI.js";import"./symbol-X4EmnsFS.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CgxUiewk.js";import"./uniqBy-Dmo8Jc_P.js";import"./iteratee-D1qU_gcL.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-2C3aWHdg.js";import"./Curve-B6JD92Z8.js";import"./step-C3GvXaRE.js";import"./dataEntryStyles-mfmNhCBT.js";import"./ActivePoints-BPzkwPAB.js";import"./Dot-BgWcOT9t.js";import"./activeStyles-Dr2Cpwdi.js";import"./useAnimationId-BO_xR5GW.js";import"./ErrorBarContext-BlCnepik.js";import"./SetGraphicalItem-x_4gBiT9.js";import"./ActiveShapeUtils-C3kE7Ldm.js";import"./useEffectiveDataKey-BosH_tQ0.js";import"./Cross-BcQf_zas.js";import"./Rectangle-CLE0n3dQ.js";import"./util-Dxo8gN5i.js";import"./Sector-DRB_9UVA.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
