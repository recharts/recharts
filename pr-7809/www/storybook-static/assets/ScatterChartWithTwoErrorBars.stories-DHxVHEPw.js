import{R as r}from"./iframe-Dv0y1gpD.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DoLX0fNO.js";import{C as d}from"./CartesianGrid-55hsH-2z.js";import{X as c}from"./XAxis-DC1yM-4Y.js";import{Y as y}from"./YAxis-Bad4LtVV.js";import{S as h}from"./Scatter-CZ1ZfYd8.js";import{E as e}from"./ErrorBar-Bj6fS8um.js";import{T as u}from"./Tooltip-cQbAJuRP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DBZPU8BT.js";import"./zIndexSlice-Dcg1qyEP.js";import"./throttle-DRnb1olJ.js";import"./index-CDdFi7FD.js";import"./index-CuUTphOp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BSnMxCtb.js";import"./isWellBehavedNumber-CSH4eNbA.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CWVN05a4.js";import"./d3-scale-C1I5bktH.js";import"./index-C_-lX3o6.js";import"./index-L6ZabEtj.js";import"./renderedTicksSlice-BROtRsGC.js";import"./index-D08948xk.js";import"./CartesianChart-By9n1b2a.js";import"./chartDataContext-BgIF_Hcs.js";import"./CategoricalChart-CsjQZa1B.js";import"./CartesianAxis-XZ9E7gxq.js";import"./Layer-BhVcBCwc.js";import"./Text-yCn_2ASS.js";import"./DOMUtils-BDbpPHw_.js";import"./useId-CIoPvc9K.js";import"./useBackwardsCompatibleTheme-D_XOd78A.js";import"./Label-BjJ47aqL.js";import"./ZIndexLayer-DKxKOknR.js";import"./types-DPFKMWXW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DuOoJz7j.js";import"./useAnimationId-CIZ8sAVQ.js";import"./Curve-BcMDBBzU.js";import"./step-CmmDeSbO.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CptT7C_U.js";import"./Symbols-Bx_FRGYv.js";import"./symbol-DeK-e7tj.js";import"./ActiveShapeUtils-Du3md58W.js";import"./RegisterGraphicalItemId-Cct8Dhhi.js";import"./ErrorBarContext-W61HXda7.js";import"./GraphicalItemClipPath-C2A6ObbO.js";import"./SetGraphicalItem-bcdkfO_p.js";import"./useGraphicalItemIdentity-DxPaTWc4.js";import"./CSSTransitionAnimate-owdf-9Jl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Ck17hGtu.js";import"./uniqBy-DBrVusL1.js";import"./iteratee-DAD7IavB.js";import"./Cross-DNPJlbtn.js";import"./Rectangle-CBwgxWI1.js";import"./Sector-yhDp5fID.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
