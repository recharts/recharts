import{R as r}from"./iframe-qT01O9Sv.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DaM_z5e3.js";import{C as d}from"./CartesianGrid-DadbDxyY.js";import{X as c}from"./XAxis-DvY9B2Zg.js";import{Y as y}from"./YAxis-BCysskQY.js";import{S as h}from"./Scatter-BKbcU5VN.js";import{E as e}from"./ErrorBar-Bfedjm_S.js";import{T as u}from"./Tooltip-AiEYy-5l.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5WR8ig5Z.js";import"./zIndexSlice-CQsHAgGp.js";import"./throttle-D76jGjFc.js";import"./index-CMK8nXr3.js";import"./index-CZve0KBd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLCbJ4OP.js";import"./isWellBehavedNumber-D5wQM5xZ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Ciilyz6p.js";import"./d3-scale-DNrxalK8.js";import"./index-Be2AoQLY.js";import"./index-DrjB0Jj4.js";import"./renderedTicksSlice-CJBkl3kj.js";import"./index-ej6C5682.js";import"./CartesianChart-WF9by-pK.js";import"./chartDataContext-Bb09oFLY.js";import"./CategoricalChart-DQ-LhVLQ.js";import"./CartesianAxis-CbAqj6_Z.js";import"./Layer-CgXLDOPB.js";import"./Text-DKzR6dpy.js";import"./DOMUtils-fvdo4GSp.js";import"./useId-CyAqziAf.js";import"./useBackwardsCompatibleTheme-BN2NPKue.js";import"./Label-dJvVWn2Q.js";import"./ZIndexLayer-D8adGQSs.js";import"./types-B4toHZjd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-ByVfA06q.js";import"./useAnimationId-CmZNawFJ.js";import"./Curve-C2aosV7t.js";import"./step-C8r8uJ0U.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BFuQYiBz.js";import"./Symbols-YlT03ITh.js";import"./symbol-CYGUKMjC.js";import"./ActiveShapeUtils-BBHh2Hrz.js";import"./RegisterGraphicalItemId-CjZ2fJX7.js";import"./ErrorBarContext-E3DYF7br.js";import"./GraphicalItemClipPath-FAcvdPD9.js";import"./SetGraphicalItem-BfkU9VdL.js";import"./useGraphicalItemIdentity-CvGdzJl8.js";import"./CSSTransitionAnimate-CAeCK_t9.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Di4iwNJj.js";import"./uniqBy-MLt6bSD7.js";import"./iteratee-B9dZ7gAN.js";import"./Cross-DHwJpB0V.js";import"./Rectangle-B3I4xX44.js";import"./Sector-CKf4KwL_.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
