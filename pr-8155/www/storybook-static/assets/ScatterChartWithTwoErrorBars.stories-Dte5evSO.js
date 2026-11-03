import{R as r}from"./iframe-BL3cqs0v.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-MHkDMg61.js";import{C as d}from"./CartesianGrid-CmYlMMvz.js";import{X as c}from"./XAxis-B7WybKMv.js";import{Y as y}from"./YAxis-SEmBBB09.js";import{S as h}from"./Scatter-UH-uyz7A.js";import{E as e}from"./ErrorBar-DsHOVftL.js";import{T as u}from"./Tooltip-ByxcRZ11.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-rjJlKnXT.js";import"./zIndexSlice-Bp5UfHlJ.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsbZKCB4.js";import"./throttle-CFuBzL7d.js";import"./index-Xo9PhSCx.js";import"./index-M6yM2tbI.js";import"./axisSelectors-Df4vXTv0.js";import"./polarAxisSelectors-BgHDg8wg.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DqPJ3v9v.js";import"./index-f4nmOf8P.js";import"./index-BMIlL233.js";import"./renderedTicksSlice-B58pSaah.js";import"./index-DXhLf1tc.js";import"./fillDefinitions-qZuxFB6J.js";import"./CartesianChart-CNDb6X0a.js";import"./ZIndexPortal-Bl3Dp53e.js";import"./CategoricalChart-BgL_VXFO.js";import"./CartesianAxis-Pi3KV9RP.js";import"./Layer-ClHABKOt.js";import"./Text-BwMtBvSi.js";import"./DOMUtils-BPtMjC5_.js";import"./ZIndexLayer-DgWY8WnK.js";import"./Label-DWi9EbQl.js";import"./types-CCfYuf_x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BS_WlUTo.js";import"./activeStyles-Dkfygl3t.js";import"./useAnimationId-BsAm0EGv.js";import"./dataEntryStyles-Bb2gxxNt.js";import"./Curve-DMXMUvkb.js";import"./step-CWn_2b8s.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DaNosn_S.js";import"./Symbols-0PXADWR-.js";import"./symbol-gdXBWq8v.js";import"./ActiveShapeUtils-LmfHqNO3.js";import"./ErrorBarContext-D_171Q9R.js";import"./SetGraphicalItem-D9rioP3I.js";import"./useEffectiveDataKey-BKKoQF-4.js";import"./CSSTransitionAnimate-ChjSN4ol.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cr1zyTGS.js";import"./uniqBy-QjbMwiHY.js";import"./iteratee-Ce9VvF2y.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BNm-sW4O.js";import"./Rectangle-a8ObDMaW.js";import"./Sector-BOhMEM58.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
