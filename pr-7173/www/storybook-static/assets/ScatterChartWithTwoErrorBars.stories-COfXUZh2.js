import{e as r}from"./iframe-BnJtTsiG.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-FXtO488c.js";import{C as d}from"./CartesianGrid-C0Nk_Jye.js";import{X as c}from"./XAxis-DNI9rGLu.js";import{Y as y}from"./YAxis-2aBmaGwM.js";import{S as h}from"./Scatter-6VXzbwbP.js";import{E as e}from"./ErrorBar-BI6mkfEF.js";import{T as u}from"./Tooltip-C5BAR6ij.js";import{R as f}from"./RechartsHookInspector-BUkbtt6T.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DnFeqk-S.js";import"./arrayEqualityCheck-JqF9arvj.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CNKXDHIv.js";import"./immer-BilgQS7Z.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BR9ucj69.js";import"./hooks-DgbcPaC5.js";import"./axisSelectors-_uj0cu9d.js";import"./d3-scale-RH1gCsj4.js";import"./zIndexSlice-u5N52emx.js";import"./renderedTicksSlice-C2Lx4sh9.js";import"./CartesianChart-yY9oGGmK.js";import"./chartDataContext-Br9_d6ie.js";import"./CategoricalChart-CVrJtZ9b.js";import"./CartesianAxis-BY9ve2Nt.js";import"./Layer-CZajLfJ2.js";import"./Text-8iVX3WBp.js";import"./DOMUtils-u57yL_f_.js";import"./Label-C079WU8o.js";import"./ZIndexLayer-MihbceXQ.js";import"./types-Dgf_4DYj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CGCbFUwc.js";import"./Curve-Dms99yFp.js";import"./step-Dk-_s7iR.js";import"./tooltipContext-B4Ol6AMl.js";import"./Symbols-kj3svvPH.js";import"./symbol-Y2fv4Hlp.js";import"./ActiveShapeUtils-CiETt0z1.js";import"./isPlainObject-DWBUHdsc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-38-vQMAB.js";import"./useAnimationId-BlSLZQPR.js";import"./Trapezoid-CcsFZinE.js";import"./Sector-DPWQhCCR.js";import"./RegisterGraphicalItemId-Cp9jZ34F.js";import"./ErrorBarContext-DLm5F4wp.js";import"./GraphicalItemClipPath-BqLiE-Qj.js";import"./SetGraphicalItem-DTmYNChn.js";import"./CSSTransitionAnimate-RsEbLlpC.js";import"./useElementOffset-D1u0B1Cx.js";import"./uniqBy-CH72kEBn.js";import"./iteratee-Bfor77rc.js";import"./Cross-DB7qff4N.js";import"./index-BsJ1xsh-.js";import"./ChartSizeDimensions-DdW7v9MQ.js";import"./OffsetShower-YcN9xEjX.js";import"./PlotAreaShower-B5YeOyEN.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
