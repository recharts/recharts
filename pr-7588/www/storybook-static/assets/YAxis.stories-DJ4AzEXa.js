import{R as t}from"./iframe-Dk6QtUOm.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-5MZ6qw-w.js";import{R as h}from"./zIndexSlice-DIYdct83.js";import{L as A}from"./LineChart-CJd7JyOz.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DTFcpM_v.js";import{X as f}from"./XAxis-DpzwYtrF.js";import{L as E}from"./Legend-Bj5CS1_f.js";import{L as n}from"./Line-CeOL_j5O.js";import{T as v}from"./Tooltip-CAO9Dq7b.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BFE0ezxc.js";import"./Layer-CriLvMlw.js";import"./resolveDefaultProps-iHCSp8Qu.js";import"./Text-B_RemiZL.js";import"./DOMUtils-C0erXEEq.js";import"./isWellBehavedNumber-D_eFFsbn.js";import"./Label-Cv9o4t_y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CQwtlObF.js";import"./index-DoZuvuq0.js";import"./index-U7zmREmi.js";import"./types-Df8kiDN0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1Do5QcM1.js";import"./throttle-D98VVn5G.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DtQEiJyx.js";import"./index-COkLsuib.js";import"./index-DoCUyrNc.js";import"./axisSelectors-D6uzbqkR.js";import"./d3-scale-B2mup6zM.js";import"./CartesianChart-BPW_q9xK.js";import"./chartDataContext-BWXJwi3S.js";import"./CategoricalChart-DDK0QtzY.js";import"./Symbols-_cvEA0x0.js";import"./symbol-DQm7NK9B.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDl8IrDv.js";import"./uniqBy-DUa1oDxC.js";import"./iteratee-qwNKeEU2.js";import"./Curve-DD_9uNW0.js";import"./step-74BZyyTl.js";import"./AnimatedItems-CpjG7pC9.js";import"./useAnimationId-BV1Lvx7_.js";import"./ActivePoints-D5mYDCHZ.js";import"./Dot-9qHn4B5a.js";import"./RegisterGraphicalItemId-DRrwgsJN.js";import"./ErrorBarContext-60D9zT8I.js";import"./GraphicalItemClipPath-DJOu5Ece.js";import"./SetGraphicalItem-D9C9m9l_.js";import"./getRadiusAndStrokeWidthFromDot-eEz4aUTs.js";import"./ActiveShapeUtils-CJey3tMT.js";import"./Cross-AtwPrNGl.js";import"./Rectangle-COIgOmTW.js";import"./util-Dxo8gN5i.js";import"./Sector-CB9kSF6e.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
