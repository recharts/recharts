import{R as r}from"./iframe-DFlWwuKT.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Djh10mFO.js";import{C as d}from"./CartesianGrid-D6qo-7gd.js";import{X as c}from"./XAxis-9-A5V75m.js";import{Y as y}from"./YAxis-BS_00hSs.js";import{S as h}from"./Scatter-C4Ds9rzD.js";import{E as e}from"./ErrorBar-MJk_lR64.js";import{T as u}from"./Tooltip-mMsmfM8-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CGvYSOfx.js";import"./zIndexSlice-DTl3Es75.js";import"./throttle-D8jnmLcF.js";import"./index-BUYqSBiu.js";import"./index-ClU2ON40.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C-JEXzOC.js";import"./isWellBehavedNumber-SARVqwHy.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DjksfEx4.js";import"./d3-scale--iSGTKPS.js";import"./index-L-g3VAbm.js";import"./index-xbsAyBNd.js";import"./renderedTicksSlice-CCjZBqyR.js";import"./index-DATKdWyT.js";import"./CartesianChart-DW2e8sMm.js";import"./chartDataContext-BIDgL1iJ.js";import"./CategoricalChart-B-7TRfVL.js";import"./CartesianAxis-C9eM4ktZ.js";import"./Layer-URuQnAjL.js";import"./Text-7kqB13RI.js";import"./DOMUtils-CYU7OgfG.js";import"./useId-CRaXWjDX.js";import"./useBackwardsCompatibleTheme-DQ42sPpY.js";import"./Label-Cg_hrWdd.js";import"./ZIndexLayer-DHVkI8jl.js";import"./types-BOBvmLK9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B-WGLUSk.js";import"./useAnimationId-mTQIyJO-.js";import"./Curve-BoAyROId.js";import"./step-DPc2nVCG.js";import"./path-DyVhHtw_.js";import"./tooltipContext-TLSQWpDr.js";import"./Symbols-CApAx5hI.js";import"./symbol-D6xFDwvn.js";import"./ActiveShapeUtils-B5PusxhY.js";import"./RegisterGraphicalItemId-Dc_pYr9G.js";import"./ErrorBarContext-DzGj33gU.js";import"./GraphicalItemClipPath-DvdfNGh6.js";import"./SetGraphicalItem-B77033X0.js";import"./useGraphicalItemIdentity-w3ZvPmOP.js";import"./CSSTransitionAnimate-Cgwkq-5U.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CApEq3WG.js";import"./uniqBy-CT4IUB8Q.js";import"./iteratee-DCytidek.js";import"./Cross-C-bHzLRH.js";import"./Rectangle-BQPyv6_x.js";import"./Sector-CK7yeWYX.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
