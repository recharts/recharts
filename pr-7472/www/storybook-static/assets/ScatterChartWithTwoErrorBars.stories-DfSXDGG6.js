import{R as r}from"./iframe-BY-61mf3.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-ukJD1QR0.js";import{C as d}from"./CartesianGrid-ColXwOja.js";import{X as c}from"./XAxis-BqqI2L9m.js";import{Y as y}from"./YAxis-Dnu2jnBx.js";import{S as h}from"./Scatter-fXQUr5a3.js";import{E as e}from"./ErrorBar-SEIBf9DP.js";import{T as u}from"./Tooltip-BHkumS-I.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-TrezbvJj.js";import"./zIndexSlice-D5LeFsJF.js";import"./immer-B9G3_Kxy.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./get-CrMrHDfL.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CGSMpc0u.js";import"./index-Bdv48GrD.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./axisSelectors-BLK3CBL0.js";import"./d3-scale-BkYTXwQ3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./CartesianAxis-DQMh9jmY.js";import"./Layer-o5jG4U6-.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./Label-TO2FniFg.js";import"./ZIndexLayer-BYFtOnRb.js";import"./types-hvByNsoa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ByNYS0z8.js";import"./useAnimationId-RV371va_.js";import"./Curve-BtPdoVvO.js";import"./step-BuJXjF2w.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B2OIZiDK.js";import"./Symbols-CrRfkKVb.js";import"./symbol-DcuOcYR2.js";import"./ActiveShapeUtils-CLaqj2t-.js";import"./RegisterGraphicalItemId-BSHaYjsq.js";import"./ErrorBarContext-BTw4S1-S.js";import"./GraphicalItemClipPath-cu7yJN5z.js";import"./SetGraphicalItem-30kWDCTB.js";import"./CSSTransitionAnimate-9-VYgY4L.js";import"./useElementOffset-Bk35APbE.js";import"./uniqBy-quBZy4V-.js";import"./iteratee-DAmws9Pf.js";import"./Cross-HSuSokK8.js";import"./Rectangle-BYGnr9Kk.js";import"./Sector-DhnwLkEU.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
