import{e as r}from"./iframe-2KzY7SZI.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CCQolh4t.js";import{C as d}from"./CartesianGrid-CUnnjTY-.js";import{X as c}from"./XAxis-IZqHvSRM.js";import{Y as y}from"./YAxis-BdZCTlTT.js";import{S as h}from"./Scatter-B0zwDUA7.js";import{E as e}from"./ErrorBar-ClG5rsG2.js";import{T as u}from"./Tooltip-BbT-QfX0.js";import{R as f}from"./RechartsHookInspector-BfBUolA6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-6FLOJafv.js";import"./arrayEqualityCheck-C_KFC4aG.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DCkyn-XH.js";import"./immer-BbCSCUWa.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DWwY0oag.js";import"./hooks-D41MmbXB.js";import"./axisSelectors-btICR-6o.js";import"./d3-scale-YB1UXNlF.js";import"./zIndexSlice-DkD_gkVE.js";import"./renderedTicksSlice-DkyMgPSK.js";import"./CartesianChart-BjELWt2X.js";import"./chartDataContext-Cd81LqCh.js";import"./CategoricalChart-XS_rytPK.js";import"./CartesianAxis-iQKBE-lF.js";import"./Layer-CDY6haxt.js";import"./Text-D9eiSsSq.js";import"./DOMUtils-qhd3ut3X.js";import"./Label-30J3b0Tu.js";import"./ZIndexLayer-CjxdKwx6.js";import"./types-C82LLnNR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CP-aoZRs.js";import"./Curve-D8MF2fMv.js";import"./step-B9r6R9dH.js";import"./tooltipContext-D7xp7Kjj.js";import"./Symbols-BgWJ7GGh.js";import"./symbol-D5FcbSZZ.js";import"./ActiveShapeUtils-CWrruK-s.js";import"./isPlainObject-k6awtQUp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CQd-B1Q8.js";import"./useAnimationId-DwCOtHiA.js";import"./Trapezoid-BF_TMfHF.js";import"./Sector-Bhzm6McX.js";import"./RegisterGraphicalItemId-vClWkM0Z.js";import"./ErrorBarContext-CYcgyRmM.js";import"./GraphicalItemClipPath-D6n4jgua.js";import"./SetGraphicalItem-BxWbQ_06.js";import"./CSSTransitionAnimate-DKAbNfGc.js";import"./useElementOffset-Cy_K7xEb.js";import"./uniqBy-DOsmyNAl.js";import"./iteratee-DwOYEDyO.js";import"./Cross-D75OTgsU.js";import"./index-DuC9ckfX.js";import"./ChartSizeDimensions-OFKXx0KH.js";import"./OffsetShower-C_p34O5g.js";import"./PlotAreaShower-BviaC-V-.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
