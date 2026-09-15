import{R as r}from"./iframe-iz9dRDhe.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Bn9bHnTF.js";import{C as d}from"./CartesianGrid-B9qruWPz.js";import{X as c}from"./XAxis-6Wrkyy5u.js";import{Y as y}from"./YAxis-DtrhiCef.js";import{S as h}from"./Scatter-wO58dLR3.js";import{E as e}from"./ErrorBar-iFN0LJJI.js";import{T as u}from"./Tooltip-BG_htq1V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUdNLZqv.js";import"./zIndexSlice-BdPqcxx_.js";import"./throttle-DE0tlCdA.js";import"./index-DxHaJGfQ.js";import"./index-Bl-8dy8S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DtNPAsTQ.js";import"./isWellBehavedNumber--SX7jZAJ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-2huN7QkS.js";import"./d3-scale-DHC9WiBl.js";import"./index-mn3tws3H.js";import"./index-8jy5f1Un.js";import"./renderedTicksSlice-CEU3EycZ.js";import"./index-Bn7rp-xI.js";import"./CartesianChart-DOgw209l.js";import"./chartDataContext-CeQ-Tm4w.js";import"./CategoricalChart-D__Jof4a.js";import"./CartesianAxis-CdElIjx1.js";import"./Layer-DYGhC4_B.js";import"./Text-CUS7a8VN.js";import"./DOMUtils-lupu9nOG.js";import"./useId-HDpOWxLn.js";import"./useBackwardsCompatibleTheme-BDaqedqa.js";import"./Label-C1iyqFpa.js";import"./ZIndexLayer-TqmbKYqx.js";import"./types-LFzxVX1I.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dc8Ivobd.js";import"./useAnimationId-7yr0q3Dd.js";import"./Curve-D2o1LRz2.js";import"./step-C36qcU_Q.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BIyiiZIL.js";import"./Symbols-BfhqqNlw.js";import"./symbol-CqpTEBVx.js";import"./ActiveShapeUtils-DFPOUViC.js";import"./RegisterGraphicalItemId-CDExOK2J.js";import"./ErrorBarContext-CNF3begD.js";import"./GraphicalItemClipPath-C5R-amEZ.js";import"./SetGraphicalItem-CMqF7RNk.js";import"./useGraphicalItemIdentity-MtWjlwkT.js";import"./CSSTransitionAnimate-DjD7kyhk.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-jd_Y94ov.js";import"./uniqBy-D6bHLL80.js";import"./iteratee-ch_GTcmf.js";import"./Cross-DRdHpkte.js";import"./Rectangle-CC1ns2p9.js";import"./Sector-DcPkBzZk.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
