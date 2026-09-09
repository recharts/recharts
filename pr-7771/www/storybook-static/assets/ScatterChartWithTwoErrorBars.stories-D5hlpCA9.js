import{R as r}from"./iframe-Dn8vQZEp.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BcHxGFBu.js";import{C as d}from"./CartesianGrid-6Umk4lWm.js";import{X as c}from"./XAxis-CB79oGK-.js";import{Y as y}from"./YAxis-BNLIqhTJ.js";import{S as h}from"./Scatter-BBeHPWKZ.js";import{E as e}from"./ErrorBar-BATQmD7Z.js";import{T as u}from"./Tooltip-DSH5seYS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bhkt7zRT.js";import"./zIndexSlice-XUx2oJl_.js";import"./throttle-fPZ-AFkd.js";import"./index-CuDTIlBD.js";import"./index-BhPh_0Mo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jBHMfbnT.js";import"./isWellBehavedNumber-Drx6zYdA.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DcgT4KNV.js";import"./d3-scale-CzizY4ry.js";import"./index-CjS_XyhA.js";import"./index-Drl0y4WP.js";import"./renderedTicksSlice-eRTKLRMo.js";import"./index-Bmxz4y8Z.js";import"./CartesianChart-B9QNJ1CX.js";import"./chartDataContext-mZgxnkA9.js";import"./CategoricalChart-DAypclSw.js";import"./CartesianAxis-BNezq43E.js";import"./Layer-BJv5m_kT.js";import"./Text-D0E0CgcA.js";import"./DOMUtils-T9kk7XzM.js";import"./useId-ClKCYS2F.js";import"./useBackwardsCompatibleTheme-DuANBb0k.js";import"./Label-Bvs0nTDG.js";import"./ZIndexLayer-8Cv1ome6.js";import"./types-BtKkYRP2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BnMcWdWM.js";import"./useAnimationId-DNL11RNx.js";import"./Curve-WjJYEJJ2.js";import"./step-DZtB5o_b.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BCio3TM7.js";import"./Symbols-DZGkt8QS.js";import"./symbol-3I5gn6bV.js";import"./ActiveShapeUtils-Czlcjg-Z.js";import"./RegisterGraphicalItemId-BEcpOk8N.js";import"./ErrorBarContext-1UXxdVKa.js";import"./GraphicalItemClipPath-DwUubEvw.js";import"./SetGraphicalItem-wP6-k6q-.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CmNV4LTy.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Bal9XmbO.js";import"./uniqBy-QuaGjxN1.js";import"./iteratee-DpeX9yxF.js";import"./Cross-unVPMm5k.js";import"./Rectangle-Bdeqx9d0.js";import"./Sector-C-HmTIUE.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
