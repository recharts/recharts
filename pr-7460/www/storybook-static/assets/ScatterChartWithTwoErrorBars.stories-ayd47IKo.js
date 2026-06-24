import{R as r}from"./iframe-ChdTnuJZ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B3NwjZeG.js";import{C as d}from"./CartesianGrid-BN3a4K6h.js";import{X as c}from"./XAxis--3XEHI4a.js";import{Y as y}from"./YAxis-BUBRSx7t.js";import{S as h}from"./Scatter-BtDSZ3Gy.js";import{E as e}from"./ErrorBar-CthVNTaW.js";import{T as u}from"./Tooltip-ClIVzJrA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-VmQ82j3S.js";import"./zIndexSlice-DTuHfx_p.js";import"./immer-DHJNVAe2.js";import"./index-DteGnOzp.js";import"./index-Dq9WTpJB.js";import"./get-BljYdgC6.js";import"./resolveDefaultProps-CmZ2lQdU.js";import"./isWellBehavedNumber-CwWlLsdj.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Dl7IIVL4.js";import"./index-BnBFbJTw.js";import"./renderedTicksSlice-IsDkktPX.js";import"./axisSelectors-UyjPZuEn.js";import"./d3-scale-Ch-uXsQ6.js";import"./CartesianChart-DV13kS8z.js";import"./chartDataContext-COA3hxu-.js";import"./CategoricalChart-JBgYyUd3.js";import"./CartesianAxis-DeJGk3LW.js";import"./Layer-CbZTDJjb.js";import"./Text-BqDkAbeE.js";import"./DOMUtils-BvzDzAj2.js";import"./Label-ODDr4Kfk.js";import"./ZIndexLayer-DzezyKwN.js";import"./types-Blkff1hk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BDYJ2E_L.js";import"./useAnimationId-w9_6HKPK.js";import"./Curve-BLJbrdKh.js";import"./step-C9h4VCgc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-YyJGWWFy.js";import"./Symbols-kG2zlxxy.js";import"./symbol-j9t4dhdn.js";import"./ActiveShapeUtils-t-acR5v1.js";import"./RegisterGraphicalItemId-BcQylArw.js";import"./ErrorBarContext-CZ-WTEC7.js";import"./GraphicalItemClipPath-D0CBaYt_.js";import"./SetGraphicalItem-Dx80ZtIC.js";import"./CSSTransitionAnimate-Cl-Cy9rB.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-EA0CDPIO.js";import"./uniqBy-XDLsRfro.js";import"./iteratee-DZC8fA35.js";import"./Cross-BR5m8PSA.js";import"./Rectangle-C4VesXv4.js";import"./Sector-CFHu7zJj.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
