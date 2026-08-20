import{R as r}from"./iframe-Bxb7fTI_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-DFiunPzD.js";import{C as d}from"./CartesianGrid-Bio2Kdhg.js";import{X as c}from"./XAxis-CkOknljo.js";import{Y as y}from"./YAxis-nAknvnvN.js";import{S as h}from"./Scatter-fPU_n0j9.js";import{E as e}from"./ErrorBar-DwL0ZIQI.js";import{T as u}from"./Tooltip-79hrGs82.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DZ0rQEPQ.js";import"./zIndexSlice-Dc8AhsBR.js";import"./throttle-CFHzUNT1.js";import"./index-Cx8Wpi4i.js";import"./index-Bo-C2AfN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BI7lk0Xh.js";import"./isWellBehavedNumber-CwdI5Moi.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DTEA-FIe.js";import"./index-C-XRKF5d.js";import"./axisSelectors-B6Hc05Ed.js";import"./d3-scale-Dc6IGH61.js";import"./renderedTicksSlice-CGX0B5OX.js";import"./CartesianChart-DeUsHf5g.js";import"./chartDataContext-BelA56cJ.js";import"./CategoricalChart-D-PTwWFe.js";import"./CartesianAxis-CMkdpaa1.js";import"./Layer-DjfrzuA0.js";import"./Text-CjptF509.js";import"./DOMUtils-pu9LPEtL.js";import"./useId-BnCOmIJ8.js";import"./useBackwardsCompatibleTheme-4TZTHq_s.js";import"./Label-CTFdx9tw.js";import"./ZIndexLayer-oyOyBp5p.js";import"./types-sJxYiwgt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C_-SWE1b.js";import"./useAnimationId-BhzzmCcY.js";import"./Curve-D4ESszCl.js";import"./step-DmsSDk4K.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CMpYJro3.js";import"./Symbols-S6zB6E4A.js";import"./symbol-DVgX-W97.js";import"./ActiveShapeUtils-bT-Xy9SL.js";import"./RegisterGraphicalItemId-B823gFGg.js";import"./ErrorBarContext-D8MkcOwe.js";import"./GraphicalItemClipPath-BKsG1i1n.js";import"./SetGraphicalItem-DB73g3d2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DEmAS3k5.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CvkVVO4z.js";import"./uniqBy-DL7Bhf0u.js";import"./iteratee-CRSpQ1DK.js";import"./Cross-BnIYPAob.js";import"./Rectangle-CCwWx1xN.js";import"./Sector-CSyIb4pU.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
