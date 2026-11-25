import{R as t}from"./iframe-Bpzk9XpD.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-h8NK-7C6.js";import{R as h}from"./zIndexSlice-CybCXANO.js";import{L as A}from"./LineChart-DHyOLarx.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-basT9jrb.js";import{X as f}from"./XAxis-BP9q3ZDK.js";import{L as E}from"./Legend-UtQoP2bc.js";import{L as i}from"./Line-Ct_StldJ.js";import{T as v}from"./Tooltip-Ba2oQn2v.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C16rW2Tl.js";import"./get-CjriyByo.js";import"./Label-eMApu8Ae.js";import"./Text-Dqm35yMi.js";import"./ZIndexLayer-BSjRPeG2.js";import"./index-C_7DmI7l.js";import"./index-CBNlQ8jB.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C0HjJPCE.js";import"./throttle-BPowKzWT.js";import"./axisSelectors-BX6dGTcL.js";import"./diverging-NmCyEWmm.js";import"./CartesianAxis-DyKfTr_o.js";import"./Layer-DCNhrIPV.js";import"./types-BjOl9SGN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B8rXaB1P.js";import"./index-BoH8mfei.js";import"./index-Da9OH9g8.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DlW5DJbf.js";import"./index-DUebFUoz.js";import"./fillDefinitions-DV8KR0hl.js";import"./CartesianChart-v26TVdj4.js";import"./chartDataContext-DZdZASYb.js";import"./CategoricalChart-CZJOPWNu.js";import"./Symbols-Bw3SJeUU.js";import"./symbol-Ce4tZNho.js";import"./path-BBMZd4YL.js";import"./useElementOffset-DUi4H2Fd.js";import"./uniqBy-DJXoe2B2.js";import"./iteratee-nuQs-o3F.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BTTYYDZG.js";import"./Curve-D_Dl1lOS.js";import"./step-D-E4uKVH.js";import"./dataEntryStyles-CqhA2T9I.js";import"./ActivePoints-DF_bXbZk.js";import"./Dot-Dm4VIYOH.js";import"./activeStyles-Dvq2y-2D.js";import"./useAnimationId-B2Y87b6z.js";import"./ErrorBarContext-CEm3_QIT.js";import"./SetGraphicalItem-BO8cE8zs.js";import"./ActiveShapeUtils-Px2nMQKl.js";import"./useEffectiveDataKey-Cem866lm.js";import"./Cross-eYJNosTd.js";import"./Rectangle-6Dmq4B9R.js";import"./util-Dxo8gN5i.js";import"./Sector-CeulT84m.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
