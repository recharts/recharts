import{e as r}from"./iframe-BlrnuDjf.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-Bzfhta_b.js";import{C as d}from"./CartesianGrid-BsN6v_bv.js";import{X as c}from"./XAxis-BYp_HR9V.js";import{Y as y}from"./YAxis-BWVYo6DZ.js";import{S as h}from"./Scatter-CVlxcW_T.js";import{E as e}from"./ErrorBar-DLYK2Jqk.js";import{T as u}from"./Tooltip-DF9nxb6Z.js";import{R as f}from"./RechartsHookInspector-BAQjFSl6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bw-KSP5T.js";import"./arrayEqualityCheck-BTXXQX4n.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1DdFNclr.js";import"./immer-BI9UFPL2.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CKL3N-6v.js";import"./hooks-Yl-LcXas.js";import"./axisSelectors-DHIQ-7_W.js";import"./d3-scale-CFGK5P70.js";import"./zIndexSlice-CqZHWfc6.js";import"./renderedTicksSlice-ULPEEzAa.js";import"./CartesianChart-CnkTC8bW.js";import"./chartDataContext-ihmINbbo.js";import"./CategoricalChart-DiwHthGG.js";import"./CartesianAxis-edOWbwOR.js";import"./Layer-XHhRDzId.js";import"./Text-Cu_8uwrn.js";import"./DOMUtils-Cq-iC6tL.js";import"./Label-D_q5FUVB.js";import"./ZIndexLayer-7Hmap2eH.js";import"./types-DB_0tejV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BjQ30mBr.js";import"./Curve-BlGAAnP8.js";import"./step-oX00aiZd.js";import"./tooltipContext-BFnVZoxN.js";import"./Symbols-DUfoVivI.js";import"./symbol-C5z5ai8y.js";import"./ActiveShapeUtils-Dv40rWK2.js";import"./isPlainObject-BwE05GU9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DXu9YO7w.js";import"./useAnimationId-DbkCLx7t.js";import"./Trapezoid-DnTBSn7u.js";import"./Sector-Dv5PvvRm.js";import"./RegisterGraphicalItemId-Bh07AqU-.js";import"./ErrorBarContext-BsqB8Oyr.js";import"./GraphicalItemClipPath-EkcAQ3H7.js";import"./SetGraphicalItem-B1RMw4_v.js";import"./CSSTransitionAnimate-8bw2WZFy.js";import"./useElementOffset-VY0XYpIy.js";import"./uniqBy-CrknV9rA.js";import"./iteratee-DhN2HWwH.js";import"./Cross-wn3aRhM3.js";import"./index-Cy5kt_9j.js";import"./ChartSizeDimensions-Igo4L2HP.js";import"./OffsetShower-BEEi0iU5.js";import"./PlotAreaShower-BeUubBWZ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
