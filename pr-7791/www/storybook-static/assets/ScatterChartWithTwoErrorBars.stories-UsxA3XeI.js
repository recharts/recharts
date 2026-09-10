import{R as r}from"./iframe-C3cMgs7N.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B8UCwjPE.js";import{C as d}from"./CartesianGrid-SbwHlYTA.js";import{X as c}from"./XAxis-FEXGRCPo.js";import{Y as y}from"./YAxis-CPQEML-M.js";import{S as h}from"./Scatter-DXXsGNhc.js";import{E as e}from"./ErrorBar-D22cS4PQ.js";import{T as u}from"./Tooltip-armKHNsC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BBL8LSCF.js";import"./zIndexSlice-D-L1krEw.js";import"./throttle-CwKbnzuB.js";import"./index-mPjB9LZ5.js";import"./index-DWDQXKDL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-VIGlyQ4Q.js";import"./isWellBehavedNumber-loxwPj_L.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CyFo4akS.js";import"./d3-scale-D9HAsSWg.js";import"./index-iS8UOd73.js";import"./index-CbpSVjN5.js";import"./renderedTicksSlice-BLxMgK4j.js";import"./index-CK2o4ASw.js";import"./CartesianChart-BYHp5epD.js";import"./chartDataContext-CUGiPJA1.js";import"./CategoricalChart-BrdbHA9J.js";import"./CartesianAxis-Cm_mWvUj.js";import"./Layer-B4ssOgoe.js";import"./Text-BJKUimah.js";import"./DOMUtils-DEPBoe7u.js";import"./useId-B00C84E0.js";import"./useBackwardsCompatibleTheme-yxpwTzAk.js";import"./Label-p42oyH6O.js";import"./ZIndexLayer-Beq1j20z.js";import"./types-BRZWQnVt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CeXZD4iR.js";import"./useAnimationId-Bsfqf9JH.js";import"./Curve-Cd2PH3uW.js";import"./step-BchzuBRK.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cv7XVnGl.js";import"./Symbols-DFH8MDwp.js";import"./symbol-Cl7JEJ3q.js";import"./ActiveShapeUtils-CBqTe_nx.js";import"./RegisterGraphicalItemId-Ce557wgI.js";import"./ErrorBarContext-Bcyk1pto.js";import"./GraphicalItemClipPath-6iwmqxiy.js";import"./SetGraphicalItem-NnzstWhO.js";import"./useGraphicalItemIdentity-BrYniqkC.js";import"./CSSTransitionAnimate-CnTL6vhj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C6z2yXVE.js";import"./uniqBy-D9evTCTx.js";import"./iteratee-DQXLPY2T.js";import"./Cross-C79SN9P2.js";import"./Rectangle-CfdBkyVH.js";import"./Sector-31CjT2g4.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
