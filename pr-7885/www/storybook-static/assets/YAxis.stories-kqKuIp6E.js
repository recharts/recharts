import{R as t}from"./iframe-CgcESoS_.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Bq6E-73C.js";import{R as h}from"./zIndexSlice-C9Cb6Bbs.js";import{L as A}from"./LineChart-BN4_IZ-e.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-lHaZRYHs.js";import{X as f}from"./XAxis-DGXMp8Is.js";import{L as E}from"./Legend-BV0Dl49X.js";import{L as i}from"./Line-BSyeHdkf.js";import{T as v}from"./Tooltip-Vx7yLM8C.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-_q8lYILX.js";import"./Text-BcEh6RFZ.js";import"./resolveDefaultProps-veeYoS0W.js";import"./DOMUtils-Cw9s48Kn.js";import"./isWellBehavedNumber-DhEFf9E-.js";import"./useId-Dc2THN-S.js";import"./useBackwardsCompatibleTheme-BFuFikoj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DED1yjXT.js";import"./index-1XAen2V_.js";import"./index-D8jvDgL_.js";import"./RechartsWrapper-DtWJJ1V3.js";import"./axisSelectors-C7-DsMGo.js";import"./throttle-CQ8B3fUq.js";import"./d3-scale-D8W7M27y.js";import"./index-BTxBwUxJ.js";import"./index-C9UQ_w7z.js";import"./renderedTicksSlice-B_kIuOFM.js";import"./index-jPmp1Ffa.js";import"./CartesianAxis-CyNZQ6so.js";import"./Layer-Dw6zZzpv.js";import"./types-8FiI2U_s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BTQK_Cp5.js";import"./chartDataContext-DUBSEFa9.js";import"./CategoricalChart-BFNKJgcW.js";import"./Symbols-Ckj8mUZ8.js";import"./symbol-CqfI7rOQ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B_ajIM7J.js";import"./uniqBy--75j5a0F.js";import"./iteratee-CDEjiyt4.js";import"./Curve-I_wsWTHV.js";import"./step-VHdIkk64.js";import"./AnimatedItems-tEo2zXLi.js";import"./useAnimationId-C9QrN9Yt.js";import"./ActivePoints-D3Y1-NiW.js";import"./Dot-Jzlb3m1I.js";import"./RegisterGraphicalItemId-BEYzOUyb.js";import"./ErrorBarContext-ZU3bae9x.js";import"./GraphicalItemClipPath-C3tOgX87.js";import"./SetGraphicalItem-D2ZPo27B.js";import"./getRadiusAndStrokeWidthFromDot-ChHrtsAw.js";import"./ActiveShapeUtils-Cy154cWG.js";import"./useGraphicalItemIdentity-ry1LG-EM.js";import"./Cross-vczDcpik.js";import"./Rectangle-C3dp6HRo.js";import"./util-Dxo8gN5i.js";import"./Sector-CGT0RCUX.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
