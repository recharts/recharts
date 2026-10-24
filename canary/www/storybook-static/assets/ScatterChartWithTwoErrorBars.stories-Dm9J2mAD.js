import{R as r}from"./iframe-CUSfJVGy.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-q4t78jUU.js";import{C as d}from"./CartesianGrid-Dd4F1MTn.js";import{X as c}from"./XAxis-93B4Nx5D.js";import{Y as y}from"./YAxis-cM-Or_OG.js";import{S as h}from"./Scatter-CYqmuUSL.js";import{E as e}from"./ErrorBar-DXsfVplE.js";import{T as u}from"./Tooltip-CNt3xiQz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAlfJkzI.js";import"./zIndexSlice-DHvlitAO.js";import"./throttle-Dw_3NXl9.js";import"./index-DM8acuEY.js";import"./index-BjrjF_sl.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eB2rdyhX.js";import"./isWellBehavedNumber-BlhXGToZ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Ba-uagI8.js";import"./d3-scale-B5gueGek.js";import"./index-cWSuCV9A.js";import"./index-aMAZnXxU.js";import"./renderedTicksSlice-DTIkQgMV.js";import"./index-BHb_Ppqj.js";import"./CartesianChart-CYmwXWF8.js";import"./chartDataContext-C8S7uA6r.js";import"./CategoricalChart-CCLAUHt0.js";import"./CartesianAxis-DdmQm0Mb.js";import"./Layer-D3Rs15Eb.js";import"./Text-D1HNj6gm.js";import"./pageBackground-Cedpup01.js";import"./useId-KB6j76rh.js";import"./useBackwardsCompatibleTheme-C4dzzNKp.js";import"./Label-CA5pDLh0.js";import"./ZIndexLayer-DS-kTeIC.js";import"./dataEntryStyles-DaqIqY42.js";import"./types-CPjFjIqL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-D0GvvJcq.js";import"./useAnimationId-5nMvsn6t.js";import"./Curve-CVDIysdN.js";import"./step-DHG-DUf8.js";import"./path-DyVhHtw_.js";import"./tooltipContext-3r-229e7.js";import"./Symbols-CHaAXk1q.js";import"./symbol-BqGJ5wMY.js";import"./ActiveShapeUtils-JeO-QszI.js";import"./RegisterGraphicalItemId-Brr1oXEa.js";import"./ErrorBarContext-B4ne9aHr.js";import"./SetGraphicalItem-C-ccX4yH.js";import"./useEffectiveDataKey-CoJRTSM6.js";import"./CSSTransitionAnimate-Bcb3WQ0E.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DG-NqV_R.js";import"./uniqBy-_sTXg2vc.js";import"./iteratee-BWlFYs6V.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BlnG8QnV.js";import"./Rectangle-vSbPEONY.js";import"./Sector-C18YqcZp.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
