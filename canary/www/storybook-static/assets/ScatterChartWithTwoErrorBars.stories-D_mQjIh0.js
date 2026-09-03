import{R as r}from"./iframe-DUU2nC7E.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-Cjb-Yrl4.js";import{C as d}from"./CartesianGrid-CxXvCrqh.js";import{X as c}from"./XAxis-C5ZNeLXM.js";import{Y as y}from"./YAxis-Ba7XqdaR.js";import{S as h}from"./Scatter-Cwpds100.js";import{E as e}from"./ErrorBar-BlkkwvCK.js";import{T as u}from"./Tooltip-BGrHqXpU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DlUPtncW.js";import"./zIndexSlice-B1qxAnWW.js";import"./throttle-DU8m77oh.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./isWellBehavedNumber-QUwuvSMb.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-oYeY2Mwn.js";import"./d3-scale-cKq8MwgY.js";import"./index-By0b-RMY.js";import"./index-BLrpc9iL.js";import"./renderedTicksSlice-CQmIW09G.js";import"./index-eVEWj-zV.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./CartesianAxis-D6Xv7Kst.js";import"./Layer-CpTHNZLk.js";import"./Text-Dq73j3Z8.js";import"./DOMUtils-CWtn717I.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./Label-BpgemmXF.js";import"./ZIndexLayer-09JGIcjO.js";import"./types-D26lJf4n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CtOvBSOT.js";import"./useAnimationId-Hor1kczP.js";import"./Curve-Dejht0kU.js";import"./step-DsOIwvhZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BeWmmBgM.js";import"./Symbols-BDrFNT0n.js";import"./symbol-66LGfBly.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./ErrorBarContext-ql3O-cNM.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-k1H2pLco.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CVQocJ2R.js";import"./uniqBy-BjaaEqQ9.js";import"./iteratee-DLKh6RnP.js";import"./Cross-E50swgB7.js";import"./Rectangle-B0PZq1UN.js";import"./Sector-otXYrezk.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
