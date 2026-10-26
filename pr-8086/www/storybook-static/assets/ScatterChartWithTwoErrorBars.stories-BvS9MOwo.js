import{R as r}from"./iframe-BK3Sisey.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CKIFYb3G.js";import{C as d}from"./CartesianGrid-6-enjERH.js";import{X as c}from"./XAxis-DZM3ZRq3.js";import{Y as y}from"./YAxis-D-L_pdrV.js";import{S as h}from"./Scatter-BUFeQh30.js";import{E as e}from"./ErrorBar-CVeZlmzt.js";import{T as u}from"./Tooltip-DziaoSJI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DORC7p_L.js";import"./zIndexSlice-BetgAyCc.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C_F1VMOc.js";import"./throttle-biJe8rDV.js";import"./index-DRUOZNOo.js";import"./index-de72ObtI.js";import"./axisSelectors-BspbFoiI.js";import"./polarAxisSelectors-DUPrNhEV.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bzw5IHoB.js";import"./index-c0twB4Fw.js";import"./index-B0fPjlHo.js";import"./renderedTicksSlice-By71GZi8.js";import"./index-LqSrX9BA.js";import"./CartesianChart-BDnUkJu9.js";import"./chartDataContext-DOIuQ-MV.js";import"./CategoricalChart-CF961821.js";import"./CartesianAxis-DZgjpOyW.js";import"./Layer-D1HH46xf.js";import"./Text-CRgN4x4u.js";import"./pageBackground-CgvVcPsa.js";import"./useId-zAfHK1iY.js";import"./ZIndexLayer-BE0p1xel.js";import"./Label-UVuQgYwr.js";import"./dataEntryStyles-B4V6KkDF.js";import"./types-DkavCTl8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Tawg351V.js";import"./useAnimationId-CS-FJwCc.js";import"./Curve-DG5NWTvD.js";import"./step-DmrcgL_N.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CoN9QxpN.js";import"./Symbols-PPNvVUUW.js";import"./symbol-BQrXtAQf.js";import"./ActiveShapeUtils-CgpbZaR3.js";import"./RegisterGraphicalItemId-BBZLH_Nk.js";import"./ErrorBarContext-HVXU_-2l.js";import"./SetGraphicalItem-Cx8SQgq9.js";import"./useEffectiveDataKey-Cwm-IkPM.js";import"./CSSTransitionAnimate-BbuDYFxm.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C7iIcJbq.js";import"./uniqBy-Bso09DYT.js";import"./iteratee-Bfjg1LJA.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dxo8y2Lo.js";import"./Rectangle-BNfPDvJT.js";import"./Sector-vXpxhJQs.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
