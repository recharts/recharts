import{R as r}from"./iframe-Bu5r_UoW.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Cbf-79Bf.js";import{C as d}from"./CartesianGrid-BXqhaeuH.js";import{X as c}from"./XAxis-CnJljd4s.js";import{Y as y}from"./YAxis-sL3yeYN7.js";import{S as h}from"./Scatter-DK42tvKv.js";import{E as e}from"./ErrorBar-DnsthYh0.js";import{T as u}from"./Tooltip-CWQk5OWh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BqfNjaYX.js";import"./zIndexSlice-BoZi0EKL.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BDfy-Y9N.js";import"./throttle-BpoLTe0M.js";import"./index-CP6mH--B.js";import"./index-DnT_Ya4A.js";import"./axisSelectors-Bhk2XSO9.js";import"./polarAxisSelectors-n0CqqZCi.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DImarRMe.js";import"./index-pIfafh94.js";import"./index-C9YbC-S9.js";import"./renderedTicksSlice-CEkp7Ia_.js";import"./index-D8NerNAW.js";import"./fillDefinitions-BYA-kAp9.js";import"./CartesianChart-CmgmeyYa.js";import"./chartDataContext-epTHr0-d.js";import"./CategoricalChart-DkHDaSrl.js";import"./CartesianAxis-DeK_gPGC.js";import"./Layer-DFVqeIzd.js";import"./Text-Whpl_RQm.js";import"./ZIndexLayer-BpE6rRDX.js";import"./Label-0RpFXi-A.js";import"./types-Bn2H5HlC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-C66iRC8T.js";import"./activeStyles-8B2_TUAk.js";import"./useAnimationId-BnIWNy46.js";import"./Curve-CsvMXB6L.js";import"./step-D2ytnSwm.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DfROrrQb.js";import"./Symbols-Cn0dRiyA.js";import"./symbol-DRsT_y42.js";import"./ActiveShapeUtils-BGxbUkvX.js";import"./ErrorBarContext-C-78saLU.js";import"./SetGraphicalItem-CpMZVpWB.js";import"./useEffectiveDataKey-BxhAq3wv.js";import"./CSSTransitionAnimate-4tKvg8zY.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cvj3h31Q.js";import"./uniqBy-CyQEgUk3.js";import"./iteratee-0LTiAB4q.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DTWz3HnI.js";import"./Rectangle-M1V3Y4MR.js";import"./Sector-BzagyeT9.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
