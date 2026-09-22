import{R as r}from"./iframe-6EoNA_L8.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BtkRff1o.js";import{C as d}from"./CartesianGrid-BkvkCyZB.js";import{X as c}from"./XAxis-D5W76h4C.js";import{Y as y}from"./YAxis-BC8F1g7K.js";import{S as h}from"./Scatter-BOi34B9i.js";import{E as e}from"./ErrorBar-DF_KvQUE.js";import{T as u}from"./Tooltip-otFnhVXl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DIgVm8D4.js";import"./zIndexSlice-De49t7iX.js";import"./throttle-qfBh-gJU.js";import"./index-DOuZqOP2.js";import"./index-drI4VfER.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BeiJcrCE.js";import"./isWellBehavedNumber-B08jv1io.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CPDr9W-8.js";import"./d3-scale-BHNzH7iq.js";import"./index-CW_YvHl3.js";import"./index-BUgLS7M1.js";import"./renderedTicksSlice-CIIKzgpq.js";import"./index-BvtgduTj.js";import"./CartesianChart-Cysh7fYc.js";import"./chartDataContext-B2QOvGi0.js";import"./CategoricalChart-BUH5Yjzv.js";import"./CartesianAxis-BCnvc9Ye.js";import"./Layer-CUxzD1DR.js";import"./Text-DZDh1E85.js";import"./DOMUtils-DNveQWYn.js";import"./useId-BXan0_nA.js";import"./useBackwardsCompatibleTheme-BhrjNye9.js";import"./Label-BMFW6Zd2.js";import"./ZIndexLayer-BqdDjbl9.js";import"./types-M0OtQk6p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DI4_Ab0i.js";import"./useAnimationId-peOMMxO5.js";import"./Curve-8un1g3vs.js";import"./step-DSvUWADx.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CCFV9lmN.js";import"./Symbols-ChAQCHfz.js";import"./symbol-CtrrqE7Y.js";import"./ActiveShapeUtils-C7faasOA.js";import"./RegisterGraphicalItemId-DCPWXijy.js";import"./ErrorBarContext-Dh7d5kUD.js";import"./GraphicalItemClipPath-0snefndl.js";import"./SetGraphicalItem-D09cPUlM.js";import"./useGraphicalItemIdentity-T4kDeRpG.js";import"./CSSTransitionAnimate-CykZMj5H.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DLgM4IIx.js";import"./uniqBy-C6BW0yGS.js";import"./iteratee-Dem4U58j.js";import"./Cross-Br0Y2iUW.js";import"./Rectangle-BR58mqpl.js";import"./Sector-DtE-jXuU.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
