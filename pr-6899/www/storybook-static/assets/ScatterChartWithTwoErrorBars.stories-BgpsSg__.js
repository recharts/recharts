import{e as r}from"./iframe-DVbcaGEk.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-BAFhJPLY.js";import{C as d}from"./CartesianGrid-BC7g-EtZ.js";import{X as c}from"./XAxis-3cZu4ol_.js";import{Y as y}from"./YAxis-C7ETLAW_.js";import{S as h}from"./Scatter-DM-AOBnL.js";import{E as e}from"./ErrorBar-BT9zPk9R.js";import{T as u}from"./Tooltip-COhbepB5.js";import{R as f}from"./RechartsHookInspector-CNkljFSC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CI_kVB3D.js";import"./arrayEqualityCheck-D_Ccs7mG.js";import"./resolveDefaultProps-BvhwmIy1.js";import"./PolarUtils-BCmS2GQK.js";import"./hooks-DrJQ9o1U.js";import"./axisSelectors-Dq8ysKg7.js";import"./zIndexSlice-C3Z2iJoi.js";import"./CartesianChart-DwoXLAKx.js";import"./chartDataContext-BHEPpTwp.js";import"./CategoricalChart-DaQkrRKt.js";import"./CartesianAxis-DJav8QwX.js";import"./Layer-CTeRo74K.js";import"./Text-BnUgu-YX.js";import"./DOMUtils-C3Nevwge.js";import"./Label-Vy4t0U1x.js";import"./ZIndexLayer-DQcVBq3k.js";import"./types-glyr-q7x.js";import"./ReactUtils-PeKnJ7eE.js";import"./Curve-DRY3YzYB.js";import"./tooltipContext-7-acIv96.js";import"./Symbols-D0zgYynQ.js";import"./ActiveShapeUtils-CQxGvOB9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CDg01dVF.js";import"./useAnimationId-BsgPO1Qj.js";import"./Trapezoid-_bdwRMqG.js";import"./Sector-D5CuENkF.js";import"./RegisterGraphicalItemId-sqkoY2pX.js";import"./ErrorBarContext-BcI0a9d6.js";import"./GraphicalItemClipPath-58Cq7fMH.js";import"./SetGraphicalItem-CMkDLn5I.js";import"./CSSTransitionAnimate-BDa7IpQz.js";import"./useElementOffset-BihE1waz.js";import"./iteratee-BDIycRH5.js";import"./Cross-C3FT44Tn.js";import"./index-BAtGFOnL.js";import"./ChartSizeDimensions-B0rnWoCy.js";import"./OffsetShower-DI4Pwzeh.js";import"./PlotAreaShower-CPYGkOSs.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
