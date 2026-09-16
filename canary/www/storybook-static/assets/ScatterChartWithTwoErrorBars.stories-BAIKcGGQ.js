import{R as r}from"./iframe-DpsH3FWg.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BdmpSBUx.js";import{C as d}from"./CartesianGrid-_4K2ems4.js";import{X as c}from"./XAxis-D8_Sc658.js";import{Y as y}from"./YAxis-BVDotbGx.js";import{S as h}from"./Scatter-BQpsL3I8.js";import{E as e}from"./ErrorBar-CPUe4fe6.js";import{T as u}from"./Tooltip-B-xTPBdJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-WUMeUOBJ.js";import"./zIndexSlice-DpXR3r86.js";import"./throttle-pd_IuHQK.js";import"./index-nXowbRrq.js";import"./index-DYUXUABx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B653NMBN.js";import"./isWellBehavedNumber-CtQQO4KW.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Cnsws1ta.js";import"./d3-scale-Cs9sdONk.js";import"./index-CIajmslP.js";import"./index-DxSZbnRs.js";import"./renderedTicksSlice-DrH2a5-v.js";import"./index-CVZddw2l.js";import"./CartesianChart-C8K3fZMD.js";import"./chartDataContext-_uRDQIfr.js";import"./CategoricalChart-DsF0HvmF.js";import"./CartesianAxis-CWPiqkJL.js";import"./Layer-Btr6yg86.js";import"./Text-SIhZd4Wm.js";import"./DOMUtils-BqoTnLQ5.js";import"./useId-T5MCLwe8.js";import"./useBackwardsCompatibleTheme-Buw_TzFQ.js";import"./Label-3DC01MfC.js";import"./ZIndexLayer-DviGCp3_.js";import"./types-FBSj3Ggh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BAz_Z0dD.js";import"./useAnimationId-CkVnF8is.js";import"./Curve-CkFcG6My.js";import"./step-DUO82dEI.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CkYLS92J.js";import"./Symbols-saiSGD9Z.js";import"./symbol-C8mnB45c.js";import"./ActiveShapeUtils-DHwgxjaA.js";import"./RegisterGraphicalItemId-Byr_SbEj.js";import"./ErrorBarContext-Dy-Oq2cq.js";import"./GraphicalItemClipPath--FUz8cke.js";import"./SetGraphicalItem-eZDMBVc_.js";import"./useGraphicalItemIdentity-DH6n4cBQ.js";import"./CSSTransitionAnimate-ParG2YtR.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-eYeZo5wP.js";import"./uniqBy-BuW3nUeI.js";import"./iteratee-Burh-v8j.js";import"./Cross-CV91Ua2U.js";import"./Rectangle-B1vLC_1K.js";import"./Sector-BjUs49MP.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
