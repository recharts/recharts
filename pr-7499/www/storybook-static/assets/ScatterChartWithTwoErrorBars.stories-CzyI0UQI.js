import{R as r}from"./iframe-s6xAG-TK.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BbzY7nMG.js";import{C as d}from"./CartesianGrid-CHvX6dO6.js";import{X as c}from"./XAxis-ILbWypkw.js";import{Y as y}from"./YAxis-CJIerEpJ.js";import{S as h}from"./Scatter-CSi2wWP3.js";import{E as e}from"./ErrorBar-BsuJDSL-.js";import{T as u}from"./Tooltip-DNr4Jqfj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NYzcnM5V.js";import"./zIndexSlice-CtX8Pm57.js";import"./immer-BuLmScwe.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./get-BoCVnOHD.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./PolarUtils-CTnnDHZv.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./renderedTicksSlice-iMX2N49n.js";import"./axisSelectors-w5mwcrs7.js";import"./d3-scale-B4pAi3sm.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./CartesianAxis-Bzfqb5iI.js";import"./Layer-D5OpM5xs.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./Label-Dp2fRDxb.js";import"./ZIndexLayer-DbooohNT.js";import"./types-DdoD64CJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BLpXLA7r.js";import"./useAnimationId-BfD45VPw.js";import"./Curve-BmhK5pW4.js";import"./step-DcuFANAi.js";import"./path-DyVhHtw_.js";import"./tooltipContext-L0VMoWlQ.js";import"./Symbols-DuEQhp_j.js";import"./symbol-a32WKMED.js";import"./ActiveShapeUtils-BRE298QS.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./ErrorBarContext-Df3lolWT.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./CSSTransitionAnimate-DoFpoKDH.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CP6qr1Um.js";import"./uniqBy-BFlmJl3I.js";import"./iteratee-Bbn7KLaA.js";import"./Cross-DLf2lczu.js";import"./Rectangle-BvbdU8mA.js";import"./Sector-DIf9EEf3.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
