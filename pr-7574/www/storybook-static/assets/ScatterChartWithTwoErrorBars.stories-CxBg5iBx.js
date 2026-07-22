import{R as r}from"./iframe-CSEjTzPi.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DeDhKjlL.js";import{C as d}from"./CartesianGrid-BgwHL7aZ.js";import{X as c}from"./XAxis-ClW-CKIG.js";import{Y as y}from"./YAxis-CLbub78N.js";import{S as h}from"./Scatter-DkHRX2Fv.js";import{E as e}from"./ErrorBar-3wHgJ4hq.js";import{T as u}from"./Tooltip-LNhg6TS4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-AtEN8KAH.js";import"./zIndexSlice-D_RH8zNR.js";import"./throttle-DaFWWJDR.js";import"./index-CUrD2lSO.js";import"./index-CnUd66Ue.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BozJKtND.js";import"./isWellBehavedNumber-CzqG-O5b.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Ba7n3l96.js";import"./index-CBv6hKJf.js";import"./renderedTicksSlice-E8p_yuf8.js";import"./axisSelectors-D_moIkNX.js";import"./d3-scale-CTeKr7fc.js";import"./CartesianChart-Dl0PI1ZO.js";import"./chartDataContext-D54q9WWr.js";import"./CategoricalChart-DzTcvl21.js";import"./CartesianAxis-Mej6s-Ju.js";import"./Layer-CcgNOeDR.js";import"./Text-Pr_fu-xU.js";import"./DOMUtils-Dvp2PgSJ.js";import"./Label-COqEjZup.js";import"./ZIndexLayer-CCVrkImG.js";import"./types-CLne6YGI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-qJPCEdb3.js";import"./useAnimationId-De2Quo8T.js";import"./Curve-Cbq_6U_Q.js";import"./step-DAbADZ8X.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DI2uHbji.js";import"./Symbols-CTXWaWPW.js";import"./symbol-CieHO9MS.js";import"./ActiveShapeUtils-DL3c-sPD.js";import"./RegisterGraphicalItemId-CXTNpeBs.js";import"./ErrorBarContext-CaaFvPMI.js";import"./GraphicalItemClipPath-B0i2JGnn.js";import"./SetGraphicalItem-e3HjqTgi.js";import"./CSSTransitionAnimate-Cj6iAjtb.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BEs7c5_U.js";import"./uniqBy-CIEufAuW.js";import"./iteratee-DtUSYH1W.js";import"./Cross-CboKWFi8.js";import"./Rectangle-CxDLp35k.js";import"./Sector-yAnx7lRE.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
