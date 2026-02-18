import{e as r}from"./iframe-DRECDyJu.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-BM0hzWgx.js";import{C as d}from"./CartesianGrid-TIXS1aWN.js";import{X as c}from"./XAxis-0kgYDqpD.js";import{Y as y}from"./YAxis-DS55SlTE.js";import{S as h}from"./Scatter-DYQMhPA3.js";import{E as e}from"./ErrorBar-DOiuwzvS.js";import{T as u}from"./Tooltip-CUUuqGsi.js";import{R as f}from"./RechartsHookInspector-CkXF-mFA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CU5EzhmX.js";import"./arrayEqualityCheck-CwmcLezE.js";import"./resolveDefaultProps-BL8CG5Be.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CjbPLp91.js";import"./axisSelectors-B-ON6UuJ.js";import"./zIndexSlice-DfG_LBZH.js";import"./renderedTicksSlice-BLRX00yy.js";import"./CartesianChart-B_9qra-d.js";import"./chartDataContext-D1nxolyM.js";import"./CategoricalChart-B6UPKjrz.js";import"./CartesianAxis-BgGI7FTB.js";import"./Layer-BVdUfIl0.js";import"./Text-DYPz2gV9.js";import"./DOMUtils-bfarr5el.js";import"./Label-CYBLI-Y2.js";import"./ZIndexLayer-DsAf8BK3.js";import"./types-BSPZHGNH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils--6xJa5xj.js";import"./Curve-BflKxEFk.js";import"./tooltipContext-kU_ZqqVJ.js";import"./Symbols-4bVcflIB.js";import"./ActiveShapeUtils-BIKdmm5h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bt3TSPnX.js";import"./useAnimationId-DgWDlavz.js";import"./Trapezoid-D7oKFicN.js";import"./Sector-DGNmg5hs.js";import"./RegisterGraphicalItemId-CnbfgSt4.js";import"./ErrorBarContext-Du4SjFis.js";import"./GraphicalItemClipPath-Cm2-R3a1.js";import"./SetGraphicalItem-BUqWhQAE.js";import"./CSSTransitionAnimate-tDDQnpKE.js";import"./useElementOffset-Cf8ftoIX.js";import"./iteratee-BVIXGgQH.js";import"./Cross-DS7dKe1G.js";import"./index-2vD-No8t.js";import"./ChartSizeDimensions-EJWE07nJ.js";import"./OffsetShower-Dgs61RIJ.js";import"./PlotAreaShower-B71aiz9a.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,wr as __namedExportsOrder,fr as default};
