import{R as t}from"./iframe-BN7wAejV.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-LOiiKFb4.js";import{R as h}from"./zIndexSlice-BlaP7sYq.js";import{L as A}from"./LineChart-wKU7PXvt.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CAMLSwou.js";import{X as f}from"./XAxis-VA1Akzpv.js";import{L as E}from"./Legend-BtD9EuDm.js";import{L as i}from"./Line-BQoSY4oZ.js";import{T as v}from"./Tooltip-BFGrTpv-.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./Label-Bpsa1uOU.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CchWb7G-.js";import"./throttle-OOfctLZP.js";import"./axisSelectors-D4jZOjlQ.js";import"./diverging-BuYLSsjs.js";import"./CartesianAxis-DWm3W2j1.js";import"./Layer-gDVCcB56.js";import"./types-B8ZxybVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BzFY2Xxa.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./path-BBMZd4YL.js";import"./useElementOffset-zW88tSra.js";import"./uniqBy-DTQZ_SiU.js";import"./iteratee-DVkTdlvM.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-5PNvN8b1.js";import"./Curve-BFV098yv.js";import"./step-Bv7Zqu-1.js";import"./dataEntryStyles-CrycyMb5.js";import"./ActivePoints-EAvCRna9.js";import"./Dot-BsX3Z5g1.js";import"./activeStyles-CXY1xJkQ.js";import"./useAnimationId-ClFn0gGk.js";import"./ErrorBarContext-eg_EChks.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./Cross-Bd__ghdN.js";import"./Rectangle-MX5du-y3.js";import"./util-Dxo8gN5i.js";import"./Sector-h9CQ16Nn.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
