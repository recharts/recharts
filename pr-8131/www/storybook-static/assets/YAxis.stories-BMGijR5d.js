import{R as t}from"./iframe-jmhe2Qk6.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Bwmry524.js";import{R as h}from"./zIndexSlice-C_QNUIlg.js";import{L as A}from"./LineChart-Do0KnK_v.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BhkEKy1o.js";import{X as f}from"./XAxis-BmABHSTj.js";import{L as E}from"./Legend-CrPT364J.js";import{L as i}from"./Line-CQCNhVyP.js";import{T as v}from"./Tooltip-DzY1CkoC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db1KZEia.js";import"./Text-CmetEc_4.js";import"./resolveDefaultProps-CCkzVq5s.js";import"./DOMUtils-DKPcLfF3.js";import"./ZIndexLayer-BifNHCzV.js";import"./index-BadCiZkf.js";import"./index-DMlmY332.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D0zNKA08.js";import"./throttle-DZINazP_.js";import"./axisSelectors-CTtb55NE.js";import"./d3-scale-_kmjLSGJ.js";import"./CartesianAxis-CTjd-a6A.js";import"./Layer-B39D7NeJ.js";import"./types-Cpf9ifaq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DiLJD3iy.js";import"./index-1mWypBK7.js";import"./index-CSauTcUd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-C_ACRdKM.js";import"./index-BvBcGY0n.js";import"./fillDefinitions-2mEkHeYa.js";import"./CartesianChart-DW-0hcB8.js";import"./ZIndexPortal-Qo_oHvo4.js";import"./CategoricalChart-clWULlZK.js";import"./Symbols-BFwKw-3i.js";import"./symbol-sHGxO5Ns.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CX9phfOZ.js";import"./uniqBy-CTEjb69M.js";import"./iteratee-Cf4iavbi.js";import"./isArguments-yB-y1yaH.js";import"./Curve-B9PMeVXe.js";import"./step-C3gp0-r4.js";import"./LabelList-Dq0YgplD.js";import"./ActivePoints-BpkFEdDf.js";import"./Dot-Oe3PKIgB.js";import"./activeStyles-sH1GlI3K.js";import"./useAnimationId-Zg5v1vJq.js";import"./dataEntryStyles-CsSE3ak0.js";import"./ErrorBarContext-C2f99oDG.js";import"./SetGraphicalItem-DSPgNjiu.js";import"./getRadiusAndStrokeWidthFromDot-Ds0PjUPZ.js";import"./ActiveShapeUtils-cdr3C3k5.js";import"./useEffectiveDataKey-DmT6RBvF.js";import"./Cross-i4Zfd8L2.js";import"./Rectangle-CuWi-3o9.js";import"./util-Dxo8gN5i.js";import"./Sector-D33kKyng.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
