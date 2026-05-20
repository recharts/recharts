import{e as r}from"./iframe-B524E5yX.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DEF2v_VO.js";import{C as d}from"./CartesianGrid-DNfbJVP3.js";import{X as c}from"./XAxis-DoED6gJL.js";import{Y as y}from"./YAxis-Doi3vP5C.js";import{S as h}from"./Scatter-C7MjH8-6.js";import{E as e}from"./ErrorBar-QBZHqIjS.js";import{T as u}from"./Tooltip-BjdOc5FC.js";import{R as f}from"./RechartsHookInspector-BHkEwc51.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-kVOVOGBx.js";import"./arrayEqualityCheck-DWzVcokC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-erGoKRoU.js";import"./immer-DblGCQ6f.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Cxa1JxZ8.js";import"./hooks-C4xKpp4Q.js";import"./axisSelectors-DIkxL-UY.js";import"./d3-scale-1dd7ZUuT.js";import"./zIndexSlice-6cosYb1s.js";import"./renderedTicksSlice-BCQv1ELk.js";import"./CartesianChart-DygjFtzj.js";import"./chartDataContext-BHiuOcfW.js";import"./CategoricalChart-DT5wuxyP.js";import"./CartesianAxis-C4FbkudN.js";import"./Layer-a-5--1A5.js";import"./Text-DAjJQcIE.js";import"./DOMUtils-Cs0OrDMQ.js";import"./Label-LjLfzFR2.js";import"./ZIndexLayer-kw2kBg7s.js";import"./types-D278CuUF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-rdzq-Cpq.js";import"./Curve-CP7expTy.js";import"./step-e5eeyF96.js";import"./tooltipContext-B8eJmi2-.js";import"./Symbols-DVHiTs4H.js";import"./symbol-FWxgSMGi.js";import"./ActiveShapeUtils-Be6-XL7t.js";import"./isPlainObject-Q96JMfqI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CnF6718M.js";import"./useAnimationId-B8WApGhr.js";import"./Trapezoid-JGHb5kPs.js";import"./Sector-DHhMbTkM.js";import"./RegisterGraphicalItemId-D0FVAtQu.js";import"./ErrorBarContext-LOKpn0lF.js";import"./GraphicalItemClipPath-Day9CREm.js";import"./SetGraphicalItem-Cuswj8oR.js";import"./CSSTransitionAnimate-bjVGfURZ.js";import"./useElementOffset-DsvyH8An.js";import"./uniqBy-D00Q8yAE.js";import"./iteratee-Dm8Ri951.js";import"./Cross-00FFEsmU.js";import"./index-BXZ80ZzE.js";import"./ChartSizeDimensions-B4ZLNDb6.js";import"./OffsetShower-CeXcOY0B.js";import"./PlotAreaShower-CsAAvQPX.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
