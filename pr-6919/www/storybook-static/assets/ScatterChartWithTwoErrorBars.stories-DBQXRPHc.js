import{e as r}from"./iframe-DTIyp44P.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-DdqZLZ3b.js";import{C as d}from"./CartesianGrid-DaTARVDI.js";import{X as c}from"./XAxis-C5uFpCOY.js";import{Y as y}from"./YAxis-Yf9V8Wcd.js";import{S as h}from"./Scatter-DEp1iQRR.js";import{E as e}from"./ErrorBar-BxKA91_M.js";import{T as u}from"./Tooltip-jrOn7pW9.js";import{R as f}from"./RechartsHookInspector-D8bdCWM1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CMatZq67.js";import"./arrayEqualityCheck-CROVUPPr.js";import"./resolveDefaultProps-CEVdASN5.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BoTdYeVb.js";import"./axisSelectors-DKeWHk_r.js";import"./zIndexSlice-CpP_hw3f.js";import"./CartesianChart-BYE7R-XT.js";import"./chartDataContext-DEKYo5U6.js";import"./CategoricalChart-DBE0EroA.js";import"./CartesianAxis-C2UO2Q74.js";import"./Layer-CNvBRmF0.js";import"./Text-oi_VPtbj.js";import"./DOMUtils-51XpcVVM.js";import"./Label-CM6isse0.js";import"./ZIndexLayer-J9Ech39_.js";import"./types-CLTao0pZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BtxPFKgx.js";import"./Curve-QqkAraw2.js";import"./tooltipContext-BWhsucN3.js";import"./Symbols-BXEo6yiB.js";import"./ActiveShapeUtils-rB0qGo-m.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C99nylwM.js";import"./useAnimationId-cUd_sss9.js";import"./Trapezoid-C-AINK0-.js";import"./Sector-BVwTJui3.js";import"./RegisterGraphicalItemId-Bq2lDHMm.js";import"./ErrorBarContext-4Fy8J4Om.js";import"./GraphicalItemClipPath-fQ9wLHT4.js";import"./SetGraphicalItem-BpKNPEn8.js";import"./CSSTransitionAnimate-B7Asn7Qv.js";import"./useElementOffset-D30Ax_lm.js";import"./iteratee-Dn7no0dn.js";import"./Cross-Bg-nihvf.js";import"./index-DH6qoWff.js";import"./ChartSizeDimensions-AlgeFMWv.js";import"./OffsetShower-Ytqxw96A.js";import"./PlotAreaShower-IGOsRXvZ.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
