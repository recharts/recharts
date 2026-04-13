import{e as r}from"./iframe-BeDGORj6.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-Dro_C0AN.js";import{C as d}from"./CartesianGrid-Deq6GaMT.js";import{X as c}from"./XAxis-BWIHbalc.js";import{Y as y}from"./YAxis-DVelxUgb.js";import{S as h}from"./Scatter-oG4I4vUy.js";import{E as e}from"./ErrorBar-QyTG1ghy.js";import{T as u}from"./Tooltip-CCSrlRCE.js";import{R as f}from"./RechartsHookInspector-CMV-TCMh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzXrp2Yg.js";import"./arrayEqualityCheck-JsAXyDLr.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C99f34Mc.js";import"./immer-Cq48D3GD.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cjcxel70.js";import"./hooks-CZlzwV4c.js";import"./axisSelectors-BWLPVm14.js";import"./d3-scale-Dn9C_p1J.js";import"./zIndexSlice-f8r1nxA3.js";import"./renderedTicksSlice-sW53jx3E.js";import"./CartesianChart-B5AKLLNj.js";import"./chartDataContext-kI4vfNyg.js";import"./CategoricalChart-BaIwFCUZ.js";import"./CartesianAxis-Cg9ZZyb5.js";import"./Layer-Cb63g7eE.js";import"./Text-DVPNdnrr.js";import"./DOMUtils-BJyHcXDT.js";import"./Label-DIDBGhSu.js";import"./ZIndexLayer-CzXr4GKG.js";import"./types-C_8vdBSO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-8jcv2sZp.js";import"./Curve-Cn7Yw6fj.js";import"./step-CdMW3WL_.js";import"./tooltipContext-D6G9a4bo.js";import"./Symbols-BtXiAqa0.js";import"./symbol-Dz8LJwUL.js";import"./ActiveShapeUtils-CKh9-uWL.js";import"./isPlainObject-CPwWoDLp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmD5nffX.js";import"./useAnimationId-Dpd_sVLz.js";import"./Trapezoid-C6mcZG1p.js";import"./Sector-CvLn_4ix.js";import"./RegisterGraphicalItemId-Be6P2E9J.js";import"./ErrorBarContext-BP-aXdJD.js";import"./GraphicalItemClipPath-DuAL_izP.js";import"./SetGraphicalItem-CByUuzu8.js";import"./CSSTransitionAnimate-C1-e32TQ.js";import"./useElementOffset-C39f-q29.js";import"./uniqBy-Bxm9P5yL.js";import"./iteratee-BiMAN34M.js";import"./Cross-D7PLyMBf.js";import"./index-qx6-V41S.js";import"./ChartSizeDimensions-W3vYP0Xa.js";import"./OffsetShower-SgjYM82s.js";import"./PlotAreaShower-k5ztxQce.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
