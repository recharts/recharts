import{e as r}from"./iframe-PyjOQzGK.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-B4P1IF09.js";import{C as d}from"./CartesianGrid-CLO--QcK.js";import{X as c}from"./XAxis-P49Iul1Y.js";import{Y as y}from"./YAxis-B6zPQ9mM.js";import{S as h}from"./Scatter-CqoNTBY2.js";import{E as e}from"./ErrorBar-I0T4DNGl.js";import{T as u}from"./Tooltip-DFUZibXb.js";import{R as f}from"./RechartsHookInspector-D26E9kzM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_qiBOfF.js";import"./arrayEqualityCheck-_dHyT-RZ.js";import"./resolveDefaultProps-uwFRJaRu.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-Lbs_q-DW.js";import"./axisSelectors-BsdiAjZp.js";import"./zIndexSlice-B8KtXzX9.js";import"./CartesianChart-DdiktEiW.js";import"./chartDataContext--xq0wDov.js";import"./CategoricalChart-CggXLcLb.js";import"./CartesianAxis-DYXf8O7N.js";import"./Layer-CHnOmiRY.js";import"./Text-BMHdefpA.js";import"./DOMUtils-InBL681b.js";import"./Label-CvwrqBXQ.js";import"./ZIndexLayer-DUzVAEAH.js";import"./types-UMLEboQ_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ChAGskY_.js";import"./Curve-BookXfP4.js";import"./tooltipContext-D-hTrTbJ.js";import"./Symbols-Jat4kELE.js";import"./ActiveShapeUtils-ChuhRPpg.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BJG4_O5K.js";import"./useAnimationId-DVpAz_Js.js";import"./Trapezoid-DucQEHEf.js";import"./Sector-hPc79hJa.js";import"./RegisterGraphicalItemId-BTJ5pHFA.js";import"./ErrorBarContext-D5I_WxoZ.js";import"./GraphicalItemClipPath-Dnx8SYU_.js";import"./SetGraphicalItem-CfBIbOKf.js";import"./CSSTransitionAnimate-BI-Soe98.js";import"./useElementOffset-CYUbJaFG.js";import"./iteratee-ClTcsDgX.js";import"./Cross-DQDWiPaF.js";import"./index-uJDoNHNu.js";import"./ChartSizeDimensions-BahwbRey.js";import"./OffsetShower-C2jS-DP9.js";import"./PlotAreaShower-CwTougAK.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
