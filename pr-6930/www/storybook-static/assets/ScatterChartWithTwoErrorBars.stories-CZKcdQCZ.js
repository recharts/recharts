import{e as r}from"./iframe-BUAHB1JE.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CpGcAThq.js";import{C as d}from"./CartesianGrid-kaY3iQec.js";import{X as c}from"./XAxis-DeVneqRd.js";import{Y as y}from"./YAxis-DerY_BUY.js";import{S as h}from"./Scatter-DoKCD3zg.js";import{E as e}from"./ErrorBar-BeV2kHvK.js";import{T as u}from"./Tooltip-BFW9R_rs.js";import{R as f}from"./RechartsHookInspector-DyBVLxQ5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3Kz3rBL.js";import"./arrayEqualityCheck-D5cvBvD0.js";import"./resolveDefaultProps-DB3crruI.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CLHcqW-j.js";import"./axisSelectors-nwFqxBSg.js";import"./zIndexSlice-DtimrYBU.js";import"./CartesianChart-CykHEv8Z.js";import"./chartDataContext-CsNatWbQ.js";import"./CategoricalChart-CgjnwgmC.js";import"./CartesianAxis-Ne59jWj5.js";import"./Layer-Cm056lbD.js";import"./Text-Cz010pA5.js";import"./DOMUtils-xg92JkXT.js";import"./Label-DycKUeOS.js";import"./ZIndexLayer-CvBAZeUB.js";import"./types-ztb1_leN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-kUjnR9HA.js";import"./Curve-U_sOEQqK.js";import"./tooltipContext-CiBBulxM.js";import"./Symbols-B668NUUf.js";import"./ActiveShapeUtils-IOesA3uZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C5TZFuIg.js";import"./useAnimationId-Dqqe1r9b.js";import"./Trapezoid-DhqC00At.js";import"./Sector-ZEGPqrgm.js";import"./RegisterGraphicalItemId-Wzb-45_P.js";import"./ErrorBarContext-BPyiRwXa.js";import"./GraphicalItemClipPath-DAz0o25b.js";import"./SetGraphicalItem-jsgYVNOw.js";import"./CSSTransitionAnimate-BrIsnmY6.js";import"./useElementOffset-DeXK_2aY.js";import"./iteratee-ca00GqX-.js";import"./Cross-Oq6lmmzT.js";import"./index-C8QR5MVL.js";import"./ChartSizeDimensions-DxM1dHTb.js";import"./OffsetShower-CLEQK-Rx.js";import"./PlotAreaShower-Xx92qV_c.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
