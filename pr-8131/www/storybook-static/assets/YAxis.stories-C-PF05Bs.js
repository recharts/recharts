import{R as t}from"./iframe-B0md2XL3.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Dak2FPR9.js";import{R as h}from"./zIndexSlice-DA0iP-6p.js";import{L as A}from"./LineChart-BNnNIx5L.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CETnhiYb.js";import{X as f}from"./XAxis-DLCMfyHC.js";import{L as E}from"./Legend-DtVtA_Ey.js";import{L as i}from"./Line-Dwcg0Xhw.js";import{T as v}from"./Tooltip-C1QwgOny.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B4OtwMWB.js";import"./Text-iaFwzHQc.js";import"./resolveDefaultProps-DYFy43g1.js";import"./DOMUtils-BnN7LMKo.js";import"./ZIndexLayer-n48hyeCj.js";import"./index-B6b7n9vZ.js";import"./index-CoDrYRaw.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-EKUmLX1r.js";import"./throttle-Bg4_NSFj.js";import"./axisSelectors-CGXaSNKn.js";import"./d3-scale-uqFZU7-w.js";import"./CartesianAxis-ib9y6Jw_.js";import"./Layer-CEcbE5Mj.js";import"./types-k-hf9hch.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CmqrGULL.js";import"./index-B1ySaIl-.js";import"./index-GRpTxPRT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CWXf9YtC.js";import"./index-CPY9oK3E.js";import"./fillDefinitions-3Vzegl5l.js";import"./CartesianChart-8QvfRZzW.js";import"./ZIndexPortal-CrQK9kpR.js";import"./CategoricalChart-niTwkvl-.js";import"./Symbols-D_2SQKur.js";import"./symbol-CSqYEM7h.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFimtnCZ.js";import"./uniqBy-BlUnuxiL.js";import"./iteratee-C8WNKkID.js";import"./isArguments-yB-y1yaH.js";import"./Curve-s1Q-eWha.js";import"./step-B9w_ahFS.js";import"./LabelList-CC8uMe5u.js";import"./ActivePoints-CQgXp3HY.js";import"./Dot-BK9EjXwp.js";import"./activeStyles-CvpZ-3cp.js";import"./useAnimationId-OzV8hXkE.js";import"./dataEntryStyles-QaPc2U0F.js";import"./ErrorBarContext-CrVPyI6s.js";import"./SetGraphicalItem-fxalM_Sw.js";import"./getRadiusAndStrokeWidthFromDot-Dy9C3gHL.js";import"./ActiveShapeUtils-DacyCGB1.js";import"./useEffectiveDataKey-B6E0gPoB.js";import"./Cross-DSFwnFYd.js";import"./Rectangle-DtE2sp0d.js";import"./util-Dxo8gN5i.js";import"./Sector-DpuCM0BB.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
