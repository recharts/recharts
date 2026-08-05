import{R as r}from"./iframe-Cimk_otj.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DqHOKrsT.js";import{C as d}from"./CartesianGrid-BuEh-2En.js";import{X as c}from"./XAxis-ByDDt0Jf.js";import{Y as y}from"./YAxis-Bv-UC-Jk.js";import{S as h}from"./Scatter-2Z7_TM-2.js";import{E as e}from"./ErrorBar-CLyOgfov.js";import{T as u}from"./Tooltip-iHYM4Kfb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./zIndexSlice-CzTLX9Ul.js";import"./throttle-QmRScbE8.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./axisSelectors-BjpwO9gg.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./CartesianAxis-GRhBxYn8.js";import"./Layer-CCEBq6CR.js";import"./Text-qgns90rX.js";import"./DOMUtils-702B5NVq.js";import"./Label-DQCQB4o-.js";import"./ZIndexLayer-DKEQN7E1.js";import"./types-BP4gFlyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-tyjZKRCa.js";import"./useAnimationId-CWH9KLrM.js";import"./Curve-VqOwF4YW.js";import"./step-CBLStXIf.js";import"./path-DyVhHtw_.js";import"./tooltipContext-8Ba7jCsa.js";import"./Symbols-BWwzL4bj.js";import"./symbol-D3PRm8fB.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./ErrorBarContext-BNzrl5kL.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./CSSTransitionAnimate-BaPL4Hy8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";import"./Cross-DMlRKkj6.js";import"./Rectangle-CgoJ-bg6.js";import"./Sector-BivCzjVW.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
