import{R as r}from"./iframe-AEyLiqgG.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CDO73o3-.js";import{C as d}from"./CartesianGrid-BgTYhctZ.js";import{X as c}from"./XAxis-DSCoP0BT.js";import{Y as y}from"./YAxis-C0feA8qB.js";import{S as h}from"./Scatter-BoKGLXrW.js";import{E as e}from"./ErrorBar-DIqNtlNP.js";import{T as u}from"./Tooltip-3jx0z5GS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r-JuCoEl.js";import"./zIndexSlice-D63QIr0o.js";import"./throttle-Bat5tgt5.js";import"./index-C1HLBiKP.js";import"./index-DRegLE30.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DP3BTRCk.js";import"./isWellBehavedNumber-CgqhIRbA.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Drhca-__.js";import"./d3-scale-BLrrudvV.js";import"./index-qjC2aIyR.js";import"./index-BZWHGH__.js";import"./renderedTicksSlice-CAIsZf4o.js";import"./index-DlIzpnmQ.js";import"./CartesianChart-DnWnPxAf.js";import"./chartDataContext-D_5ADK7F.js";import"./CategoricalChart-h7ez30w9.js";import"./CartesianAxis-NrPVgzth.js";import"./Layer-vEMMDrrH.js";import"./Text-CjbzIRNa.js";import"./DOMUtils-D23knL3w.js";import"./useId-CE7L0gFR.js";import"./useBackwardsCompatibleTheme-BeLYcOfU.js";import"./Label-dgv50JbQ.js";import"./ZIndexLayer-CKKDdXeu.js";import"./types-C4U-Yuut.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Du4BhFIJ.js";import"./useAnimationId-DhGl4rOB.js";import"./Curve-XYWVXy9Z.js";import"./step-Dc7t_wqW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D88H2knB.js";import"./Symbols-CWkUHkI3.js";import"./symbol-XbD5iFXW.js";import"./ActiveShapeUtils-Cns3WvQL.js";import"./RegisterGraphicalItemId-CBHkDVSs.js";import"./ErrorBarContext-BCLiwnce.js";import"./GraphicalItemClipPath-TjZaHmNz.js";import"./SetGraphicalItem-D3eOc8Q8.js";import"./useGraphicalItemIdentity-Cs1UF85t.js";import"./CSSTransitionAnimate-C66X2co6.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-__RE1Pit.js";import"./uniqBy-DLTO14X5.js";import"./iteratee-Bm9lS3_Q.js";import"./Cross-jnN_tCXu.js";import"./Rectangle-4fa9PUqa.js";import"./Sector-Y0P_Mb4w.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
