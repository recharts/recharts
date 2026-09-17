import{R as r}from"./iframe-Bo128pRc.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-jqRPJiPl.js";import{C as d}from"./CartesianGrid-CQ9c3NM-.js";import{X as c}from"./XAxis-BBTi9Quq.js";import{Y as y}from"./YAxis-Bd_441pA.js";import{S as h}from"./Scatter-CaQnB7jp.js";import{E as e}from"./ErrorBar-DleMus_W.js";import{T as u}from"./Tooltip-HMU69nW5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DmrtgzWA.js";import"./zIndexSlice-WbjY_zmo.js";import"./throttle-DKRp2Cpf.js";import"./index-BFq8L4Qf.js";import"./index-Cj2yGnH8.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CR_Daah7.js";import"./isWellBehavedNumber-DSGzbKJq.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BYCa1KQi.js";import"./d3-scale-EUAW_uXn.js";import"./index-CTI4te1e.js";import"./index-9RfS0P5N.js";import"./renderedTicksSlice-BJhZejFa.js";import"./index-CNXfLYdJ.js";import"./CartesianChart-Df4TbwdF.js";import"./chartDataContext-BfZakhMa.js";import"./CategoricalChart-D4todBvL.js";import"./CartesianAxis-CscJTeW3.js";import"./Layer-DR8K2tDR.js";import"./Text-BFaLgVB9.js";import"./DOMUtils-DyhgREL4.js";import"./useId-DR5HNXG4.js";import"./useBackwardsCompatibleTheme-DyPyGrUA.js";import"./Label-ghQ3JhC7.js";import"./ZIndexLayer-DD1XEuiL.js";import"./types-CsIyy1S-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BX9wZRAd.js";import"./useAnimationId-CQmNoSKE.js";import"./Curve-BOVvH2tq.js";import"./step-C7Pxf4sj.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DXP82UUR.js";import"./Symbols-IDhPg5Sz.js";import"./symbol-B_l5LtYl.js";import"./ActiveShapeUtils-wH4Ic5EK.js";import"./RegisterGraphicalItemId-CwYw7hzr.js";import"./ErrorBarContext-QkPpzvTl.js";import"./GraphicalItemClipPath-RiFLM0LL.js";import"./SetGraphicalItem-qyOUVGvM.js";import"./useGraphicalItemIdentity-B2TrnUL8.js";import"./CSSTransitionAnimate-BU0bVBUM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DBOsMn43.js";import"./uniqBy-RT7Uc_zP.js";import"./iteratee-Cyk4vjhM.js";import"./Cross-Bn9vWvgo.js";import"./Rectangle-CDN6vLqp.js";import"./Sector-j2EN_jtI.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
