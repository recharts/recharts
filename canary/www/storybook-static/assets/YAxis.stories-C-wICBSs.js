import{R as t}from"./iframe-C9RR7JmE.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-Bsmg8WZC.js";import{R as h}from"./zIndexSlice-9FgFGtgA.js";import{L as A}from"./LineChart-BveNY67n.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DaeQ5XHg.js";import{X as f}from"./XAxis-B6hKXJep.js";import{L as E}from"./Legend-BI4I1MVi.js";import{L as i}from"./Line-CsoZzsvT.js";import{T as v}from"./Tooltip-D7Jum6np.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BaLJb5QI.js";import"./Text-m7bywbsW.js";import"./resolveDefaultProps-BS9vZKxy.js";import"./ZIndexLayer-CRt4gP-q.js";import"./index-C9sROg_Y.js";import"./index-DobETtGM.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-fbcgHrSa.js";import"./throttle-CSzDQiVS.js";import"./axisSelectors-TgtedVmF.js";import"./d3-scale-CFw4t_7I.js";import"./CartesianAxis-DmiMG-c8.js";import"./Layer-CF0GFBX9.js";import"./types-DEp2f933.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DG_92KFR.js";import"./index-Bp7vSvmR.js";import"./index-C4LPcI60.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Bb98fXCM.js";import"./index-Dim785Oy.js";import"./fillDefinitions-BD293OF_.js";import"./CartesianChart-bv1G3A4F.js";import"./chartDataContext--IWIWppp.js";import"./CategoricalChart-CUD-tLds.js";import"./Symbols-DlwZKch0.js";import"./symbol-DWh1oIHF.js";import"./path-BBMZd4YL.js";import"./useElementOffset-C2cTU9_n.js";import"./uniqBy-DEPl67Hh.js";import"./iteratee-Rk_zuFbj.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-xzaADJd5.js";import"./Curve-Cp4aQ8cc.js";import"./step-Sm-51kJi.js";import"./dataEntryStyles-B4uCvMTS.js";import"./ActivePoints-BLeTrPjm.js";import"./Dot-B-qNm1bD.js";import"./activeStyles-psvB14ar.js";import"./useAnimationId-P10-1iqt.js";import"./ErrorBarContext-D5q20nPS.js";import"./SetGraphicalItem-D9jhbnIr.js";import"./ActiveShapeUtils-xp9QUtvW.js";import"./useEffectiveDataKey-rhz_g6ic.js";import"./Cross-uKm1mtpB.js";import"./Rectangle-DHyKIA3T.js";import"./util-Dxo8gN5i.js";import"./Sector-bBle_5Yt.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
