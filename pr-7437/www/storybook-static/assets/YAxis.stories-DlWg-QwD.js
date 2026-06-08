import{R as t}from"./iframe-DhtJ7XT9.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-B01PX68r.js";import{R as h}from"./zIndexSlice-Cyl_38qZ.js";import{L as A}from"./LineChart-BZXc6vgn.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-o5LT8FK2.js";import{X as f}from"./XAxis-J3EL6z9G.js";import{L as E}from"./Legend-DoC9rE4X.js";import{L as n}from"./Line-E8j5PUVA.js";import{T as v}from"./Tooltip-CqpIeig5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DhiNYMWj.js";import"./CartesianAxis-D_A7dWIR.js";import"./Layer-nlXR0D_W.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./isWellBehavedNumber-BgBeU-y_.js";import"./Label-Dca6KvYU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./types-CLlZJjoC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./immer-C_Dt4QUB.js";import"./RechartsWrapper-DW50izWv.js";import"./index-C3B0n__O.js";import"./index-oGt5PMWE.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./Symbols-Cw6loTNS.js";import"./symbol-DQZ6Kdkf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-ZY1ZAY4p.js";import"./uniqBy-B0VZpdkS.js";import"./iteratee-DWrV7Ekf.js";import"./Curve-Dqu8WPkG.js";import"./step-CPd-nqqu.js";import"./AnimatedItems-D0rQfZQx.js";import"./useAnimationId-LwDoReja.js";import"./ActivePoints-Dr8Ax-C8.js";import"./Dot-BJDprnUj.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./getRadiusAndStrokeWidthFromDot-Bj473EA9.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./Cross-B692zx-L.js";import"./Rectangle-aI9UNPH3.js";import"./Sector-DKGhGDOA.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
