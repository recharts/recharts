import{e as r}from"./iframe-DDDJQB5W.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-C2NRembV.js";import{C as d}from"./CartesianGrid-jc_ttR56.js";import{X as c}from"./XAxis-wieUEhCR.js";import{Y as y}from"./YAxis-5_ZrD8qJ.js";import{S as h}from"./Scatter-Bjg4-rHZ.js";import{E as e}from"./ErrorBar-C6jt1Smp.js";import{T as u}from"./Tooltip-DC-0U45b.js";import{R as f}from"./RechartsHookInspector-UcMzq5oF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DdXQ715_.js";import"./arrayEqualityCheck-D0Xb1fN2.js";import"./resolveDefaultProps-BsKQv1PU.js";import"./PolarUtils-t5VCEmBY.js";import"./hooks-BP25Spjv.js";import"./axisSelectors-CQBK46ul.js";import"./zIndexSlice-rPTjsX-n.js";import"./CartesianChart-ZUHoE3GB.js";import"./chartDataContext-j99xrIrV.js";import"./CategoricalChart-grKPARSf.js";import"./CartesianAxis-CkTm5RK2.js";import"./Layer-VwKMwUPk.js";import"./Text-Djbe6uvl.js";import"./DOMUtils-Dkn2KrJ_.js";import"./Label-vsQtY8U6.js";import"./ZIndexLayer-DbViNaNl.js";import"./types-CGHtFgCy.js";import"./ReactUtils-DAfUDxZJ.js";import"./Curve-zMorL5Ul.js";import"./tooltipContext-DL1Jhu1K.js";import"./Symbols-ykgg1Owr.js";import"./ActiveShapeUtils-BxCYJ66h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMimnTgv.js";import"./useAnimationId-C8z7_GYR.js";import"./Trapezoid-DCDgebWC.js";import"./Sector-DoveBBFo.js";import"./RegisterGraphicalItemId-Du0teFv1.js";import"./ErrorBarContext-Ds9eksq1.js";import"./GraphicalItemClipPath-DhKhb3Nw.js";import"./SetGraphicalItem-C60hp0F5.js";import"./CSSTransitionAnimate-uleGCdb4.js";import"./useElementOffset-qOK29dPg.js";import"./iteratee-2IfE8Xfy.js";import"./Cross-BZo1a4xI.js";import"./index-BliyNw2M.js";import"./ChartSizeDimensions-BYcSqOel.js";import"./OffsetShower-BlJsaDut.js";import"./PlotAreaShower-rDHCl9WN.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
