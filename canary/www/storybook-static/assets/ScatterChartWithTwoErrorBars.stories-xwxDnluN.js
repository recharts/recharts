import{R as r}from"./iframe-3h349717.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D8uOgIk5.js";import{C as d}from"./CartesianGrid-BTlx-uaS.js";import{X as c}from"./XAxis-Bw5xxXY1.js";import{Y as y}from"./YAxis-tMbI8NgR.js";import{S as h}from"./Scatter-DTxesoPC.js";import{E as e}from"./ErrorBar-cd6lvod3.js";import{T as u}from"./Tooltip-zSQBQnXA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CUULyex2.js";import"./zIndexSlice-BzHS8zt2.js";import"./throttle-BlVp8HkD.js";import"./index-oX4N-tXs.js";import"./index-BRv0H6zV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJBK0DUa.js";import"./isWellBehavedNumber-D3Yo8GQB.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CTBJiowg.js";import"./d3-scale-CLmVRDrj.js";import"./index-CsFq6h3I.js";import"./index-BbUWtFl0.js";import"./renderedTicksSlice-6SwbUeKS.js";import"./index-Bo8dIp4D.js";import"./CartesianChart-CFmcy4vR.js";import"./chartDataContext-Chtbdmd2.js";import"./CategoricalChart-Lt1wUyHP.js";import"./CartesianAxis-DyDK0v82.js";import"./Layer-BPJ6tmqq.js";import"./Text-DVnErtU5.js";import"./DOMUtils--0390Y1X.js";import"./useId-Ced_CVYT.js";import"./useBackwardsCompatibleTheme-BYrRaigu.js";import"./Label-Dtiya_7s.js";import"./ZIndexLayer-BTc3Y12q.js";import"./types-D64Ekh4L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DOjhrzsE.js";import"./useAnimationId-BzBuvVRV.js";import"./Curve-Bi3KcdO0.js";import"./step-DOsNm07K.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bjerhbx-.js";import"./Symbols-CL0JFPKo.js";import"./symbol-BwOY_zgB.js";import"./ActiveShapeUtils-C78HHNIc.js";import"./RegisterGraphicalItemId-Byw__Yoi.js";import"./ErrorBarContext-BtoBWPHm.js";import"./GraphicalItemClipPath-C24GD_Bh.js";import"./SetGraphicalItem-wGbg7zCS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C2l7j_N2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DNp2u43t.js";import"./uniqBy-C8soMpcc.js";import"./iteratee-Dt6uUIOF.js";import"./Cross-Dk7k_2l8.js";import"./Rectangle-tvaTM7i9.js";import"./Sector-MO_FaW_H.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
