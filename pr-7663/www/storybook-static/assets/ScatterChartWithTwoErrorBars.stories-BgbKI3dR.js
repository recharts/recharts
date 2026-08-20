import{R as r}from"./iframe-T2vx_vOa.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-DpR399I0.js";import{C as d}from"./CartesianGrid-BVCRKHeO.js";import{X as c}from"./XAxis-BN7ADdXK.js";import{Y as y}from"./YAxis-BF1HUrTi.js";import{S as h}from"./Scatter-T0MN00Is.js";import{E as e}from"./ErrorBar-Dplp-7wL.js";import{T as u}from"./Tooltip-LDzoybih.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7E4P3q_.js";import"./zIndexSlice-B-qj09MF.js";import"./throttle-B2YWMMfN.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./axisSelectors-Bwt_MWfh.js";import"./d3-scale-9Bwz5xwo.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./CartesianChart-Bnxa5O6x.js";import"./chartDataContext-BRu0PEKp.js";import"./CategoricalChart-DZbNl6UN.js";import"./CartesianAxis-Bztsuorj.js";import"./Layer-BJSWtfPf.js";import"./Text-C_hpuPsU.js";import"./DOMUtils-DCQI-dAG.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./Label-AUPLS1jy.js";import"./ZIndexLayer-BwLVxIBn.js";import"./types-Bh_AGi1X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C9f8W2_c.js";import"./useAnimationId-w6GkkQqu.js";import"./Curve-B3Mj_t6F.js";import"./step-DPp_r08A.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BV3We-7Q.js";import"./Symbols-CV9T5Yu_.js";import"./symbol-BI3up_Yv.js";import"./ActiveShapeUtils-jwMR0d8y.js";import"./RegisterGraphicalItemId-DenhQzIU.js";import"./ErrorBarContext-ClNe4tHQ.js";import"./GraphicalItemClipPath-CBz4hBDX.js";import"./SetGraphicalItem-BV24eLVS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-oLvtYeyC.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DcABdze2.js";import"./uniqBy-BVVWdgld.js";import"./iteratee-B1adNlu2.js";import"./Cross-D0pU1Ik5.js";import"./Rectangle-CFnUwAZg.js";import"./Sector-C6JSPpsQ.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
