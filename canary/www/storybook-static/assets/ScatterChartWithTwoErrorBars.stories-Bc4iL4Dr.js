import{e as r}from"./iframe-IYV0DWV_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CnEBwang.js";import{C as d}from"./CartesianGrid-COBVU_Zt.js";import{X as c}from"./XAxis-D3Ygop7A.js";import{Y as y}from"./YAxis-CWiUIZ-q.js";import{S as h}from"./Scatter-BMcb-afx.js";import{E as e}from"./ErrorBar-B84ijHSp.js";import{T as u}from"./Tooltip-B_Wu83_g.js";import{R as f}from"./RechartsHookInspector-F4E7g6Er.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CiV29pyr.js";import"./arrayEqualityCheck-Bd9te8h5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DW10euc9.js";import"./immer-C5y28x1y.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C-_sV-M9.js";import"./hooks-CYsU2mzH.js";import"./axisSelectors-D7Iryj26.js";import"./d3-scale-gSH8fZ7r.js";import"./zIndexSlice-DeGAM3mJ.js";import"./renderedTicksSlice-oy8dviAt.js";import"./CartesianChart-DeU7jjaP.js";import"./chartDataContext-DpSq4A2Y.js";import"./CategoricalChart-C5NFGp4t.js";import"./CartesianAxis-Bs0B3eSH.js";import"./Layer-BlQSfqc0.js";import"./Text-CljAKOCB.js";import"./DOMUtils-lNitbhsw.js";import"./Label-Ue-uNxNq.js";import"./ZIndexLayer-CuF5EOOK.js";import"./types-wRdleKl8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils--lF51C7F.js";import"./Curve-DbGLQtgf.js";import"./step-A9nbxnob.js";import"./tooltipContext-RCsKF61I.js";import"./Symbols-3dp5_ZFf.js";import"./symbol-DNJG8l3z.js";import"./ActiveShapeUtils-Bagg-bQt.js";import"./isPlainObject-wylrXpJQ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxtnmBb5.js";import"./useAnimationId-Bm2M_Pz2.js";import"./Trapezoid-82F1yuXU.js";import"./Sector-CKN5Z_1V.js";import"./RegisterGraphicalItemId-hvr3G_mi.js";import"./ErrorBarContext-BIw-Eurm.js";import"./GraphicalItemClipPath-CJMuL245.js";import"./SetGraphicalItem-DeMSd0nu.js";import"./CSSTransitionAnimate-jlvbL1tS.js";import"./useElementOffset-D1AjHSpE.js";import"./uniqBy-CrQZW9nB.js";import"./iteratee-B8Y3Nom7.js";import"./Cross-LFLGBECj.js";import"./index-DlrvcT1S.js";import"./ChartSizeDimensions-qhfaRB1O.js";import"./OffsetShower-CVu4qLNi.js";import"./PlotAreaShower-B-AaQufv.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
