import{R as r}from"./iframe-CgTT5dPO.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BDjOdVfa.js";import{C as d}from"./CartesianGrid-B-SK66Uf.js";import{X as c}from"./XAxis-ClmjXtMB.js";import{Y as y}from"./YAxis-DSfP3iJV.js";import{S as h}from"./Scatter-B_tZdNjm.js";import{E as e}from"./ErrorBar-DKAmhjjw.js";import{T as u}from"./Tooltip-t8L-cwt_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B51pwKIk.js";import"./zIndexSlice-CPGUCnGo.js";import"./throttle-BMr0TIll.js";import"./index-yjPGP_Pi.js";import"./index-DsTCyvOd.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CKA35xz0.js";import"./isWellBehavedNumber-BWfrrYUp.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Gtv_llo9.js";import"./d3-scale-oJuzrlfE.js";import"./index-9dlMxjgk.js";import"./index-BDFV0rCg.js";import"./renderedTicksSlice-B7hU_9zD.js";import"./index-Db1ep0ty.js";import"./CartesianChart-P3XUrVp3.js";import"./chartDataContext-Cp4ZgLCD.js";import"./CategoricalChart-Ce5ExZbX.js";import"./CartesianAxis-1GG6rVOn.js";import"./Layer-CviKKqfs.js";import"./Text-BTX7KMwr.js";import"./DOMUtils-DNAAiWqJ.js";import"./useId-C9Sf9QRu.js";import"./useBackwardsCompatibleTheme-BnQi9_9k.js";import"./Label-DgIJd16K.js";import"./ZIndexLayer-CL4lnoUk.js";import"./types-DZAseBJP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-mZXv8WCL.js";import"./useAnimationId-D6-p5R60.js";import"./Curve-cyeBNEBX.js";import"./step-D1irN9pp.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DGgnm00g.js";import"./Symbols-858ix6UN.js";import"./symbol-Di9ULjRu.js";import"./ActiveShapeUtils-CCEW4taa.js";import"./RegisterGraphicalItemId-DeFFmfLc.js";import"./ErrorBarContext-CmOtwBbz.js";import"./GraphicalItemClipPath-qWvJymnR.js";import"./SetGraphicalItem-BFHpZd6Q.js";import"./useGraphicalItemIdentity-CKmqq4Ws.js";import"./CSSTransitionAnimate-CEppE94T.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-E-WECx4Q.js";import"./uniqBy-8m_J3yMU.js";import"./iteratee-BZZIIBc5.js";import"./Cross-C0bVdUJm.js";import"./Rectangle-huBGhNer.js";import"./Sector-DExrbWoI.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
