import{R as r}from"./iframe-VTxubO5w.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CqVOvbV1.js";import{C as d}from"./CartesianGrid-BS6sRpzA.js";import{X as c}from"./XAxis-3pFA-Nf-.js";import{Y as y}from"./YAxis-bVdfj-ty.js";import{S as h}from"./Scatter-5S64JLCs.js";import{E as e}from"./ErrorBar-lhUO23ks.js";import{T as u}from"./Tooltip-CJw6oxVP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bsatjkvb.js";import"./zIndexSlice-BFYFcuFW.js";import"./throttle-Bj7f8bZe.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CvnfJ2AM.js";import"./d3-scale-BMdsVvRJ.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./index-1-3dFAhM.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";import"./CartesianAxis-C-En2Edk.js";import"./Layer-D1MCI5Ak.js";import"./Text-uR2Yj3PM.js";import"./DOMUtils-BAN1xftN.js";import"./useId-DFmSC7ae.js";import"./useBackwardsCompatibleTheme-BYtc2o9v.js";import"./Label-DNcqVwFA.js";import"./ZIndexLayer-NKRjvkpW.js";import"./types-CDzvAUga.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-YcLJd9jr.js";import"./useAnimationId-DPVDnlp2.js";import"./Curve-CMYEPk4H.js";import"./step-Bhzd0PV7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-IUJpGMFY.js";import"./Symbols-mnsValfd.js";import"./symbol-v33gieij.js";import"./ActiveShapeUtils-DG8apj0w.js";import"./RegisterGraphicalItemId-BW5kojHS.js";import"./ErrorBarContext-BlpBbu3_.js";import"./GraphicalItemClipPath-qDNJ-tN3.js";import"./SetGraphicalItem-BqDT3cr3.js";import"./useGraphicalItemIdentity-jWQRhRf0.js";import"./dataEntryStyles-DvC98tT9.js";import"./CSSTransitionAnimate-DoyjWeBp.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D-QmICBX.js";import"./uniqBy-Ch5xiMZc.js";import"./iteratee-M9ugrzAI.js";import"./Cross-DWlfjqmz.js";import"./Rectangle-C-w4cEpw.js";import"./Sector-BJkHM4IA.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
