import{e as r}from"./iframe-B8SpPQoN.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BOzlOeh2.js";import{C as d}from"./CartesianGrid-JJMao95O.js";import{X as c}from"./XAxis-Cin7z-gi.js";import{Y as y}from"./YAxis-DNa02LBn.js";import{S as h}from"./Scatter-DTFKo5k3.js";import{E as e}from"./ErrorBar-Ctu82EKw.js";import{T as u}from"./Tooltip-DoxFd_h5.js";import{R as f}from"./RechartsHookInspector-C-uKGE-C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BPCT0kIp.js";import"./arrayEqualityCheck-2MTTUHAP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DzQ1rR94.js";import"./immer-DXJ0Fvyi.js";import"./PolarUtils-CTnnDHZv.js";import"./index-0MgJGhOu.js";import"./hooks-D1vO-Uu8.js";import"./axisSelectors-7IbcFarQ.js";import"./d3-scale-CgZuTiLl.js";import"./zIndexSlice-D7POqXab.js";import"./renderedTicksSlice-DVrFbe8I.js";import"./CartesianChart-B4UYsacS.js";import"./chartDataContext-5xAcHE6X.js";import"./CategoricalChart-BwxXShMz.js";import"./CartesianAxis-CtyZJFvD.js";import"./Layer-qfrTI4Q6.js";import"./Text-CvYPnnR9.js";import"./DOMUtils-7jDgYM5P.js";import"./Label-D7a9N5YB.js";import"./ZIndexLayer-ORGjuoDq.js";import"./types-ro_75Oqz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dvtx4mkZ.js";import"./Curve-Cnx0u3AQ.js";import"./step-oz_v09YS.js";import"./tooltipContext-ChJzGCgx.js";import"./Symbols-Dk8MuMBV.js";import"./symbol-BupuQwEg.js";import"./ActiveShapeUtils-CAMIqiYR.js";import"./isPlainObject-D7MEnopY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CmJKdPc2.js";import"./useAnimationId-BPBgs8nb.js";import"./Trapezoid-B4rCe4Ap.js";import"./Sector-WPeAUgwy.js";import"./RegisterGraphicalItemId-rH65yuEl.js";import"./ErrorBarContext-UPy6xw3i.js";import"./GraphicalItemClipPath-DEUbhDcY.js";import"./SetGraphicalItem-DEk7bfFl.js";import"./CSSTransitionAnimate-GzHWtPhf.js";import"./useElementOffset-D_wecJQa.js";import"./uniqBy-C7608wgp.js";import"./iteratee-C9ah-un7.js";import"./Cross-CAEHDx54.js";import"./index-emaQayzG.js";import"./ChartSizeDimensions-B4hjUxAl.js";import"./OffsetShower-DFaIhHkZ.js";import"./PlotAreaShower-Yg7RB84W.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
