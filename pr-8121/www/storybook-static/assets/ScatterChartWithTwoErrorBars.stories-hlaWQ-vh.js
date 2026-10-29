import{R as r}from"./iframe-CA9m8GYo.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BgtgD8U8.js";import{C as d}from"./CartesianGrid-B5a1RZh7.js";import{X as c}from"./XAxis-CC3YYdgQ.js";import{Y as y}from"./YAxis-CbW8C0_5.js";import{S as h}from"./Scatter-DKfEQY-5.js";import{E as e}from"./ErrorBar-BD8CZBae.js";import{T as u}from"./Tooltip-oV_VKaqR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PB4GMrwR.js";import"./zIndexSlice-DtH5keZE.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./throttle-o0TVEzLp.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./axisSelectors-BayOnfvg.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C2dTdr93.js";import"./index-CqNMjBNA.js";import"./index-B2booWlS.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./CartesianAxis-D4TNjeO6.js";import"./Layer-Hxk-5S8n.js";import"./Text-BFxpfCQD.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./Label-ekuzQLiz.js";import"./types-Cvx_7iJj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-CV5x_Azz.js";import"./activeStyles-PpyfPCVq.js";import"./useAnimationId-CvualzzB.js";import"./dataEntryStyles-XE7WR2iA.js";import"./Curve-DZjiB-zR.js";import"./step-DF34UguZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Pjqm9-1w.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./ErrorBarContext-DjcN2az-.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./useEffectiveDataKey-VJMj_VC4.js";import"./CSSTransitionAnimate-CkdvLewy.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DILgA3Om.js";import"./uniqBy-Cx6V6RxR.js";import"./iteratee-BlwalV7N.js";import"./isArguments-yB-y1yaH.js";import"./Cross-oYr6BlXY.js";import"./Rectangle-Bu0iEdVM.js";import"./Sector-6yiBA46s.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
