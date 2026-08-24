import{R as t}from"./iframe-vymQxHWj.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-C5MuLC6_.js";import{R as h}from"./zIndexSlice-CKW_xCBG.js";import{L as A}from"./LineChart-CEQL60OL.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CW3jgbLP.js";import{X as f}from"./XAxis-Bzr2Ibny.js";import{L as E}from"./Legend-CZiWPHM0.js";import{L as n}from"./Line-Cne7Fv2j.js";import{T as v}from"./Tooltip-DEDk_-lP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMMqvv98.js";import"./Text-BroBeAan.js";import"./resolveDefaultProps-D1QpgZPc.js";import"./DOMUtils-BKNZKxmm.js";import"./isWellBehavedNumber-CX2OxNKy.js";import"./useId-DUfTRFy5.js";import"./useBackwardsCompatibleTheme-DlCKuGJZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChwVVG6J.js";import"./index-DA8rq6pv.js";import"./index-BGTNdYjX.js";import"./RechartsWrapper-98W6zG7g.js";import"./index-Cl4zISxW.js";import"./index-C2Yz5dWj.js";import"./throttle-BK01krp9.js";import"./axisSelectors-qkXPFIdN.js";import"./d3-scale-shLsO6db.js";import"./renderedTicksSlice-_g-coWrV.js";import"./CartesianAxis-CmNHn6lS.js";import"./Layer-DHaSl27L.js";import"./types-ZBx8sWKw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1QWtDZ4.js";import"./chartDataContext-CLrXA2d3.js";import"./CategoricalChart-htsvTMax.js";import"./Symbols-DK4z7fEx.js";import"./symbol-taMf7PYK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CqDgkesb.js";import"./uniqBy-Cz9SOFAs.js";import"./iteratee-Dg79fSga.js";import"./Curve-BcJWtVmj.js";import"./step-BtdsF4BX.js";import"./AnimatedItems-BAUw0A61.js";import"./useAnimationId-DSN2oeL8.js";import"./ActivePoints-C-mtjouo.js";import"./Dot-QKBcefll.js";import"./RegisterGraphicalItemId-DsxpdmKR.js";import"./ErrorBarContext-D9mVK9PP.js";import"./GraphicalItemClipPath-LHrRH_dp.js";import"./SetGraphicalItem-BeZQQame.js";import"./getRadiusAndStrokeWidthFromDot-ClysWG4b.js";import"./ActiveShapeUtils-Uk3GF-jB.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DXCXTPs9.js";import"./Rectangle-5xjAPvdj.js";import"./util-Dxo8gN5i.js";import"./Sector-B_NnGxXE.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
