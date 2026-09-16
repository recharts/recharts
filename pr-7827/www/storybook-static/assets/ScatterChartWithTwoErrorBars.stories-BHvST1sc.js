import{R as r}from"./iframe-O_zfFb6r.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CAL6MWDs.js";import{C as d}from"./CartesianGrid-DQoEYFTB.js";import{X as c}from"./XAxis-BJYhxEEM.js";import{Y as y}from"./YAxis-4IiwGwhc.js";import{S as h}from"./Scatter-C5v5Ukb-.js";import{E as e}from"./ErrorBar-5t9WEiko.js";import{T as u}from"./Tooltip-1DAkwEJk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DPG1lJEB.js";import"./zIndexSlice-CDi6Z2zv.js";import"./throttle-nfGA0JID.js";import"./index-CpzZNRq1.js";import"./index-F3KKsDmf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy11K6xZ.js";import"./isWellBehavedNumber-zMKck78V.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Cu-Cxseq.js";import"./d3-scale-CJf0BmNx.js";import"./index-Bs_5gbEM.js";import"./index-6nFN620n.js";import"./renderedTicksSlice-fycCYLaq.js";import"./index-Fqn27s52.js";import"./CartesianChart-DjXROyBm.js";import"./chartDataContext-T_bYBa0C.js";import"./CategoricalChart-Cks6RsKt.js";import"./CartesianAxis-DAJd6uwN.js";import"./Layer-IOKs9hiO.js";import"./Text-TAeBHRIT.js";import"./DOMUtils-BJJ-vVKn.js";import"./useId-CBZzzSpP.js";import"./useBackwardsCompatibleTheme-DbcN9pdU.js";import"./Label-Bt0vOpuF.js";import"./ZIndexLayer-CbUFYwY1.js";import"./types-dgF4Zt0B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-B71252eU.js";import"./useAnimationId-O6XvtviY.js";import"./Curve-Dj1kSGWk.js";import"./step-Cv1KNwyF.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B0hBwCZ1.js";import"./Symbols-cbozTFmP.js";import"./symbol-C4Mpqg-9.js";import"./ActiveShapeUtils-0QkmK8Hn.js";import"./RegisterGraphicalItemId-D2Q5ahcD.js";import"./ErrorBarContext-CDadBxpm.js";import"./GraphicalItemClipPath-C_4Tb4-L.js";import"./SetGraphicalItem-BsFfkq2Z.js";import"./useGraphicalItemIdentity-Q9Kv4PEr.js";import"./CSSTransitionAnimate-DsB0cP2F.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D293KLr8.js";import"./uniqBy-B-gqZXLG.js";import"./iteratee-Tn2QA64I.js";import"./Cross-QLCt5l02.js";import"./Rectangle-DP-IEOGk.js";import"./Sector-Bp2DPLi0.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
