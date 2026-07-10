import{R as r}from"./iframe-DfxvUCoY.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CpEqI0_Z.js";import{C as d}from"./CartesianGrid-CEYliQmp.js";import{X as c}from"./XAxis-CDwQyzI6.js";import{Y as y}from"./YAxis-CHYqw0Yg.js";import{S as h}from"./Scatter-D-XboyRG.js";import{E as e}from"./ErrorBar-CqvQNLMA.js";import{T as u}from"./Tooltip-CQtlB1yQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DKrR_shM.js";import"./zIndexSlice-a1aajdGJ.js";import"./throttle-CY5RCzqb.js";import"./index-snxaCIu3.js";import"./index-BZyQtlPK.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DkGy9Xqs.js";import"./isWellBehavedNumber-By0pufN4.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CFU132wJ.js";import"./index-qAfe5-0Z.js";import"./renderedTicksSlice-D3ObCuZG.js";import"./axisSelectors-XkeOj5U9.js";import"./d3-scale-CsKfZS2s.js";import"./CartesianChart-BqCTaCca.js";import"./chartDataContext-DU69Yd0K.js";import"./CategoricalChart-B1rK5u_C.js";import"./CartesianAxis-BuUJ6A2m.js";import"./Layer-D1z9Z2fI.js";import"./Text-B6Z1U-Hi.js";import"./DOMUtils-DG22iS9R.js";import"./Label-Db_taApy.js";import"./ZIndexLayer-BYPoLUrq.js";import"./types-DZdy7jpS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DEpW04f-.js";import"./useAnimationId-D9BVxJGQ.js";import"./Curve-Bell45ld.js";import"./step-BKVqTwxS.js";import"./path-DyVhHtw_.js";import"./tooltipContext-IY9SJduJ.js";import"./Symbols-wpUxxR7U.js";import"./symbol-Dlj2CrYw.js";import"./ActiveShapeUtils-BCjs6TQU.js";import"./RegisterGraphicalItemId-uzM-_OM4.js";import"./ErrorBarContext-D2pK0104.js";import"./GraphicalItemClipPath-D5-jIAHW.js";import"./SetGraphicalItem-8Isqc2ZP.js";import"./CSSTransitionAnimate-BWBj5vw8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BEOZ1gXg.js";import"./uniqBy-Aa4pim-J.js";import"./iteratee-CZBfFxXi.js";import"./Cross-D06welhQ.js";import"./Rectangle-Dl1vC_ro.js";import"./Sector-BqiRLkjq.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
