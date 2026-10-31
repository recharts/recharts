import{R as t}from"./iframe-COxqCazb.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-ZsGxmqjy.js";import{R as h}from"./zIndexSlice-B4X5qRzI.js";import{L as A}from"./LineChart-Dm89nWBV.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DGVWDWQH.js";import{X as f}from"./XAxis-DQrBzVHK.js";import{L as E}from"./Legend-pYlKdEL-.js";import{L as i}from"./Line-n5MGWX7b.js";import{T as v}from"./Tooltip-D5HdmfjY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BiNM6_QG.js";import"./Text-C4rvSXOn.js";import"./resolveDefaultProps-yMt3tC3j.js";import"./DOMUtils-BLBk64WL.js";import"./pageBackground-zdIyeBG0.js";import"./ZIndexLayer-cSzqGwkX.js";import"./index-CmlNloJu.js";import"./index-BFPgWdWH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-a1oAG-SZ.js";import"./throttle-D4LJPOuI.js";import"./axisSelectors-uSjAZrah.js";import"./d3-scale-D8xTnIof.js";import"./CartesianAxis-CjYDk6nf.js";import"./Layer-D2zViLNQ.js";import"./types-3E7AO6tV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CPgi-eJ3.js";import"./index-BQ5RDrN3.js";import"./index-BymcG2zO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-MgEDcD8h.js";import"./index-BE8xWht0.js";import"./CartesianChart-lA_wA_-C.js";import"./ZIndexPortal-B9PAyW6q.js";import"./CategoricalChart-C0aYCun5.js";import"./fillDefinitions-HVISG19w.js";import"./Symbols-pJe31Clp.js";import"./symbol-DFh_91jg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DaKnhcyx.js";import"./uniqBy-CV6Bdmxk.js";import"./iteratee-B9rlrEY4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-C7Cjm8FO.js";import"./step-CbCZbxFO.js";import"./LabelList-DLxGydTH.js";import"./ActivePoints-DN4_EmYC.js";import"./Dot-DR7axIwT.js";import"./activeStyles-Dz5dwfdA.js";import"./useAnimationId-CI1eTN6X.js";import"./dataEntryStyles-DJkgxm7x.js";import"./ErrorBarContext-CSA0hXTc.js";import"./SetGraphicalItem-DfnH2C1-.js";import"./getRadiusAndStrokeWidthFromDot-gHegAbBA.js";import"./ActiveShapeUtils-DhrWvn7z.js";import"./useEffectiveDataKey-DbCVmzAC.js";import"./Cross-Df7b1Ed4.js";import"./Rectangle-DcH1741B.js";import"./util-Dxo8gN5i.js";import"./Sector-ChBjKAX8.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
