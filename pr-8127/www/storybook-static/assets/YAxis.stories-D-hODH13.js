import{R as t}from"./iframe-BmCEaXnl.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-wM7iKB0B.js";import{R as h}from"./zIndexSlice-CCSErHLO.js";import{L as A}from"./LineChart-zz32sg1E.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CpUWFpw2.js";import{X as f}from"./XAxis-u0XIPlGG.js";import{L as E}from"./Legend-DA0lHjM2.js";import{L as i}from"./Line-BEG7jfGv.js";import{T as v}from"./Tooltip-Clx9dABt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BMv4awTg.js";import"./Text-CVqIJR2f.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./DOMUtils-C4PB-VGE.js";import"./ZIndexLayer-CQzpYkd8.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-pAXQteq7.js";import"./throttle-qcDxTsLf.js";import"./axisSelectors-jGKN6-F9.js";import"./d3-scale-DOe-rCGU.js";import"./CartesianAxis-MWIUmivx.js";import"./Layer-BpXqwf7v.js";import"./types-_yr4vfnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-e4k-RA_5.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";import"./fillDefinitions-Cf5kf7-L.js";import"./Symbols-CZzsW6XG.js";import"./symbol-CysJXLfa.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DK0hqOaX.js";import"./uniqBy-QNfb45Jk.js";import"./iteratee-DozicGBj.js";import"./isArguments-yB-y1yaH.js";import"./Curve-03O0PZm6.js";import"./step-Ci6oOROy.js";import"./LabelList-BgUgtMai.js";import"./ActivePoints-CcCwLUJA.js";import"./Dot-BKYa8qvg.js";import"./activeStyles-D5gryLfg.js";import"./useAnimationId-DcrGLg07.js";import"./dataEntryStyles-D18H_t3x.js";import"./ErrorBarContext-D_xcSKmk.js";import"./SetGraphicalItem-CsEqG3iP.js";import"./getRadiusAndStrokeWidthFromDot-CTKwmZ8b.js";import"./ActiveShapeUtils-DMtsKFiW.js";import"./useEffectiveDataKey-CdWL-HwP.js";import"./Cross-CPCMMMp1.js";import"./Rectangle-CcFLRt9n.js";import"./util-Dxo8gN5i.js";import"./Sector-C1JqqJYO.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
