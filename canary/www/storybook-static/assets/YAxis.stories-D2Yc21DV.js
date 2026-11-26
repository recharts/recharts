import{R as t}from"./iframe-Dc30QV19.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-4iRuFsIi.js";import{R as h}from"./zIndexSlice-CpA2ZBZb.js";import{L as A}from"./LineChart-BVqoGQCO.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-ClmqShxo.js";import{X as f}from"./XAxis-BcaW8pnZ.js";import{L as E}from"./Legend-BagAQWPe.js";import{L as i}from"./Line-Dt1yHtoT.js";import{T as v}from"./Tooltip-lztVFhcX.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBlVWROq.js";import"./get-CjriyByo.js";import"./Label-pzKHNVcm.js";import"./Text-B2SIM4yQ.js";import"./ZIndexLayer-FU_VBeuI.js";import"./index-BBeDNEC1.js";import"./index-BhEbM2Je.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DgLFgBab.js";import"./throttle-WMkM63z_.js";import"./axisSelectors-BahrCffV.js";import"./diverging-BSORqksa.js";import"./CartesianAxis-CybNaUvq.js";import"./Layer-Ckk2aNrm.js";import"./types-Df_aU1u_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ComULkWM.js";import"./index-C7W3-csu.js";import"./index-LKWh_pde.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BRR6oB9d.js";import"./index-BZTDCkN5.js";import"./fillDefinitions-k1q4zEei.js";import"./CartesianChart-DJeDin18.js";import"./chartDataContext-P9nX9sOh.js";import"./CategoricalChart-f6DbLMMc.js";import"./Symbols-DoXC1ptL.js";import"./symbol-Bi8SUrQz.js";import"./path-BBMZd4YL.js";import"./useElementOffset-zZqt_kY_.js";import"./uniqBy-CFq97YsS.js";import"./iteratee-DUr8YIIJ.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-EGGU3KdZ.js";import"./Curve-C3EkNIPD.js";import"./step-DiRHFC6W.js";import"./dataEntryStyles-m1FbV_av.js";import"./ActivePoints-BEziX1h5.js";import"./Dot-DSqKqZYM.js";import"./activeStyles-CSTRknfO.js";import"./useAnimationId-dTayRcrW.js";import"./ErrorBarContext-CnjMgqWz.js";import"./SetGraphicalItem-Bi2jD4aD.js";import"./ActiveShapeUtils-DX-4aapg.js";import"./useEffectiveDataKey-CqfC1MRQ.js";import"./Cross-CfZJmYUc.js";import"./Rectangle-iIoXGW1W.js";import"./util-Dxo8gN5i.js";import"./Sector-D2Q0-3lo.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
