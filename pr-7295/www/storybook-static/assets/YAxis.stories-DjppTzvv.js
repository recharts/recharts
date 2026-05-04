import{e as t}from"./iframe-Cm3fKKya.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BAWoPQYV.js";import{R as h}from"./arrayEqualityCheck-CQWVDseH.js";import{L as A}from"./LineChart-B-WZkPSW.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-CBNfxOfI.js";import{X as x}from"./XAxis-_gagIVgp.js";import{L as E}from"./Legend-Di-CnRxN.js";import{L as n}from"./Line-CUx7_hG8.js";import{T as v}from"./Tooltip-DNGuo1m5.js";import{R as k}from"./RechartsHookInspector-CpOXiD6O.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DUjBj8lo.js";import"./Layer-Bjej1AmV.js";import"./resolveDefaultProps-BkcHGYVM.js";import"./Text-DvSAUV0i.js";import"./DOMUtils-QUjg2Yua.js";import"./Label-DcJ8tF7g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dsdg_UUE.js";import"./zIndexSlice-DYSMWhOl.js";import"./immer-CEWtNvyb.js";import"./types-Cdoht-KM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BZy1ZNqb.js";import"./hooks-B3tRCSat.js";import"./axisSelectors-Bwtc5iq4.js";import"./d3-scale-BjMiYTJr.js";import"./RechartsWrapper-C-oDzj0r.js";import"./index-9rVBxZPD.js";import"./CartesianChart-BrFBpup6.js";import"./chartDataContext-B_eInrg7.js";import"./CategoricalChart-CY8DZn6m.js";import"./Symbols-BZXh3G7C.js";import"./symbol-atQbT2WX.js";import"./step-ClEFzmqb.js";import"./useElementOffset-DSmvd2Je.js";import"./uniqBy-BhwEwJ-s.js";import"./iteratee-BKobvmlS.js";import"./ReactUtils-CCKIvuk2.js";import"./ActivePoints-XXtVAAS1.js";import"./Dot-elfvXfLw.js";import"./RegisterGraphicalItemId-DJy9dO_8.js";import"./ErrorBarContext-DewfvX2H.js";import"./GraphicalItemClipPath-CRdIG2N7.js";import"./SetGraphicalItem-BjOYW37Q.js";import"./useAnimationId-C78FuYWX.js";import"./getRadiusAndStrokeWidthFromDot-D5QROXAR.js";import"./ActiveShapeUtils-CLgS6WZt.js";import"./isPlainObject-C3QqYDDv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-7ODVlbIW.js";import"./Trapezoid-DvgpBRjx.js";import"./Sector-DrC_WEC7.js";import"./Curve-C9IFio54.js";import"./Cross-DA5JVAUA.js";import"./index-DsjXiXu7.js";import"./ChartSizeDimensions-DHQ2iMpX.js";import"./OffsetShower-Be6n4fO7.js";import"./PlotAreaShower-DRAX5UGP.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
