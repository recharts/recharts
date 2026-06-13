import{R as r}from"./iframe-DCSfzZD_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D1wv4Eyl.js";import{C as d}from"./CartesianGrid-DTmSZryn.js";import{X as c}from"./XAxis-BD_qaxla.js";import{Y as y}from"./YAxis-CXksHDR7.js";import{S as h}from"./Scatter-x6K1QOqk.js";import{E as e}from"./ErrorBar-CKb7yIvQ.js";import{T as u}from"./Tooltip-ClHTJ87m.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-f8FpOrqU.js";import"./zIndexSlice-Cya-j5JC.js";import"./immer-ByTaNkbJ.js";import"./index-Bo0lICcO.js";import"./index-Bc3eNKO0.js";import"./get-bIWt5V4Q.js";import"./resolveDefaultProps-CCmyAiJ-.js";import"./isWellBehavedNumber-m9CBmcKa.js";import"./PolarUtils-CTnnDHZv.js";import"./index-TStCCngK.js";import"./index-CZv42qN9.js";import"./renderedTicksSlice-CB2WZ0k7.js";import"./axisSelectors-C-oQ6giK.js";import"./d3-scale-4ju7hcsF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CB6ngWWH.js";import"./chartDataContext-WKixDFuv.js";import"./CategoricalChart-DJmhsbdm.js";import"./CartesianAxis-B8kAJjBK.js";import"./Layer-CYaqqIa6.js";import"./Text-BxOuGVRA.js";import"./DOMUtils-C0TjG-2s.js";import"./Label-DyuMertz.js";import"./ZIndexLayer-BUBfOUZp.js";import"./types-pWlDed2R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DS8CzLL4.js";import"./useAnimationId-BTIZp_pi.js";import"./Curve-DBwKGQr7.js";import"./step-B0rCVxys.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B88742NV.js";import"./Symbols-BKzYxUbZ.js";import"./symbol-CEbhlMi_.js";import"./ActiveShapeUtils-C_38ZXqU.js";import"./RegisterGraphicalItemId-B-4FmZL4.js";import"./ErrorBarContext-CpQVZJvf.js";import"./GraphicalItemClipPath-7MgXj_jT.js";import"./SetGraphicalItem-3Qo-AVYb.js";import"./CSSTransitionAnimate-DYV47hq8.js";import"./useElementOffset-B3zKGjmj.js";import"./uniqBy-BKEBWd8i.js";import"./iteratee-DGPg2gSr.js";import"./Cross-CW_92A8M.js";import"./Rectangle-DpxrFSPu.js";import"./Sector-Dk4xXV-l.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
