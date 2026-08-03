import{R as r}from"./iframe-zGdozCQh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CNChgtv0.js";import{C as d}from"./CartesianGrid-UhJmQ7sb.js";import{X as c}from"./XAxis-PIf9M3x3.js";import{Y as y}from"./YAxis-BF2yy0dt.js";import{S as h}from"./Scatter-vKYhuBrc.js";import{E as e}from"./ErrorBar--ctjLWmC.js";import{T as u}from"./Tooltip-CstuRqLn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-S6h0L_Sx.js";import"./zIndexSlice-CEf5y4wD.js";import"./throttle-DvYlmrcU.js";import"./index-Be9faTsQ.js";import"./index-BA1qNDAx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DGss-nCf.js";import"./isWellBehavedNumber-BpeZz3pN.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Byuc73NK.js";import"./index-lgjWstKk.js";import"./renderedTicksSlice-BCsCwo08.js";import"./axisSelectors-BKjuK8lH.js";import"./d3-scale-MsmZCvzu.js";import"./CartesianChart-C5t9uLew.js";import"./chartDataContext-cAMS_PG1.js";import"./CategoricalChart-BpCZjXPz.js";import"./CartesianAxis-7tIOhqG7.js";import"./Layer-C16c9YM8.js";import"./Text-BFD_FCb6.js";import"./DOMUtils-BJDR7s4v.js";import"./Label-Cn4tQISS.js";import"./ZIndexLayer-BxlIB-HR.js";import"./types-D_e406XV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DKHHji-l.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-jN_ADWTf.js";import"./useAnimationId-ZvRvsbh2.js";import"./Curve-4P44R3Ym.js";import"./step-B84DZizD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dpt0zkgP.js";import"./Symbols-BThXlhxZ.js";import"./symbol-BV0awSkH.js";import"./ActiveShapeUtils-9hROMAJM.js";import"./RegisterGraphicalItemId-COPie9tE.js";import"./ErrorBarContext-5XLz8TVO.js";import"./GraphicalItemClipPath-DyeI25HQ.js";import"./SetGraphicalItem-CU1gvNiL.js";import"./CSSTransitionAnimate-pfqJU50N.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DESkP0lj.js";import"./uniqBy-CNAGsW9V.js";import"./iteratee-BrMUzA5Z.js";import"./Cross-FBwxDX_O.js";import"./Rectangle-Cys6_Hxz.js";import"./Sector-DoePNCKc.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
