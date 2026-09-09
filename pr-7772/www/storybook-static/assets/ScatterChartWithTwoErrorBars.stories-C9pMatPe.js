import{R as r}from"./iframe-DOP-jAxw.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Em05uZTD.js";import{C as d}from"./CartesianGrid-B6zlt5Uu.js";import{X as c}from"./XAxis-DUVFq7Gr.js";import{Y as y}from"./YAxis-Db4GFYrx.js";import{S as h}from"./Scatter-NPXj_rCy.js";import{E as e}from"./ErrorBar-DJACD92P.js";import{T as u}from"./Tooltip-QnPg_YT4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Q1Jm5bKD.js";import"./zIndexSlice-iZLT4mgM.js";import"./throttle-D7DQi97E.js";import"./index-CCuF4-CL.js";import"./index-zAmCVOdn.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C42OrRbv.js";import"./isWellBehavedNumber-aeEmpyhq.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B_fxjvJU.js";import"./d3-scale-DzSw552P.js";import"./index-bWqnTni2.js";import"./index-DtoMVaOV.js";import"./renderedTicksSlice-CNec-Jhj.js";import"./index-D_24CIxZ.js";import"./CartesianChart-PeHZ3LWB.js";import"./chartDataContext-CuKpjHMI.js";import"./CategoricalChart-CByA_zEa.js";import"./CartesianAxis-B-kSgpVr.js";import"./Layer-CsLYPkNS.js";import"./Text-BM4OLvWb.js";import"./DOMUtils-hJnM7D4i.js";import"./useId-DriqVEjQ.js";import"./useBackwardsCompatibleTheme-lpZr1fce.js";import"./Label-BQxh1muY.js";import"./ZIndexLayer-CERsRXD7.js";import"./types-Bd_t3tQp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D09OLiJi.js";import"./useAnimationId-DvdWCYQm.js";import"./Curve-_tgXMq7w.js";import"./step-DlXDgVUU.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DiVLQMla.js";import"./Symbols-DRTOXkwu.js";import"./symbol-5Hp0bSW3.js";import"./ActiveShapeUtils-DE-7R1j_.js";import"./RegisterGraphicalItemId-a8qjrkCj.js";import"./ErrorBarContext-3aBgegVQ.js";import"./GraphicalItemClipPath-BIJRZhz8.js";import"./SetGraphicalItem-BdxyruZp.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DUf2QAsT.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-xs82StaJ.js";import"./uniqBy-BH46jqOd.js";import"./iteratee-B8SE9EXK.js";import"./Cross-R415-PMR.js";import"./Rectangle-wYU6J8iP.js";import"./Sector-SOWdtCxs.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
