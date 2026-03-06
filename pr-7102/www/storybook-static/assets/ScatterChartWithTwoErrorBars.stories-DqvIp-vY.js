import{e as r}from"./iframe-_5zxKgci.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-C7Da1jH9.js";import{C as d}from"./CartesianGrid-Dzhi_uZZ.js";import{X as c}from"./XAxis-BoiUuQV6.js";import{Y as y}from"./YAxis-DbWdO-Gr.js";import{S as h}from"./Scatter-Y_JEgxwp.js";import{E as e}from"./ErrorBar-BEOTzUzj.js";import{T as u}from"./Tooltip-BF6KT7dd.js";import{R as f}from"./RechartsHookInspector-C23NmY-H.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0zBti2g.js";import"./arrayEqualityCheck-DLMNeVLZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Gm3EjVOS.js";import"./immer-BaMlApsY.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CQESjCWD.js";import"./hooks-vaBYKV_d.js";import"./axisSelectors-i9q5Sg_V.js";import"./d3-scale-CRK2FJTc.js";import"./zIndexSlice-D2iO7-nB.js";import"./renderedTicksSlice-txKnD5_R.js";import"./CartesianChart-DzKjUM75.js";import"./chartDataContext-CjoUdOo7.js";import"./CategoricalChart-DhteKPsq.js";import"./CartesianAxis-t0Xlfasl.js";import"./Layer-BeNKD6uh.js";import"./Text-CefoXcAH.js";import"./DOMUtils-CGXKezNB.js";import"./Label-B3FoJLG-.js";import"./ZIndexLayer-DbY9BdOy.js";import"./types-B4BvwS0U.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-u6DOyzs3.js";import"./Curve-DLvP5FI3.js";import"./step-CFxJr1fu.js";import"./tooltipContext-7zEpgpzG.js";import"./Symbols-BwFRUbSV.js";import"./symbol-DUbMmeat.js";import"./ActiveShapeUtils-DyNfLGNz.js";import"./isPlainObject-DMrThXxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLAaMXbr.js";import"./useAnimationId-B5UzlvQm.js";import"./Trapezoid-DHmjrzCK.js";import"./Sector-CZQdSV3s.js";import"./RegisterGraphicalItemId-kDeQrqEd.js";import"./ErrorBarContext-CvNdI_Cv.js";import"./GraphicalItemClipPath-B6v7KdUQ.js";import"./SetGraphicalItem-To3lbRAY.js";import"./CSSTransitionAnimate-DUmu5FHb.js";import"./useElementOffset-B6-UpGgV.js";import"./uniqBy-Bp2v7zul.js";import"./iteratee-BHXg1SGO.js";import"./Cross-DjU0xUW-.js";import"./index-CSd9dO1D.js";import"./ChartSizeDimensions-B7JadKwb.js";import"./OffsetShower-_I7-ZVXC.js";import"./PlotAreaShower-Duhke6Yi.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
