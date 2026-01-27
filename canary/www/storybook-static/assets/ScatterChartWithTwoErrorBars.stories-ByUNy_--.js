import{e as r}from"./iframe-BZbOzzTY.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bjd-bfYe.js";import{S as p}from"./ScatterChart-Dv7fPuC7.js";import{C as d}from"./CartesianGrid-BfQ3xRz4.js";import{X as c}from"./XAxis-D_0iXdcr.js";import{Y as y}from"./YAxis-Dya7AK5Z.js";import{S as h}from"./Scatter-bVPjAU37.js";import{E as e}from"./ErrorBar-BYeADmdb.js";import{T as u}from"./Tooltip-DOLdJTsR.js";import{R as f}from"./RechartsHookInspector-135t8dQu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bx7P3ldu.js";import"./arrayEqualityCheck-D0qDv0Fd.js";import"./resolveDefaultProps-Dw2Mrgq2.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CeNJ-Qya.js";import"./axisSelectors-Cv1qfvr6.js";import"./zIndexSlice-J5rUHDmR.js";import"./CartesianChart-Bmuz99Xe.js";import"./chartDataContext-D5Kp386R.js";import"./CategoricalChart-BBkfjreJ.js";import"./CartesianAxis-B2T9DZ1W.js";import"./Layer-Ca1ZcU8K.js";import"./Text-Dp7XyQOy.js";import"./DOMUtils-vtRXHL3R.js";import"./Label-D9W5dwQ-.js";import"./ZIndexLayer-CLlHxURh.js";import"./types-CCRlLAaX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BZBgIdmA.js";import"./Curve-LGs6YPsX.js";import"./tooltipContext-CEJlVqMU.js";import"./Symbols-BeK0vgrh.js";import"./ActiveShapeUtils-dkNue--z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkInrNvF.js";import"./useAnimationId-CbTMmgPX.js";import"./Trapezoid-vZxOp19A.js";import"./Sector-Cp2fRZg0.js";import"./RegisterGraphicalItemId-DiEkoTQv.js";import"./ErrorBarContext-D7kGcYfA.js";import"./GraphicalItemClipPath-Cs5ZE868.js";import"./SetGraphicalItem-8hrJSJHb.js";import"./CSSTransitionAnimate-CQFXVe04.js";import"./useElementOffset-Dh2fW2NM.js";import"./iteratee-L5Ky7jPy.js";import"./Cross-COIyRhuG.js";import"./index--k4eFqf6.js";import"./ChartSizeDimensions-OWBI4sZr.js";import"./OffsetShower-BDJynaSn.js";import"./PlotAreaShower-DgtK3Nlq.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
