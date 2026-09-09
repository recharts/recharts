import{R as t}from"./iframe-Gdd3jtsk.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Di2w_laQ.js";import{R as h}from"./zIndexSlice-CSZDPlYV.js";import{L as A}from"./LineChart-CRmN4vtz.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Byr6LEcY.js";import{X as f}from"./XAxis-CfRxe5fa.js";import{L as E}from"./Legend-BWtso69t.js";import{L as i}from"./Line-BsY-LYne.js";import{T as v}from"./Tooltip-D3vTDUsY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DL60lMB9.js";import"./Text-vzNtnCvi.js";import"./resolveDefaultProps-BAx7A2d0.js";import"./DOMUtils-DsTGrs8B.js";import"./isWellBehavedNumber-dcNjbQjU.js";import"./useId-DBiLJeK_.js";import"./useBackwardsCompatibleTheme-vrrckkYj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BONCUyCr.js";import"./index-OXuJkc0G.js";import"./index-BYdAkKa9.js";import"./RechartsWrapper-DHzy1vja.js";import"./axisSelectors-gB1Qysm6.js";import"./throttle-BmbkxDbb.js";import"./d3-scale-CuO1bYlf.js";import"./index-BA4wfNHy.js";import"./index-DLhl39MV.js";import"./renderedTicksSlice-Bnpylx8R.js";import"./index-D3-ryID0.js";import"./CartesianAxis-ZunbmCHs.js";import"./Layer-D1lMlbyy.js";import"./types-TRPks9BY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Ddy5lGq_.js";import"./chartDataContext-Cj_vDVUA.js";import"./CategoricalChart-Wstkm_N3.js";import"./Symbols-DU1gH_IC.js";import"./symbol-6kflMV2B.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CC92A-6l.js";import"./uniqBy-q0Kkkim5.js";import"./iteratee-BtmQJOPf.js";import"./Curve-CY9DQNQA.js";import"./step-Tntu3fQG.js";import"./AnimatedItems-BmvPvy1l.js";import"./useAnimationId-DI-q8E5L.js";import"./ActivePoints-DdmI4xi2.js";import"./Dot-BEO0U3qq.js";import"./RegisterGraphicalItemId-BmqdRBnz.js";import"./ErrorBarContext-uChJYirb.js";import"./GraphicalItemClipPath-CxxXrJBj.js";import"./SetGraphicalItem-C6Ve9h1l.js";import"./getRadiusAndStrokeWidthFromDot-Bfe6QX96.js";import"./ActiveShapeUtils-Cb2VhDvv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CxTlSs6o.js";import"./Rectangle-4hOwKYjA.js";import"./util-Dxo8gN5i.js";import"./Sector-CfjvUCUr.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
