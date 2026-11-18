import{R as r}from"./iframe-CRBCr4I7.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CmNWnfBL.js";import{C as d}from"./CartesianGrid-ByvwPBwu.js";import{X as c}from"./XAxis-4jTaFcnE.js";import{Y as y}from"./YAxis-C5vFCns8.js";import{S as h}from"./Scatter-CxNiMDXC.js";import{E as e}from"./ErrorBar-CqMrlIml.js";import{T as u}from"./Tooltip-DE0qGtkw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Csv9gEG8.js";import"./zIndexSlice-C5HnNY9r.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-CjWl4M.js";import"./throttle-Bi7M9SHL.js";import"./index-DNywOopk.js";import"./index-CgJEBRA7.js";import"./axisSelectors-Cn24srzI.js";import"./polarAxisSelectors-BXwH5847.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BBFMZtoY.js";import"./index-CYvH0a5R.js";import"./index-D8BMywLD.js";import"./renderedTicksSlice-Bcj92DQ0.js";import"./index-DOjsHhAo.js";import"./fillDefinitions-MhsyTwKb.js";import"./CartesianChart-DtrL87f_.js";import"./chartDataContext-Ds5ARDJg.js";import"./CategoricalChart-CIMwuqDL.js";import"./CartesianAxis-Cnz0mea7.js";import"./Layer-DK4q3BXK.js";import"./Text-CzrZS4hs.js";import"./ZIndexLayer-ChuLKuaE.js";import"./Label-CLJtKhiN.js";import"./types-BcVdsd1S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-BCu_-7t9.js";import"./activeStyles-BGmObwWl.js";import"./useAnimationId-BEWOQrK8.js";import"./Curve-L8TXrD0N.js";import"./step-CDOWbVN9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BCV-IEpo.js";import"./Symbols-qyep14Vl.js";import"./symbol-dNn9HYSI.js";import"./ActiveShapeUtils-DkbYb7aY.js";import"./ErrorBarContext-C9vHq9NB.js";import"./SetGraphicalItem-CVR_yFh9.js";import"./useEffectiveDataKey-Bv2ZRQEX.js";import"./CSSTransitionAnimate-D_stQEjY.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dm_VZj6e.js";import"./uniqBy-B5_XcYmH.js";import"./iteratee-BFRZNziE.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DIfmxK3b.js";import"./Rectangle-BwKZkKAc.js";import"./Sector-MfTKhJkQ.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
