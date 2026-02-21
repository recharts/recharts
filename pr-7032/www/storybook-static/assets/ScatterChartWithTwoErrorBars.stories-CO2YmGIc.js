import{e as r}from"./iframe-_bxOXoO9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-Cgc4ZcM8.js";import{C as d}from"./CartesianGrid-CccUh1NJ.js";import{X as c}from"./XAxis-B25iHqjD.js";import{Y as y}from"./YAxis-A1NUb23w.js";import{S as h}from"./Scatter-cmvVT1qN.js";import{E as e}from"./ErrorBar-w0Rx4kqp.js";import{T as u}from"./Tooltip-BzA3BQUp.js";import{R as f}from"./RechartsHookInspector-CQ4RIQ5B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CLtRnOh5.js";import"./arrayEqualityCheck-B7kPjOe4.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D0m7DKS7.js";import"./immer-4xgaWIU1.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BFgxmFq6.js";import"./hooks-Cyo7uYKI.js";import"./axisSelectors-BABYG139.js";import"./d3-scale-CMcXs8cL.js";import"./zIndexSlice-YmRlXVtY.js";import"./renderedTicksSlice-BhRx_d4S.js";import"./CartesianChart-BeL_fJ-U.js";import"./chartDataContext-CdQCRTNV.js";import"./CategoricalChart-5uJ4ezdK.js";import"./CartesianAxis-B0aXIuqq.js";import"./Layer-B4OQX5mX.js";import"./Text-BcYFtKsN.js";import"./DOMUtils-MxvGotSE.js";import"./Label-puZUAwbJ.js";import"./ZIndexLayer-B8XFMXb9.js";import"./types-CaD-AAbb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BFPf_n2z.js";import"./Curve-lVDO4rto.js";import"./step-eq8OAlUh.js";import"./tooltipContext-BS9cuw2S.js";import"./Symbols-DC5bGOMu.js";import"./symbol-B3FMMLJa.js";import"./ActiveShapeUtils-DYBOuNOh.js";import"./isPlainObject-NBybHA4D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaX2mvZh.js";import"./useAnimationId-CniUVvXd.js";import"./Trapezoid-D0RHyHyZ.js";import"./Sector-Dr45uA-k.js";import"./RegisterGraphicalItemId-CTB49Iya.js";import"./ErrorBarContext-3ohsNMPc.js";import"./GraphicalItemClipPath-5qnulUvK.js";import"./SetGraphicalItem-BJ4aCabI.js";import"./CSSTransitionAnimate-BQ_qklwC.js";import"./useElementOffset-BbjKpyX7.js";import"./uniqBy-LNZ8xow_.js";import"./iteratee-CNg37eQk.js";import"./Cross-CpjIss2W.js";import"./index-D6dEx3op.js";import"./ChartSizeDimensions-DiDEOzCF.js";import"./OffsetShower-DtnIakTn.js";import"./PlotAreaShower-BaYMr28N.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
