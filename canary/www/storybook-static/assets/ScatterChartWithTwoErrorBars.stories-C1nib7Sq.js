import{R as r}from"./iframe-8y2_-y0l.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C4Lke1JU.js";import{C as d}from"./CartesianGrid-Tylt9tzW.js";import{X as c}from"./XAxis-C-STHEWl.js";import{Y as y}from"./YAxis-Cka8X-Di.js";import{S as h}from"./Scatter-xBp3iqMb.js";import{E as e}from"./ErrorBar-BX4VePxH.js";import{T as u}from"./Tooltip-DrQK6_bU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B7Kkv9qM.js";import"./zIndexSlice-D_xG4Od1.js";import"./throttle-vJw1Gj7e.js";import"./index-DRQy4x13.js";import"./index-BErx7veh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dr9m88pQ.js";import"./isWellBehavedNumber-CdgGUQY1.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DMzHieur.js";import"./index-4aNbOO2K.js";import"./renderedTicksSlice-CEAAcomA.js";import"./axisSelectors-CSK4MjLf.js";import"./d3-scale-U7OEzOLT.js";import"./CartesianChart-CB-6O5b4.js";import"./chartDataContext-CRN46eEy.js";import"./CategoricalChart-CTEs6pXe.js";import"./CartesianAxis-Dxt7VdA8.js";import"./Layer-Bx7fY7lj.js";import"./Text-DSeRyRP0.js";import"./DOMUtils-BWSGK_7w.js";import"./Label-DkE66McM.js";import"./ZIndexLayer-Db2-KFbv.js";import"./types-BqBuCCYn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-D6NJDAxr.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D2ax0Lv8.js";import"./useAnimationId-Cseq293z.js";import"./Curve-rx89tdOF.js";import"./step-DuBNKbdJ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DZvSZZn_.js";import"./Symbols-DT910lYp.js";import"./symbol-B3ZeMIeQ.js";import"./ActiveShapeUtils-Bx5pmo_f.js";import"./RegisterGraphicalItemId-CtYEtvHk.js";import"./ErrorBarContext-CT8kogTh.js";import"./GraphicalItemClipPath-CtYHN7Zm.js";import"./SetGraphicalItem-DMAc9VE6.js";import"./CSSTransitionAnimate-pdOTPb7w.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CCRtAZkL.js";import"./uniqBy-CU4rcLT3.js";import"./iteratee-CmpuqRan.js";import"./Cross-Da13P1aY.js";import"./Rectangle-B1X6Uqlr.js";import"./Sector-CZ9Izv_-.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
