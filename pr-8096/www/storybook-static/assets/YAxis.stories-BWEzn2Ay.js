import{R as t}from"./iframe-D0WJBe8B.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Hb99A8N1.js";import{R as h}from"./zIndexSlice-BC6IeYNi.js";import{L as A}from"./LineChart-BvtqWXb5.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-lchOI6TO.js";import{X as f}from"./XAxis-BEoxl3pM.js";import{L as E}from"./Legend-DF1CoFP1.js";import{L as i}from"./Line-DbeSK1IG.js";import{T as v}from"./Tooltip-BrlnzokM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4KodQcW.js";import"./Text-CgQ4MHqj.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./throttle-TSOlYDju.js";import"./axisSelectors-D5taf4lI.js";import"./d3-scale-50ivSU0v.js";import"./CartesianAxis-C6mWkihq.js";import"./Layer-aO3gvgqI.js";import"./types-CgDj6Pcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./isArguments-yB-y1yaH.js";import"./Curve-D1Sg03qQ.js";import"./step-C85hYdLD.js";import"./LabelList-fY2HN2fJ.js";import"./ActivePoints-B12s-f_1.js";import"./Dot-B5ivztlh.js";import"./activeStyles-DLjK0T5T.js";import"./useAnimationId-C0s3vBtu.js";import"./dataEntryStyles-BPWJkcwq.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./getRadiusAndStrokeWidthFromDot-D5udBmOW.js";import"./ActiveShapeUtils-Bceipj14.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./Cross-boJjnotO.js";import"./Rectangle-7LooK13L.js";import"./util-Dxo8gN5i.js";import"./Sector-BxtngjTW.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
