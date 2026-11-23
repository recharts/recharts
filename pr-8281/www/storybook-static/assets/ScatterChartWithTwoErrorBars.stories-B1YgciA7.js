import{R as r}from"./iframe-DlCdq56B.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BUEDAphy.js";import{C as d}from"./CartesianGrid-BP1wFMOe.js";import{X as c}from"./XAxis-BSv-cfqy.js";import{Y as y}from"./YAxis-CiL6lsrt.js";import{S as h}from"./Scatter-jEOIXKz-.js";import{E as e}from"./ErrorBar-BTyH-chl.js";import{T as u}from"./Tooltip-jQliVFVi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-fp3cwEAp.js";import"./zIndexSlice-AxtVyY3Z.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BUW76FaL.js";import"./throttle-DEcvUi6F.js";import"./index-DRrdDGzH.js";import"./index-D0nmcM1A.js";import"./axisSelectors-CSfGPpIK.js";import"./polarAxisSelectors-B-SnaQvT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3Jo-Yey1.js";import"./index-Dl9VO4In.js";import"./index-CPJJsZF5.js";import"./renderedTicksSlice-xGoci0dc.js";import"./index-CVrMJXNG.js";import"./fillDefinitions-P9YSjlZq.js";import"./CartesianChart-DAQanSbx.js";import"./chartDataContext-BiLGYApi.js";import"./CategoricalChart-DEbdQdFq.js";import"./CartesianAxis-gaRy0kAT.js";import"./Layer-DYaOGPQe.js";import"./Text-DCVc9tCi.js";import"./ZIndexLayer-DoM1zDnE.js";import"./Label-DhxtC2yH.js";import"./types-CGD2CGOX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BQcljHLn.js";import"./activeStyles-WuCpdruK.js";import"./useAnimationId-DvgYyN8a.js";import"./Curve-lp641HWe.js";import"./step-DukoPJ0d.js";import"./path-BBMZd4YL.js";import"./tooltipContext-DItjFBJq.js";import"./Symbols-Dqo2PD8d.js";import"./symbol-BfVO91QA.js";import"./ActiveShapeUtils-BhCU4_aJ.js";import"./ErrorBarContext-C53AQX2l.js";import"./SetGraphicalItem-DVkPEJIv.js";import"./useEffectiveDataKey-dLwdu-vi.js";import"./CSSTransitionAnimate-wMywjYCv.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D9xfe4ty.js";import"./uniqBy-7nQNTfGC.js";import"./iteratee-D1UWDese.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Clk77yjw.js";import"./Rectangle-Bks-uWZg.js";import"./Sector-CiLnt5Zg.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
