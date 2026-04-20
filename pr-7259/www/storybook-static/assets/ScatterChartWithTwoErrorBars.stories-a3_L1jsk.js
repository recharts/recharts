import{e as r}from"./iframe-DV9Ev_ie.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CEC5r4ae.js";import{C as d}from"./CartesianGrid-BvxCy_xL.js";import{X as c}from"./XAxis-D2587yBO.js";import{Y as y}from"./YAxis-Bm2CKIBG.js";import{S as h}from"./Scatter-C6fbzImv.js";import{E as e}from"./ErrorBar-u7HFw0CE.js";import{T as u}from"./Tooltip-B_wHQcSU.js";import{R as f}from"./RechartsHookInspector-lqIBTgi7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DhKJ-pN_.js";import"./arrayEqualityCheck-DZA7w_Bp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Df82JNH7.js";import"./immer-BixWiXhD.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bky92Y6v.js";import"./hooks-DHdaviyJ.js";import"./axisSelectors-B_EYpjD9.js";import"./d3-scale-B-Q90L68.js";import"./zIndexSlice-BRPsmEL1.js";import"./renderedTicksSlice-DCke5O88.js";import"./CartesianChart-Cbu_0e1L.js";import"./chartDataContext-DSMYXZ4e.js";import"./CategoricalChart-DJtN3jt_.js";import"./CartesianAxis-DWCZU6Tq.js";import"./Layer-BqOaf8xV.js";import"./Text--RFKRppg.js";import"./DOMUtils-CiIcfYdd.js";import"./Label--ztUVZ3i.js";import"./ZIndexLayer-C8euaCum.js";import"./types-8qlrq-tq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DkzvKT6G.js";import"./Curve-BVz3ddlm.js";import"./step-Ct5f--oN.js";import"./tooltipContext-Cy90M4Ya.js";import"./Symbols-H35j_AL3.js";import"./symbol-BxNtN3Tt.js";import"./ActiveShapeUtils-Duc_m_vE.js";import"./isPlainObject-B3OPGy8K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-FILpJ6On.js";import"./useAnimationId-CtSlzYdH.js";import"./Trapezoid-sNlfsjwh.js";import"./Sector-C5qUq4cG.js";import"./RegisterGraphicalItemId-fV7oEbJx.js";import"./ErrorBarContext-KDIj2oXC.js";import"./GraphicalItemClipPath-DvLqBiqP.js";import"./SetGraphicalItem-DIvDoWjl.js";import"./CSSTransitionAnimate-CmKMDQ4y.js";import"./useElementOffset-DH0zqrwg.js";import"./uniqBy-DQ9VqyX-.js";import"./iteratee-B0cPffwU.js";import"./Cross-CGoJbBzY.js";import"./index-ECRT-WFn.js";import"./ChartSizeDimensions-CdNN_o6b.js";import"./OffsetShower-BssOKB-O.js";import"./PlotAreaShower-BZvFi-F4.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
