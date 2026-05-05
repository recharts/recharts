import{e as r}from"./iframe-BBcCu4tW.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CXxydmx9.js";import{C as d}from"./CartesianGrid-BDIKwzaX.js";import{X as c}from"./XAxis-BPDxC347.js";import{Y as y}from"./YAxis-DRaUq3FE.js";import{S as h}from"./Scatter-ClyO7s7s.js";import{E as e}from"./ErrorBar-BD4V8aql.js";import{T as u}from"./Tooltip-Cog06_51.js";import{R as f}from"./RechartsHookInspector-BC_P3cZY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B_0gdr0q.js";import"./arrayEqualityCheck-CIoNRuby.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CnZaYM7o.js";import"./immer-B-ffdvVM.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B4OVM0gu.js";import"./hooks-BezqoFaW.js";import"./axisSelectors-DiO1RUhK.js";import"./d3-scale-wrbXHqm2.js";import"./zIndexSlice-CQ5dV6Tf.js";import"./renderedTicksSlice-qHXvxWkJ.js";import"./CartesianChart-CyTvOQNc.js";import"./chartDataContext-D3FIgu0K.js";import"./CategoricalChart-BMbsuZm1.js";import"./CartesianAxis-BamwTcDK.js";import"./Layer-BqjItK9e.js";import"./Text-x4pxLanI.js";import"./DOMUtils-BzbpMFLz.js";import"./Label-CVOeCU9m.js";import"./ZIndexLayer-C7yDhLaY.js";import"./types-BYSx98h-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CK6hPv_Y.js";import"./Curve-kTZvT6-S.js";import"./step-CTgfjT4Z.js";import"./tooltipContext-DgeciEmy.js";import"./Symbols-DeFezQUo.js";import"./symbol-dMCmyDlw.js";import"./ActiveShapeUtils-CnMsGTMX.js";import"./isPlainObject-ByEPh_9t.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-6s0YHElS.js";import"./useAnimationId-Cz7XNO3G.js";import"./Trapezoid-CCXIiWsl.js";import"./Sector-V-b8xmGp.js";import"./RegisterGraphicalItemId-zcKV7aTa.js";import"./ErrorBarContext-DHR2hShJ.js";import"./GraphicalItemClipPath-C4HnTmHF.js";import"./SetGraphicalItem-nt8-T9NJ.js";import"./CSSTransitionAnimate-CmUhLwsU.js";import"./useElementOffset-gHkkm38f.js";import"./uniqBy-9uTsqOQj.js";import"./iteratee-CO_ekqp4.js";import"./Cross-CrIYISw8.js";import"./index-DwDsLBsF.js";import"./ChartSizeDimensions-B3sIk0p_.js";import"./OffsetShower-CyfsTZlA.js";import"./PlotAreaShower-NtxTDk3F.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
