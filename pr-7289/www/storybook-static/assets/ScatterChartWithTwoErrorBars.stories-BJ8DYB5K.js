import{e as r}from"./iframe-BvixMVLJ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-IlFOnVx5.js";import{C as d}from"./CartesianGrid-C3NbQITh.js";import{X as c}from"./XAxis-DccioUx7.js";import{Y as y}from"./YAxis-CtSbpL5M.js";import{S as h}from"./Scatter-CsK0ftTO.js";import{E as e}from"./ErrorBar-DVCNxkLn.js";import{T as u}from"./Tooltip-BjAJgCsl.js";import{R as f}from"./RechartsHookInspector-B7OCtou7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9hDtRNp.js";import"./arrayEqualityCheck-9JafNuHb.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CPqr6DGH.js";import"./immer-CaX280hR.js";import"./PolarUtils-CTnnDHZv.js";import"./index-4u6l2t3f.js";import"./hooks-CmxNexDu.js";import"./axisSelectors-CZAHgbVu.js";import"./d3-scale-DvCQBID5.js";import"./zIndexSlice-Dt-OH-0J.js";import"./renderedTicksSlice-Bakbxnfn.js";import"./CartesianChart-C8rmaTr8.js";import"./chartDataContext-H28vHODo.js";import"./CategoricalChart-B9R3Zf2d.js";import"./CartesianAxis-Bc1lTLgz.js";import"./Layer-E6_PJRcD.js";import"./Text-eQ3pJOEs.js";import"./DOMUtils-DEgurZZA.js";import"./Label-2bgwwMrL.js";import"./ZIndexLayer-BQCBZf3p.js";import"./types-C4LPRE4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CX2Z3mNI.js";import"./Curve-D-7l7mPW.js";import"./step-DGFNdhZX.js";import"./tooltipContext-Bm4HoMu4.js";import"./Symbols-Bp2oN4pa.js";import"./symbol-I_8-paOM.js";import"./ActiveShapeUtils-DIK_h4fj.js";import"./isPlainObject-Bwvz8CoG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIrtZjOU.js";import"./useAnimationId-BG6xyOIZ.js";import"./Trapezoid-zjet3lxO.js";import"./Sector-CuxTQcgV.js";import"./RegisterGraphicalItemId-BfUUoebv.js";import"./ErrorBarContext-CY1gh6Fr.js";import"./GraphicalItemClipPath-CqZBK23Z.js";import"./SetGraphicalItem-D9gH1oTH.js";import"./CSSTransitionAnimate-89-Kgdf3.js";import"./useElementOffset-CYT4WsBs.js";import"./uniqBy-Cz8jk1Wp.js";import"./iteratee-CqaQO7ZM.js";import"./Cross-JTyiahNE.js";import"./index-CWh6xOze.js";import"./ChartSizeDimensions-j35P-O-9.js";import"./OffsetShower-DT-VFUR7.js";import"./PlotAreaShower-v_ea9rYC.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
