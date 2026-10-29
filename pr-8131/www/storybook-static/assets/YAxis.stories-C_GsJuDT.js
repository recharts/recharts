import{R as t}from"./iframe-BfuPA7Y7.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BrNvBbuM.js";import{R as h}from"./zIndexSlice-B6sU7Rt1.js";import{L as A}from"./LineChart-DSMRtVQA.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BTWdSSDs.js";import{X as f}from"./XAxis-18ahIu4N.js";import{L as E}from"./Legend-BzsVMsZC.js";import{L as i}from"./Line-Cx7UbFJj.js";import{T as v}from"./Tooltip-x7VgMlg_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-B5k-U_Yi.js";import"./Text-WUFue0UU.js";import"./resolveDefaultProps-SE0EJZ_b.js";import"./DOMUtils-C1ieIiQg.js";import"./ZIndexLayer-CSVoTSBk.js";import"./index-PwnnJGIT.js";import"./index-pibBQJc_.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CWu_M8g7.js";import"./throttle-Dc8hP4d4.js";import"./axisSelectors-Br11nK0T.js";import"./d3-scale-CjK5ImOh.js";import"./CartesianAxis-BUa2DE6b.js";import"./Layer-BWWgf-oi.js";import"./types-Di4mZIQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bz-0OqRl.js";import"./index-DdvOS-Rc.js";import"./index-WmIsGj85.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-95Yf8UFb.js";import"./index-Bw4IjVJv.js";import"./fillDefinitions-BUo8WQ2M.js";import"./CartesianChart-Dt3os4bo.js";import"./ZIndexPortal-Bjqq_-_3.js";import"./CategoricalChart-BbC6nel8.js";import"./Symbols-pnM7tnEZ.js";import"./symbol-DyOhgHTf.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXmUTCN6.js";import"./uniqBy-7WBcglc1.js";import"./iteratee-BCwjEBWk.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CE_2fXkD.js";import"./step-Cd-JWo6G.js";import"./LabelList-DuFHEtzk.js";import"./ActivePoints-35kBP04l.js";import"./Dot-Clx--Joj.js";import"./activeStyles-fOeMVdxf.js";import"./useAnimationId-4ywEr4SP.js";import"./dataEntryStyles-DawwN3gr.js";import"./ErrorBarContext-DQS0aRku.js";import"./SetGraphicalItem-B3dBsQBy.js";import"./getRadiusAndStrokeWidthFromDot-DI9dnlZ8.js";import"./ActiveShapeUtils-CJYZSdch.js";import"./useEffectiveDataKey-Chd7xyV4.js";import"./Cross-Cu86xmGq.js";import"./Rectangle-wfSbP1Fu.js";import"./util-Dxo8gN5i.js";import"./Sector-CJOaKkDv.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
