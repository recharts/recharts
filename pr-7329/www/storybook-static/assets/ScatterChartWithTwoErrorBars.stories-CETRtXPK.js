import{e as r}from"./iframe-BhgNWdm2.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-BkWJ9050.js";import{C as d}from"./CartesianGrid-ELcwD5_F.js";import{X as c}from"./XAxis-B0Y5mjm9.js";import{Y as y}from"./YAxis-DimmepAM.js";import{S as h}from"./Scatter-Z0u3wdE2.js";import{E as e}from"./ErrorBar-CheY15CM.js";import{T as u}from"./Tooltip-C68vnTfz.js";import{R as f}from"./RechartsHookInspector-BwLyLCbr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_AVgKr-.js";import"./arrayEqualityCheck-BPYeEWp9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D43Wpvex.js";import"./immer-B8rRfUkI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CqC_U7ug.js";import"./hooks-jOaINvHQ.js";import"./axisSelectors-CZf8mr5P.js";import"./d3-scale-D8GbsE5m.js";import"./zIndexSlice-Lcr8coq9.js";import"./renderedTicksSlice-D9cY7pVC.js";import"./CartesianChart-D0cl_oJT.js";import"./chartDataContext-Cguc2YyF.js";import"./CategoricalChart-DQs5NoOs.js";import"./CartesianAxis-BduEHTva.js";import"./Layer-BkasUZxz.js";import"./Text-2yWCgbKe.js";import"./DOMUtils-Cxmm0Icy.js";import"./Label-BRyOnYfu.js";import"./ZIndexLayer-Do4fofgT.js";import"./types-Bn2_ZBIB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BDMzm1YE.js";import"./Curve-CxXqlxgs.js";import"./step-CB53NYyG.js";import"./tooltipContext-DrWmxDnN.js";import"./Symbols-CuqnOXh1.js";import"./symbol-CDKmn_1O.js";import"./ActiveShapeUtils-C2ogWYAN.js";import"./isPlainObject-B6h9wQ2y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-jY469onx.js";import"./useAnimationId-Bo7L-9bR.js";import"./Trapezoid-DpB5l6Kj.js";import"./Sector-DfYOmxzx.js";import"./RegisterGraphicalItemId-Db3TPLUh.js";import"./ErrorBarContext-CdlIyLD3.js";import"./GraphicalItemClipPath-BH2oacZ_.js";import"./SetGraphicalItem-C_WqfzHK.js";import"./CSSTransitionAnimate-CmkLk1OR.js";import"./useElementOffset-BHpwKCLe.js";import"./uniqBy-CGarLzH6.js";import"./iteratee-dQXRLNjz.js";import"./Cross-DsZaFKHb.js";import"./index-owEklC_q.js";import"./ChartSizeDimensions-J0Tmkxsz.js";import"./OffsetShower-C_q72LRF.js";import"./PlotAreaShower-CDcLHpUT.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
