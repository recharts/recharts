import{R as r}from"./iframe-BOLHcnEq.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-COrhu_IV.js";import{C as d}from"./CartesianGrid-CSl3R0dP.js";import{X as c}from"./XAxis-C1WN-pkQ.js";import{Y as y}from"./YAxis-YubxuWa5.js";import{S as h}from"./Scatter-DCOr39Op.js";import{E as e}from"./ErrorBar-DQSflsIS.js";import{T as u}from"./Tooltip-DaHSRJKc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7tC_WXo.js";import"./zIndexSlice-C8kTqOmj.js";import"./immer-CxjXtk_l.js";import"./index-tgbEpTci.js";import"./index-D6CwE66r.js";import"./get-Q7-QRRNs.js";import"./resolveDefaultProps-Z5NUUnaV.js";import"./isWellBehavedNumber-wvIQrlfJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B1Z2mgyL.js";import"./index-CeNzyE2J.js";import"./renderedTicksSlice-CxjdWKYi.js";import"./axisSelectors-C8lj3akb.js";import"./d3-scale-C1j7mBel.js";import"./CartesianChart-BmPupl9-.js";import"./chartDataContext-C7_PfxRX.js";import"./CategoricalChart-Ytc03f7l.js";import"./CartesianAxis-Cr_Ww8PH.js";import"./Layer-CuuZoUsG.js";import"./Text-XHfzhZk8.js";import"./DOMUtils-D0co-hPv.js";import"./Label-DYMy2guT.js";import"./ZIndexLayer-CNPe-074.js";import"./types-DPwewkdM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-8Czxn-Uo.js";import"./Curve-Bqb8d6oT.js";import"./step-ClQLV_9Q.js";import"./path-DyVhHtw_.js";import"./tooltipContext-z17QOzFZ.js";import"./Symbols-DH546CQx.js";import"./symbol-C5EhMhLR.js";import"./ActiveShapeUtils-DWIyzqt2.js";import"./RegisterGraphicalItemId-f9q-fu78.js";import"./ErrorBarContext-C3dgZsKy.js";import"./GraphicalItemClipPath--wTpErch.js";import"./SetGraphicalItem-D2UHcxYS.js";import"./useAnimationId-BckTdhqG.js";import"./CSSTransitionAnimate-B-OgPYKX.js";import"./useElementOffset-D1RkL54t.js";import"./uniqBy-CBDL8fXr.js";import"./iteratee-BYmccGUz.js";import"./Cross-Bld8WcL6.js";import"./Rectangle-yS7V0F_a.js";import"./Sector-BV3FjY9s.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,xr as __namedExportsOrder,gr as default};
