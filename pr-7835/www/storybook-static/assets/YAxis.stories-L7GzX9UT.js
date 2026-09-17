import{R as t}from"./iframe-BZ8dVzH9.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-sJ36Ww1v.js";import{R as h}from"./zIndexSlice-alAuneH8.js";import{L as A}from"./LineChart-CBhIn0rM.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DSYnDJJQ.js";import{X as f}from"./XAxis-CnHMXMmb.js";import{L as E}from"./Legend-CyrLGj5T.js";import{L as i}from"./Line-BHPleON2.js";import{T as v}from"./Tooltip-BvahTYj9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D8Xv73in.js";import"./Text-Sov8IyzM.js";import"./resolveDefaultProps-DGRkN7my.js";import"./DOMUtils-B5j94FrC.js";import"./isWellBehavedNumber-DuT8v1eR.js";import"./useId-Cmc9xIYY.js";import"./useBackwardsCompatibleTheme-mp8lDntE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-By4t7zGO.js";import"./index-BG6e4aCS.js";import"./index-05PttkMT.js";import"./RechartsWrapper-BUL_ZWsP.js";import"./axisSelectors-Bf9eJXot.js";import"./throttle-Gvesfo2A.js";import"./d3-scale-BqJh_GJr.js";import"./index-Bh_WxC72.js";import"./index-TQNe-Pfx.js";import"./renderedTicksSlice-CdbAedzg.js";import"./index-1GZEZdCR.js";import"./CartesianAxis-ZGFemc86.js";import"./Layer-DFGb6VX8.js";import"./types-JZ66y424.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CPDbtls9.js";import"./chartDataContext-Dooqfk1y.js";import"./CategoricalChart-wlCT99n2.js";import"./Symbols-C0TFMyrU.js";import"./symbol-qUdoioFN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C2gbVgRM.js";import"./uniqBy-DrWsEjAm.js";import"./iteratee-CHJKpI4A.js";import"./Curve-GkKc5FU6.js";import"./step-BzQ2FL9y.js";import"./AnimatedItems-DFtjNgrp.js";import"./useAnimationId-CAROHwad.js";import"./ActivePoints-BRuknYci.js";import"./Dot-d3AKepe-.js";import"./RegisterGraphicalItemId-DjZaW0U6.js";import"./ErrorBarContext-Bbbe3Bh6.js";import"./GraphicalItemClipPath-Bqlh9UVi.js";import"./SetGraphicalItem-C_OKi3Rd.js";import"./getRadiusAndStrokeWidthFromDot-BRivEq7U.js";import"./ActiveShapeUtils-DjhXDsDC.js";import"./useGraphicalItemIdentity-DrldTHyX.js";import"./Cross-BYdL9wbW.js";import"./Rectangle-wZEMhZV0.js";import"./util-Dxo8gN5i.js";import"./Sector-BPtTipaO.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
