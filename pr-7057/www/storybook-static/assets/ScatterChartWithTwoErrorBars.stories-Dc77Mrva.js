import{e as r}from"./iframe-6geHM4bd.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-6mcxwa_t.js";import{C as d}from"./CartesianGrid-OsQE69dK.js";import{X as c}from"./XAxis-enChBe_S.js";import{Y as y}from"./YAxis-CyQoyaj5.js";import{S as h}from"./Scatter-D26HZQIq.js";import{E as e}from"./ErrorBar-m6Hxmvvf.js";import{T as u}from"./Tooltip-BDkatYxu.js";import{R as f}from"./RechartsHookInspector-DIMVuZhQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CT-ler3b.js";import"./arrayEqualityCheck-Bhk4eC6b.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CBsCUn_G.js";import"./immer-BHDsl4Gi.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BthKVvnl.js";import"./hooks-DI5QNaPY.js";import"./axisSelectors-CkcbrWkF.js";import"./d3-scale-B4Y55H0h.js";import"./zIndexSlice-DbqCu4eM.js";import"./renderedTicksSlice-Q5iEeOyf.js";import"./CartesianChart-DcdXCHSt.js";import"./chartDataContext-C-mzylkg.js";import"./CategoricalChart-T8dvDJlI.js";import"./CartesianAxis-BqFoQr74.js";import"./Layer-AOnBAVLr.js";import"./Text--8GWbfGy.js";import"./DOMUtils-Bh7eQOMe.js";import"./Label-eYApNfXX.js";import"./ZIndexLayer-D_4fvMt1.js";import"./types-BNIhqt2v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DLbKFm0I.js";import"./Curve-CQuCDB0y.js";import"./step-DQP9UvLT.js";import"./tooltipContext-Bp0p3vM5.js";import"./Symbols-D0fHlVEK.js";import"./symbol-D3KeBWn_.js";import"./ActiveShapeUtils-Bd1evmhL.js";import"./isPlainObject-BrUI-U16.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Upynic_t.js";import"./useAnimationId-RNAT_shg.js";import"./Trapezoid-COJp5Zhq.js";import"./Sector-xROucIrP.js";import"./RegisterGraphicalItemId-CnRMZ_3g.js";import"./ErrorBarContext-D0w-EAob.js";import"./GraphicalItemClipPath-CLYl1R8a.js";import"./SetGraphicalItem-B9Yc_fe3.js";import"./CSSTransitionAnimate-DXxmXoLM.js";import"./useElementOffset-Yf81zrLa.js";import"./uniqBy-D0BLSQKW.js";import"./iteratee-Dsk_uIQJ.js";import"./Cross-DatCJvBD.js";import"./index-W9fTJ1Ap.js";import"./ChartSizeDimensions-ZcxWch0o.js";import"./OffsetShower-D1XTDPFK.js";import"./PlotAreaShower-BWZPams-.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
