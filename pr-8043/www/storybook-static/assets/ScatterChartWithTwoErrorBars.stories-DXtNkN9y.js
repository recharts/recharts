import{R as r}from"./iframe-BJwrbqqi.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BgjGbjVA.js";import{C as d}from"./CartesianGrid-t9_8Qbmt.js";import{X as c}from"./XAxis-B7ZX8Kfa.js";import{Y as y}from"./YAxis-BRttk8mJ.js";import{S as h}from"./Scatter-BJ_MOcbD.js";import{E as e}from"./ErrorBar-ClsjQG5P.js";import{T as u}from"./Tooltip-D-aHLOso.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeuEZMtn.js";import"./zIndexSlice-Dgyv34Z4.js";import"./throttle-pfeYxzRR.js";import"./index-G7qNEGy_.js";import"./index-DvHXQAWB.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-C-uvAkWz.js";import"./isWellBehavedNumber-pfE5Q5mt.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-C5NObvkt.js";import"./d3-scale-DSWUCzXy.js";import"./index-DsGTB-aY.js";import"./index-WSINJmPt.js";import"./renderedTicksSlice-BnrduSeF.js";import"./index-BP4AOHzk.js";import"./CartesianChart-CLAnODbR.js";import"./chartDataContext-BDqLbH1o.js";import"./CategoricalChart-Db_HBiCU.js";import"./CartesianAxis-CmiU-XO8.js";import"./Layer-eN5gk5Rs.js";import"./Text-KHiJMqsX.js";import"./pageBackground-BIIIhWKR.js";import"./useId-DQUV3KXo.js";import"./useBackwardsCompatibleTheme-B8str_Tp.js";import"./Label-XjwS876P.js";import"./ZIndexLayer-BJ-hVFwd.js";import"./dataEntryStyles-D7ilp65R.js";import"./types-BBGLRMuE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-JM_riMMZ.js";import"./useAnimationId-Cz6ggmzR.js";import"./Curve-DpfItrvf.js";import"./step-CFdztVjQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Ds0YQgby.js";import"./Symbols-BIb_pKxd.js";import"./symbol-5eUW0bsj.js";import"./ActiveShapeUtils-DSUQ40Ee.js";import"./RegisterGraphicalItemId-CPxaQHtW.js";import"./ErrorBarContext-8FsJ_EHd.js";import"./GraphicalItemClipPath-D57dspwd.js";import"./SetGraphicalItem-Dgy41JCB.js";import"./useEffectiveDataKey-dwhPZ08z.js";import"./CSSTransitionAnimate-D6KnYL2r.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B3zfLjYP.js";import"./uniqBy-CLTRPXtC.js";import"./iteratee-DM8gut2i.js";import"./isArguments-yB-y1yaH.js";import"./Cross-b_5sADJx.js";import"./Rectangle-DKcQQ7tK.js";import"./Sector-CfxM3osn.js";const Or={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},kr=["WithErrorBarsAndExtendedDomain"];var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Or as default};
