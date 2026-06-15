import{R as r}from"./iframe-sORstnao.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CKT-hmeU.js";import{C as d}from"./CartesianGrid-CoCW4h36.js";import{X as c}from"./XAxis-CLx5zWj1.js";import{Y as y}from"./YAxis-B0nIj3Rm.js";import{S as h}from"./Scatter-DGQgdtbH.js";import{E as e}from"./ErrorBar-xFEXtc9_.js";import{T as u}from"./Tooltip-Bo23RdJr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1LnNbdI.js";import"./zIndexSlice-D4nSzQXG.js";import"./immer-6f0a2Itz.js";import"./index-BHPpgMD3.js";import"./index-D72u634P.js";import"./get-41kC8iMv.js";import"./resolveDefaultProps-CiA9punn.js";import"./isWellBehavedNumber-BMV6Q8kx.js";import"./PolarUtils-CTnnDHZv.js";import"./index-TsoCApfs.js";import"./index-C6ss-rRK.js";import"./renderedTicksSlice-DnIB2gDY.js";import"./axisSelectors-Cn-VKMDy.js";import"./d3-scale-D2bjBGPq.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D2sGcfAi.js";import"./chartDataContext-3qQmZcQj.js";import"./CategoricalChart-CxG8s20W.js";import"./CartesianAxis-B64g0dZi.js";import"./Layer--egwL1wz.js";import"./Text-CnvPdDEF.js";import"./DOMUtils-fq1NzIyR.js";import"./Label-SYMy3G3-.js";import"./ZIndexLayer-BEh4PufB.js";import"./types-iWkEMmGL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CV70jau4.js";import"./useAnimationId-Dc5RekzQ.js";import"./Curve-DN6qrrBJ.js";import"./step-BwuKoovG.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BpQxds4m.js";import"./Symbols-DBkZE3FX.js";import"./symbol-BNlBPIVa.js";import"./ActiveShapeUtils-C6v-Gqt7.js";import"./RegisterGraphicalItemId-CV0Blp2K.js";import"./ErrorBarContext-DTHknnLU.js";import"./GraphicalItemClipPath-B7hrgjyT.js";import"./SetGraphicalItem-BWtqlZ1x.js";import"./CSSTransitionAnimate-DW0MSQYU.js";import"./useElementOffset-BI2zHJkS.js";import"./uniqBy-DZcIVEUd.js";import"./iteratee-CLUUH9ga.js";import"./Cross-BjZK5vKu.js";import"./Rectangle-CIsVQIpM.js";import"./Sector-Da8ZKB8T.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
