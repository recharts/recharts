import{R as r}from"./iframe-DloB-Tup.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-7F6AzB7A.js";import{C as d}from"./CartesianGrid-BMMYdRzG.js";import{X as c}from"./XAxis-85tJ7DjB.js";import{Y as y}from"./YAxis-C2kKnKD5.js";import{S as h}from"./Scatter-BRONzA7H.js";import{E as e}from"./ErrorBar-C9DSvcFC.js";import{T as u}from"./Tooltip-CVyBTsCT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7KZ4AFC.js";import"./zIndexSlice-DkoSoypq.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DXiVg1qQ.js";import"./throttle-DHxiFtgA.js";import"./index-DV-zLmFt.js";import"./index-Bjn59J1w.js";import"./axisSelectors-5JufQAoG.js";import"./polarAxisSelectors-BA-2pRlP.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Cp_uhw02.js";import"./index-sAdADp0M.js";import"./index-BpHVs9OQ.js";import"./renderedTicksSlice-QBBzvaXk.js";import"./index-BpFDYg8A.js";import"./CartesianChart-juZJjY88.js";import"./ZIndexPortal-B99ywjs0.js";import"./CategoricalChart-BfiBF3Vo.js";import"./CartesianAxis-3ybsRmFq.js";import"./Layer-S6G7_nQD.js";import"./Text-BM9EdhAp.js";import"./pageBackground-uaKlEO31.js";import"./ZIndexLayer-bWANmXVo.js";import"./Label-BCZcSJT3.js";import"./dataEntryStyles-DO0_QeZe.js";import"./types-BVm9IbXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-B_3Vas12.js";import"./activeStyles-B8TQJkxp.js";import"./useAnimationId-B4JCM27x.js";import"./Curve-Dw8-x6-u.js";import"./step-CNEatR3g.js";import"./path-DyVhHtw_.js";import"./tooltipContext-FzzNO4aG.js";import"./Symbols-OqBqpZTo.js";import"./symbol-D_Qfgjrw.js";import"./ActiveShapeUtils-O1dlG29g.js";import"./RegisterGraphicalItemId-BdcH7fWn.js";import"./ErrorBarContext-CBYSVt7N.js";import"./SetGraphicalItem-lsA-IuJf.js";import"./useEffectiveDataKey-B7m-hO1Q.js";import"./CSSTransitionAnimate-8gH1j78W.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-fPA8IkJo.js";import"./uniqBy-C9ysuPBd.js";import"./iteratee-C2C5pJva.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dqr7MU5J.js";import"./Rectangle-DT8WiWUe.js";import"./Sector-CMUhvR-T.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
