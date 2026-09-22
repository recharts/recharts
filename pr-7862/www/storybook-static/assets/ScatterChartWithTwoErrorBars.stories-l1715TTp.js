import{R as r}from"./iframe-DaQbgwSM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-D_QDlGFz.js";import{C as d}from"./CartesianGrid-BaDvzjUn.js";import{X as c}from"./XAxis-Dwi6B5gb.js";import{Y as y}from"./YAxis-DJNfgCPe.js";import{S as h}from"./Scatter-BHn9P1En.js";import{E as e}from"./ErrorBar-BdT66r5M.js";import{T as u}from"./Tooltip-BQZ3CNSI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BMsAihAT.js";import"./zIndexSlice-GtlpPVbP.js";import"./throttle-D86JN7dt.js";import"./index-fR-dYqAy.js";import"./index-pcae8h2v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C03kBNGe.js";import"./isWellBehavedNumber-CF6bOuRt.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DiPrK3uM.js";import"./d3-scale-C28Mr6C_.js";import"./index-B9PrDzsD.js";import"./index-C_QxJfjv.js";import"./renderedTicksSlice-BBiwG0aF.js";import"./index-DVT6pdU4.js";import"./CartesianChart-DWDjryZ8.js";import"./chartDataContext-C5kvJ464.js";import"./CategoricalChart-D9AKOXtI.js";import"./CartesianAxis-Dd7LPnIK.js";import"./Layer-Dy562RhS.js";import"./Text-6pf8QaaJ.js";import"./DOMUtils-B-aaPPhR.js";import"./useId-C9TE6S2g.js";import"./useBackwardsCompatibleTheme-jIXNHWAs.js";import"./Label-BMF2NwhK.js";import"./ZIndexLayer-e1DF3LHV.js";import"./types-BrU75Oof.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BlzsOhEO.js";import"./useAnimationId-BjF9VJ68.js";import"./Curve-_5Fn1COl.js";import"./step-C8sn29Vk.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CIcECwtV.js";import"./Symbols-C4k0V28S.js";import"./symbol-D1P_EmQR.js";import"./ActiveShapeUtils-CrKaudC-.js";import"./RegisterGraphicalItemId-Clsr70g_.js";import"./ErrorBarContext-B2kb74U-.js";import"./GraphicalItemClipPath-D0ATNOOi.js";import"./SetGraphicalItem-HJSDm9m5.js";import"./useGraphicalItemIdentity-CLitx1ml.js";import"./CSSTransitionAnimate-Dm6G4Yx6.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D2-2eyIk.js";import"./uniqBy-Bqm10COm.js";import"./iteratee-CZBTSYNz.js";import"./Cross-DSdbtvKr.js";import"./Rectangle-C77_7Qyp.js";import"./Sector-BTnt08UU.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
