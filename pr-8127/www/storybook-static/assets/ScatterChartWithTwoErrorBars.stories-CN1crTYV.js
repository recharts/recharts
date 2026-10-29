import{R as r}from"./iframe-BmCEaXnl.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B5DTnoJo.js";import{C as d}from"./CartesianGrid-CpUWFpw2.js";import{X as c}from"./XAxis-u0XIPlGG.js";import{Y as y}from"./YAxis-wM7iKB0B.js";import{S as h}from"./Scatter-DhIbRb_x.js";import{E as e}from"./ErrorBar-DAZW2A9u.js";import{T as u}from"./Tooltip-Clx9dABt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-e4k-RA_5.js";import"./zIndexSlice-CCSErHLO.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CFAPbmi-.js";import"./throttle-qcDxTsLf.js";import"./index-BqP1aJDu.js";import"./index-F6n6DaVK.js";import"./axisSelectors-jGKN6-F9.js";import"./polarAxisSelectors-pAXQteq7.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DOe-rCGU.js";import"./index-BTkbJW8j.js";import"./index-B6BvyTbH.js";import"./renderedTicksSlice-2egCQc0E.js";import"./index-C_f_Jppx.js";import"./CartesianChart-r4VMNRon.js";import"./ZIndexPortal-QH_cbCJt.js";import"./CategoricalChart-DB6XzEGw.js";import"./CartesianAxis-MWIUmivx.js";import"./Layer-BpXqwf7v.js";import"./Text-CVqIJR2f.js";import"./DOMUtils-C4PB-VGE.js";import"./ZIndexLayer-CQzpYkd8.js";import"./Label-BMv4awTg.js";import"./types-_yr4vfnQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-Cf5kf7-L.js";import"./LabelList-BgUgtMai.js";import"./activeStyles-D5gryLfg.js";import"./useAnimationId-DcrGLg07.js";import"./dataEntryStyles-D18H_t3x.js";import"./Curve-03O0PZm6.js";import"./step-Ci6oOROy.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DSyzjZp1.js";import"./Symbols-CZzsW6XG.js";import"./symbol-CysJXLfa.js";import"./ActiveShapeUtils-DMtsKFiW.js";import"./ErrorBarContext-D_xcSKmk.js";import"./SetGraphicalItem-CsEqG3iP.js";import"./useEffectiveDataKey-CdWL-HwP.js";import"./CSSTransitionAnimate-C_LkfQD0.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DK0hqOaX.js";import"./uniqBy-QNfb45Jk.js";import"./iteratee-DozicGBj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CPCMMMp1.js";import"./Rectangle-CcFLRt9n.js";import"./Sector-C1JqqJYO.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
