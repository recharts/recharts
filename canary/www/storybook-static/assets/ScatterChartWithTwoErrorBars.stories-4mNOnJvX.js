import{R as r}from"./iframe-c26JqrsL.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BSye5w2y.js";import{C as d}from"./CartesianGrid-BfXOM6vw.js";import{X as c}from"./XAxis-DutmNx-o.js";import{Y as y}from"./YAxis-BMAl-ilQ.js";import{S as h}from"./Scatter-BjDdWEAr.js";import{E as e}from"./ErrorBar-YniJEFV0.js";import{T as u}from"./Tooltip-C74uwVO5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0_ZnG3M.js";import"./zIndexSlice-BkUYlJsZ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-YkjEKeW8.js";import"./throttle-B2IvKwW-.js";import"./index-CUwFsdn8.js";import"./index-mm1LjFas.js";import"./axisSelectors-Dy58hWsd.js";import"./polarAxisSelectors-NvwmetH_.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWhFNlvg.js";import"./index-vwxbY9MG.js";import"./index-DaW3zNl9.js";import"./renderedTicksSlice-DchxVsWm.js";import"./index-CUrdsACp.js";import"./fillDefinitions-OkciRhhD.js";import"./CartesianChart-CNu4n4dr.js";import"./chartDataContext-KJrM16zP.js";import"./CategoricalChart-DQ-Epfo-.js";import"./CartesianAxis-CwL4X3Li.js";import"./Layer-vJvTy9Ku.js";import"./Text-DrKUoP8L.js";import"./ZIndexLayer-B-r7bl4K.js";import"./Label-U_zx5ZhA.js";import"./types-BkHyLjnw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-NUuyBQzn.js";import"./activeStyles-CxWIOF49.js";import"./useAnimationId-s58nu9Pz.js";import"./Curve-XxFxrIWP.js";import"./step-CELEtsjP.js";import"./path-DyVhHtw_.js";import"./tooltipContext-6Dtp9k6E.js";import"./Symbols-BvzuXAby.js";import"./symbol-DAgH9-Fu.js";import"./ActiveShapeUtils-DUAkL6fN.js";import"./ErrorBarContext-Cck_FQwt.js";import"./SetGraphicalItem-Bf7rIr_j.js";import"./useEffectiveDataKey-BT6_jhIX.js";import"./CSSTransitionAnimate-D_a4zJwN.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BmKkIlsV.js";import"./uniqBy-CpoKnfjS.js";import"./iteratee-DEQ9rNns.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CtwUkA5D.js";import"./Rectangle-C6L3NnBU.js";import"./Sector-zTgxjB-0.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
