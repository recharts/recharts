import{R as r}from"./iframe-ZXtfb4yD.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CV5Ozw2F.js";import{C as d}from"./CartesianGrid-C4JgCHFT.js";import{X as c}from"./XAxis-DLWMZedb.js";import{Y as y}from"./YAxis-CpZ4maZ2.js";import{S as h}from"./Scatter-CjaWAhkP.js";import{E as e}from"./ErrorBar-Cl2onjLV.js";import{T as u}from"./Tooltip-cOzwM1Wl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DeOd3865.js";import"./zIndexSlice-BYWdHlTe.js";import"./throttle-UQol_oMR.js";import"./index-SIPxA2ka.js";import"./index-Bo6RSdvh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xIIdHmm9.js";import"./isWellBehavedNumber-DxKoG7Ba.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B-7UnAhK.js";import"./d3-scale-CLk4WDw9.js";import"./index-BxR6IAN7.js";import"./index-CZ8YJbDi.js";import"./renderedTicksSlice-D1lcrg0m.js";import"./index-Bj13Gnlq.js";import"./CartesianChart-yzowS7n9.js";import"./chartDataContext-Vgws8ib_.js";import"./CategoricalChart-DidrDbM3.js";import"./CartesianAxis-DsWhwIZU.js";import"./Layer-BNcbfxWn.js";import"./Text-DV_FynOi.js";import"./DOMUtils-C0C9d7iI.js";import"./useId-0Gl7JyMf.js";import"./useBackwardsCompatibleTheme-C4wl67U3.js";import"./Label-C_XzWtLw.js";import"./ZIndexLayer-Ck2jrevN.js";import"./types-D_Nat2yf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-sQcK0Cnf.js";import"./useAnimationId-BzcgW_0X.js";import"./Curve-DVYTdeVn.js";import"./step-CUKBWZW0.js";import"./path-DyVhHtw_.js";import"./tooltipContext-1PumGPBU.js";import"./Symbols-DhJA3WlI.js";import"./symbol-DqJrO93a.js";import"./ActiveShapeUtils-C4fIJN7R.js";import"./RegisterGraphicalItemId-BLTTAUNU.js";import"./ErrorBarContext-CM-xdG0H.js";import"./GraphicalItemClipPath-Du8p1Oou.js";import"./SetGraphicalItem-QMczFyB9.js";import"./useGraphicalItemIdentity-DEuXq7FQ.js";import"./CSSTransitionAnimate-DFb0EWOM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D-a4c_KO.js";import"./uniqBy-CHRSp9IT.js";import"./iteratee-CkKkD8L0.js";import"./Cross-DUw-sG1Q.js";import"./Rectangle-Bc1PlKQQ.js";import"./Sector-Bluxtbag.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
