import{R as r}from"./iframe-Cf4rQ-NM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DTax9kYo.js";import{C as d}from"./CartesianGrid-Dijd34fp.js";import{X as c}from"./XAxis-BIvdIl6o.js";import{Y as y}from"./YAxis-CNqs_HAY.js";import{S as h}from"./Scatter-IZhVBrv4.js";import{E as e}from"./ErrorBar-8j4CqOqH.js";import{T as u}from"./Tooltip-CMjrj-7d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BteUr7Vj.js";import"./zIndexSlice-DMD_kE2u.js";import"./throttle-B2HUKrsu.js";import"./index-BCa2sd2-.js";import"./index-DeMDRv06.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dge1pFTV.js";import"./isWellBehavedNumber-DGgr4zRD.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-9PR0sTvr.js";import"./d3-scale-Lc72VcRD.js";import"./index-xRR_iGj4.js";import"./index-1RjEuLS2.js";import"./renderedTicksSlice-CE9QQLn-.js";import"./index-BsaRhs6B.js";import"./CartesianChart-CpdyhfTD.js";import"./chartDataContext-Dx7ZG5X9.js";import"./CategoricalChart-BUsdXEus.js";import"./CartesianAxis-DkanQVq_.js";import"./Layer-Cw23EJyc.js";import"./Text-CI7nXg92.js";import"./pageBackground-ja8baDve.js";import"./useId-CX6V0BQ1.js";import"./useBackwardsCompatibleTheme-Beid_g9Z.js";import"./Label-DJuA9Y4I.js";import"./ZIndexLayer-DsOZ8kUq.js";import"./types-PE1Wk2R_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Do9UPxka.js";import"./useAnimationId-D_Che_T2.js";import"./dataEntryStyles-DPFF45fD.js";import"./Curve-Dr4UIWQ5.js";import"./step-Bcwq9xqU.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CEwAuDej.js";import"./Symbols-D5DJG6Nl.js";import"./symbol-B_S5I6Iq.js";import"./ActiveShapeUtils-BaLJZ67g.js";import"./ErrorBarContext-CaHoTzTO.js";import"./GraphicalItemClipPath-Dmqa19CH.js";import"./SetGraphicalItem-Dfb9XQen.js";import"./useEffectiveDataKey-BQAfbWh7.js";import"./CSSTransitionAnimate-C4WVm_Vr.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dl0LIsHj.js";import"./uniqBy-CYhaWn8Y.js";import"./iteratee-Dbg95qkm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-t70eUuc2.js";import"./Rectangle-B34jhTte.js";import"./Sector-BHuTuRcM.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
