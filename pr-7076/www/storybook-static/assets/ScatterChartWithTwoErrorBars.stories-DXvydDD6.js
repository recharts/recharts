import{e as r}from"./iframe-DJ6q0UO-.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-6q1Clu4I.js";import{C as d}from"./CartesianGrid-UPpwW0-A.js";import{X as c}from"./XAxis-DlTasNrE.js";import{Y as y}from"./YAxis-BkUPDN4D.js";import{S as h}from"./Scatter-B7mBqxW5.js";import{E as e}from"./ErrorBar-CmiE74ju.js";import{T as u}from"./Tooltip-B8xzSfu7.js";import{R as f}from"./RechartsHookInspector-CMjN7xhZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CC4bWY2k.js";import"./arrayEqualityCheck-BTG2-4hW.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ClNXOKlU.js";import"./immer-DZ05EljQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-h_islmiW.js";import"./hooks-BoprsZkg.js";import"./axisSelectors-tM2Ez228.js";import"./d3-scale-_iIYR1pZ.js";import"./zIndexSlice-BmNGt8JH.js";import"./renderedTicksSlice-D51KP5us.js";import"./CartesianChart-CehgIYHu.js";import"./chartDataContext-CvUYCtAC.js";import"./CategoricalChart-CFoaXUlO.js";import"./CartesianAxis-CbTmm20n.js";import"./Layer-DYjtWcck.js";import"./Text-DLyfATo-.js";import"./DOMUtils-DG6JE6vP.js";import"./Label-Cfw2XXr5.js";import"./ZIndexLayer-nrCDqpeq.js";import"./types-Ds0jwWEi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-eTAsrJ6L.js";import"./Curve-CUiTauC8.js";import"./step-B8mY4Wsq.js";import"./tooltipContext-BTNw1VO2.js";import"./Symbols-CZ9XpzM5.js";import"./symbol-C9svRAEA.js";import"./ActiveShapeUtils-BXYjh8cu.js";import"./isPlainObject-BG7kj9kW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BMamn6k9.js";import"./useAnimationId-DdUAPJ1J.js";import"./Trapezoid-BT8qRaiE.js";import"./Sector-CzkjfA5d.js";import"./RegisterGraphicalItemId-CMX_3-4x.js";import"./ErrorBarContext-Dz-CTdIG.js";import"./GraphicalItemClipPath-DQW1wzar.js";import"./SetGraphicalItem-DKRiAGC0.js";import"./CSSTransitionAnimate-dkMhcY8W.js";import"./useElementOffset-CJyvxuvG.js";import"./uniqBy-C3Jxz-Ql.js";import"./iteratee-Czc_ZmrW.js";import"./Cross-C88OEKkD.js";import"./index-Drj3rz67.js";import"./ChartSizeDimensions-Az2tJg6r.js";import"./OffsetShower-FoNPoJYn.js";import"./PlotAreaShower-DMVJxorS.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
