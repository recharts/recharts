import{R as r}from"./iframe-C478ayfe.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Bv0BQ70b.js";import{C as d}from"./CartesianGrid-vTgxkWqJ.js";import{X as c}from"./XAxis-CU4ivSNq.js";import{Y as y}from"./YAxis-CL1QJJED.js";import{S as h}from"./Scatter-8UicuIh4.js";import{E as e}from"./ErrorBar-CP81j4Ok.js";import{T as u}from"./Tooltip-DRflteeY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6tIgYO1.js";import"./zIndexSlice-T3ZFb7Aa.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BQGOYpJv.js";import"./throttle-B99v42cc.js";import"./index-J8Ragxup.js";import"./index-Dt6G_B5v.js";import"./axisSelectors-Biv-SyAO.js";import"./polarAxisSelectors-CAckEIKE.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cz0p_M0k.js";import"./index-Bgd7L3TE.js";import"./index-CujM32ev.js";import"./renderedTicksSlice-BwSyvBJ_.js";import"./index-NXORGKPb.js";import"./CartesianChart-D2eUya_e.js";import"./ZIndexPortal-CaG6-xRf.js";import"./CategoricalChart-nvv--0et.js";import"./CartesianAxis-D6yrNWVj.js";import"./Layer-BzE3AtiA.js";import"./Text-rWn3Xmx5.js";import"./DOMUtils-DMUojBll.js";import"./ZIndexLayer-B9pzlGWv.js";import"./Label-yNY_-txU.js";import"./types-1IO_LGzE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-BkM1x4hA.js";import"./LabelList-CXPk-iUW.js";import"./activeStyles-BTHRjD5i.js";import"./useAnimationId-DsdBvcVE.js";import"./dataEntryStyles-DLRWmObc.js";import"./Curve-BR7rWdNb.js";import"./step-5qm5cD0x.js";import"./path-DyVhHtw_.js";import"./tooltipContext-EbmqIB_N.js";import"./Symbols-B5clnuWh.js";import"./symbol-Djp9TiFA.js";import"./ActiveShapeUtils-em0-Yj9t.js";import"./ErrorBarContext-Cxtks1NA.js";import"./SetGraphicalItem-7DZt9-vL.js";import"./useEffectiveDataKey-HlgT5Uu2.js";import"./CSSTransitionAnimate-e_fnTgzL.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BEuMbuoA.js";import"./uniqBy-kU7oDpQ6.js";import"./iteratee-bJQZKjxj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-LboJznFC.js";import"./Rectangle-DvnRkiIM.js";import"./Sector-BrpLJe1k.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
