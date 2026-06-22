import{R as r}from"./iframe-CvYyRmMb.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BL89aCiv.js";import{C as d}from"./CartesianGrid-CglKu9Xk.js";import{X as c}from"./XAxis-3reDaDaV.js";import{Y as y}from"./YAxis-CjttnAc1.js";import{S as h}from"./Scatter-DD0tS2_Q.js";import{E as e}from"./ErrorBar-CAlJqsPI.js";import{T as u}from"./Tooltip-Dx8e65f1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BcqH_-Dr.js";import"./zIndexSlice-Cp8J06te.js";import"./immer-DxglGVhE.js";import"./index-ximmRSZs.js";import"./index-GLYrDd_3.js";import"./get-CIMqXaai.js";import"./resolveDefaultProps-VEZFy5tu.js";import"./isWellBehavedNumber-Lw6v0aAh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D24-ZTWt.js";import"./index-BDFNdDeq.js";import"./renderedTicksSlice-BWK4MGTQ.js";import"./axisSelectors-C-wRbz-D.js";import"./d3-scale-ZyzwHhuQ.js";import"./CartesianChart-BwCKHjXt.js";import"./chartDataContext-WmbcVDkE.js";import"./CategoricalChart-BVRGiY0N.js";import"./CartesianAxis-Be4--iUh.js";import"./Layer-C5boFLOM.js";import"./Text-B2fcvIhU.js";import"./DOMUtils-Bkzksssp.js";import"./Label-CYZiU-dh.js";import"./ZIndexLayer-BRD83X3W.js";import"./types-Zq1Yq0zW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C6-g87vu.js";import"./useAnimationId-BRj_sN3I.js";import"./Curve-B0ipnk9C.js";import"./step-CfQihZ4L.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CHMPJv0A.js";import"./Symbols-BxgPZ6x6.js";import"./symbol-CZiTVtyO.js";import"./ActiveShapeUtils-DSfdlNCJ.js";import"./RegisterGraphicalItemId-wnXP5bti.js";import"./ErrorBarContext-CaDNtEdt.js";import"./GraphicalItemClipPath-b7ayD98P.js";import"./SetGraphicalItem-Bggld1CO.js";import"./CSSTransitionAnimate-BzKz591H.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CAsgb7km.js";import"./uniqBy-xgluxroo.js";import"./iteratee-B7aRbMAg.js";import"./Cross-C3DShcB5.js";import"./Rectangle-BpNkhbV-.js";import"./Sector-BTRwvM-7.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
