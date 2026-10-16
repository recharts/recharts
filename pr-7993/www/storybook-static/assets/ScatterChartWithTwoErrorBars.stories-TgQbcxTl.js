import{R as r}from"./iframe-CLlZb5WL.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DCg13z86.js";import{C as d}from"./CartesianGrid-BNeijhUJ.js";import{X as c}from"./XAxis-DBuW-REH.js";import{Y as y}from"./YAxis-BLqAl2VU.js";import{S as h}from"./Scatter-DOCYib8u.js";import{E as e}from"./ErrorBar-DbpTR_dc.js";import{T as u}from"./Tooltip-BnCF42xd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BEo8N9ka.js";import"./zIndexSlice-C-cLRtN4.js";import"./throttle--RnCkAem.js";import"./index-BdtMEJny.js";import"./index-DCzwXD2o.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CUiHCny8.js";import"./isWellBehavedNumber-BwmlGv0Y.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CGMVEYME.js";import"./d3-scale-ehl80MUm.js";import"./index-BYYf9lpv.js";import"./index-Do3i96_1.js";import"./renderedTicksSlice-DFlg4CzS.js";import"./index-BIUIHb15.js";import"./CartesianChart-CHomC56b.js";import"./chartDataContext-CuhB7l0S.js";import"./CategoricalChart-v23si-Wq.js";import"./CartesianAxis-CxGxQBTe.js";import"./Layer-BuwGQM2R.js";import"./Text-B9EUqwyc.js";import"./pageBackground-2CAg07jP.js";import"./useId-kcUEvBg4.js";import"./useBackwardsCompatibleTheme-Bfo5Qe72.js";import"./Label-yyQZOpZ1.js";import"./ZIndexLayer-Buoz0PG0.js";import"./types-nJd33CGk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BadvgHow.js";import"./useAnimationId-DDy-DT0X.js";import"./dataEntryStyles-DY-TrJ76.js";import"./Curve-ByIUmGlM.js";import"./step-CBmZmkcc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DM4tfHae.js";import"./Symbols-CQNoTje8.js";import"./symbol-CCuh3uUP.js";import"./ActiveShapeUtils-_yNwwF4x.js";import"./ErrorBarContext-Bdt01u1A.js";import"./GraphicalItemClipPath-DZFjU2Jb.js";import"./SetGraphicalItem-B9oKhYwJ.js";import"./useEffectiveDataKey-DITcK2E7.js";import"./CSSTransitionAnimate-C6OLpgUm.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Po4dJUCP.js";import"./uniqBy-Cz2J3eef.js";import"./iteratee-CPLYA7dn.js";import"./Cross-8FBDoCgf.js";import"./Rectangle-Coa83haY.js";import"./Sector-CUA1u2vb.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
