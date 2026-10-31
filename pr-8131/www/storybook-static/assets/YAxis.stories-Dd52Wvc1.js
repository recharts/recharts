import{R as t}from"./iframe-SkF1Z4RX.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BRrjXnEX.js";import{R as h}from"./zIndexSlice-Di849QVt.js";import{L as A}from"./LineChart-BC6pQ-ch.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CRP8zG1W.js";import{X as f}from"./XAxis-D03_TvJt.js";import{L as E}from"./Legend-Dp-pWpoA.js";import{L as i}from"./Line-BzhO0L4x.js";import{T as v}from"./Tooltip-DjzFbfmR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Cq-EymG9.js";import"./Text-BJaHuQQc.js";import"./resolveDefaultProps-Doom015c.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BotG4f4O.js";import"./throttle-DtLWJI8N.js";import"./axisSelectors-BsfIJIuR.js";import"./d3-scale-CkXd-iRe.js";import"./CartesianAxis-C8zLGICr.js";import"./Layer-CVy-0b4t.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D7eCqZJw.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BCa24z6l.js";import"./uniqBy-CFMexfao.js";import"./iteratee-CvWL5GPd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-6N2VVfLG.js";import"./step-CspGBwNT.js";import"./LabelList-iUgi9C9_.js";import"./ActivePoints-NIeWtT_V.js";import"./Dot-CRvYYT1z.js";import"./activeStyles-f736jV_-.js";import"./useAnimationId-_Q1GlxqN.js";import"./dataEntryStyles-BsghJbw2.js";import"./ErrorBarContext-DFT45or-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./getRadiusAndStrokeWidthFromDot-C10IayrY.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./useEffectiveDataKey-DnqAh09W.js";import"./Cross-CtnF-O9-.js";import"./Rectangle-DeUeWV1w.js";import"./util-Dxo8gN5i.js";import"./Sector-CMJKZPzq.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
