import{R as r}from"./iframe-B4kUD3F_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BKD8BcpN.js";import{C as d}from"./CartesianGrid-CAwnAibP.js";import{X as c}from"./XAxis-BqSSrpGv.js";import{Y as y}from"./YAxis-DxN0d4h_.js";import{S as h}from"./Scatter-Dpv-oAdj.js";import{E as e}from"./ErrorBar-DITlpMXb.js";import{T as u}from"./Tooltip-559atlXM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0Rch8-X.js";import"./zIndexSlice-DRZxBlWj.js";import"./immer-DI7Qg7MS.js";import"./index-CYqd0Uq6.js";import"./index-BV_azGi8.js";import"./get-SuicBCAy.js";import"./resolveDefaultProps-DRQB4Pss.js";import"./isWellBehavedNumber-Bmjbb00R.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DCwDzrBS.js";import"./index-C-xuAHoJ.js";import"./renderedTicksSlice-DO7nzrZX.js";import"./axisSelectors-7DMUz--h.js";import"./d3-scale-CJLHhLGS.js";import"./CartesianChart-DZtIiDJu.js";import"./chartDataContext-hd9fJl9r.js";import"./CategoricalChart-DUPJdAnz.js";import"./CartesianAxis-CnkwfMH6.js";import"./Layer-Dsy9hdjd.js";import"./Text-79gK0PXl.js";import"./DOMUtils-D7Mb2TVV.js";import"./Label-Ckw8TK4e.js";import"./ZIndexLayer-B7kHgW_5.js";import"./types-7cnic641.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DHDZsGIH.js";import"./useAnimationId-DS8iKUy9.js";import"./Curve-CthZ8FHS.js";import"./step-DrWCufuT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CyFiY_e1.js";import"./Symbols-CR3OsKM1.js";import"./symbol-B22FKZ0A.js";import"./ActiveShapeUtils-BYIaqgjd.js";import"./RegisterGraphicalItemId-Ci8r16YO.js";import"./ErrorBarContext-CXDz_6c0.js";import"./GraphicalItemClipPath-BXEDANj9.js";import"./SetGraphicalItem-CcBXcnnP.js";import"./CSSTransitionAnimate-E1ExS8_T.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-MNUOYE5n.js";import"./uniqBy-B6b2iUeP.js";import"./iteratee-D9R9LmOY.js";import"./Cross-BoUPjysy.js";import"./Rectangle-1pwmvYkO.js";import"./Sector-Dj-Q3kNf.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
