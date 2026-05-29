import{c as t}from"./iframe-CJZgj0uU.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BAQCElzz.js";import{g as h}from"./zIndexSlice-BZ2O-OQH.js";import{L as A}from"./LineChart-DNpykYrR.js";import{a as w}from"./Coordinate-CcdTesrj.js";import{C as x}from"./CartesianGrid-CWbKmIi2.js";import{X as f}from"./XAxis-BSW-Wlgv.js";import{L as E}from"./Legend-Pe-dwHgI.js";import{L as n}from"./Line-BFiCebMO.js";import{T as v}from"./Tooltip-C11V9TGR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BEAZ2r52.js";import"./CartesianAxis-BX7jntaJ.js";import"./Layer-ydyUpJJb.js";import"./resolveDefaultProps-FKfcMfmF.js";import"./Text-D112bEeq.js";import"./DOMUtils-BgafkoVk.js";import"./isWellBehavedNumber-Nplq3bnb.js";import"./Label-CJIrHnSQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPHRw4Ib.js";import"./index-BaU2Z89k.js";import"./index-BRhVkoAq.js";import"./types-CiRy8kfJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bd5uuDyd.js";import"./immer-BIrrzgtK.js";import"./RechartsWrapper-DQ7nKJcr.js";import"./index-CU49z8K0.js";import"./index-KU4xeJqQ.js";import"./axisSelectors-Q9vNN-fQ.js";import"./d3-scale-DdptYiWa.js";import"./CartesianChart-BaL0sKso.js";import"./chartDataContext-BuQzXvR1.js";import"./CategoricalChart-Q8RRHSJw.js";import"./Symbols-Cv-NkGAG.js";import"./symbol-C1akmMb0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-Hc0Nh0.js";import"./uniqBy-7nk3lUE2.js";import"./iteratee-InYqkfXa.js";import"./Curve-Cyl-l43N.js";import"./step-DNKj4THz.js";import"./ReactUtils-GZ1OoiCv.js";import"./ActivePoints-IwLpaKOt.js";import"./Dot-BRBzm1sk.js";import"./RegisterGraphicalItemId-Y2xEXS3n.js";import"./ErrorBarContext-CS0wxcMb.js";import"./GraphicalItemClipPath-DHmOdu8W.js";import"./SetGraphicalItem-xXSm9JS4.js";import"./useAnimationId-Bs6-Zm7y.js";import"./getRadiusAndStrokeWidthFromDot-D1SY7hYV.js";import"./ActiveShapeUtils-BjI4G98c.js";import"./Cross-DrkPMd6H.js";import"./Rectangle-DN1lBA6W.js";import"./Sector-KTibSxhz.js";const Kt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Kt as default};
