import{e as r}from"./iframe-HE4l6gpY.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-DlyfwcAS.js";import{C as d}from"./CartesianGrid-D8OAbM8Q.js";import{X as c}from"./XAxis-DdaPXuK0.js";import{Y as y}from"./YAxis-WQBuKMWe.js";import{S as h}from"./Scatter-DhAL1mP-.js";import{E as e}from"./ErrorBar-Cu0iVqo2.js";import{T as u}from"./Tooltip-nFqpvsrl.js";import{R as f}from"./RechartsHookInspector-JJmqV01h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rscDC45n.js";import"./arrayEqualityCheck-zbhzaWLf.js";import"./resolveDefaultProps-ycHCQ38b.js";import"./PolarUtils-DtB8lpuj.js";import"./hooks-CAMR9gDE.js";import"./axisSelectors-BlI41Nqe.js";import"./zIndexSlice-CDFEuO1j.js";import"./CartesianChart-Dff8VYzG.js";import"./chartDataContext-HKU5YHU8.js";import"./CategoricalChart-b_wn2d-T.js";import"./CartesianAxis-DHNzlHQb.js";import"./Layer-BUJF1xKh.js";import"./Text-CEFvmxgj.js";import"./DOMUtils-BzGtJFJB.js";import"./Label-D3UA2eyA.js";import"./ZIndexLayer-C9xwCaJR.js";import"./types-CN_ngcpa.js";import"./ReactUtils-DzgF8jcH.js";import"./Curve-B2qa_Fpt.js";import"./tooltipContext-BsYYO75B.js";import"./Symbols-DoDZ9cAV.js";import"./ActiveShapeUtils-OiiVmCWc.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C42JoSoA.js";import"./useAnimationId-CIwDHleW.js";import"./Trapezoid-DAtsx-SU.js";import"./Sector-CwzJgIqc.js";import"./RegisterGraphicalItemId-D8pM0yYi.js";import"./ErrorBarContext-CKHDFfpn.js";import"./GraphicalItemClipPath-BnkYT85w.js";import"./SetGraphicalItem-bFi_wPR4.js";import"./CSSTransitionAnimate-j3K1PiqB.js";import"./useElementOffset-c9br3Dij.js";import"./iteratee-CTXU5arM.js";import"./Cross-te_z7s4G.js";import"./index-CuPLL4UF.js";import"./ChartSizeDimensions-AwnLO8b3.js";import"./OffsetShower-B5Y-lcHm.js";import"./PlotAreaShower-Cx476p9R.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
