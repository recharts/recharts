import{e as r}from"./iframe-bIRDwOrj.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-R-qxMA7y.js";import{C as d}from"./CartesianGrid-Blg1Jjfn.js";import{X as c}from"./XAxis-R_euWI3w.js";import{Y as y}from"./YAxis-Cmkuai_3.js";import{S as h}from"./Scatter-C4HqHRdn.js";import{E as e}from"./ErrorBar-BnhCD6Gh.js";import{T as u}from"./Tooltip-CxHNJRE4.js";import{R as f}from"./RechartsHookInspector-CVcWeYmF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D2ef2x-I.js";import"./arrayEqualityCheck-TXFMRjRi.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hkUJr7lQ.js";import"./immer-BfeMUSMO.js";import"./PolarUtils-CTnnDHZv.js";import"./index-TSn5rXzG.js";import"./hooks-BdMZPZGx.js";import"./axisSelectors-CoyWHGIo.js";import"./d3-scale-CFl6A6_I.js";import"./zIndexSlice-D22DBnXA.js";import"./renderedTicksSlice-DiK-9S0i.js";import"./CartesianChart-EqFxaaEr.js";import"./chartDataContext-O3jargTL.js";import"./CategoricalChart-DI9gh84Y.js";import"./CartesianAxis-mK0sN7a0.js";import"./Layer-IjPfnpTW.js";import"./Text-DzsBbndD.js";import"./DOMUtils-MkU82dM6.js";import"./Label-C1RClCIo.js";import"./ZIndexLayer-D7UlnPMP.js";import"./types-dvoy8M64.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CzayGhzm.js";import"./Curve-orFRmx5o.js";import"./step-DQ7wUDFq.js";import"./tooltipContext-Dh1V_H5h.js";import"./Symbols-DOx_UbzB.js";import"./symbol-NHM4e63q.js";import"./ActiveShapeUtils-wXVyp0gV.js";import"./isPlainObject-DIIEh3HT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CBjo9wrp.js";import"./useAnimationId-Co08wyJa.js";import"./Trapezoid-1FkDqVZ5.js";import"./Sector-D-NFzdmx.js";import"./RegisterGraphicalItemId-DCkpRkMi.js";import"./ErrorBarContext-rH_nwKrW.js";import"./GraphicalItemClipPath-CBXSjVJX.js";import"./SetGraphicalItem-B0eIE6zm.js";import"./CSSTransitionAnimate-B6kW9TCU.js";import"./useElementOffset-BV5HmMjB.js";import"./uniqBy-aS03rcBV.js";import"./iteratee-Dq5hiuyR.js";import"./Cross-CrNHeowF.js";import"./index-B6Pu2s-H.js";import"./ChartSizeDimensions-CmmmbIVS.js";import"./OffsetShower-DVm6XnLi.js";import"./PlotAreaShower-8mw46bvb.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
