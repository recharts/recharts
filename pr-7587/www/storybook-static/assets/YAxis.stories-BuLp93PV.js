import{R as t}from"./iframe-DPsVQxbE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BS8G-HFw.js";import{R as h}from"./zIndexSlice-1brzNbqc.js";import{L as A}from"./LineChart-BidktN2X.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Catfq7QH.js";import{X as f}from"./XAxis-CYt1-RxN.js";import{L as E}from"./Legend-CTD1e9MS.js";import{L as n}from"./Line-CWQOFj66.js";import{T as v}from"./Tooltip-BlDZy0rG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-D5qEkVje.js";import"./Layer-DGWGYgzk.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./Label-C2Rhcs8s.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MqiRX2rl.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./types-ColFKgNS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./throttle-Cj8wAsiz.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./axisSelectors-CEp7-2uA.js";import"./d3-scale-BNrinBxy.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./Symbols-kHTiKlEK.js";import"./symbol-CakplyVk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-d53krvrq.js";import"./uniqBy-DsIVeImw.js";import"./iteratee-CvNQaPV0.js";import"./Curve-DtEeL5Gu.js";import"./step-BU8nTjqD.js";import"./AnimatedItems-BlseN1Dx.js";import"./useAnimationId-CtVxLpdf.js";import"./ActivePoints-qcduKxyw.js";import"./Dot-COXcIf5D.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getRadiusAndStrokeWidthFromDot-f0ZiEHIa.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./Cross-j0ZUM9sw.js";import"./Rectangle-BYpMekmC.js";import"./util-Dxo8gN5i.js";import"./Sector-CKL9xBrw.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
