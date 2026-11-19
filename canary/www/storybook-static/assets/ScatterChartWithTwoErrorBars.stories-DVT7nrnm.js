import{R as r}from"./iframe-DzGmKl0f.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DySBvc-p.js";import{C as d}from"./CartesianGrid-B2Ex7aw7.js";import{X as c}from"./XAxis-jTQGWzOI.js";import{Y as y}from"./YAxis-0b4E4ljK.js";import{S as h}from"./Scatter-Bry8O2TW.js";import{E as e}from"./ErrorBar-CclGM5Fa.js";import{T as u}from"./Tooltip-DBSvm2sG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyktFVWv.js";import"./zIndexSlice-C_hCocyn.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DQfzh6Jd.js";import"./throttle-CTpO1d0G.js";import"./index-CLtTm24E.js";import"./index-BW8cRvO1.js";import"./axisSelectors-CXmW2Cx2.js";import"./polarAxisSelectors-BjROy2nM.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BqUwTZLN.js";import"./index-Dfq7BfPO.js";import"./index-CbanqfDi.js";import"./renderedTicksSlice-Cj7UXIdm.js";import"./index-By0aYyvM.js";import"./fillDefinitions-D8TUKuUW.js";import"./CartesianChart-BHEtFY6v.js";import"./chartDataContext-CBkj6nC7.js";import"./CategoricalChart-8iPxehsc.js";import"./CartesianAxis-CdlgwruK.js";import"./Layer-FlA1vg8A.js";import"./Text-4Yqe8NiQ.js";import"./ZIndexLayer-DCgoY3ny.js";import"./Label-D7SDC5pA.js";import"./types-DhQXJZ5L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Dj48sKZ8.js";import"./activeStyles-wSVq9YzU.js";import"./useAnimationId-CGyZ0qQs.js";import"./Curve-CY0LgJEY.js";import"./step-DtdKv3o3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BNPOIc1F.js";import"./Symbols-f4V1uJfI.js";import"./symbol-C_p4EZd-.js";import"./ActiveShapeUtils-DvbjLMLM.js";import"./ErrorBarContext-DXEk3_Nm.js";import"./SetGraphicalItem-BOgZ-5S7.js";import"./useEffectiveDataKey-DtLTSAvq.js";import"./CSSTransitionAnimate-Cv2KAXax.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C8NhgWYR.js";import"./uniqBy-DbBQ0HwH.js";import"./iteratee-BoZ32etu.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Dy4jVGVU.js";import"./Rectangle-C67JpI60.js";import"./Sector-C_dYEOQx.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
