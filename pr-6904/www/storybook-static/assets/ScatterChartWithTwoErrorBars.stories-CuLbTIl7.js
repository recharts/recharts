import{e as r}from"./iframe-DKGTY5BH.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-HkllbjHY.js";import{C as d}from"./CartesianGrid-B2IA90L2.js";import{X as c}from"./XAxis-vvYkOBCU.js";import{Y as y}from"./YAxis-DfYPGWBI.js";import{S as h}from"./Scatter-CTULD2L9.js";import{E as e}from"./ErrorBar-DPihuysf.js";import{T as u}from"./Tooltip-DKgLZy4h.js";import{R as f}from"./RechartsHookInspector-ltFkNW4M.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4nUVXRx.js";import"./arrayEqualityCheck-a5J2QiQR.js";import"./resolveDefaultProps-CYnJQ9Tz.js";import"./PolarUtils-BgS5trn7.js";import"./hooks-l5gEcxv4.js";import"./axisSelectors-BRnicQ57.js";import"./zIndexSlice-BN50EdKr.js";import"./CartesianChart-DZl_tmIf.js";import"./chartDataContext-D-E7lauC.js";import"./CategoricalChart-Q4yJ_XVO.js";import"./CartesianAxis-C0xV_R2I.js";import"./Layer-BMyAm0Vh.js";import"./Text-DzT2f_9r.js";import"./DOMUtils-DUCvdtk_.js";import"./Label-8CsqNV_S.js";import"./ZIndexLayer-ChxBgnpv.js";import"./types-BBKXijxu.js";import"./ReactUtils-_yo6pVT0.js";import"./Curve-B8K-f9lF.js";import"./tooltipContext-BovvOkHK.js";import"./Symbols-Bske3hMz.js";import"./ActiveShapeUtils-BwLCOH5f.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiI1dnIo.js";import"./useAnimationId-Br5iK6pF.js";import"./Trapezoid-ClVeJ0sq.js";import"./Sector-wwquBaDN.js";import"./RegisterGraphicalItemId-M1wxD3TO.js";import"./ErrorBarContext-l5-2cdDP.js";import"./GraphicalItemClipPath-C08gEDH6.js";import"./SetGraphicalItem-BCvWrM_W.js";import"./CSSTransitionAnimate-D3NaQrWZ.js";import"./useElementOffset-CjeVi0cr.js";import"./iteratee-CG0POyWm.js";import"./Cross-BsmR19tV.js";import"./index-DpSNf8hh.js";import"./ChartSizeDimensions-CHWSVwWw.js";import"./OffsetShower-fEjtwpJv.js";import"./PlotAreaShower-TADFRiun.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
