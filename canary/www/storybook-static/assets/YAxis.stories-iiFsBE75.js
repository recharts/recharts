import{R as t}from"./iframe-2CSQwnzh.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CGxWNSi-.js";import{R as h}from"./zIndexSlice-BFAyLu2K.js";import{L as A}from"./LineChart-C-KxgAF9.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-wDjJNs7b.js";import{X as f}from"./XAxis-Q_FxDFmH.js";import{L as E}from"./Legend-DlgIPDhY.js";import{L as n}from"./Line-DawadGfv.js";import{T as v}from"./Tooltip-DueAtotn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B1LfcQH3.js";import"./Layer-whPw80AU.js";import"./resolveDefaultProps-BHTXK_Jm.js";import"./Text-D8BcLzfv.js";import"./DOMUtils-CR7HkqrI.js";import"./isWellBehavedNumber-Dcam8SOU.js";import"./Label-BgiiW0df.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BmQ9stZJ.js";import"./index-Cea4V0if.js";import"./index-DaE0ahnp.js";import"./types-Co_C0j8x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-HMFum7ql.js";import"./throttle-D6AnBAnr.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DBVst9hu.js";import"./index-cEZOrgfU.js";import"./index-DiEzMPwb.js";import"./axisSelectors-svppWMH6.js";import"./d3-scale-Dt9cpg9w.js";import"./CartesianChart-DSNUg0OG.js";import"./chartDataContext-CjOi85nN.js";import"./CategoricalChart-DtXBMgKk.js";import"./Symbols-McDm8XxD.js";import"./symbol-DJbov12X.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbQUl8ho.js";import"./uniqBy-BOeXWsaI.js";import"./iteratee-DeKV1h7S.js";import"./Curve-BVeBGaCZ.js";import"./step-cLfMjHgU.js";import"./AnimatedItems-Ba6tXj_A.js";import"./useAnimationId-CkCcxDPT.js";import"./ActivePoints-fb37GVPw.js";import"./Dot-D2O1VtDH.js";import"./RegisterGraphicalItemId-D-cwWngY.js";import"./ErrorBarContext-B19vexPG.js";import"./GraphicalItemClipPath-DcZNtOEm.js";import"./SetGraphicalItem-DiGKkNAO.js";import"./getRadiusAndStrokeWidthFromDot-DvI-6mn5.js";import"./ActiveShapeUtils-CiureFp6.js";import"./Cross-DRVUwuRK.js";import"./Rectangle-BogSoKYG.js";import"./util-Dxo8gN5i.js";import"./Sector-UcZahgCQ.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Wt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Wt as __namedExportsOrder,St as default};
