import{e as r}from"./iframe-BR42SwHx.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-B6qTzQpt.js";import{C as d}from"./CartesianGrid-BKtI12iX.js";import{X as c}from"./XAxis-Tjb-FFWw.js";import{Y as y}from"./YAxis-vI32OOi5.js";import{S as h}from"./Scatter-Igo2koLx.js";import{E as e}from"./ErrorBar-5J0LifZd.js";import{T as u}from"./Tooltip-BTvrqCSy.js";import{R as f}from"./RechartsHookInspector-BoeADalq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0DQb4gv.js";import"./arrayEqualityCheck-BTlu6_X5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C3ZG36Xp.js";import"./immer-CBsUjXpI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D16v1uX6.js";import"./hooks-D8cR8gUo.js";import"./axisSelectors-CoHyz1fh.js";import"./d3-scale-UZASi0oQ.js";import"./zIndexSlice-DLL8OYNe.js";import"./renderedTicksSlice-C8E2aIah.js";import"./CartesianChart-CEhCqBUJ.js";import"./chartDataContext-DeHpxm8Y.js";import"./CategoricalChart-6WrjOunx.js";import"./CartesianAxis-Bu_sq35Y.js";import"./Layer-DvQoXU13.js";import"./Text-D4m4zxqs.js";import"./DOMUtils-sfbIoaFE.js";import"./Label-DVExpSeB.js";import"./ZIndexLayer-8Duyh3JO.js";import"./types-CNxj5JXu.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CgBYlHJF.js";import"./Curve-MgYQVsjt.js";import"./step-CO8PYd_W.js";import"./tooltipContext-BieSqIg2.js";import"./Symbols-BwMDCpyM.js";import"./symbol-DV-iQcJU.js";import"./ActiveShapeUtils-Bs6a3E44.js";import"./isPlainObject-CgqdHIW2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Di_iOTI6.js";import"./useAnimationId-B6YKrKnq.js";import"./Trapezoid-BEZ2jh2g.js";import"./Sector-CuH6E9-r.js";import"./RegisterGraphicalItemId-BuXbHokx.js";import"./ErrorBarContext-BHkWs-ti.js";import"./GraphicalItemClipPath-C0dhtMPj.js";import"./SetGraphicalItem-BZOj4gaY.js";import"./CSSTransitionAnimate-DYBog4uO.js";import"./useElementOffset-cx0ADUit.js";import"./uniqBy-CrOA1Xwi.js";import"./iteratee-DQsTI-if.js";import"./Cross-LzqoNpy2.js";import"./index-2-eZpp4N.js";import"./ChartSizeDimensions-FLfKJQs_.js";import"./OffsetShower-DtintQJW.js";import"./PlotAreaShower-C0gn6wTT.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
