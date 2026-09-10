import{R as r}from"./iframe-IxvRXYOM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BubgfkL_.js";import{C as d}from"./CartesianGrid-DebB53wC.js";import{X as c}from"./XAxis-R0eKTQQ1.js";import{Y as y}from"./YAxis-31y7ZHQJ.js";import{S as h}from"./Scatter-oNawEYUR.js";import{E as e}from"./ErrorBar-DE-a3guT.js";import{T as u}from"./Tooltip-9KuCdUcm.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DouzT1Jm.js";import"./zIndexSlice-Dia8XTL2.js";import"./throttle-DoVSkdKP.js";import"./index-BXDqCn7f.js";import"./index-D34-i1nc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C8gKTQR0.js";import"./isWellBehavedNumber-1PbkiApc.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CsegCW8b.js";import"./d3-scale-FVb6w9iL.js";import"./index-BFt1Ny-W.js";import"./index-WdtNPuBq.js";import"./renderedTicksSlice-CchY5W_H.js";import"./index-C1qZei_h.js";import"./CartesianChart-D4DhIf-5.js";import"./chartDataContext-DPXilm1s.js";import"./CategoricalChart-CGmBQpoA.js";import"./CartesianAxis-BJBAf6Tc.js";import"./Layer-DXPk_QPv.js";import"./Text-VVpkyRHU.js";import"./DOMUtils-7IYxeTO_.js";import"./useId-BCDrS8Ec.js";import"./useBackwardsCompatibleTheme-niu8PbB-.js";import"./Label-DYJa0Pce.js";import"./ZIndexLayer-D3BGhz3Z.js";import"./types-D8hPxmLy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DJiaeq4S.js";import"./useAnimationId-B5Gku1OT.js";import"./Curve-B1Tl1par.js";import"./step-C5uaOgJB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BkUVOB8k.js";import"./Symbols-CCF6U_e7.js";import"./symbol-DaCFlABO.js";import"./ActiveShapeUtils-BrhiJYt9.js";import"./RegisterGraphicalItemId-CCZFRoFR.js";import"./ErrorBarContext-C1aHHTJh.js";import"./GraphicalItemClipPath-B3n8HZ3n.js";import"./SetGraphicalItem-CU9UT-3r.js";import"./useGraphicalItemIdentity-U0g776Bm.js";import"./CSSTransitionAnimate-CL7-AB1z.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Ck-qsnV8.js";import"./uniqBy-9Zym-iBR.js";import"./iteratee-CRMfd8M7.js";import"./Cross-DOBLdcqU.js";import"./Rectangle-Bpb36EBT.js";import"./Sector-DVYh-31O.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
