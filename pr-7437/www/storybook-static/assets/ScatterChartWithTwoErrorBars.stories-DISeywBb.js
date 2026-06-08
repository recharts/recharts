import{R as r}from"./iframe-DhtJ7XT9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BTn77keo.js";import{C as d}from"./CartesianGrid-o5LT8FK2.js";import{X as c}from"./XAxis-J3EL6z9G.js";import{Y as y}from"./YAxis-B01PX68r.js";import{S as h}from"./Scatter-MCrSjaHo.js";import{E as e}from"./ErrorBar-Ct-G47WV.js";import{T as u}from"./Tooltip-CqpIeig5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DW50izWv.js";import"./zIndexSlice-Cyl_38qZ.js";import"./immer-C_Dt4QUB.js";import"./index-DTiOXBm6.js";import"./index-Dy3Dnjis.js";import"./get-DhiNYMWj.js";import"./resolveDefaultProps-BPtkQdI7.js";import"./isWellBehavedNumber-BgBeU-y_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C3B0n__O.js";import"./index-oGt5PMWE.js";import"./renderedTicksSlice-DPSLbyPQ.js";import"./axisSelectors-BpKxpkpF.js";import"./d3-scale-4zEsHVES.js";import"./string-B6fdYHAA.js";import"./CartesianChart-D-Z4Ej1T.js";import"./chartDataContext-Cf1gYJ5h.js";import"./CategoricalChart-BvhJOhQN.js";import"./CartesianAxis-D_A7dWIR.js";import"./Layer-nlXR0D_W.js";import"./Text-CqnnGvfO.js";import"./DOMUtils-BvTkEDRU.js";import"./Label-Dca6KvYU.js";import"./ZIndexLayer-Cs-V2L6r.js";import"./types-CLlZJjoC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D0rQfZQx.js";import"./useAnimationId-LwDoReja.js";import"./Curve-Dqu8WPkG.js";import"./step-CPd-nqqu.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CdUZzi6a.js";import"./Symbols-Cw6loTNS.js";import"./symbol-DQZ6Kdkf.js";import"./ActiveShapeUtils-BKy8UOMn.js";import"./RegisterGraphicalItemId-xETxoZW3.js";import"./ErrorBarContext-C_o2ElKr.js";import"./GraphicalItemClipPath-ClwgD8YP.js";import"./SetGraphicalItem-Cm2Uf41M.js";import"./CSSTransitionAnimate-CDC5S9kR.js";import"./useElementOffset-ZY1ZAY4p.js";import"./uniqBy-B0VZpdkS.js";import"./iteratee-DWrV7Ekf.js";import"./Cross-B692zx-L.js";import"./Rectangle-aI9UNPH3.js";import"./Sector-DKGhGDOA.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
