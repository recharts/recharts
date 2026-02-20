import{e as r}from"./iframe-DhupoOg_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-DJmNVp-6.js";import{C as d}from"./CartesianGrid-CZVdI6-b.js";import{X as c}from"./XAxis-GsEtiJs1.js";import{Y as y}from"./YAxis-Bqh3gjFj.js";import{S as h}from"./Scatter-CVId0wIH.js";import{E as e}from"./ErrorBar-FwClFDeA.js";import{T as u}from"./Tooltip-BWybEPAX.js";import{R as f}from"./RechartsHookInspector-BRJSRdzz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BO7q4INj.js";import"./arrayEqualityCheck-1a2j5A1f.js";import"./resolveDefaultProps-BTEYvdCP.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-B-j7NBfr.js";import"./axisSelectors-C2OcRccT.js";import"./zIndexSlice-3nE7BOgk.js";import"./renderedTicksSlice-Bj2xHM0I.js";import"./CartesianChart-BeuGUy48.js";import"./chartDataContext-CrqCenWu.js";import"./CategoricalChart-C2IMp10s.js";import"./CartesianAxis-CrD8JHxo.js";import"./Layer-Bu6njlMc.js";import"./Text-ByV2kj0P.js";import"./DOMUtils-gPRAn0h9.js";import"./Label-jW6-M5QE.js";import"./ZIndexLayer-UCgdXbxU.js";import"./types-CAd6nAW9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Den_eo7w.js";import"./Curve-BbS-sSDe.js";import"./tooltipContext-HVTI-kwf.js";import"./Symbols-B_Z7RLio.js";import"./ActiveShapeUtils-CwO0ADgQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CD_6SwFf.js";import"./useAnimationId-DwQLM9Vt.js";import"./Trapezoid-CNwzGgkA.js";import"./Sector-qA3WmdGy.js";import"./RegisterGraphicalItemId-S4zlzp4z.js";import"./ErrorBarContext-DeheRuUe.js";import"./GraphicalItemClipPath-n7T_zXvL.js";import"./SetGraphicalItem-DotNlweO.js";import"./CSSTransitionAnimate-D6tGZNce.js";import"./useElementOffset-DbSKwHmX.js";import"./iteratee-1SnXECjR.js";import"./Cross-CecaA5jP.js";import"./index-B1siFWfz.js";import"./ChartSizeDimensions-DQpUS7oV.js";import"./OffsetShower-CF_FCt5b.js";import"./PlotAreaShower-O-owCsXY.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
