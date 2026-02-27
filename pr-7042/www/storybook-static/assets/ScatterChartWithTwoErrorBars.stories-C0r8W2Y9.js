import{e as r}from"./iframe-Dr9hlnt0.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-DZ5gRzxm.js";import{C as d}from"./CartesianGrid-C-DxZLwk.js";import{X as c}from"./XAxis-DVCekQJU.js";import{Y as y}from"./YAxis-oVvY9CD_.js";import{S as h}from"./Scatter-BTwtoxfX.js";import{E as e}from"./ErrorBar-DcvefVkO.js";import{T as u}from"./Tooltip-BphQq36y.js";import{R as f}from"./RechartsHookInspector-DqXSZ2_4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DInH99Th.js";import"./arrayEqualityCheck-dGE5_Gdx.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BcfXVXAk.js";import"./immer-B0cgghQh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-IE9LPIX3.js";import"./hooks-CB3Bi2qN.js";import"./axisSelectors-BElW-4uO.js";import"./d3-scale-Kw50_LDj.js";import"./zIndexSlice-DGOFW2aZ.js";import"./renderedTicksSlice-CKBM6rCx.js";import"./CartesianChart-DxJdttbu.js";import"./chartDataContext-no4gboHT.js";import"./CategoricalChart-BlqKECmV.js";import"./CartesianAxis-zfjDIuu9.js";import"./Layer-Dau6qZl4.js";import"./Text-5hzj-3E2.js";import"./DOMUtils-CHMlhwBF.js";import"./Label-Cwqjf1nY.js";import"./ZIndexLayer-bo4FLnP8.js";import"./types-BT9nDPZN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DLDWRsmH.js";import"./Curve-B9wE7HPg.js";import"./step-0gc20F8a.js";import"./tooltipContext-Bl5xznvE.js";import"./Symbols-DjCtNUtk.js";import"./symbol-DBg6OtuT.js";import"./ActiveShapeUtils-Zy3mhGJ3.js";import"./isPlainObject-CA9cA3dI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C0CBW5qs.js";import"./useAnimationId-DF7fT-LB.js";import"./Trapezoid-B4y_3kG1.js";import"./Sector-B2l0FABS.js";import"./RegisterGraphicalItemId-DaJnSa8q.js";import"./ErrorBarContext-DFPKgud5.js";import"./GraphicalItemClipPath-C96TQI3r.js";import"./SetGraphicalItem-13vPI63j.js";import"./CSSTransitionAnimate-BSWPeAdK.js";import"./useElementOffset-C8Y7cVjc.js";import"./uniqBy-CKd_6bHf.js";import"./iteratee-BGMuKn8v.js";import"./Cross-DviCIwsu.js";import"./index-Dj7LSIr-.js";import"./ChartSizeDimensions-DlMrTXA2.js";import"./OffsetShower-DfvMVNLi.js";import"./PlotAreaShower-DpM8yPVC.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
