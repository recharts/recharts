import{R as r}from"./iframe-CFGBW6xJ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DZO8nN9P.js";import{C as d}from"./CartesianGrid-1FrMU2EN.js";import{X as c}from"./XAxis-B5InI_Kd.js";import{Y as y}from"./YAxis-DzdfuxTR.js";import{S as h}from"./Scatter-C2CStau-.js";import{E as e}from"./ErrorBar-E5GWfFv1.js";import{T as u}from"./Tooltip-BzZ_eWqL.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CeVvleXl.js";import"./zIndexSlice-XhnqXoNc.js";import"./immer-DtmFdOpm.js";import"./index-vCzC4pRL.js";import"./index-NCfgaf-E.js";import"./get-mKIhZXA3.js";import"./resolveDefaultProps-i0oJ6jVU.js";import"./isWellBehavedNumber-DJD9cKo6.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Ce00Lp11.js";import"./index-DR9UVvVc.js";import"./renderedTicksSlice-C1DK2pZn.js";import"./axisSelectors-DdfSIe4x.js";import"./d3-scale-D5-KS2M5.js";import"./CartesianChart-CwzI3k7V.js";import"./chartDataContext-pI-MCrLM.js";import"./CategoricalChart-BnGkeJlY.js";import"./CartesianAxis-B6GxQRPi.js";import"./Layer-DZ-_1tbp.js";import"./Text-DdBs_uLw.js";import"./DOMUtils-DpRJCm6O.js";import"./Label-Dw9n6-WD.js";import"./ZIndexLayer-DWvdc9Et.js";import"./types-CFb2awxA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-SqXWEHcu.js";import"./useAnimationId-nIrPYsqA.js";import"./Curve-CuTnLBXp.js";import"./step-Bu8chpKv.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bxk-h1zQ.js";import"./Symbols-DVPvqcsz.js";import"./symbol-BPUYBBZH.js";import"./ActiveShapeUtils-CwRTe6Q2.js";import"./RegisterGraphicalItemId-D7MzpaGX.js";import"./ErrorBarContext-qfoo4UXw.js";import"./GraphicalItemClipPath-CKVLZrRA.js";import"./SetGraphicalItem-Bj9a8OJ5.js";import"./CSSTransitionAnimate-Cx9I3UDS.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-6J8YLqDe.js";import"./uniqBy-CNPIlWYU.js";import"./iteratee-gk_4xeaF.js";import"./Cross-DJ7MuP9C.js";import"./Rectangle-Cx3fMF7b.js";import"./Sector-D3Ol61k7.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
