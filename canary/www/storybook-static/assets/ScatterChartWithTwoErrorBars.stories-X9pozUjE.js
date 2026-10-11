import{R as r}from"./iframe-Cw8P3hI7.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B3GawY2f.js";import{C as d}from"./CartesianGrid-D4Wb-mhM.js";import{X as c}from"./XAxis-C7unxNtQ.js";import{Y as y}from"./YAxis-Bx4FAtcu.js";import{S as h}from"./Scatter-D6FhO15x.js";import{E as e}from"./ErrorBar-DSf14Tq4.js";import{T as u}from"./Tooltip-CPfSIqpr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvLLBked.js";import"./zIndexSlice-B6SrSko1.js";import"./throttle-DncpYTAI.js";import"./index-hRfftI4p.js";import"./index-eEhk_OBC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZK0CaSv.js";import"./isWellBehavedNumber--H7puUW6.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BdH8dG4d.js";import"./d3-scale-Col4_9gh.js";import"./index-DNE8XmUi.js";import"./index-7P4EwiS4.js";import"./renderedTicksSlice-0hkvmYyZ.js";import"./index-C3ZLhd8h.js";import"./CartesianChart-D3LhbEp8.js";import"./chartDataContext-BishGWYu.js";import"./CategoricalChart-D-nlxD4a.js";import"./CartesianAxis-D3FnIIlC.js";import"./Layer-B6WOVeAl.js";import"./Text-lKkTsdpR.js";import"./pageBackground-DDrjrzvM.js";import"./useId-QOeP90DB.js";import"./useBackwardsCompatibleTheme-CjwvaY8l.js";import"./Label-D8Ksb0Iz.js";import"./ZIndexLayer-BaFHUXpS.js";import"./types-Cja1RPDM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BMrFolB2.js";import"./useAnimationId-DEkX1hYZ.js";import"./dataEntryStyles-Bh3IKYdr.js";import"./Curve-H-3Cg0VG.js";import"./step-Owe5mevZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DQ2wWc1J.js";import"./Symbols-CHIg8QPs.js";import"./symbol-CGYd6bv1.js";import"./ActiveShapeUtils-DrIy4kMk.js";import"./ErrorBarContext-CRE-8iE1.js";import"./GraphicalItemClipPath-DihUhOiW.js";import"./SetGraphicalItem-CCZzXSeX.js";import"./useEffectiveDataKey-Dh15qlQo.js";import"./CSSTransitionAnimate-D-o9vdAS.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DWhd5hY4.js";import"./uniqBy-DaOwrvky.js";import"./iteratee-Co4kz4Ct.js";import"./Cross-CtfH2Hv1.js";import"./Rectangle-CJCELj9r.js";import"./Sector-ChKHNoHV.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
