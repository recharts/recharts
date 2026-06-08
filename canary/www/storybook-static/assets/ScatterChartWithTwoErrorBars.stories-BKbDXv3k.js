import{R as r}from"./iframe-CLYMtVVU.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DUAnWx_T.js";import{C as d}from"./CartesianGrid-DirQ_tPE.js";import{X as c}from"./XAxis-CBhmV7sv.js";import{Y as y}from"./YAxis-Cpo1C8HM.js";import{S as h}from"./Scatter-D6J2R11f.js";import{E as e}from"./ErrorBar-BLCi_hf_.js";import{T as u}from"./Tooltip-BE-R9wvc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-jnQrHFKT.js";import"./zIndexSlice-CYEFLgyb.js";import"./immer-C-1Bq0C7.js";import"./index-D6XAYvxn.js";import"./index-C3oYNXo1.js";import"./get-DSRRGDfq.js";import"./resolveDefaultProps-CfuK3i5d.js";import"./isWellBehavedNumber-Dc0RpdQ2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D3KBwDZ7.js";import"./index-CUSuyme2.js";import"./renderedTicksSlice-6fh8zoWq.js";import"./axisSelectors-BM98nGPd.js";import"./d3-scale-Beg35rGW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxrU-fy.js";import"./chartDataContext-BVNdEBob.js";import"./CategoricalChart-DtR6LZhP.js";import"./CartesianAxis-BkW0Yyb6.js";import"./Layer-Bl-M4NCf.js";import"./Text-qYO8jmtc.js";import"./DOMUtils-4OHTktxt.js";import"./Label-m25-3SN6.js";import"./ZIndexLayer-DaVYg93h.js";import"./types-Bp6tCXm1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-fTI7Y-Cy.js";import"./useAnimationId-CPzMxfeA.js";import"./Curve-CECgUjTc.js";import"./step-BUm_V17B.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BCitiStO.js";import"./Symbols-BbFN5qez.js";import"./symbol-DT-DdzbR.js";import"./ActiveShapeUtils-BVcr_xDt.js";import"./RegisterGraphicalItemId-DiMQaNFZ.js";import"./ErrorBarContext-CoCRg6bd.js";import"./GraphicalItemClipPath-DWrBQcDT.js";import"./SetGraphicalItem-B11_FOSD.js";import"./CSSTransitionAnimate-BFMXmuzl.js";import"./useElementOffset-BBQpNMyz.js";import"./uniqBy-CZClMibn.js";import"./iteratee-Dvvu4gyG.js";import"./Cross-CrvnL4kK.js";import"./Rectangle-Dixlt82o.js";import"./Sector-vSfHJqng.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
