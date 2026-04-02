import{e as r}from"./iframe-eSAJEZht.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CBNKyT--.js";import{C as d}from"./CartesianGrid-D4NuE-Sg.js";import{X as c}from"./XAxis-DBtpKE2p.js";import{Y as y}from"./YAxis-BH4pX6Iz.js";import{S as h}from"./Scatter-D4pzZHV7.js";import{E as e}from"./ErrorBar-DaAuad5Z.js";import{T as u}from"./Tooltip-zy-WrCaW.js";import{R as f}from"./RechartsHookInspector-CNBbry69.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CiRDGflb.js";import"./arrayEqualityCheck-DIP4cf6Y.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BhREbLw9.js";import"./immer-TNEPjPCB.js";import"./PolarUtils-CTnnDHZv.js";import"./index-zRxxYhEY.js";import"./hooks-Q2uSt6yB.js";import"./axisSelectors-DyoITJEq.js";import"./d3-scale-CjiJ_ZTy.js";import"./zIndexSlice-BGPHYbVg.js";import"./renderedTicksSlice-B8h_p9LR.js";import"./CartesianChart-C2iAnTHm.js";import"./chartDataContext-eyhsy6xY.js";import"./CategoricalChart-B1JvHwji.js";import"./CartesianAxis-CGGz-Ws1.js";import"./Layer-Cp_zb8Y2.js";import"./Text-BIJyaKeQ.js";import"./DOMUtils-tcwXxObr.js";import"./Label-C16feiqK.js";import"./ZIndexLayer-D46bbrBq.js";import"./types-BwWrJ-BL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-H-FoJgDc.js";import"./Curve-dniblYNk.js";import"./step-n_okOr0Q.js";import"./tooltipContext-CBEOTzBv.js";import"./Symbols-DdU7u5vI.js";import"./symbol-56g7D4zb.js";import"./ActiveShapeUtils-Dy2Nr1AF.js";import"./isPlainObject-YNZwY72g.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvSVsybX.js";import"./useAnimationId-Cu-vgNv6.js";import"./Trapezoid-CdRLetkI.js";import"./Sector-DkuyB5qD.js";import"./RegisterGraphicalItemId-BbmjudUD.js";import"./ErrorBarContext-BMrhnYpV.js";import"./GraphicalItemClipPath-8GCAR-eN.js";import"./SetGraphicalItem-x3BMDizg.js";import"./CSSTransitionAnimate-DoiQ12I0.js";import"./useElementOffset-aklaWS_N.js";import"./uniqBy-CeyRlWJb.js";import"./iteratee-CR1uVucu.js";import"./Cross-BoevrVQ9.js";import"./index-BGg-RllE.js";import"./ChartSizeDimensions-DwToSRXW.js";import"./OffsetShower-UG9ad5J7.js";import"./PlotAreaShower-ltT9O7XE.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
