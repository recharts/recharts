import{R as t}from"./iframe-KfsXDyYe.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BIQLiJJ1.js";import{R as h}from"./zIndexSlice-DRQ5ZoPP.js";import{L as A}from"./LineChart-BeMSwvfb.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CelUoahD.js";import{X as f}from"./XAxis-BunU0kIP.js";import{L as E}from"./Legend-PPLZhzBK.js";import{L as n}from"./Line-BKA-K_z5.js";import{T as v}from"./Tooltip-RPVgM5JW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DJyQkACC.js";import"./Layer-DvnIPp0b.js";import"./resolveDefaultProps-CJQcFjaM.js";import"./Text-Cvia8ncb.js";import"./DOMUtils-r4qPFFQL.js";import"./isWellBehavedNumber-B9hqvBfv.js";import"./Label-dJq5mBhi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyFku1ry.js";import"./index-B8nw1mbK.js";import"./index-USmxlz8z.js";import"./types-Cp7Kv4cO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-VAstzL9_.js";import"./throttle-0X77pc-d.js";import"./RechartsThemeContext-s5HlCTRW.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B1g5OPk8.js";import"./index-BcSxHpM2.js";import"./index-D3u1xKBW.js";import"./axisSelectors-DqRFL16u.js";import"./d3-scale-CwZ0fpJQ.js";import"./CartesianChart-CedzGa4b.js";import"./chartDataContext-CrbAMOHN.js";import"./CategoricalChart-D28QOUrV.js";import"./Symbols-ClWMTeYK.js";import"./symbol-7YHxc7ew.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DrZ2pKQv.js";import"./uniqBy-BdchAijA.js";import"./iteratee-ByW1jmvF.js";import"./Curve-DHdhUSXl.js";import"./step-ww9sKUkN.js";import"./AnimatedItems-CsvMn_0v.js";import"./useAnimationId-BRufZRyg.js";import"./ActivePoints-DD9eCF-L.js";import"./Dot-BXiPHS-i.js";import"./RegisterGraphicalItemId-BVy8O7ka.js";import"./ErrorBarContext-BxIBjeUQ.js";import"./GraphicalItemClipPath-CLORxtCR.js";import"./SetGraphicalItem-BXsnmgyo.js";import"./getRadiusAndStrokeWidthFromDot-D62YsXR3.js";import"./ActiveShapeUtils-YGV0Qwxy.js";import"./Cross-bT4y3WNS.js";import"./Rectangle-CVNtesT6.js";import"./util-Dxo8gN5i.js";import"./Sector-BIWm56fJ.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
