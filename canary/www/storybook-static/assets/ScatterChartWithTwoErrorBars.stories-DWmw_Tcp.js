import{e as r}from"./iframe-zNZ6gtuS.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-kVX0_yQD.js";import{C as d}from"./CartesianGrid-DzNs49mq.js";import{X as c}from"./XAxis-DgIpX0Qf.js";import{Y as y}from"./YAxis-QWxltK0B.js";import{S as h}from"./Scatter-BaQ3Mnzn.js";import{E as e}from"./ErrorBar-C_Grm52e.js";import{T as u}from"./Tooltip-BTtny24W.js";import{R as f}from"./RechartsHookInspector-C4FQcsDn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C9d9AYjY.js";import"./arrayEqualityCheck-Dt2SCAs7.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DRoPYLx6.js";import"./immer-M5VU9jjz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-FhY_ESTg.js";import"./hooks-CbBhgown.js";import"./axisSelectors-CtziQzAW.js";import"./d3-scale-B2IzxI2Z.js";import"./zIndexSlice-DvWemZ8b.js";import"./renderedTicksSlice-D_TKCYvY.js";import"./CartesianChart-C4jVrU_0.js";import"./chartDataContext-Cti6NzM5.js";import"./CategoricalChart-B0XYoVAJ.js";import"./CartesianAxis-CVokkLFp.js";import"./Layer-BQ0S_2Uh.js";import"./Text-BklBVUCs.js";import"./DOMUtils-FYWG6Ion.js";import"./Label-BCeegupp.js";import"./ZIndexLayer-BqvP1SAm.js";import"./types-ynSAt5pr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDHy-yxP.js";import"./Curve-o1yhe_oH.js";import"./step-CCZqHQ-h.js";import"./tooltipContext-BCl8WHt4.js";import"./Symbols-D7LFKWCm.js";import"./symbol-31gnSDTi.js";import"./ActiveShapeUtils-CGpmN3Ni.js";import"./isPlainObject-BwG0gXsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOPBXjWX.js";import"./useAnimationId-C73SjrYi.js";import"./Trapezoid-D3gu8WeD.js";import"./Sector-BY1ck4On.js";import"./RegisterGraphicalItemId-B9AuoKeF.js";import"./ErrorBarContext-DueqJhS_.js";import"./GraphicalItemClipPath-CbT-MflU.js";import"./SetGraphicalItem-C5rIwT1-.js";import"./CSSTransitionAnimate-DEiLtWEl.js";import"./useElementOffset-C-dERYCT.js";import"./uniqBy-Cyl5F9xm.js";import"./iteratee-L6muNfU6.js";import"./Cross-D3zqjUxu.js";import"./index-NY9m0Yqy.js";import"./ChartSizeDimensions-kkrl-9fd.js";import"./OffsetShower-ZOCzTQ0h.js";import"./PlotAreaShower-CmvJo0mK.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
