import{e as r}from"./iframe-Dx3F1CSe.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-CAS01LmF.js";import{C as d}from"./CartesianGrid-Uf5nVG_Q.js";import{X as c}from"./XAxis-DSoOfFVG.js";import{Y as y}from"./YAxis-XfxcBWOr.js";import{S as h}from"./Scatter-rL3vV0Gp.js";import{E as e}from"./ErrorBar-aD5bSNdn.js";import{T as u}from"./Tooltip-CJoI_Tkw.js";import{R as f}from"./RechartsHookInspector-BAwm_Fvn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_B5nhKu.js";import"./arrayEqualityCheck-DMaNZfsY.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CXoJrQ_A.js";import"./immer-CPegyDWk.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BeZ_ypUT.js";import"./hooks-aYl0koFW.js";import"./axisSelectors-DmW2duOw.js";import"./d3-scale-BnGwHyKU.js";import"./zIndexSlice-CPXQUw6s.js";import"./renderedTicksSlice-S30Bo7Xq.js";import"./CartesianChart-2VGagNAy.js";import"./chartDataContext-CVXqCkfR.js";import"./CategoricalChart-ByIQfQbt.js";import"./CartesianAxis-CgkE7jBY.js";import"./Layer-BatgHwMu.js";import"./Text-ClY5nVeB.js";import"./DOMUtils-Bny8fRsV.js";import"./Label-B3UU_HSI.js";import"./ZIndexLayer-BTGGDCgU.js";import"./types-Fk51O_d2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cd33UQfd.js";import"./Curve-ZDUjen4G.js";import"./step-BGsv1v0H.js";import"./tooltipContext-CCPc4iE7.js";import"./Symbols-BjVmMqrI.js";import"./symbol-Tg8V4fLu.js";import"./ActiveShapeUtils-LKLEmdOo.js";import"./isPlainObject-CvDuL2Db.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-aVXlBDAg.js";import"./useAnimationId-CaQxO-lU.js";import"./Trapezoid-mG7ZoGF8.js";import"./Sector-CxmPGBJY.js";import"./RegisterGraphicalItemId--5sq17ZQ.js";import"./ErrorBarContext-D8MNVbSR.js";import"./GraphicalItemClipPath-CgpTlQpM.js";import"./SetGraphicalItem-z01-aQ6e.js";import"./CSSTransitionAnimate-BawDCVYP.js";import"./useElementOffset-C4FOoao2.js";import"./uniqBy-Db_oWzmt.js";import"./iteratee-DJk2bC48.js";import"./Cross-BbANsoOn.js";import"./index-DBIJZBCi.js";import"./ChartSizeDimensions-CO9342qd.js";import"./OffsetShower-C0Ua3cjt.js";import"./PlotAreaShower-jcM5E0P2.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
