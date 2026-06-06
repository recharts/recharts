import{R as r}from"./iframe-Cx28kabR.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CZtQ6kqb.js";import{C as d}from"./CartesianGrid-D5AZ4yC0.js";import{X as c}from"./XAxis-CWTUtLan.js";import{Y as y}from"./YAxis-DtGVJOoG.js";import{S as h}from"./Scatter-6dpgK1zU.js";import{E as e}from"./ErrorBar-B3Q6w6cW.js";import{T as u}from"./Tooltip-BKDHWttE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DI8RF6tE.js";import"./zIndexSlice-BJophbSs.js";import"./immer-C9z4Tvb1.js";import"./index-CXdTgtXr.js";import"./index-Cl_UPhhU.js";import"./get-B9lrw7-x.js";import"./resolveDefaultProps-DKQmb89J.js";import"./isWellBehavedNumber-CMbzImp5.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DVR_r8nO.js";import"./index-D-WuKlNL.js";import"./renderedTicksSlice-fyKJy_9M.js";import"./axisSelectors-Bitj5C0u.js";import"./d3-scale-Dbt5vd1_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ub9LiVnx.js";import"./chartDataContext-BAHJZWaV.js";import"./CategoricalChart-CC4_m9gZ.js";import"./CartesianAxis-BKywCzO2.js";import"./Layer-DvLhXWX-.js";import"./Text-CTvgLWx7.js";import"./DOMUtils-XPvxL8R9.js";import"./Label-BDMWILCu.js";import"./ZIndexLayer-CZAm4j4p.js";import"./types-UeNFcMv5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BxtLfWI4.js";import"./useAnimationId-DLl-Zvtm.js";import"./Curve-BhQA-w3U.js";import"./step-JKjbkiwo.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bexp3cQ9.js";import"./Symbols-BlW_LPoz.js";import"./symbol-8JxOaiEe.js";import"./ActiveShapeUtils-CP3CGhpS.js";import"./RegisterGraphicalItemId-Blf5kOwl.js";import"./ErrorBarContext-ZNw_jj1S.js";import"./GraphicalItemClipPath-B8CVXRQ2.js";import"./SetGraphicalItem-Dk5vZuTC.js";import"./CSSTransitionAnimate-CtHf8Vlx.js";import"./useElementOffset-C1Lt73IJ.js";import"./uniqBy-1qQJ4H2D.js";import"./iteratee-8IZU8Gil.js";import"./Cross-3dBm2aFN.js";import"./Rectangle-DJiMJWXy.js";import"./Sector-CCXsbnI5.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
