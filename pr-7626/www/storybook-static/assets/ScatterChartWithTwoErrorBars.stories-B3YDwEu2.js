import{R as r}from"./iframe-Dl6-w9Rh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C9bj7R2a.js";import{C as d}from"./CartesianGrid-inIx_fGG.js";import{X as c}from"./XAxis-DZSPPcQS.js";import{Y as y}from"./YAxis-Cc6mYSUk.js";import{S as h}from"./Scatter-BNuX92Px.js";import{E as e}from"./ErrorBar-COxouUvS.js";import{T as u}from"./Tooltip-B96OQLJ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CNKHADrp.js";import"./zIndexSlice-BRejfQU1.js";import"./throttle-vxYlNOMT.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./PolarUtils-CTnnDHZv.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./axisSelectors-BPD60Viv.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./CategoricalChart-Dp8ZNzIB.js";import"./CartesianAxis-Dak0cZYo.js";import"./Layer-DIMKS5Ou.js";import"./Text-CW2k0BE6.js";import"./DOMUtils-kehL2bh6.js";import"./Label-aNbwXPlv.js";import"./ZIndexLayer-DkX5oxcl.js";import"./types-Ddok_SrC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D0kip4Wc.js";import"./useAnimationId-CYbASTF_.js";import"./Curve-DhmTjq3U.js";import"./step-vOQUBbeE.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BVT296Lu.js";import"./Symbols-BXJ_hhZg.js";import"./symbol-D8WWhlr3.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./CSSTransitionAnimate-BhxVpDp8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Ch2YK_71.js";import"./uniqBy-BEve3nPb.js";import"./iteratee-BGBdQaeY.js";import"./Cross-C9tEHEHx.js";import"./Rectangle-DbSzEXWo.js";import"./Sector-DXuRLzs8.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
