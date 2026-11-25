import{R as t}from"./iframe-DC5T2GCj.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-lqkl3rqG.js";import{R as h}from"./zIndexSlice-DOsx9V2z.js";import{L as A}from"./LineChart-DoeSuGLr.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-B28T3YID.js";import{X as f}from"./XAxis-CfQ_9fqW.js";import{L as E}from"./Legend-DBRTAH_k.js";import{L as i}from"./Line-BIGVkZPR.js";import{T as v}from"./Tooltip-BbYwG4_Y.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-gSxbvbxj.js";import"./get-CjriyByo.js";import"./Label-CWyu9wCB.js";import"./Text-agvS8xSD.js";import"./ZIndexLayer-CauVCDM2.js";import"./index-CxhZ_jtS.js";import"./index-CuovNQzi.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ftiVMEmb.js";import"./throttle-CU56JRf7.js";import"./axisSelectors-B_BJB7t0.js";import"./d3-scale-Ccs_pA9m.js";import"./CartesianAxis-Ldc9waKq.js";import"./Layer-CPK-7NIh.js";import"./types-Bpysv2Pn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B-kM46TD.js";import"./index-BzBudmwv.js";import"./index-Dg66RVOT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DYjSRCa_.js";import"./index-BFdMDMd2.js";import"./fillDefinitions-Bx7rUJI2.js";import"./CartesianChart-7SPsAfcZ.js";import"./chartDataContext-BhVo_C4q.js";import"./CategoricalChart-BjWBv8hx.js";import"./Symbols-B7vEIcCD.js";import"./symbol-CpvxzB9V.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DxkPxrTP.js";import"./uniqBy-Bq4o6iFV.js";import"./iteratee-CTGqF3Gd.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DZMpjyXl.js";import"./Curve-xzcOD2X_.js";import"./step-dKzEEUk_.js";import"./dataEntryStyles-D7lSN93x.js";import"./ActivePoints-BGltZVX5.js";import"./Dot-BnGpEvHu.js";import"./activeStyles-CBtGMRGE.js";import"./useAnimationId-Do3keAzT.js";import"./ErrorBarContext-CTMeRt95.js";import"./SetGraphicalItem-CgeoKwAC.js";import"./ActiveShapeUtils-09R3ENuC.js";import"./useEffectiveDataKey-CuDgyJop.js";import"./Cross-CcCgIRqV.js";import"./Rectangle-Hs6i8eyj.js";import"./util-Dxo8gN5i.js";import"./Sector-BbNcubvX.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
