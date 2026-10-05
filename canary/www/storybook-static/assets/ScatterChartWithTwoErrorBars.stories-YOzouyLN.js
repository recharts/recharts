import{R as r}from"./iframe-Xtjdy8K6.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CP0D7puN.js";import{C as d}from"./CartesianGrid-CpXgFykN.js";import{X as c}from"./XAxis-Dsuy05EW.js";import{Y as y}from"./YAxis-C0P2yrRK.js";import{S as h}from"./Scatter-CgDzav0s.js";import{E as e}from"./ErrorBar-C3tsHQ2E.js";import{T as u}from"./Tooltip-BaBPOWSY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLU1mxV-.js";import"./zIndexSlice-Ca3_di9O.js";import"./throttle-BJfO_UKv.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Boep7u7P.js";import"./isWellBehavedNumber-CZ785SIV.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CubJTdeO.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./CartesianAxis-CmHtOK-l.js";import"./Layer-FeyHjh4s.js";import"./Text-LNKD3nQn.js";import"./DOMUtils-BmMu5huz.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./Label-BQUl4kmN.js";import"./ZIndexLayer-B714zacF.js";import"./types-DxDlUmLu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CiMNNQac.js";import"./useAnimationId-CuSCtoXZ.js";import"./Curve-_q4HdrfF.js";import"./step-C43hkdfh.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DDJBG4_2.js";import"./Symbols-BCh1_Gtu.js";import"./symbol-CsXV0QLt.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./dataEntryStyles-BP_gmuxC.js";import"./CSSTransitionAnimate-BZ1Ea5Eb.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DRzU6VaK.js";import"./uniqBy-C0abLPcx.js";import"./iteratee-CxPVqHqK.js";import"./Cross-BOVKbuFH.js";import"./Rectangle-BLk0GJfh.js";import"./Sector-BUmVWEQm.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
