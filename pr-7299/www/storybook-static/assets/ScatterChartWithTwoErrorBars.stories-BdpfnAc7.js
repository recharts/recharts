import{e as r}from"./iframe-CNonusrd.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-N6n3FTY0.js";import{C as d}from"./CartesianGrid-LfDlAOjD.js";import{X as c}from"./XAxis-DXi_x7F1.js";import{Y as y}from"./YAxis-I3XCIJKJ.js";import{S as h}from"./Scatter-BoQeaU7F.js";import{E as e}from"./ErrorBar-C_OMsEtM.js";import{T as u}from"./Tooltip-C1ub5SXJ.js";import{R as f}from"./RechartsHookInspector-DREJ71WB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DYPFeGd0.js";import"./arrayEqualityCheck-l5oIinxJ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-9t13lHMU.js";import"./immer-x45XYXGa.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D5p3lGcA.js";import"./hooks-sSaS_iHU.js";import"./axisSelectors-CxAQt0eW.js";import"./d3-scale-HntMfl1M.js";import"./zIndexSlice-lq1xLJsp.js";import"./renderedTicksSlice-DilFZHiz.js";import"./CartesianChart-XRbcsYla.js";import"./chartDataContext-CPanrf0w.js";import"./CategoricalChart-2Jj_e3Uw.js";import"./CartesianAxis-CyGRC0f9.js";import"./Layer-B4nmAurR.js";import"./Text-B8aP_-NL.js";import"./DOMUtils-BSt5xjPz.js";import"./Label-BkTOM4JT.js";import"./ZIndexLayer-C8APM9Um.js";import"./types-QSJLzDgf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C0hUy9cv.js";import"./Curve-B-txv0y_.js";import"./step-CTC2hHac.js";import"./tooltipContext-C7pC30Rf.js";import"./Symbols-BvFq4E0I.js";import"./symbol-BAjtFeQt.js";import"./ActiveShapeUtils-oBpqlz40.js";import"./isPlainObject-D0uDvuyC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vYVz2III.js";import"./useAnimationId-CKkBYz8x.js";import"./Trapezoid-D9ZXnwGC.js";import"./Sector-2y1By5Z-.js";import"./RegisterGraphicalItemId-BlSb_05O.js";import"./ErrorBarContext-BMyrYBLu.js";import"./GraphicalItemClipPath-Dh2li2pF.js";import"./SetGraphicalItem-ElLCpu1i.js";import"./CSSTransitionAnimate-EGsSQDU3.js";import"./useElementOffset-DQxeRcJO.js";import"./uniqBy-BouIk8Q6.js";import"./iteratee-D530YhRz.js";import"./Cross-BRGiVFKR.js";import"./index-D8MHUpjv.js";import"./ChartSizeDimensions-CH_6AtsO.js";import"./OffsetShower-BdevU7dF.js";import"./PlotAreaShower-iAJQSHaO.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
