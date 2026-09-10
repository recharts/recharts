import{R as r}from"./iframe-D-sDuIqM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CmeRlnuv.js";import{C as d}from"./CartesianGrid-CXK2QrMX.js";import{X as c}from"./XAxis-C9qauAI0.js";import{Y as y}from"./YAxis-C3R1kIjz.js";import{S as h}from"./Scatter-DwnpPutt.js";import{E as e}from"./ErrorBar-cocfhkQW.js";import{T as u}from"./Tooltip-Ba02LnDa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BR0dPwJa.js";import"./zIndexSlice-DkRDAG1K.js";import"./throttle-BwwGSoU-.js";import"./index-DOwSNtIW.js";import"./index-D-ZcLjnp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DRUr7G4m.js";import"./isWellBehavedNumber-n1fKw3Ik.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CcFzWzBk.js";import"./d3-scale-D2yJqL8j.js";import"./index-sXSxEpdM.js";import"./index-DlgBIkPT.js";import"./renderedTicksSlice-DoL3t7Bc.js";import"./index-Dfhf8xit.js";import"./CartesianChart-ZdAO4m3f.js";import"./chartDataContext-DR95QKXv.js";import"./CategoricalChart-Bvu_kn7d.js";import"./CartesianAxis-Bbla4SrJ.js";import"./Layer-C3zxw81n.js";import"./Text-cGP75sAD.js";import"./DOMUtils-BlK1UfYz.js";import"./useId-DJy_IGRL.js";import"./useBackwardsCompatibleTheme-Bt2NRZPB.js";import"./Label-mzqnfF5y.js";import"./ZIndexLayer-Dl5V_Hf6.js";import"./types-D7y8jC37.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CAyQvTlC.js";import"./useAnimationId-BdWTgj5e.js";import"./Curve-CiGjQv1I.js";import"./step-CSXkfkZq.js";import"./path-DyVhHtw_.js";import"./tooltipContext-FI4aLtaR.js";import"./Symbols-BZPRKGG7.js";import"./symbol-v3MbjgbN.js";import"./ActiveShapeUtils-B7KMSlGv.js";import"./RegisterGraphicalItemId-BpgvVZBx.js";import"./ErrorBarContext-COUU5Hme.js";import"./GraphicalItemClipPath-BqyJWtfu.js";import"./SetGraphicalItem-CoBxoWuP.js";import"./useGraphicalItemIdentity-CglCalgl.js";import"./CSSTransitionAnimate-fP0JM4iC.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CnzQeRxh.js";import"./uniqBy-B7ZujxYX.js";import"./iteratee-pAczANug.js";import"./Cross-CFjweDtM.js";import"./Rectangle-cVKynJUN.js";import"./Sector-Clw-GRhk.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
