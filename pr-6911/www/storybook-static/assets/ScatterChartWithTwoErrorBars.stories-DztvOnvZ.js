import{e as r}from"./iframe-B6AlQnM2.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-C2QfNY70.js";import{C as d}from"./CartesianGrid-BsrOPDfE.js";import{X as c}from"./XAxis-B2vfw6Li.js";import{Y as y}from"./YAxis-BtS_tsxk.js";import{S as h}from"./Scatter-BQcU1ZTc.js";import{E as e}from"./ErrorBar-CejDKIty.js";import{T as u}from"./Tooltip-JUfWckLq.js";import{R as f}from"./RechartsHookInspector-C4bhcvg_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CexAAOIz.js";import"./arrayEqualityCheck-DOlZ0mCX.js";import"./resolveDefaultProps-osVefOLp.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CQRKljNW.js";import"./axisSelectors-CbxR9aKJ.js";import"./zIndexSlice-lMltdZop.js";import"./CartesianChart-lYw6K-4N.js";import"./chartDataContext-JLBHd2Mr.js";import"./CategoricalChart-Bzfkval9.js";import"./CartesianAxis-BwDpbQiB.js";import"./Layer-Cdn-3vsr.js";import"./Text-BQHJk7TW.js";import"./DOMUtils-ookTrfW2.js";import"./Label-CIaajA0c.js";import"./ZIndexLayer-KOQQKvvO.js";import"./types-C25Y7m2H.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ODr0KtTw.js";import"./Curve-DTUwCS4t.js";import"./tooltipContext-D0kn5MH1.js";import"./Symbols-Cm6_UFeB.js";import"./ActiveShapeUtils-Ly0l_9qH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BQhXboIW.js";import"./useAnimationId-CsS9GYvF.js";import"./Trapezoid-DdjR8tMX.js";import"./Sector-D5Wtmz4T.js";import"./RegisterGraphicalItemId-BrQ42RrU.js";import"./ErrorBarContext-DYHYd6lU.js";import"./GraphicalItemClipPath-CFBlDtHu.js";import"./SetGraphicalItem-BFhZLv7r.js";import"./CSSTransitionAnimate-Ql2Ve5Fa.js";import"./useElementOffset-D5aHn8Rk.js";import"./iteratee-7MvN9BPN.js";import"./Cross-BXVeeLRc.js";import"./index-CYGFbMYu.js";import"./ChartSizeDimensions-BY4lvFSe.js";import"./OffsetShower-IG_VUviu.js";import"./PlotAreaShower-DnDaw1Ql.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
