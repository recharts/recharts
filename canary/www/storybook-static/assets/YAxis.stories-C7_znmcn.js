import{R as t}from"./iframe-tfZrcrMF.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-BOlMvWid.js";import{R as h}from"./zIndexSlice-CC8kCstT.js";import{L as A}from"./LineChart-BD8OpKKd.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DGthdUPw.js";import{X as f}from"./XAxis-DhOgSkqh.js";import{L as E}from"./Legend-B9D1yZE0.js";import{L as i}from"./Line-D0Cby_f_.js";import{T as v}from"./Tooltip-DiMmQvx9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CrLdB5k3.js";import"./Text-DXjy-RzD.js";import"./resolveDefaultProps-BpCpS2kK.js";import"./ZIndexLayer-DnL-EDkP.js";import"./index-CCpPbL-G.js";import"./index-CQW0Ruw4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D2vFLO2n.js";import"./throttle-DycvlznN.js";import"./axisSelectors-BkiuLlPZ.js";import"./d3-scale-uLY3we2s.js";import"./CartesianAxis-DHW_9iiH.js";import"./Layer-ru88AdSr.js";import"./types-CWW0D7cm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DCheLSnn.js";import"./index-0VCZupX4.js";import"./index-C00ri7pa.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Mi5m4ATr.js";import"./index-DC_tjhxs.js";import"./fillDefinitions-CQPwZfwM.js";import"./CartesianChart-Cxx6k3Ff.js";import"./chartDataContext-pD1W3H_C.js";import"./CategoricalChart-DGtxkSeD.js";import"./Symbols-yui_aiRC.js";import"./symbol-ru9lBt2i.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BOZs20Ry.js";import"./uniqBy-q1lloGjW.js";import"./iteratee-CDaF10ns.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-Ch3PhdMy.js";import"./Curve-C3wk6TDN.js";import"./step-8uwKBSGh.js";import"./dataEntryStyles-CpzODNOV.js";import"./ActivePoints-BER6C4Du.js";import"./Dot-BulvKgA_.js";import"./activeStyles-CW3oynl8.js";import"./useAnimationId-CiRiV3_R.js";import"./ErrorBarContext-5NXkIyss.js";import"./SetGraphicalItem-BPWS4To0.js";import"./ActiveShapeUtils-Mflib2w7.js";import"./useEffectiveDataKey-Bate5zYb.js";import"./Cross-BFqcDJ2_.js";import"./Rectangle-C_wD8Q_z.js";import"./util-Dxo8gN5i.js";import"./Sector-DobEZmfG.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
