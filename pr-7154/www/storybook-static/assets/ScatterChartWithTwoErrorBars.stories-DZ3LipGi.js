import{e as r}from"./iframe-DsUMSIoB.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CE6Tksr2.js";import{C as d}from"./CartesianGrid-Ca1R71M9.js";import{X as c}from"./XAxis-BzmMsMrb.js";import{Y as y}from"./YAxis-CTnSzHcV.js";import{S as h}from"./Scatter-B83Mb8i2.js";import{E as e}from"./ErrorBar-B02ng-Gm.js";import{T as u}from"./Tooltip-BGXoX1w9.js";import{R as f}from"./RechartsHookInspector-DFkKDQjz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-mUXPQGkR.js";import"./arrayEqualityCheck-CZsQnfge.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dxu6XJ62.js";import"./immer-D_NmV9ya.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BFxM37Jd.js";import"./hooks-VVLooFbP.js";import"./axisSelectors-BtEB30-b.js";import"./d3-scale-B0RJDOHU.js";import"./zIndexSlice-BDZOwce-.js";import"./renderedTicksSlice-TGaTZgu3.js";import"./CartesianChart-Duzb9tyy.js";import"./chartDataContext-DJEsKFHL.js";import"./CategoricalChart-LslF1x-i.js";import"./CartesianAxis-CoMq3-ST.js";import"./Layer-CW99gOx_.js";import"./Text-DgusKYHb.js";import"./DOMUtils-ByvJp_q1.js";import"./Label-DJgqAx1l.js";import"./ZIndexLayer-tLtAagmx.js";import"./types-DN9VSCi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqswSBIq.js";import"./Curve-BkdTmnon.js";import"./step-eBA07Zoi.js";import"./tooltipContext-anNrNI_B.js";import"./Symbols-BAzW_gm6.js";import"./symbol-DKO9W9xf.js";import"./ActiveShapeUtils-Dj4smYQ8.js";import"./isPlainObject-DFvEMqvd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIwirMVx.js";import"./useAnimationId-DmBkD_4u.js";import"./Trapezoid-tpniWtB4.js";import"./Sector-pL7nB78h.js";import"./RegisterGraphicalItemId-BclML1JJ.js";import"./ErrorBarContext-DPQTg4jn.js";import"./GraphicalItemClipPath-CgRDa1Kp.js";import"./SetGraphicalItem-k0XQScGi.js";import"./CSSTransitionAnimate-BA4XkaxL.js";import"./useElementOffset-BkAQKih2.js";import"./uniqBy-ZtGpxLFX.js";import"./iteratee-BnLCU3fu.js";import"./Cross-C_WJsaqZ.js";import"./index-CfUCN5Mt.js";import"./ChartSizeDimensions-CcoGZBL4.js";import"./OffsetShower-BdILJQRM.js";import"./PlotAreaShower-DssL7f_B.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
