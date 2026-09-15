import{R as r}from"./iframe-tthEZROf.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-gGxSjIq5.js";import{C as d}from"./CartesianGrid-B43r-LYt.js";import{X as c}from"./XAxis-Bbu_Ekv_.js";import{Y as y}from"./YAxis-KrW21LMm.js";import{S as h}from"./Scatter-CMba_3nJ.js";import{E as e}from"./ErrorBar-BspAjcK1.js";import{T as u}from"./Tooltip-DyGDdvsZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTnk9UBm.js";import"./zIndexSlice-x-BIVIBz.js";import"./throttle-DytOPEyf.js";import"./index-DkFq0gE6.js";import"./index-oZ0OTb3C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps--ww6vB9W.js";import"./isWellBehavedNumber-CJmmz2h5.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CCMb6f1X.js";import"./d3-scale-De6zhOSb.js";import"./index-BVTzxVB3.js";import"./index-CqetqEae.js";import"./renderedTicksSlice-CpQrC_np.js";import"./index-DkBTTuWT.js";import"./CartesianChart-DQWCoQde.js";import"./chartDataContext-D6MYvejF.js";import"./CategoricalChart-BHtoZx7C.js";import"./CartesianAxis-CWFnwULO.js";import"./Layer-B-lEtj28.js";import"./Text-Cxp0AK4z.js";import"./DOMUtils-CUwo8lte.js";import"./useId-5DCloKRu.js";import"./useBackwardsCompatibleTheme-p9GfZJFz.js";import"./Label-43myQ-K3.js";import"./ZIndexLayer-3Td9gWAI.js";import"./types-DSfbGXGs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D4IOxZdb.js";import"./useAnimationId-DDIADmfd.js";import"./Curve-SLfcRw16.js";import"./step-BTKEfH_z.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CV5KqM6S.js";import"./Symbols-DaT7FtPk.js";import"./symbol-DH-R-VAg.js";import"./ActiveShapeUtils--TNHR6BT.js";import"./RegisterGraphicalItemId-3Sw_ADlZ.js";import"./ErrorBarContext-DMolzGnE.js";import"./GraphicalItemClipPath-CGwPa5y8.js";import"./SetGraphicalItem-DjBM1G-g.js";import"./useGraphicalItemIdentity-C5skwmjT.js";import"./CSSTransitionAnimate-CigoaH8j.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CHhkCNTB.js";import"./uniqBy-OYgoWVS3.js";import"./iteratee-BwpdS3Kb.js";import"./Cross-RUdD4q_P.js";import"./Rectangle-C1nwJrSX.js";import"./Sector-CAUb_Pxk.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
