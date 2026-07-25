import{R as t}from"./iframe-DtpJQkSw.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-7KC79Jwd.js";import{R as h}from"./zIndexSlice-Dy2ZfcaY.js";import{L as A}from"./LineChart-DP2ljD1u.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BRuRV5-q.js";import{X as f}from"./XAxis-BDLA9mvH.js";import{L as E}from"./Legend-Xcv6dTtn.js";import{L as n}from"./Line-DAT6---J.js";import{T as v}from"./Tooltip-zaUriAhU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-xTL6XmTN.js";import"./Layer-A5fdUiAt.js";import"./resolveDefaultProps-Cjc4ovdW.js";import"./Text-CTFoNHWc.js";import"./DOMUtils-Cb4JkhR_.js";import"./isWellBehavedNumber-BvF_giMt.js";import"./Label-C9iRyFHw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnsLSc-b.js";import"./index-CVik1Y94.js";import"./index-qBeIIgbT.js";import"./types-D6abfmrW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4FsNrs6.js";import"./throttle-CYLsUs0w.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-GuBZSFZ_.js";import"./index-Vvo-Q6um.js";import"./index-CFRYfm15.js";import"./axisSelectors-BtA0yFqg.js";import"./d3-scale-BbQAu0RB.js";import"./CartesianChart-DwY-VUV4.js";import"./chartDataContext-CkSWHG6R.js";import"./CategoricalChart-B6Np4ceD.js";import"./Symbols-DDPwPNmK.js";import"./symbol-avOxhd6C.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C4-NwrTh.js";import"./uniqBy-BnEmKZKr.js";import"./iteratee-ySlvR2sc.js";import"./Curve-D1mPklqy.js";import"./step-WcxcGmzd.js";import"./AnimatedItems-EBWp9peZ.js";import"./useAnimationId-B_99W7UQ.js";import"./ActivePoints-G-h1IpPy.js";import"./Dot-DSt-WMWp.js";import"./RegisterGraphicalItemId-Bw3Bvi6g.js";import"./ErrorBarContext-CjSCr-ku.js";import"./GraphicalItemClipPath-DeNzzcHV.js";import"./SetGraphicalItem-x1medb7e.js";import"./getRadiusAndStrokeWidthFromDot-N4R43LAE.js";import"./ActiveShapeUtils-DirzpQmC.js";import"./Cross-B0Cxc6Kn.js";import"./Rectangle-C0kyo6e1.js";import"./util-Dxo8gN5i.js";import"./Sector-SxN6jnjg.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
