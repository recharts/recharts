import{R as t}from"./iframe-DnX8r39b.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CSFozfSt.js";import{R as h}from"./zIndexSlice-CdRT6CH7.js";import{L as A}from"./LineChart-CV2GDhdl.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DDmG9Fz5.js";import{X as f}from"./XAxis-BTaYdNe8.js";import{L as E}from"./Legend-BM4xGj7H.js";import{L as n}from"./Line-DgV7sV5s.js";import{T as v}from"./Tooltip-Bacn6d6g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Cy9WREkT.js";import"./Layer-CauFkfpG.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./Text-BO1t-pUg.js";import"./DOMUtils-jh1pVKRO.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./Label-D3KHAYnK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C1d715l9.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./types-CgrT81ZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./throttle-JCKZhQLq.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./axisSelectors-D4OQvXCv.js";import"./d3-scale-B45mdNw5.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";import"./Symbols-BBKDSOHd.js";import"./symbol-BGpcIrU3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BTPLFIFL.js";import"./uniqBy-Cjb0gCKQ.js";import"./iteratee-D8Xc7oTH.js";import"./Curve-Zsfr7xXj.js";import"./step-TiPrAqPO.js";import"./AnimatedItems--Dg0X7dt.js";import"./useAnimationId-zs5IE8iA.js";import"./ActivePoints-CuEYXnF_.js";import"./Dot-DD3VaHTo.js";import"./RegisterGraphicalItemId-qEo7oahD.js";import"./ErrorBarContext-C_qu3TpT.js";import"./GraphicalItemClipPath-BiCBWmQX.js";import"./SetGraphicalItem-BXuH3_k3.js";import"./getRadiusAndStrokeWidthFromDot-BTTETrvJ.js";import"./ActiveShapeUtils-C4xeJz4x.js";import"./Cross-DJ_p583i.js";import"./Rectangle-Cv-9SrzG.js";import"./util-Dxo8gN5i.js";import"./Sector-BXJPUv-D.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
