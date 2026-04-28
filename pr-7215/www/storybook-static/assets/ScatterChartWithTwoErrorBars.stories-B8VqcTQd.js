import{e as r}from"./iframe-DU2QcQF_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-Bxm12dUp.js";import{S as s}from"./ScatterChart-Da-Rv8uP.js";import{C as d}from"./CartesianGrid-_9SxaymY.js";import{X as c}from"./XAxis-BTwSQmla.js";import{Y as y}from"./YAxis-Cz7bs7UA.js";import{S as h}from"./Scatter-BOXVymn7.js";import{E as e}from"./ErrorBar-CkszohaX.js";import{T as u}from"./Tooltip-CoUz_EV7.js";import{R as f}from"./RechartsHookInspector-D0TcJcB2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dkm_90y8.js";import"./arrayEqualityCheck-BBRUJMgE.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BRw4v6sg.js";import"./immer-D_hC97QS.js";import"./PolarUtils-CTnnDHZv.js";import"./index-LW5E5x2X.js";import"./hooks-CLgIfPXm.js";import"./axisSelectors-DCuZe5xZ.js";import"./d3-scale-Cl2Mf9ve.js";import"./string-B6fdYHAA.js";import"./zIndexSlice-DH5OVU_d.js";import"./renderedTicksSlice-DKMiT0hM.js";import"./CartesianChart-DdZk3nRt.js";import"./chartDataContext-BWCdO7Tf.js";import"./CategoricalChart-DI28mp2q.js";import"./CartesianAxis-CfZS-xOz.js";import"./Layer-CsymvJcW.js";import"./Text-C9SLmSKD.js";import"./DOMUtils-BQcJZQLN.js";import"./Label-Xfq-LPcv.js";import"./ZIndexLayer-BezITi0w.js";import"./types-CW6teSnw.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-dOeoQkDw.js";import"./useAnimationId-u-3taHzi.js";import"./Curve-C80_Q5kF.js";import"./step-Bh598Jf-.js";import"./tooltipContext-j-dZBCf6.js";import"./Symbols-BJFlDYmu.js";import"./symbol-B0GgNpuh.js";import"./ActiveShapeUtils-DoCRNyCQ.js";import"./isPlainObject-zOhZ7DbK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MTy_JW56.js";import"./Trapezoid-DGJrygRD.js";import"./Sector-foysTS17.js";import"./RegisterGraphicalItemId-Cw3F3qyO.js";import"./ErrorBarContext-MDyyOlAz.js";import"./GraphicalItemClipPath-DML64_av.js";import"./SetGraphicalItem-BXFmGWYP.js";import"./CSSTransitionAnimate-DawYQO4o.js";import"./useElementOffset-ROzhXFOA.js";import"./uniqBy-C_-hIJrl.js";import"./iteratee-DICIiPho.js";import"./Cross-DzUZI0PH.js";import"./index-DyrGUy1I.js";import"./ChartSizeDimensions-B-rd_hON.js";import"./OffsetShower-BsYgMVad.js";import"./PlotAreaShower-D9gSylqx.js";const kr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,kr as default};
