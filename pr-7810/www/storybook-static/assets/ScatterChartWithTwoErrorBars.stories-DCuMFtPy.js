import{R as r}from"./iframe-bFSgLdPD.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C6RA49_6.js";import{C as d}from"./CartesianGrid-K9ueJ6XL.js";import{X as c}from"./XAxis-Bw0rvwCt.js";import{Y as y}from"./YAxis-bnO7DvP4.js";import{S as h}from"./Scatter-42AOfALJ.js";import{E as e}from"./ErrorBar-C5Vp1tA5.js";import{T as u}from"./Tooltip-CF-fAa6p.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BY-4gTQl.js";import"./zIndexSlice-D5upya8o.js";import"./throttle-u-v2gKhP.js";import"./index-Dx35Wad7.js";import"./index-Bahp64_w.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dwo3cyUv.js";import"./isWellBehavedNumber-CxGT-_DT.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-jpWGPgQR.js";import"./d3-scale-DJKaPyhK.js";import"./index-CNz3Scut.js";import"./index-XM-eSlQm.js";import"./renderedTicksSlice-BcG7Kuye.js";import"./index-DzQCF7Uo.js";import"./CartesianChart-tk8PYi9A.js";import"./chartDataContext-DUbpY4V-.js";import"./CategoricalChart-DBfHTq3P.js";import"./CartesianAxis-CrKpg4w8.js";import"./Layer-B9YPmvvS.js";import"./Text-BFarDq7U.js";import"./DOMUtils-DvIkXWfS.js";import"./useId-CXlgEyVd.js";import"./useBackwardsCompatibleTheme-DabWIItU.js";import"./Label-CpotZ0Ob.js";import"./ZIndexLayer-B1KbNkPu.js";import"./types-D_jE8zAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C1Ji84_q.js";import"./useAnimationId-C-HuNRtZ.js";import"./Curve-C65UunW2.js";import"./step-my7iJLmD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CAqsdHhB.js";import"./Symbols-BtHF7FpM.js";import"./symbol-q9QkaXHr.js";import"./ActiveShapeUtils-Tc7vH23C.js";import"./RegisterGraphicalItemId-Ch2aaSbQ.js";import"./ErrorBarContext-BTgf3Fn1.js";import"./GraphicalItemClipPath-D0Gpm_sI.js";import"./SetGraphicalItem-BK4LEDF0.js";import"./useGraphicalItemIdentity-BF3Qfnje.js";import"./CSSTransitionAnimate-BDlXIC-0.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DgdUocH5.js";import"./uniqBy-C-W8pKck.js";import"./iteratee-BdAcVhmI.js";import"./Cross-DIq_YqZ2.js";import"./Rectangle-CtC0waIA.js";import"./Sector-doVGkRfa.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
