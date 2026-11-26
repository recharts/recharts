import{R as t}from"./iframe-DEVQjgtg.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-DNUJzVJY.js";import{R as h}from"./zIndexSlice-DfK8JSFq.js";import{L as A}from"./LineChart-DCF6Cc-p.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-qpQnI3BO.js";import{X as f}from"./XAxis-BW3rW0v-.js";import{L as E}from"./Legend-CuHxeQW8.js";import{L as i}from"./Line-DIzt92wi.js";import{T as v}from"./Tooltip-BsOHq51C.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CwoRT4vA.js";import"./get-CjriyByo.js";import"./Label-CuMp2cQz.js";import"./Text-B9Mi7Fii.js";import"./ZIndexLayer-FMAzY6FJ.js";import"./index-Cpcs4tmX.js";import"./index-C95LL0D7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DOgnXW1S.js";import"./throttle-icp-MZ_z.js";import"./axisSelectors-t3BvEa3q.js";import"./diverging-Co6YNHM_.js";import"./CartesianAxis-CPxmijCh.js";import"./Layer-Cr563h4j.js";import"./types-B0JGDzFy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-2D_h0Nlg.js";import"./index-fXrCovV3.js";import"./index-TVJDl2u2.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CfFuT0mb.js";import"./index-Cxp_oZwY.js";import"./fillDefinitions-D1YpghSP.js";import"./CartesianChart-pH5TOmhe.js";import"./chartDataContext-DImnS5HH.js";import"./CategoricalChart-BtHLUBe9.js";import"./Symbols-CuwdJXxk.js";import"./symbol-Dp50t1em.js";import"./path-BBMZd4YL.js";import"./useElementOffset-M02b1bSW.js";import"./uniqBy-RXDCBnIw.js";import"./iteratee-69chSGWI.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-g6-mSPtW.js";import"./Curve-a_jcRLJ0.js";import"./step-CpcYtbS4.js";import"./dataEntryStyles-DAcHMSZ1.js";import"./ActivePoints-Dpho8RxE.js";import"./Dot-p_BgihRi.js";import"./activeStyles-D4aY95Js.js";import"./useAnimationId-CMFy88eN.js";import"./ErrorBarContext-D5jMJqSB.js";import"./SetGraphicalItem-CsW3luzS.js";import"./ActiveShapeUtils-DqT038Y8.js";import"./useEffectiveDataKey-Cx2ptCsW.js";import"./Cross-C_0Oj-h0.js";import"./Rectangle-BvNq4YWD.js";import"./util-Dxo8gN5i.js";import"./Sector-B86o0IXH.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
