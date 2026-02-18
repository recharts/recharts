import{e as r}from"./iframe-C8rrCX6B.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-DjuUNG4m.js";import{C as d}from"./CartesianGrid-EKJBNeKk.js";import{X as c}from"./XAxis-B3LhdJHC.js";import{Y as y}from"./YAxis-DOVMeyYT.js";import{S as h}from"./Scatter-1GOTVvK0.js";import{E as e}from"./ErrorBar-QMJ2qC3a.js";import{T as u}from"./Tooltip-D7hqfWIw.js";import{R as f}from"./RechartsHookInspector-CRTByZl4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Zx0A2i-h.js";import"./arrayEqualityCheck-B6s-2qWd.js";import"./resolveDefaultProps-g0jZ7vdX.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CpCGF1sd.js";import"./axisSelectors-B7ZWRmd4.js";import"./zIndexSlice-Df3dbiIE.js";import"./renderedTicksSlice-Chx9DuQU.js";import"./CartesianChart-ZPTdsj2m.js";import"./chartDataContext-CpPK2chg.js";import"./CategoricalChart-D5ZpTP8T.js";import"./CartesianAxis-B58JFruC.js";import"./Layer-D1v-1P4s.js";import"./Text-CymC-fJp.js";import"./DOMUtils-D6vD6WjU.js";import"./Label-pD9QpgDQ.js";import"./ZIndexLayer-DFkgVZys.js";import"./types-DDBoPPlm.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B6XfFwTE.js";import"./Curve-ckN9X3mA.js";import"./tooltipContext-BXl1HKdK.js";import"./Symbols-CojuA_dk.js";import"./ActiveShapeUtils-BVoBh-mr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dk1pBm8g.js";import"./useAnimationId-CljxjOmY.js";import"./Trapezoid-8D3XkRpf.js";import"./Sector-Doajdj9m.js";import"./RegisterGraphicalItemId-vQCUHIAP.js";import"./ErrorBarContext-CHadBikd.js";import"./GraphicalItemClipPath-BqvBTWAt.js";import"./SetGraphicalItem-CAPB5Ckj.js";import"./CSSTransitionAnimate-CcF1P6wR.js";import"./useElementOffset-CH7hNxjB.js";import"./iteratee-DFu-rX5d.js";import"./Cross-DHtrsMhv.js";import"./index-CVthgwiF.js";import"./ChartSizeDimensions-CE_McqMG.js";import"./OffsetShower-DFFOsGB0.js";import"./PlotAreaShower-BNzfzgkR.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,wr as __namedExportsOrder,fr as default};
