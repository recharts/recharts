import{e as r}from"./iframe-qFyPNvi_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-B8oEhFQd.js";import{C as d}from"./CartesianGrid-8Lbkprhq.js";import{X as c}from"./XAxis-B5Ueyu7e.js";import{Y as y}from"./YAxis-B1s9pj0r.js";import{S as h}from"./Scatter-C204Rklc.js";import{E as e}from"./ErrorBar-CtgmK3xT.js";import{T as u}from"./Tooltip-CMoU0mbE.js";import{R as f}from"./RechartsHookInspector-Ce3qLbRt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DM4_tnRN.js";import"./arrayEqualityCheck-BR44KOOG.js";import"./resolveDefaultProps-CiVGu3Bt.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-aCDbeiPX.js";import"./axisSelectors-De9afnke.js";import"./zIndexSlice-yXhSr7sB.js";import"./CartesianChart-DplX7WDC.js";import"./chartDataContext-byZU3wA9.js";import"./CategoricalChart-Bg7JUw0R.js";import"./CartesianAxis-BrVa5ao-.js";import"./Layer-B9wfXqHf.js";import"./Text-icE1XF3t.js";import"./DOMUtils-EYrslgiu.js";import"./Label-CaGvlJzM.js";import"./ZIndexLayer-B3rHEP_M.js";import"./types-BhYGGyZO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dn42083y.js";import"./Curve-Bf-6f0us.js";import"./tooltipContext-DIG8Ieoj.js";import"./Symbols-CPIOcRRv.js";import"./ActiveShapeUtils-m1fmtbZZ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C4WR-Qi1.js";import"./useAnimationId-CBoODHVq.js";import"./Trapezoid-hMqWhzEj.js";import"./Sector-CLe_yWi6.js";import"./RegisterGraphicalItemId-Dwao3Q82.js";import"./ErrorBarContext-tV2jexXK.js";import"./GraphicalItemClipPath-SzdiLGTP.js";import"./SetGraphicalItem-C4lKL51b.js";import"./CSSTransitionAnimate-DHvQeqlv.js";import"./useElementOffset-DOXz1Ew0.js";import"./iteratee-CbT9mAc7.js";import"./Cross-Cx9wV6KX.js";import"./index-CxM5gQIi.js";import"./ChartSizeDimensions-QfvN_Ah7.js";import"./OffsetShower-BUMougLk.js";import"./PlotAreaShower-CjC9fWZt.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
