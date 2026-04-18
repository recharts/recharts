import{e as r}from"./iframe-h5CV-Rcn.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CQX-UJYQ.js";import{C as d}from"./CartesianGrid-Ce31yJWO.js";import{X as c}from"./XAxis-DJ5PnZv1.js";import{Y as y}from"./YAxis-C2a8cqyi.js";import{S as h}from"./Scatter-CtqWb2O8.js";import{E as e}from"./ErrorBar-BQVthak_.js";import{T as u}from"./Tooltip-DDCw8cHE.js";import{R as f}from"./RechartsHookInspector-aIveFv2Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDGX7JTv.js";import"./arrayEqualityCheck-ANgy1i9u.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2Z0u3RB.js";import"./immer-CtltHNiU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DX1weHGw.js";import"./hooks-Cj5zxCap.js";import"./axisSelectors-CS0Gz9QT.js";import"./d3-scale-ezQ-I_PQ.js";import"./zIndexSlice-Ca__6ThW.js";import"./renderedTicksSlice-D6PrsZnk.js";import"./CartesianChart-D92F_vnb.js";import"./chartDataContext-DblKe8Ss.js";import"./CategoricalChart-CjLLFuSG.js";import"./CartesianAxis-Xrizv51e.js";import"./Layer-wxMTYWnZ.js";import"./Text-guYC2Xjr.js";import"./DOMUtils-DWY4ljAG.js";import"./Label-CVl-fQEc.js";import"./ZIndexLayer-Ca4oOtQE.js";import"./types-BA97OiOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BBFoxYe1.js";import"./Curve-Br2Il0bq.js";import"./step-oPLXy2cm.js";import"./tooltipContext-Cp5c1SCJ.js";import"./Symbols-BjDCCe4r.js";import"./symbol-BfwBQG5X.js";import"./ActiveShapeUtils-7Gb1tHPG.js";import"./isPlainObject-ByvTdsK-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BxYiR-g6.js";import"./useAnimationId-DviPtx6L.js";import"./Trapezoid-CeuEkWeu.js";import"./Sector-sEDjKq2Y.js";import"./RegisterGraphicalItemId-DtcV1RZB.js";import"./ErrorBarContext-BMIPJTH3.js";import"./GraphicalItemClipPath-cwCUl8BP.js";import"./SetGraphicalItem-CaZ4MYuw.js";import"./CSSTransitionAnimate-gNew0ORj.js";import"./useElementOffset-nJlWFN_f.js";import"./uniqBy-BwJC88rW.js";import"./iteratee-KuDzFuBm.js";import"./Cross-tmDNwkFl.js";import"./index-D_mIMI9F.js";import"./ChartSizeDimensions-BotkTU91.js";import"./OffsetShower-BoyHPNkq.js";import"./PlotAreaShower-DoB2hHNO.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
