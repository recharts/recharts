import{e as r}from"./iframe-oV1i-tzu.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-s_kaT1sy.js";import{C as d}from"./CartesianGrid-D9DyNXZ-.js";import{X as c}from"./XAxis-DW0bS2aQ.js";import{Y as y}from"./YAxis-BMPOd6W0.js";import{S as h}from"./Scatter-DZCS8uLJ.js";import{E as e}from"./ErrorBar-Rn25E09P.js";import{T as u}from"./Tooltip-r9T7AQW9.js";import{R as f}from"./RechartsHookInspector-1T59QrJN.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Saljze2a.js";import"./arrayEqualityCheck-Dfz61M-V.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cn2RP2Pv.js";import"./immer-Ct3YneiL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DdCYMcV3.js";import"./hooks-B5b3yGZZ.js";import"./axisSelectors-BRcov9Qp.js";import"./d3-scale-BCcM-CgQ.js";import"./zIndexSlice-CXZMcCd3.js";import"./renderedTicksSlice-C78Emj3z.js";import"./CartesianChart-DROGNedD.js";import"./chartDataContext-DEEDOj20.js";import"./CategoricalChart-otVHfWKe.js";import"./CartesianAxis-DOaYzv5V.js";import"./Layer-e51vonqH.js";import"./Text-rK0alIz0.js";import"./DOMUtils-DKzrOEzB.js";import"./Label-C9DqArbR.js";import"./ZIndexLayer-Hy5H_WVm.js";import"./types-BU-8R6yi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-wKdNeUqr.js";import"./Curve-DXadnWNX.js";import"./step-DajnNDky.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cy3c3L4r.js";import"./Symbols-C83T-EWb.js";import"./symbol-VawIigOH.js";import"./ActiveShapeUtils-CmSjpnmu.js";import"./RegisterGraphicalItemId-CbsLevva.js";import"./ErrorBarContext-CHQ5Dpbn.js";import"./GraphicalItemClipPath-C89Feiin.js";import"./SetGraphicalItem-BZBmijvN.js";import"./useAnimationId-DCUIw60r.js";import"./CSSTransitionAnimate-relQDY3N.js";import"./useElementOffset-BMz-Idks.js";import"./uniqBy-Cgghj1Ul.js";import"./iteratee-DiVCWJOm.js";import"./Cross-BMtNyfs2.js";import"./Rectangle-Dox35F7s.js";import"./Sector-DiFKD5N7.js";import"./index-DHpYxSIP.js";import"./ChartSizeDimensions-COgON8GA.js";import"./OffsetShower-CXxqX1ML.js";import"./PlotAreaShower-DiLwgL_i.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
