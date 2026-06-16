import{R as r}from"./iframe-CnwzBkds.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BUqgJSgh.js";import{C as d}from"./CartesianGrid-DaDbM5c8.js";import{X as c}from"./XAxis-DbvG2C4p.js";import{Y as y}from"./YAxis-iu19I_Qe.js";import{S as h}from"./Scatter-CzjIPGVb.js";import{E as e}from"./ErrorBar-Co-NMJTQ.js";import{T as u}from"./Tooltip-Cuy3FLW2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BxrV5UFS.js";import"./zIndexSlice-BpzqiTUQ.js";import"./immer-BZhv9pDN.js";import"./index-B17a-Fpl.js";import"./index-DKNFhV5H.js";import"./get-B8n4OfLY.js";import"./resolveDefaultProps-DV3X3ep6.js";import"./isWellBehavedNumber-ChDLwcgn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DLJqppDu.js";import"./index-5-p3p247.js";import"./renderedTicksSlice-CAlTfeNf.js";import"./axisSelectors-BYBAWXh2.js";import"./d3-scale-CG2_6ote.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DJOSlpeY.js";import"./chartDataContext-BeCpsJVv.js";import"./CategoricalChart-ijSp3dOV.js";import"./CartesianAxis-BmrJk-2O.js";import"./Layer-BZqaMaXh.js";import"./Text-BltVqzsV.js";import"./DOMUtils-BbYzFqpk.js";import"./Label-CslQeHKW.js";import"./ZIndexLayer-C4T4UXDK.js";import"./types-E3CxlAR_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Cm-dfr_1.js";import"./useAnimationId-_xLlXMao.js";import"./Curve-BxBABYqk.js";import"./step-DoliEjqo.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BS-I8LHO.js";import"./Symbols-mZFtFIg9.js";import"./symbol-B9Aqc_CJ.js";import"./ActiveShapeUtils-_gRdTSDq.js";import"./RegisterGraphicalItemId-CObDD7O1.js";import"./ErrorBarContext-B0xmk8dk.js";import"./GraphicalItemClipPath-B8izwUTw.js";import"./SetGraphicalItem-DAx4YtHH.js";import"./CSSTransitionAnimate-puZl1F_B.js";import"./useElementOffset-C-r6gAvG.js";import"./uniqBy-IJ-29Nzx.js";import"./iteratee-5Of9wb96.js";import"./Cross-C2nHJKOr.js";import"./Rectangle-DprBphTu.js";import"./Sector-6vHddUUb.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
