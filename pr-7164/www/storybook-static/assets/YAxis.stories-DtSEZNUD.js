import{e as t}from"./iframe-Cghk5Dv5.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwQ9PO5l.js";import{Y as s}from"./YAxis-DfDbyqX9.js";import{R as h}from"./arrayEqualityCheck-Blp4qByB.js";import{L as A}from"./LineChart-QyyMEoqM.js";import{C as f}from"./CartesianGrid-Dy2fKuJY.js";import{X as x}from"./XAxis-C28GaQOE.js";import{L as E}from"./Legend-BuwKR0lo.js";import{L as n}from"./Line-CyV2MMls.js";import{T as v}from"./Tooltip-DIg0HLtd.js";import{R as k}from"./RechartsHookInspector-Dhw1ahnh.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-NFB-A6xZ.js";import"./Layer-BZayzYJ5.js";import"./resolveDefaultProps-Ca9Q42EU.js";import"./Text-CTdXj2Wj.js";import"./DOMUtils-B6BLeQuC.js";import"./Label-DMYBuQg7.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C0MHsSee.js";import"./zIndexSlice-Cr5Wd2hn.js";import"./immer-C9d2WDC3.js";import"./types-BAdQFhn_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B7PVLtE-.js";import"./hooks-DvHGCK_P.js";import"./axisSelectors-BmN1bSZG.js";import"./d3-scale-DwfmephR.js";import"./RechartsWrapper-BCDf7E4k.js";import"./index--WQv2JEI.js";import"./CartesianChart-Dl7eKZR1.js";import"./chartDataContext-FHRsRLf6.js";import"./CategoricalChart-BX2q-J4I.js";import"./Symbols-i2nCmAEN.js";import"./symbol-BX-g_aqV.js";import"./step-CJt2p9N6.js";import"./useElementOffset-DGki2voW.js";import"./uniqBy-BP9r3ZBr.js";import"./iteratee-Cll8zDsJ.js";import"./ReactUtils-DJKFAAVq.js";import"./ActivePoints-D_0gNFPA.js";import"./Dot-DDhuD7gd.js";import"./RegisterGraphicalItemId-DxmHa7yf.js";import"./ErrorBarContext-B48_fgxO.js";import"./GraphicalItemClipPath-J2zVG9I1.js";import"./SetGraphicalItem-DKkCveHJ.js";import"./useAnimationId-B_fUzLa-.js";import"./getRadiusAndStrokeWidthFromDot-CegfqfN2.js";import"./ActiveShapeUtils-CgedLmsf.js";import"./isPlainObject-GvFH0_0U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-SpFzk5.js";import"./Trapezoid-D5vWYT03.js";import"./Sector-WHMRpyIm.js";import"./Curve-tyrMpXlR.js";import"./Cross-D4p6iHby.js";import"./index-DQ-QIWuT.js";import"./ChartSizeDimensions-Dm4LSJOm.js";import"./OffsetShower-CKEh5r6l.js";import"./PlotAreaShower-m5B18Oa-.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
