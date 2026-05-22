import{e as r}from"./iframe-DF4bgTei.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-oZ308W3r.js";import{C as d}from"./CartesianGrid-BvvRwqJF.js";import{X as c}from"./XAxis-DbY3ezb1.js";import{Y as y}from"./YAxis-D734sO1U.js";import{S as h}from"./Scatter-Cl9HCvCl.js";import{E as e}from"./ErrorBar-CrXv2j6N.js";import{T as u}from"./Tooltip-k_OdOkyj.js";import{R as f}from"./RechartsHookInspector-D-0gsnbs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQPl6oVo.js";import"./arrayEqualityCheck-BMFJWZLR.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BXVR8Nu8.js";import"./immer-MYTD12gY.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTdRTt63.js";import"./hooks-XeIQ09GK.js";import"./axisSelectors-r3e8Ogcr.js";import"./d3-scale-Dig20Cak.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-zLQdFJPR.js";import"./renderedTicksSlice-CPjOMDMT.js";import"./CartesianChart-DiQ110-r.js";import"./chartDataContext-nbJQ4Evh.js";import"./CategoricalChart-BwOuhOYL.js";import"./CartesianAxis-OtzrWNBq.js";import"./Layer-B2y3FrWZ.js";import"./Text-Cn-CsKa2.js";import"./DOMUtils-C5ULhfnp.js";import"./Label-BpQxBJRP.js";import"./ZIndexLayer-k5HrhQv7.js";import"./types-D1G2vCVO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-NJgg5Z7A.js";import"./useAnimationId-UfrY9hCr.js";import"./Curve-BOvv8LQu.js";import"./step-BNKRdB7Z.js";import"./path-DyVhHtw_.js";import"./tooltipContext-bOmIOCj0.js";import"./Symbols-QSpHqNgA.js";import"./symbol-CRbTC08o.js";import"./ActiveShapeUtils-CkfODQkB.js";import"./RegisterGraphicalItemId-BXLg-7qN.js";import"./ErrorBarContext-FGV68ztp.js";import"./GraphicalItemClipPath-DJtNLijn.js";import"./SetGraphicalItem-CZCtNcvF.js";import"./CSSTransitionAnimate-ZApXrfjV.js";import"./useElementOffset-BcTVsJDN.js";import"./uniqBy-BXIpk_rG.js";import"./iteratee-BpH81eH_.js";import"./Cross-B-zZt1A_.js";import"./Rectangle-BRW7e3qr.js";import"./Sector-CZ_a1zY_.js";import"./index-BJloLEZI.js";import"./ChartSizeDimensions-BYrQZ-ie.js";import"./OffsetShower-adDhQ1RV.js";import"./PlotAreaShower-CsKiIBy8.js";const Ar={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
