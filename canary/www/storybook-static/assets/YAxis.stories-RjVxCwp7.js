import{R as t}from"./iframe-IxvRXYOM.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-31y7ZHQJ.js";import{R as h}from"./zIndexSlice-Dia8XTL2.js";import{L as A}from"./LineChart-Bda50N8_.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DebB53wC.js";import{X as f}from"./XAxis-R0eKTQQ1.js";import{L as E}from"./Legend-cnZjuaXe.js";import{L as i}from"./Line-BaG6CBFi.js";import{T as v}from"./Tooltip-9KuCdUcm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DYJa0Pce.js";import"./Text-VVpkyRHU.js";import"./resolveDefaultProps-C8gKTQR0.js";import"./DOMUtils-7IYxeTO_.js";import"./isWellBehavedNumber-1PbkiApc.js";import"./useId-BCDrS8Ec.js";import"./useBackwardsCompatibleTheme-niu8PbB-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D3BGhz3Z.js";import"./index-BXDqCn7f.js";import"./index-D34-i1nc.js";import"./RechartsWrapper-DouzT1Jm.js";import"./axisSelectors-CsegCW8b.js";import"./throttle-DoVSkdKP.js";import"./d3-scale-FVb6w9iL.js";import"./index-BFt1Ny-W.js";import"./index-WdtNPuBq.js";import"./renderedTicksSlice-CchY5W_H.js";import"./index-C1qZei_h.js";import"./CartesianAxis-BJBAf6Tc.js";import"./Layer-DXPk_QPv.js";import"./types-D8hPxmLy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D4DhIf-5.js";import"./chartDataContext-DPXilm1s.js";import"./CategoricalChart-CGmBQpoA.js";import"./Symbols-CCF6U_e7.js";import"./symbol-DaCFlABO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ck-qsnV8.js";import"./uniqBy-9Zym-iBR.js";import"./iteratee-CRMfd8M7.js";import"./Curve-B1Tl1par.js";import"./step-C5uaOgJB.js";import"./AnimatedItems-DJiaeq4S.js";import"./useAnimationId-B5Gku1OT.js";import"./ActivePoints-lXhg7PyY.js";import"./Dot-Ckx8C-Ql.js";import"./RegisterGraphicalItemId-CCZFRoFR.js";import"./ErrorBarContext-C1aHHTJh.js";import"./GraphicalItemClipPath-B3n8HZ3n.js";import"./SetGraphicalItem-CU9UT-3r.js";import"./getRadiusAndStrokeWidthFromDot-B0LLmdQO.js";import"./ActiveShapeUtils-BrhiJYt9.js";import"./useGraphicalItemIdentity-U0g776Bm.js";import"./Cross-DOBLdcqU.js";import"./Rectangle-Bpb36EBT.js";import"./util-Dxo8gN5i.js";import"./Sector-DVYh-31O.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
