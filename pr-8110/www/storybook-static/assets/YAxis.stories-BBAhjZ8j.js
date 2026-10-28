import{R as t}from"./iframe-CUml5YCN.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CGT5tGsT.js";import{R as h}from"./zIndexSlice-Duug8EOo.js";import{L as A}from"./LineChart-ViH0G8Dy.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BG3A01XW.js";import{X as f}from"./XAxis-DS-AJg-5.js";import{L as E}from"./Legend-Dy_w-u1K.js";import{L as i}from"./Line-HXIUzKg7.js";import{T as v}from"./Tooltip-DnZ-jfwM.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Co-nrknN.js";import"./Text-C-J7rFVH.js";import"./resolveDefaultProps-bEvLqOBJ.js";import"./DOMUtils-BO2yqkFt.js";import"./ZIndexLayer-BY73hU8m.js";import"./index-AklA9_0y.js";import"./index-DLBpPTx4.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DMpK1CYb.js";import"./throttle-00pBoixS.js";import"./axisSelectors-B2HI9EL2.js";import"./d3-scale-CEanJ2qJ.js";import"./CartesianAxis-BVj8a-va.js";import"./Layer-BUAUs1E0.js";import"./types-BdRO-t6j.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxDeHuoS.js";import"./index-BI0kgcsn.js";import"./index-Bs8UXAbZ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-jAZSY4Pq.js";import"./index-a6VaArhG.js";import"./CartesianChart-BkZTrO_H.js";import"./ZIndexPortal-C_VlO0o9.js";import"./CategoricalChart-BvHPlluA.js";import"./Symbols-IX5_Qg4V.js";import"./symbol-Ft1metgp.js";import"./path-DyVhHtw_.js";import"./FillDefinition-DVWLhRTd.js";import"./dataEntryStyles-DqljzTne.js";import"./useElementOffset-CYLtSqO9.js";import"./uniqBy-wScc6s2S.js";import"./iteratee-BSvw-Q2D.js";import"./isArguments-yB-y1yaH.js";import"./Curve-MMF3Mq57.js";import"./step-CbD7Fw7p.js";import"./LabelList-1BV2-5OM.js";import"./ActivePoints-DmxPU0dU.js";import"./Dot-Bb0NnVdB.js";import"./activeStyles-DSIZcOzy.js";import"./useAnimationId-CTU-teyX.js";import"./ErrorBarContext-Bo1VUNfm.js";import"./SetGraphicalItem-IwBxHE7j.js";import"./getRadiusAndStrokeWidthFromDot-B5I8H9q6.js";import"./ActiveShapeUtils-DWo-vRVn.js";import"./useEffectiveDataKey-11clGpT5.js";import"./Cross-boGLgjf_.js";import"./Rectangle-Ayj5uTYD.js";import"./util-Dxo8gN5i.js";import"./Sector-B3hFZlEZ.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
