import{R as r}from"./iframe-ChR0bWJE.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DivI6SRT.js";import{C as d}from"./CartesianGrid-CJXtM4Q6.js";import{X as c}from"./XAxis-DMWQS67d.js";import{Y as y}from"./YAxis-CGpwp8Ub.js";import{S as h}from"./Scatter-CRnhrald.js";import{E as e}from"./ErrorBar-v4qmwL3Z.js";import{T as u}from"./Tooltip-Bkfw7jzk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcESOjG2.js";import"./zIndexSlice-BhLIr8Wn.js";import"./throttle-DlIXztO0.js";import"./index-DG8BxRhE.js";import"./index-B9kAIK4B.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDJR-IFM.js";import"./isWellBehavedNumber-v660MqsB.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-D10lFE-B.js";import"./d3-scale-Be-Yls2-.js";import"./index-C2XNNLS0.js";import"./index-CIRFvFA-.js";import"./renderedTicksSlice-DGFTmoGv.js";import"./index-4WBQ6tEH.js";import"./CartesianChart-Csbt_4F2.js";import"./chartDataContext-B7Ty1jH-.js";import"./CategoricalChart-e5ydFkpC.js";import"./CartesianAxis-ColQ2GQs.js";import"./Layer-sRcONOkX.js";import"./Text-C-MZlV37.js";import"./pageBackground-Ck_Bl7JJ.js";import"./useId-Boe0dqcZ.js";import"./useBackwardsCompatibleTheme-vM76QVPo.js";import"./Label-6wqjlAjr.js";import"./ZIndexLayer-WvB5637-.js";import"./types-Db9gT7h1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Dl6zrhPi.js";import"./useAnimationId-rUKK14dF.js";import"./dataEntryStyles-dyS1ZoD1.js";import"./Curve-CCeOu5Un.js";import"./step-BH3hwvXb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D7S4suB5.js";import"./Symbols-crxZ1UiM.js";import"./symbol-kvahnOWs.js";import"./ActiveShapeUtils-DUs_pJxd.js";import"./ErrorBarContext-BeGWE2lF.js";import"./GraphicalItemClipPath-C95rKyMf.js";import"./SetGraphicalItem-AEMUK-yG.js";import"./useEffectiveDataKey-DlXPwpKd.js";import"./CSSTransitionAnimate-D5_3LrDk.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DJkk5NRy.js";import"./uniqBy-D8tZ5Ja2.js";import"./iteratee-BlHCl97E.js";import"./Cross-BhKpEJ2j.js";import"./Rectangle-DhVq85Wn.js";import"./Sector-D0eICGeV.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
