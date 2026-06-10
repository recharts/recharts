import{R as r}from"./iframe-Sgab1gUe.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BjFRh_y7.js";import{C as d}from"./CartesianGrid-DPBWGAPf.js";import{X as c}from"./XAxis-Be4f_XLH.js";import{Y as y}from"./YAxis-B3Csn4tH.js";import{S as h}from"./Scatter-CjZSzZoK.js";import{E as e}from"./ErrorBar-4WXQa6Nh.js";import{T as u}from"./Tooltip-Cqjxr8eG.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTduNXvU.js";import"./zIndexSlice-BrzbkbEI.js";import"./immer-jmjMSL8D.js";import"./index-BLkVzwy_.js";import"./index-90Rz6XAP.js";import"./get-BJyukGiE.js";import"./resolveDefaultProps-CNXENHcX.js";import"./isWellBehavedNumber-CJXdc3tU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BkOZFEZb.js";import"./index-BsnSQtU-.js";import"./renderedTicksSlice-CVwVFFGF.js";import"./axisSelectors-8GhzU9TS.js";import"./d3-scale-Bg12AftI.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CY44eXB-.js";import"./chartDataContext-NIXL8iaZ.js";import"./CategoricalChart-DwEPGx0k.js";import"./CartesianAxis-s1UQ10e0.js";import"./Layer-Dy3UQ8V8.js";import"./Text-Bwmob33r.js";import"./DOMUtils-CmwtFJfy.js";import"./Label-pFFfknml.js";import"./ZIndexLayer-DBRcOItw.js";import"./types-CA2ETL4c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CFJVJstG.js";import"./useAnimationId-D0bn0X4e.js";import"./Curve-DfhFB3Po.js";import"./step-CWFXO9ga.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DiIFYHNf.js";import"./Symbols-CZkuTCUm.js";import"./symbol-BXAKInVH.js";import"./ActiveShapeUtils-CypivSKC.js";import"./RegisterGraphicalItemId-BSYxTo0u.js";import"./ErrorBarContext-WB4epqm3.js";import"./GraphicalItemClipPath-BB2uZM8Q.js";import"./SetGraphicalItem-Cu_IpSGW.js";import"./CSSTransitionAnimate-DfaAxquA.js";import"./useElementOffset-aoLYr1Hs.js";import"./uniqBy-D-eprie9.js";import"./iteratee-DfxU7rfy.js";import"./Cross-BAllvjaw.js";import"./Rectangle-CGR64IYi.js";import"./Sector-D8fKowAH.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
