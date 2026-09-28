import{R as r}from"./iframe-B0ZE5sWn.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BDuX5Mh5.js";import{C as d}from"./CartesianGrid-DO5IH5o1.js";import{X as c}from"./XAxis-DxhJhgqY.js";import{Y as y}from"./YAxis-CIOXXUEI.js";import{S as h}from"./Scatter-BPjI24cP.js";import{E as e}from"./ErrorBar-ChYgpMxQ.js";import{T as u}from"./Tooltip-BXGXDnda.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_J70Kvy.js";import"./zIndexSlice-CRYD7Kkj.js";import"./throttle-D8bbTBc2.js";import"./index-DSEHXiiH.js";import"./index-CVaJFnop.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkU3qXBk.js";import"./isWellBehavedNumber-c-pVuqcz.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CmZ6PEb7.js";import"./d3-scale-BSLND3-m.js";import"./index-CUIhphZ8.js";import"./index-CrLSWODu.js";import"./renderedTicksSlice-2DEyX82P.js";import"./index-x3K7igv_.js";import"./CartesianChart-DEyr3eWS.js";import"./chartDataContext-C_Y-GQC5.js";import"./CategoricalChart-BW6OVLWc.js";import"./CartesianAxis-Cze39DWA.js";import"./Layer-B5uUwgDJ.js";import"./Text-hT0G9UKp.js";import"./DOMUtils-BtIen-TW.js";import"./useId-CIOpxIEE.js";import"./useBackwardsCompatibleTheme-C9hE96Ha.js";import"./Label-CDRY23He.js";import"./ZIndexLayer-COO7NwIi.js";import"./types-CvLOqkZ2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DDDw_SSj.js";import"./useAnimationId-xIPnyE2V.js";import"./Curve-DHsBKDuU.js";import"./step-CGkCO3y3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DrA9G3kc.js";import"./Symbols-CxhmSzKz.js";import"./symbol-aNk_0Slx.js";import"./ActiveShapeUtils-DW159Z87.js";import"./RegisterGraphicalItemId-DvHsssZk.js";import"./ErrorBarContext-DIoqVk5E.js";import"./GraphicalItemClipPath-CP8DwxaV.js";import"./SetGraphicalItem-AgCaMkoB.js";import"./useGraphicalItemIdentity-DKLRMGU-.js";import"./CSSTransitionAnimate-C-vXsTrV.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DRtIxZBy.js";import"./uniqBy-MZlHu-wY.js";import"./iteratee-2ZaQLBwO.js";import"./Cross-CjsxhdWW.js";import"./Rectangle-DRbsFhhP.js";import"./Sector-BQd_gsPl.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
