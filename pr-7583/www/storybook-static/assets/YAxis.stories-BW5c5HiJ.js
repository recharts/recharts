import{R as t}from"./iframe-5yXyXnaZ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DrQXbr6a.js";import{R as h}from"./zIndexSlice-BDAt33KO.js";import{L as A}from"./LineChart-D5jESHjG.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DoTx4VAZ.js";import{X as f}from"./XAxis-DBNQ58f8.js";import{L as E}from"./Legend-ehOQxrBj.js";import{L as n}from"./Line-DVLh0I7m.js";import{T as v}from"./Tooltip-DJ05kPZA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-B2yef_ws.js";import"./Layer-DvsJVPiG.js";import"./resolveDefaultProps-DO3cHs1F.js";import"./Text-CgBcsLfs.js";import"./DOMUtils-BV08T-c-.js";import"./isWellBehavedNumber-CjXf4Ny0.js";import"./Label-BYYKCmSa.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DtzoUjMA.js";import"./index-Bglp-BB_.js";import"./index-B8ryNKY3.js";import"./types-D9gPTTpR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1OGHM2B.js";import"./throttle-Cv9w3d5_.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DA6sibZ3.js";import"./index-BHMzx10I.js";import"./index-sztAkQPC.js";import"./axisSelectors-BXq32W01.js";import"./d3-scale-qreNZqM_.js";import"./CartesianChart-9hlK9pZx.js";import"./chartDataContext-CuGicOh1.js";import"./CategoricalChart-DQJ8zgbM.js";import"./Symbols-CHIguC1u.js";import"./symbol-DQ9BiUzn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CD3Qxymn.js";import"./uniqBy-BUqkqiyG.js";import"./iteratee-_t3hDaip.js";import"./Curve-BJjaxUht.js";import"./step-7JpJFPkO.js";import"./AnimatedItems-B7Ugi4uF.js";import"./useAnimationId-C0yd1tvr.js";import"./ActivePoints-CqHCG0xk.js";import"./Dot-Dqwh_5PD.js";import"./RegisterGraphicalItemId-BWyrz_yh.js";import"./ErrorBarContext-3caAFu0Q.js";import"./GraphicalItemClipPath-C3T_bjgu.js";import"./SetGraphicalItem-ChFugbQc.js";import"./getRadiusAndStrokeWidthFromDot-CDO922ey.js";import"./ActiveShapeUtils-C8Wl3VBj.js";import"./Cross-Cx3nyd1y.js";import"./Rectangle-D75afbJD.js";import"./util-Dxo8gN5i.js";import"./Sector-PYTlOKi8.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
