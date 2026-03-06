import{e as r}from"./iframe-BNAvIRSF.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CcdX1miA.js";import{C as d}from"./CartesianGrid-JU9Ty3P0.js";import{X as c}from"./XAxis-jNdEOqKJ.js";import{Y as y}from"./YAxis-DKn9Z0NX.js";import{S as h}from"./Scatter-BQH7v4AJ.js";import{E as e}from"./ErrorBar-iFT9x8mp.js";import{T as u}from"./Tooltip-BLcJz2Wy.js";import{R as f}from"./RechartsHookInspector-RJGN-lnu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOKHmNYT.js";import"./arrayEqualityCheck-B_mhFHzb.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D8b97oaV.js";import"./immer-CgHRgtA8.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C8X3jAB2.js";import"./hooks-BLrpM1nt.js";import"./axisSelectors-BdwfMvGg.js";import"./d3-scale-H_vF25Xi.js";import"./zIndexSlice-Di15SS1w.js";import"./renderedTicksSlice-BJfEJ4_M.js";import"./CartesianChart-CvP_4bZU.js";import"./chartDataContext-CvjStfkk.js";import"./CategoricalChart-sDSM-fNf.js";import"./CartesianAxis-B-mMrgKm.js";import"./Layer-DWhwKERy.js";import"./Text-3IHlO_kG.js";import"./DOMUtils-PvS2Tri4.js";import"./Label-CPS78KHE.js";import"./ZIndexLayer-H82-bw69.js";import"./types-QGUyibIY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DDF_v5tC.js";import"./Curve-BiyZrQzX.js";import"./step-CmqF8yoP.js";import"./tooltipContext-C5OdXhD3.js";import"./Symbols-DgKTLzDc.js";import"./symbol-CoAiT4va.js";import"./ActiveShapeUtils-7ytblip2.js";import"./isPlainObject-D9rsbW2B.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxFfTDWj.js";import"./useAnimationId-COyixU_T.js";import"./Trapezoid-qTCS7j3n.js";import"./Sector-B7_OzMPm.js";import"./RegisterGraphicalItemId-Ddyr6RRu.js";import"./ErrorBarContext-BmA35ro-.js";import"./GraphicalItemClipPath-B3V5TXUV.js";import"./SetGraphicalItem-BnPwV1U_.js";import"./CSSTransitionAnimate-KjT5UcLb.js";import"./useElementOffset-BPd1-EH2.js";import"./uniqBy-Bi-fCKKM.js";import"./iteratee-Dv4KjMpy.js";import"./Cross-BQR9pRs1.js";import"./index-BjQmXn2i.js";import"./ChartSizeDimensions-BQzIEJvl.js";import"./OffsetShower-DQh6BuRU.js";import"./PlotAreaShower-C8HeOK1-.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
