import{e as r}from"./iframe-BhOFeZiC.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-Dy-Uhh4s.js";import{C as d}from"./CartesianGrid-DEsVfCy8.js";import{X as c}from"./XAxis-Bdc5EFss.js";import{Y as y}from"./YAxis-CAGFb4CC.js";import{S as h}from"./Scatter-x1R6t-Zu.js";import{E as e}from"./ErrorBar-BD9weiBC.js";import{T as u}from"./Tooltip-vZv8c4dm.js";import{R as f}from"./RechartsHookInspector-BUgi4_6U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B9h8BFJy.js";import"./arrayEqualityCheck-DnvBp98Z.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-QzqnHqMr.js";import"./immer-CgFMCYn2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DtMnymxT.js";import"./hooks-D-j4Szqs.js";import"./axisSelectors-CkFx7k9g.js";import"./d3-scale-Dh-KDDIZ.js";import"./zIndexSlice-BPm2fRWC.js";import"./renderedTicksSlice-DhC-KTlH.js";import"./CartesianChart-YCYGQjvu.js";import"./chartDataContext-CSdXrl--.js";import"./CategoricalChart-DeUfUCDU.js";import"./CartesianAxis-gh9udAnp.js";import"./Layer-CMEMyNSg.js";import"./Text-mT-Pe3g2.js";import"./DOMUtils-BSLjJ3Qm.js";import"./Label-kJRxw-hj.js";import"./ZIndexLayer-Cr55r242.js";import"./types-DHxgD5nd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CZC3rgVy.js";import"./Curve-DWnWSqjG.js";import"./step-BCxE2ASN.js";import"./tooltipContext-Dn5jD_0x.js";import"./Symbols-CbytFAxU.js";import"./symbol-2PJyUenY.js";import"./ActiveShapeUtils-Lq8saTGY.js";import"./isPlainObject-2eWmtn-Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-S45eHrUs.js";import"./useAnimationId-DV7aFVna.js";import"./Trapezoid-ChHuSzRR.js";import"./Sector-ChjLZ5O9.js";import"./RegisterGraphicalItemId-C5HnpdYL.js";import"./ErrorBarContext-BThRMRD3.js";import"./GraphicalItemClipPath-Ci2rGtFq.js";import"./SetGraphicalItem-BTap-zvv.js";import"./CSSTransitionAnimate-DSsA66RH.js";import"./useElementOffset-DF32I3Vt.js";import"./uniqBy-C6YMjNiL.js";import"./iteratee-CfuiIycf.js";import"./Cross-EI1J8dWf.js";import"./index-BzoU3jW7.js";import"./ChartSizeDimensions-BS96mFbZ.js";import"./OffsetShower-CLGJSkef.js";import"./PlotAreaShower-s_c5Y178.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
