import{R as r}from"./iframe-CGBDVxE-.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BvfVt5z7.js";import{C as d}from"./CartesianGrid-Dzue6Pof.js";import{X as c}from"./XAxis-Ynp2iGfo.js";import{Y as y}from"./YAxis-CATKcxKg.js";import{S as h}from"./Scatter-DMeINv-W.js";import{E as e}from"./ErrorBar-5fv1tgCm.js";import{T as u}from"./Tooltip-B0x42Fjv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-R5wdE7Du.js";import"./zIndexSlice-Dcoi5C6v.js";import"./throttle-r4SgwsRS.js";import"./index-hboVxxbY.js";import"./index-DBtrqjyz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DFx1_FeE.js";import"./isWellBehavedNumber-BDUfwR7p.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DpEiq2v9.js";import"./d3-scale-BEr64TMX.js";import"./index-BIKEo4sh.js";import"./index-WvwT3848.js";import"./renderedTicksSlice-D93v-Tca.js";import"./index-DyBKUzQK.js";import"./CartesianChart-DkeZbNrD.js";import"./chartDataContext-BUzll-9F.js";import"./CategoricalChart-_qdlKxZa.js";import"./CartesianAxis-BmUJzq6P.js";import"./Layer-BQpheWca.js";import"./Text-DzBijb3H.js";import"./DOMUtils-D0ua0v6z.js";import"./useId-BXTAvIyb.js";import"./useBackwardsCompatibleTheme-B_EiPeE9.js";import"./Label-rN0i5HX0.js";import"./ZIndexLayer-BQMQ-79w.js";import"./types-ALxpiXvN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BodTqMda.js";import"./useAnimationId-Dg5PDt8u.js";import"./Curve-D7CJuFyB.js";import"./step-DHP97Yog.js";import"./path-DyVhHtw_.js";import"./tooltipContext-JrsZoYZm.js";import"./Symbols-JKCROK7U.js";import"./symbol-BL1c8F5w.js";import"./ActiveShapeUtils-tQSQ8w1p.js";import"./RegisterGraphicalItemId-B6GAZHe-.js";import"./ErrorBarContext-vv2ECrtE.js";import"./GraphicalItemClipPath-CHQFwdrq.js";import"./SetGraphicalItem-CIMjPr92.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C3FcdsNc.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Bo3nBkz1.js";import"./uniqBy-Dq6L1riV.js";import"./iteratee-DZ9WVhQn.js";import"./Cross-D8x6YHTw.js";import"./Rectangle-BrNBFEk8.js";import"./Sector-CmmqCzxU.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
