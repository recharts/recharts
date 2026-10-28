import{R as t}from"./iframe-BFdjndOP.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-XZTx9iJE.js";import{R as h}from"./zIndexSlice-BMXGqLpb.js";import{L as A}from"./LineChart-15L2ffSy.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CywwPkVC.js";import{X as f}from"./XAxis-B63qJ9KH.js";import{L as E}from"./Legend-Dtr6sma1.js";import{L as i}from"./Line-CNuAHy19.js";import{T as v}from"./Tooltip-CiMTL7v1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-fhEADZhw.js";import"./Text-DOzJQY6l.js";import"./resolveDefaultProps-DJFCHaiN.js";import"./pageBackground-CKt6d5Bo.js";import"./ZIndexLayer-Di6AWmDg.js";import"./index-LVwuga6J.js";import"./index-BW02vIAv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CPTbaBCS.js";import"./throttle--h3a_z5m.js";import"./axisSelectors-BPye2JbP.js";import"./d3-scale-BbKZN6cQ.js";import"./CartesianAxis-Ch7lNcAW.js";import"./Layer-lJQGFAu3.js";import"./types-CW6mEad7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxVzVivR.js";import"./index-C8219kEG.js";import"./index-CdY5oKLt.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-H7T23RGg.js";import"./index-D4M5TsAW.js";import"./CartesianChart-CvXsANEo.js";import"./ZIndexPortal-BavuMFDc.js";import"./CategoricalChart-DpOkbqlx.js";import"./Symbols-oeWcvHGW.js";import"./symbol-DfxiLrYg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DAJ27Pif.js";import"./uniqBy-CG_-iAXC.js";import"./iteratee-CyrnsQ_T.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BhC7Tab4.js";import"./step-Ck_VDGQS.js";import"./LabelList-mpaOdaxP.js";import"./ActivePoints-DpmLDfVx.js";import"./Dot-BeCJ7sWp.js";import"./activeStyles-ClW3aIEp.js";import"./useAnimationId-BieQKvQP.js";import"./dataEntryStyles-DDh9bN_s.js";import"./ErrorBarContext-ppRLi4g5.js";import"./SetGraphicalItem-B6LFxdSb.js";import"./getRadiusAndStrokeWidthFromDot-BZY9OVSR.js";import"./ActiveShapeUtils-BL-a7-b7.js";import"./useEffectiveDataKey-CN9bTgz2.js";import"./Cross-D-Xwp2JL.js";import"./Rectangle-CI5ZTAqr.js";import"./util-Dxo8gN5i.js";import"./Sector-CPd9IaIT.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
