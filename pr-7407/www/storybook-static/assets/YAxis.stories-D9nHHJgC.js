import{R as t}from"./iframe-cxp8IH44.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-cx-UkRCp.js";import{R as h}from"./zIndexSlice-DVvPLO9J.js";import{L as A}from"./LineChart-C3nI9I5A.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CDO8L1GF.js";import{X as f}from"./XAxis-BkiXq_ih.js";import{L as E}from"./Legend-oZ1KxmzA.js";import{L as n}from"./Line-Dugp2-IC.js";import{T as v}from"./Tooltip-C_xzS1J3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-nRRBkHtC.js";import"./CartesianAxis-HJMOOyg_.js";import"./Layer-B0Ha3WJZ.js";import"./resolveDefaultProps-BXDigy9W.js";import"./Text-Bq45-f5m.js";import"./DOMUtils-BnT4arHk.js";import"./isWellBehavedNumber-B-r9_3tz.js";import"./Label-C4cvj6qY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jeREbB3U.js";import"./index-CJSUwDUV.js";import"./index-B9dWKkkc.js";import"./types-CPiShJxU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJt7M2Lj.js";import"./immer-BpTgB28d.js";import"./RechartsWrapper-9oJQLgI7.js";import"./index-CMrkNKT4.js";import"./index-BUvfJbFI.js";import"./axisSelectors-zbfaG1VW.js";import"./d3-scale-DFFI4GOw.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CmvmLWgk.js";import"./chartDataContext-BRXzicv6.js";import"./CategoricalChart-xGtZpTrE.js";import"./Symbols-DL674ctd.js";import"./symbol-CHf6y9zR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BnhYpe-p.js";import"./uniqBy-CsWIvFuw.js";import"./iteratee-rf_HbDXJ.js";import"./Curve-BrvgjqsR.js";import"./step-D24hPJDM.js";import"./AnimatedItems-C411RvpV.js";import"./useAnimationId-B_RJXvak.js";import"./ActivePoints-B4uvin-c.js";import"./Dot-DdYUl2fA.js";import"./RegisterGraphicalItemId-BwO4qHQJ.js";import"./ErrorBarContext-DMac8CzA.js";import"./GraphicalItemClipPath-B7_MorTP.js";import"./SetGraphicalItem-DEAw5QhZ.js";import"./getRadiusAndStrokeWidthFromDot-DjjQR4pM.js";import"./ActiveShapeUtils-DV6TMhk4.js";import"./Cross-GDshVim9.js";import"./Rectangle-ktcnKzBw.js";import"./Sector-BnL8gU7h.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
