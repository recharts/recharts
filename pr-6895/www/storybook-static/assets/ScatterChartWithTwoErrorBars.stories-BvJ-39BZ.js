import{e as r}from"./iframe-BmaSkXVD.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CduE2jIy.js";import{C as d}from"./CartesianGrid-DLvI6tq0.js";import{X as c}from"./XAxis-C3x6dMLi.js";import{Y as y}from"./YAxis-bl9CTFgn.js";import{S as h}from"./Scatter-C2vxKDBP.js";import{E as e}from"./ErrorBar-D73-jyEJ.js";import{T as u}from"./Tooltip-C12lAHvb.js";import{R as f}from"./RechartsHookInspector-C0qStJOJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKnhTxOl.js";import"./arrayEqualityCheck-DFn-H49U.js";import"./resolveDefaultProps-Cjwd7qt6.js";import"./PolarUtils-fSNmW3dt.js";import"./hooks-DXbNb-JH.js";import"./axisSelectors-CSGKwTAZ.js";import"./zIndexSlice-DNtltYbu.js";import"./CartesianChart-D0l2Cukl.js";import"./chartDataContext-CSlbi7PQ.js";import"./CategoricalChart-BDvQLJnr.js";import"./CartesianAxis-CTYOybg_.js";import"./Layer-kGCv99f8.js";import"./Text-D7kjMnBu.js";import"./DOMUtils-Ci6czfq_.js";import"./Label-Ba2fKD7_.js";import"./ZIndexLayer-B0Nv_sMb.js";import"./types-B1enpQ2U.js";import"./ReactUtils-DF_Mupxs.js";import"./Curve-Ct1DVFB9.js";import"./tooltipContext-C34n9vuI.js";import"./Symbols-BOIH3U2b.js";import"./ActiveShapeUtils-450HsfaK.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DuCzHhek.js";import"./useAnimationId-CSP1LMrK.js";import"./Trapezoid-B-uAYGkA.js";import"./Sector-BIUOjaCq.js";import"./RegisterGraphicalItemId-DmnuQhvD.js";import"./ErrorBarContext-DJ_jm3x0.js";import"./GraphicalItemClipPath-BaRcGmKq.js";import"./SetGraphicalItem-Dkq9thq_.js";import"./CSSTransitionAnimate-TbsmycWs.js";import"./useElementOffset-P5G-fn69.js";import"./iteratee-BPsQLCXM.js";import"./Cross-NxLC6jso.js";import"./index-D8VqDYui.js";import"./ChartSizeDimensions-BIJ2rdc4.js";import"./OffsetShower-CSh__zJW.js";import"./PlotAreaShower-B9ocgXZz.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
