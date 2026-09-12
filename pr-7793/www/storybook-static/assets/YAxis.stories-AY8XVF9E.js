import{R as t}from"./iframe-DqI8fZWc.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BOv489WA.js";import{R as h}from"./zIndexSlice-9oYbhSdQ.js";import{L as A}from"./LineChart-DKle2Fh0.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CnIMtQFj.js";import{X as f}from"./XAxis-DN7qZjW9.js";import{L as E}from"./Legend-Dy0tOTjK.js";import{L as i}from"./Line-B1PViTKj.js";import{T as v}from"./Tooltip-DIfzN9Q7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B6t_CsQ4.js";import"./Text-9XM6GnGO.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./DOMUtils-C2uAcB2d.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CmCgphBH.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./RechartsWrapper-DQO3SMEw.js";import"./axisSelectors-Degnf0cl.js";import"./throttle-BTCEGSKU.js";import"./d3-scale-dm0sSvQ9.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./index-DPm6oXEP.js";import"./CartesianAxis-BLk0unaa.js";import"./Layer-Ckim_S0G.js";import"./types-D6uFqDQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./Symbols-CEX8TaeC.js";import"./symbol-CjwAsj25.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BmnmgRHV.js";import"./uniqBy-D9j1xmZr.js";import"./iteratee-Dfs9TkuY.js";import"./Curve-BfuijxKL.js";import"./step-CpsUov4P.js";import"./AnimatedItems-rYif9Enh.js";import"./useAnimationId-sXalVax-.js";import"./ActivePoints-BpZWKXXH.js";import"./Dot-D3i3k8Cq.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./ErrorBarContext-CkD9Qczk.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./getRadiusAndStrokeWidthFromDot-Bz_0HqQj.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";import"./Cross-D9YNJK_K.js";import"./Rectangle-scNawCgP.js";import"./util-Dxo8gN5i.js";import"./Sector-CYr5d1sJ.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
