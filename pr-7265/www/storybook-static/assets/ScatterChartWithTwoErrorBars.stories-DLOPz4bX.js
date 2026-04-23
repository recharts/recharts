import{e as r}from"./iframe-B9O9PLmj.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-B2eorxSQ.js";import{C as d}from"./CartesianGrid-D3aW2foA.js";import{X as c}from"./XAxis-B1EE7uVS.js";import{Y as y}from"./YAxis-BoxHjnQ7.js";import{S as h}from"./Scatter-DZd9dQJs.js";import{E as e}from"./ErrorBar-BI1Xtk1e.js";import{T as u}from"./Tooltip-BxSGwdpc.js";import{R as f}from"./RechartsHookInspector-oD2s6CPO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DGbm3XN2.js";import"./arrayEqualityCheck-DC5CCiaX.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BG5-jm5o.js";import"./immer-CorX8m6_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CAnKFVeM.js";import"./hooks-BTzSQdIL.js";import"./axisSelectors-D00_Gdzw.js";import"./d3-scale-CExCS1t0.js";import"./zIndexSlice-CXYg_MdN.js";import"./renderedTicksSlice-M3URujhE.js";import"./CartesianChart-CzHYXFWb.js";import"./chartDataContext-CXYcSTD1.js";import"./CategoricalChart-CMv5R2DQ.js";import"./CartesianAxis-D9MTlCrN.js";import"./Layer-CeeJrP8o.js";import"./Text-BILB17Zq.js";import"./DOMUtils-CwoLiA_U.js";import"./Label-CyHBMA3l.js";import"./ZIndexLayer-DYfC-fux.js";import"./types-wS1CwaJ6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BBiT48UQ.js";import"./Curve-CnUGNDOG.js";import"./step-DmhUsuIO.js";import"./tooltipContext-DAf7S0C6.js";import"./Symbols-CFtKhMEP.js";import"./symbol-gibfx3Ew.js";import"./ActiveShapeUtils-BZRBvXfn.js";import"./isPlainObject-DKUUO2R6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DD4TDJ91.js";import"./useAnimationId-CEyoSkEC.js";import"./Trapezoid-BTKQS4gb.js";import"./Sector-Cr5FAs6h.js";import"./RegisterGraphicalItemId-B6wW9i8n.js";import"./ErrorBarContext-CdQGiGFg.js";import"./GraphicalItemClipPath-CTLEHBag.js";import"./SetGraphicalItem-C1WNJGNc.js";import"./CSSTransitionAnimate-C2QyRxQs.js";import"./useElementOffset-BDjp6GLr.js";import"./uniqBy-CjP1EF7z.js";import"./iteratee-D6c1MZ_S.js";import"./Cross-BioPQKld.js";import"./index-B7585ExM.js";import"./ChartSizeDimensions-BLFdg5d7.js";import"./OffsetShower-BZwyeReB.js";import"./PlotAreaShower-4RtYHx69.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
