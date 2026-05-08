import{e as r}from"./iframe-BCIyDy2y.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DaFp1qJK.js";import{C as d}from"./CartesianGrid-C9QCD4jM.js";import{X as c}from"./XAxis-DV5Xkww9.js";import{Y as y}from"./YAxis-CnRlmuzM.js";import{S as h}from"./Scatter-CXcNQLAh.js";import{E as e}from"./ErrorBar-CS51tsU6.js";import{T as u}from"./Tooltip-5TOXxqC4.js";import{R as f}from"./RechartsHookInspector-Z2OccCn4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bdd2O_oM.js";import"./arrayEqualityCheck-Cf245WJn.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-lVM9sbuz.js";import"./immer-C2RICBwb.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CtknXjDa.js";import"./hooks-BTsBRBHp.js";import"./axisSelectors-yCT-Higf.js";import"./d3-scale-CI4AiR3w.js";import"./zIndexSlice-DSrTTGma.js";import"./renderedTicksSlice-Cz2vx4zM.js";import"./CartesianChart-DrswP_Ob.js";import"./chartDataContext-CXwTcmro.js";import"./CategoricalChart-up_sq5JM.js";import"./CartesianAxis-DQMQkFuk.js";import"./Layer-BI55N2-G.js";import"./Text-DkhCuMky.js";import"./DOMUtils-BAzLlmnO.js";import"./Label-BLeLqCLV.js";import"./ZIndexLayer-OXXPiSY6.js";import"./types-lt17_KuZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-xGOtO2-g.js";import"./Curve-CewalY2f.js";import"./step-C8nuQph-.js";import"./tooltipContext-tXpmtW_g.js";import"./Symbols-BB8IGNYJ.js";import"./symbol-BWsdZnbp.js";import"./ActiveShapeUtils-jGAWG3IP.js";import"./isPlainObject-whMXKUZx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-SMe0MBtT.js";import"./useAnimationId-BkfXIhqW.js";import"./Trapezoid-RcGRNOCe.js";import"./Sector-Ck7ah4lL.js";import"./RegisterGraphicalItemId-UqraLzmZ.js";import"./ErrorBarContext-BoyyOct_.js";import"./GraphicalItemClipPath-DTR4rFg9.js";import"./SetGraphicalItem-D1XFyIIN.js";import"./CSSTransitionAnimate-BQdQSqVe.js";import"./useElementOffset-G1RjUq0A.js";import"./uniqBy-CMyGBwYl.js";import"./iteratee-CPlqxnf-.js";import"./Cross-BauiRK37.js";import"./index-DwfpJ5JJ.js";import"./ChartSizeDimensions-DA9WuIbb.js";import"./OffsetShower-DxUIrgLH.js";import"./PlotAreaShower-DU-Wc0h4.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
