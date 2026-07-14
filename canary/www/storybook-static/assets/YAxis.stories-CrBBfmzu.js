import{R as t}from"./iframe-CoZYBKIX.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CF_GQk3H.js";import{R as h}from"./zIndexSlice-2wRK4kMu.js";import{L as A}from"./LineChart-lrBhOQay.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-acTASaL7.js";import{X as f}from"./XAxis-BYrKdn3j.js";import{L as E}from"./Legend-CVKjQ0zj.js";import{L as n}from"./Line-D10QsT7G.js";import{T as v}from"./Tooltip-D3QVER9o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CSNiqDgA.js";import"./Layer-Do7uuXp2.js";import"./resolveDefaultProps-CXWmRWxD.js";import"./Text-Br2KMW9j.js";import"./DOMUtils-B_OLo7Kh.js";import"./isWellBehavedNumber-DPie-IPs.js";import"./Label-B5Sw4cWo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cub30BGV.js";import"./index-CxqEAs70.js";import"./index-DbtoquVJ.js";import"./types-DlqgPqNT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJztigH5.js";import"./throttle-DTjNB_wn.js";import"./RechartsWrapper-Chafq55k.js";import"./index-8vVHWDox.js";import"./index-CB7yOKq2.js";import"./axisSelectors-Bk60vGia.js";import"./d3-scale-Bs_mySfl.js";import"./CartesianChart-DoniaHV0.js";import"./chartDataContext-Cx3CX6pd.js";import"./CategoricalChart-DEIC5a6b.js";import"./Symbols-BKIDLtqe.js";import"./symbol-C8voowq0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6wbHTWe8.js";import"./uniqBy-CLYAyW1w.js";import"./iteratee-DfrVONCs.js";import"./Curve-Cg7tsFL-.js";import"./step-C4ZbFa_I.js";import"./AnimatedItems-OdNYlxxq.js";import"./useAnimationId-C7atvuRl.js";import"./ActivePoints-DpHWAW0C.js";import"./Dot-C3ifhvT9.js";import"./RegisterGraphicalItemId-BhxVKnq7.js";import"./ErrorBarContext-D9rx9CvF.js";import"./GraphicalItemClipPath-BqDFfLzv.js";import"./SetGraphicalItem-Cm5RMzg0.js";import"./getRadiusAndStrokeWidthFromDot-J7tXgy4t.js";import"./ActiveShapeUtils-Is-vymDi.js";import"./Cross-BKoJ5Aes.js";import"./Rectangle-B4AWbI_f.js";import"./util-Dxo8gN5i.js";import"./Sector-Bhwh7YeU.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
