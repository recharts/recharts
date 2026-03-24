import{e as r}from"./iframe-Cq-B9b4f.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-D0TeLDax.js";import{C as d}from"./CartesianGrid-CTonN2-w.js";import{X as c}from"./XAxis-mkVuJ6ru.js";import{Y as y}from"./YAxis-BDd-_fe4.js";import{S as h}from"./Scatter-lwKn8H8i.js";import{E as e}from"./ErrorBar-Cw8O9aA5.js";import{T as u}from"./Tooltip-CL5MU8bL.js";import{R as f}from"./RechartsHookInspector-TtpIOyZU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChVZ2Oxv.js";import"./arrayEqualityCheck-CUWGBawt.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DhciczEd.js";import"./immer-BjLhSv_k.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BFFNc0YW.js";import"./hooks-QDD28VjS.js";import"./axisSelectors-BgfEPtN4.js";import"./d3-scale-CWQsdIsg.js";import"./zIndexSlice-Di_upqq6.js";import"./renderedTicksSlice-Bgy9EKjI.js";import"./CartesianChart-Dc8WF-dR.js";import"./chartDataContext-0fGuXHUE.js";import"./CategoricalChart-ByiniKNN.js";import"./CartesianAxis-DaBzYhAa.js";import"./Layer-D-rMBlaW.js";import"./Text-rY40w2fD.js";import"./DOMUtils-06HVeAr7.js";import"./Label-BzBxAWSn.js";import"./ZIndexLayer-DheZEBBb.js";import"./types--yHmHFNL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DE2SzpPB.js";import"./Curve-CYxX35BT.js";import"./step-DUU-NJz1.js";import"./tooltipContext-huFtfy2L.js";import"./Symbols-cf93Ahow.js";import"./symbol-BzYV9rTp.js";import"./ActiveShapeUtils-BlQ6Z5B2.js";import"./isPlainObject-uQm6Hr4Y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6bO7r_4r.js";import"./useAnimationId-DXcWRCnH.js";import"./Trapezoid-B2U15woU.js";import"./Sector-C1hvtgaN.js";import"./RegisterGraphicalItemId-paQBjngI.js";import"./ErrorBarContext-DspuidON.js";import"./GraphicalItemClipPath-CioYfDga.js";import"./SetGraphicalItem-CTMfJU_s.js";import"./CSSTransitionAnimate-DRBqsjVS.js";import"./useElementOffset-CQHv_tMB.js";import"./uniqBy-DHLSwk0M.js";import"./iteratee-g41Mu7yT.js";import"./Cross-CvbC_6GN.js";import"./index-DJG8mPG-.js";import"./ChartSizeDimensions-BkgXq5jD.js";import"./OffsetShower-D2w7QLxq.js";import"./PlotAreaShower-CD-Amm5T.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
