import{e as r}from"./iframe-D2iPyEE3.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-COMmxRP2.js";import{C as d}from"./CartesianGrid-ClNpEo5p.js";import{X as c}from"./XAxis-Ca5xFIBT.js";import{Y as y}from"./YAxis-r-zcSEA9.js";import{S as h}from"./Scatter-CPNdtl5x.js";import{E as e}from"./ErrorBar-Ct5EihrF.js";import{T as u}from"./Tooltip-qnTa-PrY.js";import{R as f}from"./RechartsHookInspector-pMynMK3d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D9hxchsK.js";import"./arrayEqualityCheck-BQ52A-KD.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2qn9BK_.js";import"./immer-5DUlJX3y.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CGzhf8ES.js";import"./hooks-DmQVapf1.js";import"./axisSelectors-Bf33qp9J.js";import"./d3-scale-D333UmOT.js";import"./zIndexSlice-B-uvLuMe.js";import"./renderedTicksSlice-Cw8jJmSY.js";import"./CartesianChart-C44XCUUQ.js";import"./chartDataContext-B0bZnblU.js";import"./CategoricalChart-kNyVXZoh.js";import"./CartesianAxis-Bd7Gtpgp.js";import"./Layer-CIGoVUHw.js";import"./Text-B4mK5G2Y.js";import"./DOMUtils-BDNid5QK.js";import"./Label-CjmamkRK.js";import"./ZIndexLayer-ClfHdlij.js";import"./types-DfbbSUKg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DlxpINgd.js";import"./Curve-gyPLT6fj.js";import"./step-NQkLQHEn.js";import"./tooltipContext-6_bq2H_U.js";import"./Symbols-Dh7LCKpa.js";import"./symbol-DAG115Zm.js";import"./ActiveShapeUtils-cVE6agUq.js";import"./isPlainObject-BVZ5R7gX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIa7eyeJ.js";import"./useAnimationId-fkVW7SyB.js";import"./Trapezoid-CD49191V.js";import"./Sector-CON_U0ZW.js";import"./RegisterGraphicalItemId-De4zP5NP.js";import"./ErrorBarContext-6PvhO17o.js";import"./GraphicalItemClipPath-oM0pOvEZ.js";import"./SetGraphicalItem-3fLhXJ7X.js";import"./CSSTransitionAnimate-DTIqM6jp.js";import"./useElementOffset-CKbI1PfG.js";import"./uniqBy-Dwf19U3R.js";import"./iteratee-BxNvX9m6.js";import"./Cross-Dj7wEUvN.js";import"./index-DZX1BXuq.js";import"./ChartSizeDimensions-CYgvj-Lj.js";import"./OffsetShower-BwoPAHAo.js";import"./PlotAreaShower-phVVNo9A.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
