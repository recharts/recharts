import{R as r}from"./iframe-DyRGY0m8.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DbBRdT5N.js";import{C as d}from"./CartesianGrid-BKYufXor.js";import{X as c}from"./XAxis-ClyuyVSJ.js";import{Y as y}from"./YAxis-CiOcUDSR.js";import{S as h}from"./Scatter-DEadOI67.js";import{E as e}from"./ErrorBar-CDhhw9le.js";import{T as u}from"./Tooltip-CwG5nFhr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-eOw39y0P.js";import"./zIndexSlice-C8Goqaoo.js";import"./throttle-D2TCso2q.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DJKcPqvS.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./CartesianAxis-C3YZMA4b.js";import"./Layer-Cn0quWvc.js";import"./Text-BK2IfBRh.js";import"./pageBackground-BnJW5YJX.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./Label-DmSSoRs6.js";import"./ZIndexLayer-CELDjLLn.js";import"./types-vbUeFItv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B4s4aHQH.js";import"./useAnimationId-DVRsp9Ga.js";import"./Curve-BnhnBI5K.js";import"./step-Dnl3MITN.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CrfpOag7.js";import"./Symbols-B9mIS2TB.js";import"./symbol-CPUUWFC3.js";import"./ActiveShapeUtils-DW6rbsEP.js";import"./dataEntryStyles-BSCSOZbL.js";import"./ErrorBarContext-CkmAHEEl.js";import"./GraphicalItemClipPath-CzHoeJLu.js";import"./SetGraphicalItem-C2wvR06e.js";import"./useGraphicalItemIdentity-CI8fdYZe.js";import"./CSSTransitionAnimate-FLLVAclr.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-fQu1PDa3.js";import"./uniqBy-GFY-aWot.js";import"./iteratee-wH6oTw1B.js";import"./Cross-BadjxkMM.js";import"./Rectangle-Dw0JBNRA.js";import"./Sector-DUOxujmX.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
