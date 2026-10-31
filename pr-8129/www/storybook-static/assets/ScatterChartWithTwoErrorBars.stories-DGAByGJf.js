import{R as r}from"./iframe-CDpmIgQT.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CsWzl5HY.js";import{C as d}from"./CartesianGrid-De1usH_N.js";import{X as c}from"./XAxis-3XA4-bKe.js";import{Y as y}from"./YAxis-Ogt9or7H.js";import{S as h}from"./Scatter-CqfVAUyW.js";import{E as e}from"./ErrorBar-Bz38rZbQ.js";import{T as u}from"./Tooltip-BT8KywYi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVUl_Te9.js";import"./zIndexSlice-BfaxD0dh.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-ihnr6TPx.js";import"./throttle-aImz7VVk.js";import"./index-DbYSlzY7.js";import"./index-Bltp8D05.js";import"./axisSelectors-CxEn2HHB.js";import"./polarAxisSelectors-B_f6ZQwC.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D8Pupn_R.js";import"./index-DCFiKxFj.js";import"./index-zKAzIraE.js";import"./renderedTicksSlice-CZP368BE.js";import"./index-DtYOnMLm.js";import"./CartesianChart-DSMl8g4x.js";import"./ZIndexPortal-B9xw1t3t.js";import"./CategoricalChart-Bel6HtAa.js";import"./CartesianAxis-f-wQfyV-.js";import"./Layer-mHCkFu2a.js";import"./Text-BSIquxO3.js";import"./DOMUtils-Cs7FGDH8.js";import"./pageBackground-JqsHu2De.js";import"./ZIndexLayer-DJsGHloM.js";import"./Label-PB9tCobP.js";import"./types-C_7I-XQd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-os6E-iMi.js";import"./LabelList-IVU2RGL-.js";import"./activeStyles-BpeBFXJT.js";import"./useAnimationId-LIn9B9pI.js";import"./dataEntryStyles-tenSUrif.js";import"./Curve-D7wdedao.js";import"./step-CbLfzlrV.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BuClDIkr.js";import"./Symbols-DArBJCV3.js";import"./symbol-MYiWw4z2.js";import"./ActiveShapeUtils-CinHd9se.js";import"./ErrorBarContext-Bqx6IufA.js";import"./SetGraphicalItem-BpXWLUsD.js";import"./useEffectiveDataKey-Dsusti8Y.js";import"./CSSTransitionAnimate-CTrtqHXg.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-QH7GmGID.js";import"./uniqBy-DQsH6j_y.js";import"./iteratee-BSoVQiX1.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BFOt9lJd.js";import"./Rectangle-D76RToCn.js";import"./Sector-BFnJfpa_.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
