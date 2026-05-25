import{e as r}from"./iframe-CA2bza4n.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-CKLgmltO.js";import{C as d}from"./CartesianGrid-D-uFJsc9.js";import{X as c}from"./XAxis-CURUMdQ0.js";import{Y as y}from"./YAxis-DFFbe6p-.js";import{S as h}from"./Scatter-1WZoPFDB.js";import{E as e}from"./ErrorBar-F3ghLhKT.js";import{T as u}from"./Tooltip-3nmuHPLR.js";import{R as f}from"./RechartsHookInspector-QZX819t0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B5q3WxuV.js";import"./arrayEqualityCheck-DAdSVd1l.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BnLaySgP.js";import"./immer-DasQIOIX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CsA15_6S.js";import"./hooks-C5pIdCPM.js";import"./axisSelectors-To1e2V6V.js";import"./d3-scale-rP3V7GwL.js";import"./zIndexSlice-CSAGQhtB.js";import"./renderedTicksSlice-DH7mHkyS.js";import"./CartesianChart-DK-SLcv_.js";import"./chartDataContext-DoiK_cA8.js";import"./CategoricalChart-eE49ceQM.js";import"./CartesianAxis-4aGY63Ak.js";import"./Layer-2pQ-0vOW.js";import"./Text-GI5oKEYa.js";import"./DOMUtils-DrG-za0U.js";import"./Label-BmhtQvJ8.js";import"./ZIndexLayer-_xwh97le.js";import"./types-CZ_BmrzD.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CEO6nkw8.js";import"./Curve-7nNudVZs.js";import"./step-BK3O3AGs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B-sWdrzQ.js";import"./Symbols-DX9XhuTU.js";import"./symbol-BQO-r6kd.js";import"./ActiveShapeUtils-k84bNm8s.js";import"./RegisterGraphicalItemId-DMySGUM1.js";import"./ErrorBarContext-CKpFXypA.js";import"./GraphicalItemClipPath-qf9cPUyg.js";import"./SetGraphicalItem-iX6trfIf.js";import"./useAnimationId-CvBgWeeZ.js";import"./CSSTransitionAnimate-DLzAi1vB.js";import"./useElementOffset-DkAsfz-Q.js";import"./uniqBy-BH7dCUiF.js";import"./iteratee-DL8B346b.js";import"./Cross-D-jXg4F5.js";import"./Rectangle-CDekyl0v.js";import"./Sector-C2o8QhlW.js";import"./index-DZjuuzp6.js";import"./ChartSizeDimensions-BRPqgDFi.js";import"./OffsetShower-CTWF0vR4.js";import"./PlotAreaShower-CqWXxpLn.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
