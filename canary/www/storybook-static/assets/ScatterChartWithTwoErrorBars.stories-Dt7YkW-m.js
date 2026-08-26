import{R as r}from"./iframe-C2DTpPl5.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CISLQNuJ.js";import{C as d}from"./CartesianGrid-DJJFE6XR.js";import{X as c}from"./XAxis-BQlNmsKr.js";import{Y as y}from"./YAxis-Dd6HyrUG.js";import{S as h}from"./Scatter-DLhJw14N.js";import{E as e}from"./ErrorBar-BT7likEN.js";import{T as u}from"./Tooltip-DYSfubzK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbTeQzXN.js";import"./zIndexSlice-BA0v7Oer.js";import"./throttle-DTXNpE5t.js";import"./index-5V0YvSc1.js";import"./index-Cmgx4ukp.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D8zMOS_0.js";import"./isWellBehavedNumber-C10dxuDW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-b8OMPhKV.js";import"./index-PELgc84d.js";import"./axisSelectors-DI7xvKPh.js";import"./d3-scale-CRpbK976.js";import"./renderedTicksSlice-B1AYXvSw.js";import"./CartesianChart-DveAlEiH.js";import"./chartDataContext-zaCSk4E3.js";import"./CategoricalChart-9si9MCW4.js";import"./CartesianAxis-vCI6MyTM.js";import"./Layer-C1G5_il7.js";import"./Text-kmupVaPK.js";import"./DOMUtils-8MPdkl0j.js";import"./useId-CX7EaZRb.js";import"./useBackwardsCompatibleTheme-DFA95kD1.js";import"./Label-CwiguCux.js";import"./ZIndexLayer-BzV-OpAF.js";import"./types-C_I2Qi1-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-3hjUFG-5.js";import"./useAnimationId-en1pQLdR.js";import"./Curve-BQfn95_j.js";import"./step-BpdWCqp5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CWDhAN1_.js";import"./Symbols-BExf6FqW.js";import"./symbol-B2TgJ7r1.js";import"./ActiveShapeUtils-DeKqyUUr.js";import"./RegisterGraphicalItemId-7_0Fa0Or.js";import"./ErrorBarContext-DBVQitzE.js";import"./GraphicalItemClipPath-Q21k0d2A.js";import"./SetGraphicalItem-BC-u-qk6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DgH5dx8O.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-zoX8Bj2Z.js";import"./uniqBy-DPi6r0Q4.js";import"./iteratee-Qg6w15Mi.js";import"./Cross-Cy_CnH1y.js";import"./Rectangle-D3EFseWQ.js";import"./Sector-B8OeAdlI.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
