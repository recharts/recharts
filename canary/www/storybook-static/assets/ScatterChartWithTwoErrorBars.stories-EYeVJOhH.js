import{e as r}from"./iframe-D-0IUJGK.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-AwPg2krC.js";import{C as d}from"./CartesianGrid-wYYb_ETo.js";import{X as c}from"./XAxis-CVV4DzFI.js";import{Y as y}from"./YAxis-DgsPqkY3.js";import{S as h}from"./Scatter-Cwt8BQT1.js";import{E as e}from"./ErrorBar-jmebWOJs.js";import{T as u}from"./Tooltip-B7n3uHFG.js";import{R as f}from"./RechartsHookInspector-ByAlRvo4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CufL0AhU.js";import"./arrayEqualityCheck-C2_-Uu4b.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-6ZRnbExh.js";import"./immer-BqKqj1gc.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BKZ6_UMT.js";import"./hooks-DdYzpI7S.js";import"./axisSelectors-I9kb0cKY.js";import"./d3-scale-bTazPGJf.js";import"./zIndexSlice-DSGfPW9M.js";import"./renderedTicksSlice-CBi406A9.js";import"./CartesianChart-D1C4weRi.js";import"./chartDataContext-CpBPNMx6.js";import"./CategoricalChart-Cvik2JIp.js";import"./CartesianAxis-BpaKC44j.js";import"./Layer-CTviFarP.js";import"./Text-7HuLOFJ_.js";import"./DOMUtils-CyqmOfaO.js";import"./Label-CQuheRKb.js";import"./ZIndexLayer-dNEhzNo8.js";import"./types-D1PFdIYW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DhoIBDOK.js";import"./Curve-CUbaL9A5.js";import"./step-DIrgAirM.js";import"./tooltipContext-BbhojBiB.js";import"./Symbols-CM5rDsvy.js";import"./symbol-DIeWOW3k.js";import"./ActiveShapeUtils-BDOyHxHs.js";import"./isPlainObject-BJcM5Fjp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-xceTB-v2.js";import"./useAnimationId-C9TFjIVY.js";import"./Trapezoid-D-5x7DqH.js";import"./Sector-SAKjVkNh.js";import"./RegisterGraphicalItemId-BG4vqgbk.js";import"./ErrorBarContext-CnqimuFK.js";import"./GraphicalItemClipPath-6R7g6XV3.js";import"./SetGraphicalItem-WLE6T4Wd.js";import"./CSSTransitionAnimate-tIoYVbYq.js";import"./useElementOffset-RR8V5txV.js";import"./uniqBy-Dt7HNo1A.js";import"./iteratee-D2mYQU3A.js";import"./Cross-KyvP-mXM.js";import"./index-CvEiFoUh.js";import"./ChartSizeDimensions-BThuhk--.js";import"./OffsetShower-DnIfcGdO.js";import"./PlotAreaShower-BUKTEC4c.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
