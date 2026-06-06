import{R as r}from"./iframe-C2BX5KlG.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Buj-8tlN.js";import{C as d}from"./CartesianGrid-IRNWuAYH.js";import{X as c}from"./XAxis-DVvf2cjO.js";import{Y as y}from"./YAxis-DyEK7c-9.js";import{S as h}from"./Scatter-DduXkP9e.js";import{E as e}from"./ErrorBar-B_gDceRq.js";import{T as u}from"./Tooltip-BNcp-BI8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D59koTZo.js";import"./zIndexSlice-CxPEcPAu.js";import"./immer-CvWW5aeq.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./get-CAfMQs0q.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./PolarUtils-CTnnDHZv.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./CartesianAxis-1gCJxPwk.js";import"./Layer-Y7EAuX4r.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./Label-BtHuGICT.js";import"./ZIndexLayer-DXknjapM.js";import"./types-Bzm0K4Xv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-a4bz34sF.js";import"./useAnimationId-By3GmLUa.js";import"./Curve-skm-derQ.js";import"./step-CaZe8v-k.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BK1l4duH.js";import"./Symbols-C8818rpd.js";import"./symbol-BrPwpKoT.js";import"./ActiveShapeUtils-8DISroY0.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./ErrorBarContext-Dxkwh2s-.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./CSSTransitionAnimate-kjRwsGQ6.js";import"./useElementOffset-DgvALgLL.js";import"./uniqBy-Dndb0Oy8.js";import"./iteratee-KOU-VhL7.js";import"./Cross-Cr_uS2gb.js";import"./Rectangle-DRmt8yX0.js";import"./Sector-BGIVy27E.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
