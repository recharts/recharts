import{R as r}from"./iframe-DzgNGLlq.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Cmy2872c.js";import{C as d}from"./CartesianGrid-BY9FXplk.js";import{X as c}from"./XAxis-Cw-Rs66g.js";import{Y as y}from"./YAxis-TE47wPZ7.js";import{S as h}from"./Scatter-CDDRiEin.js";import{E as e}from"./ErrorBar-ji0tD4LD.js";import{T as u}from"./Tooltip-vVLQQKgj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CboTFEd7.js";import"./zIndexSlice-CTnIst4D.js";import"./throttle-uLx0gES7.js";import"./index-BQnnRDe7.js";import"./index-8oVCWn1c.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CaF46lB1.js";import"./isWellBehavedNumber-BgtbXlLK.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-94eYl4rY.js";import"./d3-scale-yT9SK4Da.js";import"./index-C14b3CKC.js";import"./index-Xa_KNetQ.js";import"./renderedTicksSlice-Bkx7Xpqk.js";import"./index-Dbv9pvOZ.js";import"./CartesianChart-Dev9z_OT.js";import"./chartDataContext-BBsc4T1N.js";import"./CategoricalChart-CJCvkzIF.js";import"./CartesianAxis-Cz79nqzF.js";import"./Layer-OlcmJ5EJ.js";import"./Text-Cmcmp6Rw.js";import"./DOMUtils-qoFWhjfZ.js";import"./useId-lk8BfN7M.js";import"./useBackwardsCompatibleTheme-CWFDA9S4.js";import"./Label-B2-HhKmy.js";import"./ZIndexLayer-BSDazUEj.js";import"./types-jKlbb9F_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Cm23KMMu.js";import"./useAnimationId-CKHGdmz-.js";import"./Curve-jqISDG95.js";import"./step-CuPD0mOn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bvg8AaqK.js";import"./Symbols-CVUsTJ0K.js";import"./symbol-CmjPbuz2.js";import"./ActiveShapeUtils-O11gFqO3.js";import"./RegisterGraphicalItemId-CGkeXCMx.js";import"./ErrorBarContext-BTHVw71_.js";import"./GraphicalItemClipPath-0iLoH1-r.js";import"./SetGraphicalItem-BCo8L_08.js";import"./useGraphicalItemIdentity-BAh9vCkO.js";import"./CSSTransitionAnimate-Cm8v7ZRa.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-jStCutUO.js";import"./uniqBy-u5dTU2Kl.js";import"./iteratee-DNOBrypk.js";import"./Cross-CgngORpb.js";import"./Rectangle-Chy5A9Vo.js";import"./Sector-D-QglBrT.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
