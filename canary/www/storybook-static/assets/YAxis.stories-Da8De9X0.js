import{R as t}from"./iframe-Czgh02fE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B9WbRmEP.js";import{R as h}from"./zIndexSlice-Do8f9YWK.js";import{L as A}from"./LineChart-CjM5anvS.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-8J7rlyPn.js";import{X as f}from"./XAxis-C2Mn3Na8.js";import{L as E}from"./Legend-C3UeOl1B.js";import{L as n}from"./Line-BEYssJ_8.js";import{T as v}from"./Tooltip-Cd1ARCyE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-4BEQg_vH.js";import"./Text-CR_8UZPv.js";import"./resolveDefaultProps-D61FhKsp.js";import"./DOMUtils-CFgNHwO1.js";import"./isWellBehavedNumber-BenVrlkW.js";import"./useBackwardsCompatibleTheme-CqikxVTG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-s-28Q74q.js";import"./index-BzAJTpLC.js";import"./index-BnAmj1WN.js";import"./RechartsWrapper-DIxKKW90.js";import"./index-BjeOf0Dt.js";import"./index-B1amEOit.js";import"./throttle-D1C4cigO.js";import"./axisSelectors-H5jwzs9R.js";import"./d3-scale-DjzQ61DY.js";import"./renderedTicksSlice-DljNETqX.js";import"./CartesianAxis-B4k6OJQ9.js";import"./Layer-zCmZcP2I.js";import"./types-BOqsceM0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BAydra3V.js";import"./chartDataContext-9fwvPw2D.js";import"./CategoricalChart-BgAf9cWH.js";import"./Symbols-3zu5f5DX.js";import"./symbol-BkB6eAni.js";import"./path-DyVhHtw_.js";import"./useElementOffset-cCtdJ_2d.js";import"./uniqBy-DH6vkAOH.js";import"./iteratee-dtD612zi.js";import"./Curve--OBRtabt.js";import"./step-BjIepLza.js";import"./AnimatedItems-DQ5WKLo7.js";import"./useAnimationId-CBLxCaT-.js";import"./ActivePoints-D5lyHxm4.js";import"./Dot-BPNUB50S.js";import"./RegisterGraphicalItemId-_1lxrS6Z.js";import"./ErrorBarContext-Cjm5t7eM.js";import"./GraphicalItemClipPath-BFEL_l8x.js";import"./SetGraphicalItem-BSCJBMvO.js";import"./getRadiusAndStrokeWidthFromDot-DSA1Map0.js";import"./ActiveShapeUtils-DxWOnmm2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-bL23mcd1.js";import"./Rectangle-BuJcrudB.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbvha4hq.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const jt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
