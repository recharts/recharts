import{R as r}from"./iframe-ClhUNVnE.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DFfR8u6P.js";import{C as d}from"./CartesianGrid-DXY2--22.js";import{X as c}from"./XAxis-LUnQ02U1.js";import{Y as y}from"./YAxis-CrIc_odO.js";import{S as h}from"./Scatter-CGOg2Txx.js";import{E as e}from"./ErrorBar-D_w4qY79.js";import{T as u}from"./Tooltip-Bgb8w0H3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CH-OQa-8.js";import"./zIndexSlice-Bj_mEjES.js";import"./throttle-CYmjgX02.js";import"./index-CMNlKXgY.js";import"./index-WRHCQy9e.js";import"./get-Uq0DWhIe.js";import"./resolveDefaultProps-xxbn2Y0z.js";import"./isWellBehavedNumber-BZGd7hgQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CKsF35O1.js";import"./index-D_-76jNe.js";import"./renderedTicksSlice-D-beSFYC.js";import"./axisSelectors-B_omKdC_.js";import"./d3-scale-CyxXVHj6.js";import"./CartesianChart-DVNFcAED.js";import"./chartDataContext-DT2zm0Bo.js";import"./CategoricalChart-BXjBj4uL.js";import"./CartesianAxis-6ub_g_j0.js";import"./Layer-De05M5So.js";import"./Text-6OmgeIvW.js";import"./DOMUtils-CtaL4Ln2.js";import"./Label-C7_QXzyC.js";import"./ZIndexLayer-DGNmh353.js";import"./types-B-IY3TCA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CjVS2mh2.js";import"./useAnimationId-CT1xX_cr.js";import"./Curve-B40-WnjD.js";import"./step-DSY_NY5u.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ZmJNyT4E.js";import"./Symbols-CM_x84Fs.js";import"./symbol-DRYWtuxg.js";import"./ActiveShapeUtils-DM6q8ZUn.js";import"./RegisterGraphicalItemId-EpH2csVt.js";import"./ErrorBarContext-Dhef0H9H.js";import"./GraphicalItemClipPath-BcvmXpNm.js";import"./SetGraphicalItem-D69pntSs.js";import"./CSSTransitionAnimate-DONqt7sG.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DHiTyfaG.js";import"./uniqBy-CcWMM-R1.js";import"./iteratee-DPPNHIa6.js";import"./Cross-DGcNmab1.js";import"./Rectangle-SjMvhhWJ.js";import"./Sector-DtBHNqPc.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
