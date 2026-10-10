import{R as r}from"./iframe-CMIMGlWj.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-XWRGb08h.js";import{C as d}from"./CartesianGrid-3hhx0pRp.js";import{X as c}from"./XAxis-D-eD-ZKH.js";import{Y as y}from"./YAxis-QT5bDNHN.js";import{S as h}from"./Scatter-DVLwSgL2.js";import{E as e}from"./ErrorBar-jJNAI1Zq.js";import{T as u}from"./Tooltip-Bfyf8YiS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./zIndexSlice-wuzXiITR.js";import"./throttle-BCA5qR4E.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Bmc6RJCp.js";import"./d3-scale-CuGTTQPB.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./renderedTicksSlice-C4raIVaG.js";import"./index-C3fJL_AW.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./Label-BNdyp9o_.js";import"./ZIndexLayer-D_EAZsge.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BjpwlZ4G.js";import"./useAnimationId-x76x2OiL.js";import"./Curve-D4pLn_ye.js";import"./step-C3qFiRpn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-A6E9dtvS.js";import"./Symbols-BGbhxLkB.js";import"./symbol-B2_p0roD.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./dataEntryStyles-TQ5R--o5.js";import"./ErrorBarContext-qJfLExSm.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";import"./CSSTransitionAnimate-BrU9nj7E.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BFwzirRX.js";import"./uniqBy-DsRHxoCo.js";import"./iteratee-Xpq30y0i.js";import"./Cross-pntYxpiG.js";import"./Rectangle-BZX9uaas.js";import"./Sector-DirISh84.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
