import{R as r}from"./iframe-DzolqKW_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Q1tShn0v.js";import{C as d}from"./CartesianGrid-7m42T_8O.js";import{X as c}from"./XAxis-GMhM5CFR.js";import{Y as y}from"./YAxis-DB_rcNlV.js";import{S as h}from"./Scatter-BhP_vGjY.js";import{E as e}from"./ErrorBar-lG7iOjb1.js";import{T as u}from"./Tooltip-Dhnxj9xg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CninMw2k.js";import"./zIndexSlice-BFydgfU7.js";import"./throttle-BWqOgTiL.js";import"./index-BGQgYr9p.js";import"./index-CXHzwmBK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bn-Ns7xT.js";import"./isWellBehavedNumber-DaFHOJVp.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BYzdNJg2.js";import"./index-BjJlMzFo.js";import"./renderedTicksSlice-BTl9iHqH.js";import"./axisSelectors-BWPQJWKM.js";import"./d3-scale-BOKuOqr8.js";import"./CartesianChart-DRSod0ni.js";import"./chartDataContext-D0TMVBgy.js";import"./CategoricalChart-tg3Y8Ccg.js";import"./CartesianAxis-CSVxSdOY.js";import"./Layer-TAE-BGU4.js";import"./Text-Oy6dFGv9.js";import"./DOMUtils-D4HAj4Uf.js";import"./Label-BR8h5iiR.js";import"./ZIndexLayer-CuyP-vcu.js";import"./types-BKcxhU3G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-D8n1PMNM.js";import"./useAnimationId-BCQ5DS1y.js";import"./Curve-D6-Bsbi2.js";import"./step-DRn0xJ5_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ZfR3jhJm.js";import"./Symbols-u3thHIeX.js";import"./symbol-CcSEyfye.js";import"./ActiveShapeUtils-B3c1p96o.js";import"./RegisterGraphicalItemId-DAxQkrUf.js";import"./ErrorBarContext-HJrjbNNf.js";import"./GraphicalItemClipPath-Cf6TT0yv.js";import"./SetGraphicalItem-F22FHLao.js";import"./CSSTransitionAnimate-BGlcoKnW.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C5u9w9zW.js";import"./uniqBy-ijo8b4E9.js";import"./iteratee-nLHmRvyN.js";import"./Cross-CpBlPrtB.js";import"./Rectangle-O5CHzUas.js";import"./Sector-BlO0OVbx.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
