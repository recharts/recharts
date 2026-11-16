import{R as r}from"./iframe-CO23d3n1.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-WEU74xpn.js";import{C as d}from"./CartesianGrid-D5AxC3LB.js";import{X as c}from"./XAxis-BoBOjjsH.js";import{Y as y}from"./YAxis-DVp-8yRY.js";import{S as h}from"./Scatter-PyzWsbYB.js";import{E as e}from"./ErrorBar-Mbz63vXb.js";import{T as u}from"./Tooltip-DGlV0wbU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bh8_r7fw.js";import"./zIndexSlice-DMSZKiVC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-q2NyX8vA.js";import"./throttle-B66_T3U8.js";import"./index-BxzZTuqI.js";import"./index-Del1ANZm.js";import"./axisSelectors-DJQVEMl6.js";import"./polarAxisSelectors-D8_om16C.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C9xcvLA3.js";import"./index-D4fJrATD.js";import"./index-D0uo_LWY.js";import"./renderedTicksSlice-DOtk_XFi.js";import"./index-BjQv-IHX.js";import"./fillDefinitions-B9Iskt95.js";import"./CartesianChart-BGvEgPGc.js";import"./chartDataContext-aToDcgxK.js";import"./CategoricalChart-DPCnYwF-.js";import"./CartesianAxis-Dnx0rUNa.js";import"./Layer-CYlWB893.js";import"./Text-DWIEtkwC.js";import"./ZIndexLayer-DcfMfyOV.js";import"./Label-2Fni25es.js";import"./types-BU4Ojrin.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BB1e2MfD.js";import"./activeStyles-Bl6Emzo4.js";import"./useAnimationId-DzTpCf5I.js";import"./Curve-4EA_oLfz.js";import"./step-C-f981dl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DH4nuqG4.js";import"./Symbols-BjRa6Boz.js";import"./symbol-CniqeamR.js";import"./ActiveShapeUtils-B6AIFy1l.js";import"./ErrorBarContext-Cmo7ZUB7.js";import"./SetGraphicalItem-CuLT1LeE.js";import"./useEffectiveDataKey-DjFvtGIK.js";import"./CSSTransitionAnimate--TI1Am8l.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DdC3N3ay.js";import"./uniqBy-MGV_25lQ.js";import"./iteratee-BTK9QdXN.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CrPnjk2H.js";import"./Rectangle-xnUKvACR.js";import"./Sector-CxWlo4ry.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
