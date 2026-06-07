import{R as t}from"./iframe-D-W27Aye.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-1JyMBgNW.js";import{R as h}from"./zIndexSlice-DGQfYPGt.js";import{L as A}from"./LineChart-BSv24uM8.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CWrSllAz.js";import{X as f}from"./XAxis-gk42ZI-1.js";import{L as E}from"./Legend-_goTvh3S.js";import{L as n}from"./Line-DtGbdsRs.js";import{T as v}from"./Tooltip-BHjgq3bQ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BDQ-VaUY.js";import"./CartesianAxis-zyf7i4Uk.js";import"./Layer-BBvq20uw.js";import"./resolveDefaultProps-BroczFsN.js";import"./Text-Ch5M4wnL.js";import"./DOMUtils-ClafKG0n.js";import"./isWellBehavedNumber-Du_dam65.js";import"./Label-xP0TYJi-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-g9kGWnPX.js";import"./index-CWu2xMKi.js";import"./index-DLfEBe63.js";import"./types-DQNR05Kl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CN4MtC-5.js";import"./immer-CbhGTgvn.js";import"./RechartsWrapper-D3NlvT8L.js";import"./index-DE37ce3k.js";import"./index-Cnxyq0Mm.js";import"./axisSelectors-BvFrWOiO.js";import"./d3-scale-BQjrtTI1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BPw6EL6m.js";import"./chartDataContext-mE2SEo_G.js";import"./CategoricalChart-CsqvwlsS.js";import"./Symbols-C71s5h0O.js";import"./symbol-Dzj94laU.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B60rjUQO.js";import"./uniqBy-Wx1pUBZp.js";import"./iteratee-DbBg1eKT.js";import"./Curve-CDWlC7vY.js";import"./step-e-ZH1_z5.js";import"./AnimatedItems-DVypXaLh.js";import"./useAnimationId-Bs22yXlG.js";import"./ActivePoints-DIioQ5_v.js";import"./Dot-BRpnxUKp.js";import"./RegisterGraphicalItemId-EzN9TJ6u.js";import"./ErrorBarContext-CUSYqY7l.js";import"./GraphicalItemClipPath-C_UztI7f.js";import"./SetGraphicalItem-50FO49Qg.js";import"./getRadiusAndStrokeWidthFromDot-DqIa6S6d.js";import"./ActiveShapeUtils-D1Ceary0.js";import"./Cross-CoPyHlfO.js";import"./Rectangle-BaBIbp7f.js";import"./Sector-BdTeyyH9.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
