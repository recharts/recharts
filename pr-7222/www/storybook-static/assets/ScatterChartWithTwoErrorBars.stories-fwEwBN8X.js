import{e as r}from"./iframe-BbLTqg_I.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DbI4yqrw.js";import{C as d}from"./CartesianGrid-8ldLZAOH.js";import{X as c}from"./XAxis-WOMOBxy0.js";import{Y as y}from"./YAxis-DbPxFlg1.js";import{S as h}from"./Scatter-CC6yuf6Y.js";import{E as e}from"./ErrorBar-CaWDLO-M.js";import{T as u}from"./Tooltip-7ugGiU5m.js";import{R as f}from"./RechartsHookInspector-D5b-YMWc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-sXCJwmzA.js";import"./arrayEqualityCheck-CBxHnj40.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DeEvTvqp.js";import"./immer-0I19eR8v.js";import"./PolarUtils-CTnnDHZv.js";import"./index-t2-XMrpS.js";import"./hooks-lBsi1Lte.js";import"./axisSelectors-Bham5zd3.js";import"./d3-scale-DytBNPzq.js";import"./zIndexSlice-DaNYP2h4.js";import"./renderedTicksSlice-mAMVqgeM.js";import"./CartesianChart-6nDSe5MW.js";import"./chartDataContext-CkbwJfZ5.js";import"./CategoricalChart-CiUZR458.js";import"./CartesianAxis-BQlJw0QH.js";import"./Layer-De7FJLXT.js";import"./Text-Doa3jS46.js";import"./DOMUtils-_WjkpCG3.js";import"./Label-Dp17yuaT.js";import"./ZIndexLayer-CG-7pAPx.js";import"./types-BQQUehNG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BKGICeIT.js";import"./Curve-Bfkmy_Vr.js";import"./step-DZPsS0dg.js";import"./tooltipContext-CoSAbHdV.js";import"./Symbols-DHvudbT_.js";import"./symbol-C3VSVIbg.js";import"./ActiveShapeUtils-DIUxAYHp.js";import"./isPlainObject--uBpLfXE.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-oP2ZElLD.js";import"./useAnimationId-Dzq-5vwQ.js";import"./Trapezoid-CEWsUmUR.js";import"./Sector-DvZKa3JR.js";import"./RegisterGraphicalItemId-BMAYZOJ5.js";import"./ErrorBarContext-DVSsr0NQ.js";import"./GraphicalItemClipPath-BQ69dXZ4.js";import"./SetGraphicalItem-BZCA2PlV.js";import"./CSSTransitionAnimate-CvzhnEBX.js";import"./useElementOffset-CyzrHFyC.js";import"./uniqBy-DX_iKdhm.js";import"./iteratee-D7Prihow.js";import"./Cross-1-u-Ueg2.js";import"./index-BvC3nlY0.js";import"./ChartSizeDimensions-BXlHCl-n.js";import"./OffsetShower-ifdzBZ5-.js";import"./PlotAreaShower-CxkyObXY.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
