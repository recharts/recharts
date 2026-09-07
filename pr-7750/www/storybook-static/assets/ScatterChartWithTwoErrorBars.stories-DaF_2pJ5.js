import{R as r}from"./iframe-s76JLJT4.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C0_SVTeS.js";import{C as d}from"./CartesianGrid-BPGidQVt.js";import{X as c}from"./XAxis-oY-MxrDT.js";import{Y as y}from"./YAxis-Dp0QA8yk.js";import{S as h}from"./Scatter-BZpMILnA.js";import{E as e}from"./ErrorBar-BkKPeJey.js";import{T as u}from"./Tooltip-CV4gO8AH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CzmQgFdw.js";import"./zIndexSlice-BAzWj5Bm.js";import"./throttle-DlYzKYH1.js";import"./index-D791KxLc.js";import"./index-u4HpiE5R.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BacpidNF.js";import"./isWellBehavedNumber-BfAJeodP.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BVRh__it.js";import"./d3-scale-3iO39mKP.js";import"./index-BP9e58dC.js";import"./index-5KrtyyBx.js";import"./renderedTicksSlice-YO-Fp9Ef.js";import"./index-v7GV83G6.js";import"./CartesianChart-BHvBdOos.js";import"./chartDataContext-heFiBO7H.js";import"./CategoricalChart-Bnpv8dk8.js";import"./CartesianAxis-wofyjDXK.js";import"./Layer-S_x0F8ws.js";import"./Text-B6LThSxq.js";import"./DOMUtils-duej-PH-.js";import"./useId-DWgk4q6e.js";import"./useBackwardsCompatibleTheme-C6S0KGB6.js";import"./Label-BK0AZvtz.js";import"./ZIndexLayer-RER6T0Dj.js";import"./types-B1A5enlV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DJi7GpYq.js";import"./useAnimationId-Co4tnqM8.js";import"./Curve-q_CY-4KJ.js";import"./step-zmbHrnqa.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DkwIY1lu.js";import"./Symbols-DXxFQ5Re.js";import"./symbol-Bivf0Ccg.js";import"./ActiveShapeUtils-CMuKiAIO.js";import"./RegisterGraphicalItemId-CojxeIbK.js";import"./ErrorBarContext-DjrrsITr.js";import"./GraphicalItemClipPath-4yehoiu3.js";import"./SetGraphicalItem-jdZDqL_N.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DdUEz8oM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BEqwyN49.js";import"./uniqBy-Cdtb4h_K.js";import"./iteratee-C2acX8LZ.js";import"./Cross-v4KNwmm3.js";import"./Rectangle-B7G5cTce.js";import"./Sector-Sh4f_eZn.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
