import{e as r}from"./iframe-wPjdlMkh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-CQccskEE.js";import{C as d}from"./CartesianGrid-CuCVYsHs.js";import{X as c}from"./XAxis-_OYHLA6K.js";import{Y as y}from"./YAxis-CALSYCDu.js";import{S as h}from"./Scatter-BVlYi9Hn.js";import{E as e}from"./ErrorBar-D-HYqDRI.js";import{T as u}from"./Tooltip-CTH7qdUG.js";import{R as f}from"./RechartsHookInspector-Bh7Xd8ps.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B-jo2qpq.js";import"./arrayEqualityCheck-C2qrry8R.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRV1yjEG.js";import"./immer-BpPfFNPI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CRU-lK14.js";import"./hooks-DMKFe6xQ.js";import"./axisSelectors-BeV9utXI.js";import"./d3-scale-NFHY5pWC.js";import"./zIndexSlice-CfQuOadn.js";import"./renderedTicksSlice-DSJJKDzx.js";import"./CartesianChart-TFHKXQrQ.js";import"./chartDataContext-Ds7D7t0h.js";import"./CategoricalChart-C7FeICx9.js";import"./CartesianAxis-BzSAAt9Y.js";import"./Layer-Cueh5NkG.js";import"./Text-D_Ir2n4d.js";import"./DOMUtils-CiWWI4hV.js";import"./Label-BRKSm8Ce.js";import"./ZIndexLayer-D9w89N_j.js";import"./types-D-aEIpto.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DkGkgP-m.js";import"./Curve-CTJQqo2b.js";import"./step-BR5xtyiz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-f7sFM_aI.js";import"./Symbols-CxPJ2NK4.js";import"./symbol-0Nqa0CmC.js";import"./ActiveShapeUtils-Dm52jN-p.js";import"./RegisterGraphicalItemId-CMP7i145.js";import"./ErrorBarContext-C8p1ky5C.js";import"./GraphicalItemClipPath-Iqn3z8Uo.js";import"./SetGraphicalItem-FTMP51O8.js";import"./useAnimationId-FpSV_Xeh.js";import"./CSSTransitionAnimate-C4jxKQtM.js";import"./useElementOffset-BW7DH_NQ.js";import"./uniqBy-Csen4X-d.js";import"./iteratee-Bu02any-.js";import"./Cross-CrsyMmeS.js";import"./Rectangle-D2oO3kmO.js";import"./Sector-BeyIJ6e_.js";import"./index-88IFfxfH.js";import"./ChartSizeDimensions-CSliTc3n.js";import"./OffsetShower-C85nEH-b.js";import"./PlotAreaShower-DrRr8S-w.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
