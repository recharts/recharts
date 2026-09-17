import{R as r}from"./iframe-CChz1bjN.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-D1fwiGnc.js";import{C as d}from"./CartesianGrid-CS5NuRyi.js";import{X as c}from"./XAxis-Dz7Mu1Ti.js";import{Y as y}from"./YAxis-D3lxiiSv.js";import{S as h}from"./Scatter-BbBA1-sG.js";import{E as e}from"./ErrorBar-CqzIIkgp.js";import{T as u}from"./Tooltip-BMykeu_V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChebgGg6.js";import"./zIndexSlice-J8dqmnLP.js";import"./throttle-DthdhVSw.js";import"./index-CoE7QQC7.js";import"./index-CtYYpEHs.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJguzPnh.js";import"./isWellBehavedNumber-PtazZpkz.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Bb5mJC8T.js";import"./d3-scale-DDBYxdkW.js";import"./index-CFolhqr8.js";import"./index-By2IEA6Z.js";import"./renderedTicksSlice-CR60wYV2.js";import"./index-DDJfRyTp.js";import"./CartesianChart-DkExCOrE.js";import"./chartDataContext-QAaM8qFu.js";import"./CategoricalChart-9EjbSGzt.js";import"./CartesianAxis-DfCGaEVk.js";import"./Layer-CvQSqWng.js";import"./Text-BrAnNoDm.js";import"./DOMUtils--GcIornt.js";import"./useId-K9oYYmyx.js";import"./useBackwardsCompatibleTheme-BGpxY7da.js";import"./Label-BPWxH0ZN.js";import"./ZIndexLayer-CPJzWnIR.js";import"./types-7thkXqxr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BIr5SWwF.js";import"./useAnimationId-q2i8nWUT.js";import"./Curve-QJYhnBl8.js";import"./step-BINpEDE3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-T5Np760b.js";import"./Symbols-BdWwIbai.js";import"./symbol-CytgmwlT.js";import"./ActiveShapeUtils-DRMRiarj.js";import"./RegisterGraphicalItemId-Bv9eLHhO.js";import"./ErrorBarContext-DOiMkOOX.js";import"./GraphicalItemClipPath-Dod_0DGM.js";import"./SetGraphicalItem-N_7Gn5e1.js";import"./useGraphicalItemIdentity-DNZCCG3V.js";import"./CSSTransitionAnimate-CNT3bBtW.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DnV8f39A.js";import"./uniqBy-CPev9fIs.js";import"./iteratee-Bo1K-GJU.js";import"./Cross-DBaaGir1.js";import"./Rectangle-DohuQVgo.js";import"./Sector-B3gLyYgB.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
