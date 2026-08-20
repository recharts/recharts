import{R as r}from"./iframe-CSFRbakT.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-f6VpTc-r.js";import{C as d}from"./CartesianGrid-Bbe5SuAZ.js";import{X as c}from"./XAxis-qtAkwMmZ.js";import{Y as y}from"./YAxis-DYaDbF01.js";import{S as h}from"./Scatter-CXqpDj2r.js";import{E as e}from"./ErrorBar-CdKFLgpI.js";import{T as u}from"./Tooltip-DQdZxL4G.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CTT8y5Ry.js";import"./zIndexSlice-DpZcKFY3.js";import"./throttle-DU_ACcBv.js";import"./index-LyfzYazm.js";import"./index-_5SE_e0D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C2JgeEZu.js";import"./isWellBehavedNumber-93OW3PM3.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Kfu3TRgb.js";import"./index-DiZSJisN.js";import"./axisSelectors-KHPqbB-J.js";import"./d3-scale-DhuPkMBe.js";import"./renderedTicksSlice-BfSTwOrr.js";import"./CartesianChart-BCRGB0c7.js";import"./chartDataContext-BSDgfmf3.js";import"./CategoricalChart-DTfC0HTb.js";import"./CartesianAxis-BE0DelqG.js";import"./Layer-Cas4KfrT.js";import"./Text-D8YyLcux.js";import"./DOMUtils-DF5CrQ-h.js";import"./useId-BBLcWa_d.js";import"./useBackwardsCompatibleTheme-BSlqd8DY.js";import"./Label-wJcYTwit.js";import"./ZIndexLayer-CRsGh2jd.js";import"./types-63Ql-Qpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-fBpE1aA1.js";import"./useAnimationId-CTzy6jqJ.js";import"./Curve-CfossU1f.js";import"./step-CyAEPMCA.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dy7lrOE6.js";import"./Symbols-BBe6ZWzU.js";import"./symbol-DtBce2gr.js";import"./ActiveShapeUtils-r1PbrWOo.js";import"./RegisterGraphicalItemId-BifFS_04.js";import"./ErrorBarContext-B0XwT2-o.js";import"./GraphicalItemClipPath-BvYnrcJ_.js";import"./SetGraphicalItem-w8PwKgIn.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CruDeXWq.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DJQtsn9U.js";import"./uniqBy-Ccjwpzh7.js";import"./iteratee-NArAVAmk.js";import"./Cross-CceAOFwE.js";import"./Rectangle-DOmjHg1E.js";import"./Sector-CiYrENtI.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
