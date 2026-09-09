import{R as r}from"./iframe-ZxfiIiWi.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-nmvG5-Zz.js";import{C as d}from"./CartesianGrid-CSncOHrx.js";import{X as c}from"./XAxis-8M4LuTq0.js";import{Y as y}from"./YAxis-Ce1Cc64q.js";import{S as h}from"./Scatter-CKVKRPjz.js";import{E as e}from"./ErrorBar-Co5Oavf8.js";import{T as u}from"./Tooltip-DRa829Qg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-UKbeDROs.js";import"./zIndexSlice-By0bZmpT.js";import"./throttle-CfDYUS1N.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./isWellBehavedNumber-DX24GKSm.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DMQ84IJA.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./CartesianAxis-DHTAgCml.js";import"./Layer-SD6n1FzC.js";import"./Text-BxPrjmzo.js";import"./DOMUtils-CTcVRqQO.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./Label-C08NNQeO.js";import"./ZIndexLayer-MDZol7np.js";import"./types-DfGxKHCw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C7ik5li4.js";import"./useAnimationId-Bd76uFLI.js";import"./Curve-DPtlKYb4.js";import"./step-BSgEqbWI.js";import"./path-DyVhHtw_.js";import"./tooltipContext-w_X85LNY.js";import"./Symbols-c_F5rIiR.js";import"./symbol-De182CBu.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./ErrorBarContext-lXhQP1y7.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";import"./CSSTransitionAnimate-D8DbXfui.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CtPYwSuY.js";import"./uniqBy-BC78fxA5.js";import"./iteratee-CPoLBgS5.js";import"./Cross-CZB0PSDR.js";import"./Rectangle-XQRP3xav.js";import"./Sector-DztahhQ8.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
