import{e as r}from"./iframe--x23rdHV.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-D2sXS_9Y.js";import{C as d}from"./CartesianGrid-CWvvQXSx.js";import{X as c}from"./XAxis-C6zLiMLH.js";import{Y as y}from"./YAxis-DrKE9qmp.js";import{S as h}from"./Scatter-BWdqSAig.js";import{E as e}from"./ErrorBar-DRn_8Ge9.js";import{T as u}from"./Tooltip-BpR2HqJx.js";import{R as f}from"./RechartsHookInspector-CS_N4Y-F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CaVQgtIT.js";import"./arrayEqualityCheck-BD1qZPxT.js";import"./resolveDefaultProps-Q3fBKAvl.js";import"./PolarUtils-DJ6pmdE6.js";import"./hooks-B9glux5h.js";import"./axisSelectors-DmpeXiUd.js";import"./zIndexSlice-BZ8J8CWC.js";import"./CartesianChart-7YsubAAE.js";import"./chartDataContext-CDQnRCpO.js";import"./CategoricalChart-NDapYkGp.js";import"./CartesianAxis-kvi8Pcym.js";import"./Layer-W9JL67lG.js";import"./Text-C7KTYcc4.js";import"./DOMUtils-a1QzPdPR.js";import"./Label-CHtfbXlI.js";import"./ZIndexLayer-ezCnztm4.js";import"./types-DIiwzDHn.js";import"./ReactUtils-Bbi28O4z.js";import"./Curve-BsoHhr4Y.js";import"./tooltipContext-DeJUwuti.js";import"./Symbols-DVanmgvf.js";import"./ActiveShapeUtils-Xs79DTHH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZSQAb92H.js";import"./useAnimationId-DUCYZNMW.js";import"./Trapezoid-B1cr3UmX.js";import"./Sector-En_dyy3k.js";import"./RegisterGraphicalItemId-DjY_2vEh.js";import"./ErrorBarContext-z3_2koBv.js";import"./GraphicalItemClipPath-B3HNdztG.js";import"./SetGraphicalItem-Ccb8m39o.js";import"./CSSTransitionAnimate-Cmc6t0_O.js";import"./useElementOffset-B8qSdA4X.js";import"./iteratee-Bd8EGcRe.js";import"./Cross-BC82NsLR.js";import"./index-DL_1z0BC.js";import"./ChartSizeDimensions-wrT4dmYN.js";import"./OffsetShower-CJxOrGxz.js";import"./PlotAreaShower-AHA62Bp0.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
