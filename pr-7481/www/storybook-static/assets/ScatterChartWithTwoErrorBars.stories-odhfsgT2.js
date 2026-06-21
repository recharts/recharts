import{R as r}from"./iframe-BIq879V5.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C1K4unJF.js";import{C as d}from"./CartesianGrid-BnlL1Sxs.js";import{X as c}from"./XAxis-BeATFl8n.js";import{Y as y}from"./YAxis-CWb6gVw3.js";import{S as h}from"./Scatter-BQnovuDb.js";import{E as e}from"./ErrorBar-PIvrMtMP.js";import{T as u}from"./Tooltip-BdWrv2yu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./zIndexSlice-D4TMV-f8.js";import"./immer-Bhe1IepA.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./get-Dlp4HEDU.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./isWellBehavedNumber-2nx214wI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./axisSelectors-BEDQXBlF.js";import"./d3-scale-D2-Kj7HA.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./CartesianAxis-DnWuLXim.js";import"./Layer-BQ46hdaR.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./Label-CdyMu7UM.js";import"./ZIndexLayer-kG0uRxU5.js";import"./types-sdPoIcnS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Cplqb3ZM.js";import"./useAnimationId-7GzLXqBz.js";import"./Curve-D0B4vo0F.js";import"./step-CMJu7Zx7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DkawCHMm.js";import"./Symbols-CDQO2QHa.js";import"./symbol-axVFD4mK.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./CSSTransitionAnimate-CZCMkiss.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-De8Wm0sc.js";import"./uniqBy-Cuqkmugs.js";import"./iteratee-4c0JIRob.js";import"./Cross-CVqkxvmf.js";import"./Rectangle-Be09360W.js";import"./Sector-Bk378S7z.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
