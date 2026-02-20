import{e as r}from"./iframe-Caz6nZ2I.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-5JgGItap.js";import{C as d}from"./CartesianGrid-DoN3UDrT.js";import{X as c}from"./XAxis-Dd-oJpip.js";import{Y as y}from"./YAxis-BRCgxqg5.js";import{S as h}from"./Scatter-BGxpAyR_.js";import{E as e}from"./ErrorBar-BA5_dDC_.js";import{T as u}from"./Tooltip-BIkCUAzI.js";import{R as f}from"./RechartsHookInspector-DDSzpp5A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaD7RcsJ.js";import"./arrayEqualityCheck-CcFxY-Xq.js";import"./resolveDefaultProps-DAfTexXm.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CDeGIHYi.js";import"./axisSelectors-CATtk_Ip.js";import"./zIndexSlice-BOArh4At.js";import"./renderedTicksSlice-Dm3Q4on6.js";import"./CartesianChart-Dac4qaSb.js";import"./chartDataContext-Ckz2ERDZ.js";import"./CategoricalChart-3KZweWrA.js";import"./CartesianAxis-DlMujoQ4.js";import"./Layer-B1GIAb1E.js";import"./Text-CLjo-AK5.js";import"./DOMUtils-CnTHdE3M.js";import"./Label-Ek7Phs8Z.js";import"./ZIndexLayer-BLDjT7Qj.js";import"./types-8IoGCZ4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-R8D9NurX.js";import"./Curve-B5Ob5vne.js";import"./tooltipContext-C6PSabt-.js";import"./Symbols-C3i96Wdn.js";import"./ActiveShapeUtils-D4vAh-I1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DOnXuvZA.js";import"./useAnimationId-DFkOU0Go.js";import"./Trapezoid-z6JJWRCw.js";import"./Sector-0pp4XTlb.js";import"./RegisterGraphicalItemId-t2v7UQtx.js";import"./ErrorBarContext-BJza0ZIr.js";import"./GraphicalItemClipPath-Cv5KZpMj.js";import"./SetGraphicalItem-DOmEhcN0.js";import"./CSSTransitionAnimate-e0OQH7bS.js";import"./useElementOffset-CTn0xDy-.js";import"./iteratee-DFXjnr9G.js";import"./Cross-BWbZyZ61.js";import"./index-BX6q2UKF.js";import"./ChartSizeDimensions-C4z1FuV2.js";import"./OffsetShower-BJHPKe79.js";import"./PlotAreaShower-BuE2Upo9.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
