import{e as r}from"./iframe-xRIz3qbF.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-Bpm2C4Bf.js";import{C as d}from"./CartesianGrid-c2xUxGhI.js";import{X as c}from"./XAxis-k5taAUht.js";import{Y as y}from"./YAxis-cxDuI0HH.js";import{S as h}from"./Scatter-CsV7Xvmk.js";import{E as e}from"./ErrorBar-DtN524Gq.js";import{T as u}from"./Tooltip-CWNo9MQC.js";import{R as f}from"./RechartsHookInspector-CC_tuF9F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-y0J6uKM2.js";import"./arrayEqualityCheck-BdN7i4MO.js";import"./resolveDefaultProps-CV23Ehqm.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-0oNAH-Yd.js";import"./axisSelectors-CpIgH2EX.js";import"./zIndexSlice-BfBE69OZ.js";import"./renderedTicksSlice-BCeSf2F6.js";import"./CartesianChart-taOmKSzk.js";import"./chartDataContext-BSH8i1Pa.js";import"./CategoricalChart-Dtl4cVT_.js";import"./CartesianAxis-7YSNf4Ta.js";import"./Layer-BmRFOYbB.js";import"./Text-mQwo9EXr.js";import"./DOMUtils-ByQBTR3z.js";import"./Label-w-b8AlxD.js";import"./ZIndexLayer-CoDEXRAT.js";import"./types-BXkuDJCo.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cl__7Wwh.js";import"./Curve-DYmyqph4.js";import"./tooltipContext-DDQr_iGb.js";import"./Symbols-DxmxARm7.js";import"./ActiveShapeUtils-DVUTgNxA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DArYXtns.js";import"./useAnimationId-Ca9wkO8e.js";import"./Trapezoid-D3wL9tbg.js";import"./Sector-BtgfQr6b.js";import"./RegisterGraphicalItemId-E0tByVzF.js";import"./ErrorBarContext-BFUqajde.js";import"./GraphicalItemClipPath-C4i3jj0c.js";import"./SetGraphicalItem-CTKmQnUP.js";import"./CSSTransitionAnimate-Duf8FCpC.js";import"./useElementOffset-DkvR4EFs.js";import"./iteratee-CaECTpuh.js";import"./Cross-DgBjufwG.js";import"./index-BTLusoTB.js";import"./ChartSizeDimensions-C5NwM1WB.js";import"./OffsetShower-DskOXH-F.js";import"./PlotAreaShower-CKLNnJBS.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
