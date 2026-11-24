import{R as t}from"./iframe-B6IWu9YI.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-MTRfWgoi.js";import{R as h}from"./zIndexSlice-CiiKnRRR.js";import{L as A}from"./LineChart-CpcOOOAa.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Fw16Qisq.js";import{X as f}from"./XAxis-Dlj0iAIW.js";import{L as E}from"./Legend-DNKmLnLa.js";import{L as i}from"./Line-BZf0NlOt.js";import{T as v}from"./Tooltip-KfEfS0Ja.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DTgwgIlk.js";import"./Text-BO6nkoy7.js";import"./resolveDefaultProps-D5gBkMry.js";import"./ZIndexLayer-6PrGVGr8.js";import"./index-BTlMcQeh.js";import"./index-BGlqIfcK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-sP0_8T_l.js";import"./throttle-BURJLM__.js";import"./axisSelectors-DNbDiKxI.js";import"./d3-scale-BnDY_Nfy.js";import"./CartesianAxis-Q1_hDZPE.js";import"./Layer-DH6wa-As.js";import"./types-CluQiZar.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C5_vrS83.js";import"./index-D9tAsY9i.js";import"./index-gbAMyFwS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ut8KRm06.js";import"./index-DqMscQEy.js";import"./fillDefinitions-CycD80fW.js";import"./CartesianChart-CXZ1AepY.js";import"./chartDataContext-CXAoEtMH.js";import"./CategoricalChart-dyk1Sqmj.js";import"./Symbols-BCHMzS19.js";import"./symbol-C2WLAmAq.js";import"./path-BBMZd4YL.js";import"./useElementOffset-toJRPtH1.js";import"./uniqBy-3fTL_ANn.js";import"./iteratee-DoKrSNie.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DmFDmFl9.js";import"./Curve-BwM0kF7u.js";import"./step-CBaC3nOj.js";import"./dataEntryStyles-B1GQ2fCv.js";import"./ActivePoints-CU2VyTBL.js";import"./Dot-Cj5qq7RO.js";import"./activeStyles-BITXl8mO.js";import"./useAnimationId-CU9aT4qK.js";import"./ErrorBarContext-DvofuvtM.js";import"./SetGraphicalItem-BnKu0Jsk.js";import"./ActiveShapeUtils-Bk4aWoxM.js";import"./useEffectiveDataKey-B8xnYYq1.js";import"./Cross-DpH30DLa.js";import"./Rectangle-DojOoXFW.js";import"./util-Dxo8gN5i.js";import"./Sector-RdamKlsZ.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
