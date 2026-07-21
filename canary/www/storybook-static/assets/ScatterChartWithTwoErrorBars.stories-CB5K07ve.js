import{R as r}from"./iframe-Ba761dAt.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-EBSv2cbH.js";import{C as d}from"./CartesianGrid-CjVT43kO.js";import{X as c}from"./XAxis-BFSA3F3Y.js";import{Y as y}from"./YAxis-BGJzMLCA.js";import{S as h}from"./Scatter-BeQMGTot.js";import{E as e}from"./ErrorBar-C0nOZFM5.js";import{T as u}from"./Tooltip-l28RSMhn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bka_uKoY.js";import"./zIndexSlice-QfUsSAvl.js";import"./throttle-DM8vz_S7.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DNu-VFbT.js";import"./index-jmRPS8ks.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./axisSelectors-Cn6pQrFe.js";import"./d3-scale-MektT9AZ.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./CartesianAxis-Dp6wkVSq.js";import"./Layer-B5w5vx75.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./Label-BnOVxmge.js";import"./ZIndexLayer-DN2jzfCT.js";import"./types-0dL2Niha.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DBRlvqN4.js";import"./useAnimationId-Bb4M1zTw.js";import"./Curve-mQomw5g8.js";import"./step-Bh181Pvp.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B9wJY5wt.js";import"./Symbols-BRW25Rg2.js";import"./symbol-F9gJ0Uyf.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./ErrorBarContext-kfdlWhVC.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./CSSTransitionAnimate-BhEXtQlr.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-zcMD2hVj.js";import"./uniqBy-CHlYBrF5.js";import"./iteratee-BskgW_tl.js";import"./Cross-DbO4vA7X.js";import"./Rectangle-Bb2j6FkB.js";import"./Sector-DkRqKnrn.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
