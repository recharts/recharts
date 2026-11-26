import{R as t}from"./iframe-cV3SAodv.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-DYud1g9H.js";import{R as h}from"./zIndexSlice-Cjgp2TXV.js";import{L as A}from"./LineChart-DvXOfUb3.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-C8EjnebA.js";import{X as f}from"./XAxis-BuIJ_QWG.js";import{L as E}from"./Legend-IZ97z-G8.js";import{L as i}from"./Line-DOqIdMIn.js";import{T as v}from"./Tooltip-KrO3BR4a.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C4GEEUb1.js";import"./get-CjriyByo.js";import"./Label-CQK_czyp.js";import"./Text-DIOCtNrm.js";import"./ZIndexLayer-C_9SlmyF.js";import"./index-DNgMIzR1.js";import"./index-CaZV8WiE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors--xQAorkv.js";import"./throttle-CMi-pHht.js";import"./axisSelectors-C9H2pU_G.js";import"./diverging-y_crYDj7.js";import"./CartesianAxis-BCSNf2Xf.js";import"./Layer-zGQNaeEg.js";import"./types-CxXTSyDH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BtGm49YF.js";import"./index-yYdNmmg6.js";import"./index-DTNI7e-E.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CyX-rkWs.js";import"./index-Dt1fVd2j.js";import"./fillDefinitions-DbiqT5_A.js";import"./CartesianChart-BWo1r9td.js";import"./chartDataContext-Da1Grc9c.js";import"./CategoricalChart-CWv6udzl.js";import"./Symbols-Sv15_QUP.js";import"./symbol-rfkqyrPT.js";import"./path-BBMZd4YL.js";import"./useElementOffset-CFDuhw8U.js";import"./uniqBy-5kbtoCpG.js";import"./iteratee-DH-5OUvh.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-C4ogZ01-.js";import"./Curve-CeApDEIq.js";import"./step-miPDfXCq.js";import"./dataEntryStyles-Cky1CNqk.js";import"./ActivePoints-C5tqNSRW.js";import"./Dot-DlXY1cPq.js";import"./activeStyles-BPuHxpJZ.js";import"./useAnimationId-DD8tFxYJ.js";import"./ErrorBarContext-CopN05Qu.js";import"./SetGraphicalItem-B6xdOYOb.js";import"./ActiveShapeUtils-kkzOPQE8.js";import"./useEffectiveDataKey-DBeKKq_r.js";import"./Cross-DKNOH1xZ.js";import"./Rectangle-BBeAx3Mp.js";import"./util-Dxo8gN5i.js";import"./Sector-BhPFPfN5.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
