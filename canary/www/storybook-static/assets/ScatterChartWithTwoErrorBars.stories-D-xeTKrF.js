import{e as r}from"./iframe-DnFqMkNF.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CllBpFw0.js";import{C as d}from"./CartesianGrid-CdVi4ss0.js";import{X as c}from"./XAxis-j8l4i7VN.js";import{Y as y}from"./YAxis-DkzCTt_M.js";import{S as h}from"./Scatter-DPM8B_t8.js";import{E as e}from"./ErrorBar-CY2HfkXj.js";import{T as u}from"./Tooltip-WlBhTofj.js";import{R as f}from"./RechartsHookInspector-CUfHCEPB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5Wt67h2M.js";import"./arrayEqualityCheck-DEUF_nnv.js";import"./resolveDefaultProps-CrMqOqSJ.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CP5b_m36.js";import"./axisSelectors-CPdHEeWG.js";import"./zIndexSlice-CXYr44g9.js";import"./renderedTicksSlice-BJnCLUzI.js";import"./CartesianChart-CRkgE73v.js";import"./chartDataContext-BDWyCmXn.js";import"./CategoricalChart-IxDmkQ4g.js";import"./CartesianAxis-CJ5glNJc.js";import"./Layer-9mC9xCqL.js";import"./Text-DsmkRe5m.js";import"./DOMUtils-D5GQzw0x.js";import"./Label-D7fFgVlW.js";import"./ZIndexLayer-B30mlZWZ.js";import"./types-D_jqkROP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-46mNTZgz.js";import"./Curve-BT-KWQUD.js";import"./tooltipContext-e4AoOKdp.js";import"./Symbols-CDqR_0sP.js";import"./ActiveShapeUtils-BUYAPEqO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BqCnT0bH.js";import"./useAnimationId-CAcVrmxD.js";import"./Trapezoid-h6fpFzx0.js";import"./Sector-CApGG2LQ.js";import"./RegisterGraphicalItemId-DJudlZJr.js";import"./ErrorBarContext-CbJ9bt-9.js";import"./GraphicalItemClipPath-B-dv77RJ.js";import"./SetGraphicalItem-jeGmKde2.js";import"./CSSTransitionAnimate-CdOaY-9C.js";import"./useElementOffset-B08jIfFy.js";import"./iteratee-Bzyf1Qa6.js";import"./Cross-CIgMQk7x.js";import"./index-B4_M3vQq.js";import"./ChartSizeDimensions-C8KjVzvN.js";import"./OffsetShower-CPo0ir56.js";import"./PlotAreaShower-B87d4Zfp.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,wr as __namedExportsOrder,fr as default};
