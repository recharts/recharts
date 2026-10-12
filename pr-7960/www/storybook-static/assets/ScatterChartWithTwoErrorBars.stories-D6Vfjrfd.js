import{R as r}from"./iframe-BqTe2UMP.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CN8ygyOD.js";import{C as d}from"./CartesianGrid-CCujIa1V.js";import{X as c}from"./XAxis-BFKvA3gZ.js";import{Y as y}from"./YAxis-D_xFHHwS.js";import{S as h}from"./Scatter-DX68PaqL.js";import{E as e}from"./ErrorBar-aByGBKhf.js";import{T as u}from"./Tooltip-CbwZ0Doe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWqjI8ow.js";import"./zIndexSlice-GTynhOsS.js";import"./throttle-PmeTbXwQ.js";import"./index-CM2oe_lg.js";import"./index-CG7aEEME.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1c7_8SpD.js";import"./isWellBehavedNumber-BqrJeuDz.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-lM2vG64O.js";import"./d3-scale-DWaVLjKI.js";import"./index-DCgfcJWI.js";import"./index-CwY_lGiF.js";import"./renderedTicksSlice-CNIelq8e.js";import"./index-2KC7EUkH.js";import"./CartesianChart-BNeCXpfh.js";import"./chartDataContext-Bf8mKNm_.js";import"./CategoricalChart-D6_cM4w9.js";import"./CartesianAxis-DbBZeFb1.js";import"./Layer-BZqCsxZY.js";import"./Text-DWSqExsy.js";import"./pageBackground-CkUHzRfu.js";import"./useId-C8HkpFIm.js";import"./useBackwardsCompatibleTheme-B_ORpNqj.js";import"./Label-C4tYPzVx.js";import"./ZIndexLayer-CvPcnuan.js";import"./types-YR4m-55g.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-A8WZQcUr.js";import"./useAnimationId-D1_C1lZo.js";import"./dataEntryStyles-jb_0UPIc.js";import"./Curve-DW1_vQIY.js";import"./step-BBQ8ZX6a.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Deo6GrPh.js";import"./Symbols-C4ho6aIk.js";import"./symbol-C3UkLHRc.js";import"./ActiveShapeUtils-gWmw8qk4.js";import"./ErrorBarContext-D6ZWbiIN.js";import"./GraphicalItemClipPath-B2ZrWFWd.js";import"./SetGraphicalItem-BGuonubA.js";import"./useEffectiveDataKey-x1RSS2yk.js";import"./CSSTransitionAnimate-CR_HNuwN.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DTVIROjS.js";import"./uniqBy-BdijKGgA.js";import"./iteratee-quGzdlB-.js";import"./Cross-DRYIYwuF.js";import"./Rectangle-D8NPhxuN.js";import"./Sector-Dd_Xo6kW.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
