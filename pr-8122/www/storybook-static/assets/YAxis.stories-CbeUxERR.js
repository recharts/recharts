import{R as t}from"./iframe-BmdtsHI1.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D_YhB_w8.js";import{R as h}from"./zIndexSlice-CLt9waUo.js";import{L as A}from"./LineChart-Dt39tboA.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-kiNNWl2U.js";import{X as f}from"./XAxis-SiUufnTD.js";import{L as E}from"./Legend-ZellOFxE.js";import{L as i}from"./Line-BFAqQ4J_.js";import{T as v}from"./Tooltip-DQ6Ncotp.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-efFOyHP_.js";import"./Text-DgdwosBP.js";import"./resolveDefaultProps-D3fedd0f.js";import"./DOMUtils-BrHrYr07.js";import"./ZIndexLayer-BPViM-b3.js";import"./index-D1G26n6J.js";import"./index-BU9XUo1g.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DqiScafe.js";import"./throttle-DIqkA_6B.js";import"./axisSelectors-CWAMaE0j.js";import"./d3-scale-C4n2-g_Q.js";import"./CartesianAxis-6ZKwTVD2.js";import"./Layer-uwW889ah.js";import"./types-TcTpNVA6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cbbwd8m4.js";import"./index-dsp9FHu2.js";import"./index-B-lO_Vmy.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CW25TSBD.js";import"./index-JJYVBYhC.js";import"./CartesianChart-Q5wSSY7L.js";import"./ZIndexPortal-BR-Xx9Bs.js";import"./CategoricalChart-BetF0ARA.js";import"./Symbols-DTd7inGs.js";import"./symbol-OLqGol2l.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-C7_rhOBH.js";import"./dataEntryStyles-C-VVWe1s.js";import"./useElementOffset-Dh1asSMz.js";import"./uniqBy-BUDfukUQ.js";import"./iteratee-B0xN_w6V.js";import"./isArguments-yB-y1yaH.js";import"./Curve-St2o1Zg2.js";import"./step-C3G0yHTA.js";import"./LabelList-BBJeoy6S.js";import"./ActivePoints-DOV6z7vt.js";import"./Dot-D4FfFK1V.js";import"./activeStyles-0PlrA4t0.js";import"./useAnimationId-C4l6OBef.js";import"./ErrorBarContext-C7bFffEo.js";import"./SetGraphicalItem-wZmxt-s3.js";import"./getRadiusAndStrokeWidthFromDot-J3eGzewL.js";import"./ActiveShapeUtils-Du3AePOl.js";import"./useEffectiveDataKey-Bt6hIrJm.js";import"./Cross-BJJumAQM.js";import"./Rectangle-oyaeTZIU.js";import"./util-Dxo8gN5i.js";import"./Sector-D68kMANZ.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
