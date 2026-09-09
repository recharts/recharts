import{R as r}from"./iframe-JwbLQPb2.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B4Qy-Rft.js";import{C as d}from"./CartesianGrid-ChdA-PG8.js";import{X as c}from"./XAxis-CM1shXvI.js";import{Y as y}from"./YAxis-CMNQVrMb.js";import{S as h}from"./Scatter-BCJz5Tg_.js";import{E as e}from"./ErrorBar-B9jL3wC1.js";import{T as u}from"./Tooltip-ggRRLF2Q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./zIndexSlice-BvSjVeUr.js";import"./throttle-CQOjkZLn.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./isWellBehavedNumber-CdOzsQhH.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Bl-g05pj.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./CartesianAxis-DEricmMP.js";import"./Layer-BUVs9FF0.js";import"./Text-DYIo7N8x.js";import"./DOMUtils-CGRWukjT.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./Label-C9oG4jkb.js";import"./ZIndexLayer-B1cjmDJz.js";import"./types-BXkOLLZ5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Di0vnHT_.js";import"./useAnimationId-DNb0w9mF.js";import"./Curve-v4EbeP27.js";import"./step-8eqj28j5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CF5gWW1v.js";import"./Symbols-Cchs_XVF.js";import"./symbol-Q_pfoSEH.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./ErrorBarContext-DLKn1BJH.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C6ZNN5ie.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BYV602LJ.js";import"./uniqBy-DWoTTWdi.js";import"./iteratee-DxP2qSYe.js";import"./Cross-Berlx-JC.js";import"./Rectangle-CfutVei8.js";import"./Sector-CkizDHcj.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
