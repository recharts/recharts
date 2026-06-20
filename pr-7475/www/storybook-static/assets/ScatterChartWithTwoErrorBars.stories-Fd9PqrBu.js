import{R as r}from"./iframe-DhLiHYA9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CiIe2P3R.js";import{C as d}from"./CartesianGrid-CEFwFbVr.js";import{X as c}from"./XAxis-BpfFXf4g.js";import{Y as y}from"./YAxis-lwpN76oK.js";import{S as h}from"./Scatter-x9tECDea.js";import{E as e}from"./ErrorBar-DPmLjsoi.js";import{T as u}from"./Tooltip-N3umdugN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CvYHcQFm.js";import"./zIndexSlice-0EuGNLI-.js";import"./immer-T8RsDcjn.js";import"./index-NG-Tdzng.js";import"./index-BeAu05Eb.js";import"./get-BqOTE_u_.js";import"./resolveDefaultProps-CBPzFJH6.js";import"./isWellBehavedNumber-BNidD9Ks.js";import"./PolarUtils-CTnnDHZv.js";import"./index-xOxo7x3f.js";import"./index-DKmBjdDb.js";import"./renderedTicksSlice-B1LCQJVr.js";import"./axisSelectors-DL47bbYB.js";import"./d3-scale-B_WyWKG3.js";import"./CartesianChart-BdXEaLDP.js";import"./chartDataContext-Bcb5nIkO.js";import"./CategoricalChart-CN-mt1-6.js";import"./CartesianAxis-dYZ4VxrX.js";import"./Layer-DglRvEKa.js";import"./Text-D4hUpX6-.js";import"./DOMUtils-BQBCpy3J.js";import"./Label-Cv4QmxCb.js";import"./ZIndexLayer-CvBhZ60T.js";import"./types-CH1fGuRR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C2gGUiAe.js";import"./useAnimationId-PUY_wn7H.js";import"./Curve-rXpWLPqx.js";import"./step-DzpE9YVj.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DJo_2VKA.js";import"./Symbols-BmHfVAZq.js";import"./symbol-CtUUOtbn.js";import"./ActiveShapeUtils-CPYzaIXa.js";import"./RegisterGraphicalItemId-BJxK6F3S.js";import"./ErrorBarContext-BjQaCHVv.js";import"./GraphicalItemClipPath-Bu7CM1zV.js";import"./SetGraphicalItem-t7MzgWgu.js";import"./CSSTransitionAnimate-DyuG4-2o.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-fe1mw0WL.js";import"./uniqBy-BN7HPTpI.js";import"./iteratee-BBagmPW9.js";import"./Cross-CyCVJVF4.js";import"./Rectangle-Bk9D_f7f.js";import"./Sector-DlqSWAUI.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
