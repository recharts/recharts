import{R as r}from"./iframe-DmhIhH2M.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DnHreQOI.js";import{C as d}from"./CartesianGrid-BJf1gxhT.js";import{X as c}from"./XAxis-CY-yJKaB.js";import{Y as y}from"./YAxis-Bd-9gvNF.js";import{S as h}from"./Scatter-DfjRWsrV.js";import{E as e}from"./ErrorBar-lnd4_4hR.js";import{T as u}from"./Tooltip-CScVRDo5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bp3OJDnk.js";import"./zIndexSlice-DeBpIagA.js";import"./immer-lqUHKS7P.js";import"./index-jeKHcbLZ.js";import"./index-DoUdCFad.js";import"./get-BMOKRRSC.js";import"./resolveDefaultProps-Bb5qdflA.js";import"./isWellBehavedNumber-yi49kod_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DVATRPgd.js";import"./index-DTLQy6FQ.js";import"./renderedTicksSlice-ChRjHL_p.js";import"./axisSelectors-BcE8uUaD.js";import"./d3-scale-BlfVJ3Lp.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BNQnxap5.js";import"./chartDataContext-Bz86G8Ko.js";import"./CategoricalChart-Be8j81vN.js";import"./CartesianAxis-C8QhC4vv.js";import"./Layer-BQ4TD7AW.js";import"./Text-DpOGyDW1.js";import"./DOMUtils-qv8kyUnk.js";import"./Label-C1lSOaos.js";import"./ZIndexLayer-qAObD_uq.js";import"./types-ChCyCTKP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D_A-W6sA.js";import"./useAnimationId-CIds5Px0.js";import"./Curve-CUt78Byo.js";import"./step-Cfvx5huc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-r-gHsS5Z.js";import"./Symbols-bmVrm1PP.js";import"./symbol-DzNzzMDl.js";import"./ActiveShapeUtils-D7yUxD2X.js";import"./RegisterGraphicalItemId-qPPfux8b.js";import"./ErrorBarContext-3q49-f4F.js";import"./GraphicalItemClipPath-CjnHXIjf.js";import"./SetGraphicalItem-BDK57120.js";import"./CSSTransitionAnimate-CGCk7aUS.js";import"./useElementOffset-CH7D-mqI.js";import"./uniqBy-CFMs929K.js";import"./iteratee-GpL_6Bp3.js";import"./Cross-6N8YKHWm.js";import"./Rectangle-BUGLdKb8.js";import"./Sector-D-2Yrtfy.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
