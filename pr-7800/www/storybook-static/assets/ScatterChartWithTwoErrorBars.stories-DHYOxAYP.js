import{R as r}from"./iframe-BnZHUF9X.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DQTERr-r.js";import{C as d}from"./CartesianGrid-m_0SQtv7.js";import{X as c}from"./XAxis-CRqJ7xsJ.js";import{Y as y}from"./YAxis-C5pkUNB3.js";import{S as h}from"./Scatter-B8-92WpX.js";import{E as e}from"./ErrorBar-Bg0wTwQe.js";import{T as u}from"./Tooltip-PPlXlT90.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ztAk4E9P.js";import"./zIndexSlice-ONbH2CMm.js";import"./throttle-DYWyyBD4.js";import"./index-DwyAhWM9.js";import"./index-Ck__QTcD.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CS-Gahor.js";import"./isWellBehavedNumber-Bn5kvLQQ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DSOG4fe3.js";import"./d3-scale-hcynQqTx.js";import"./index-ksKJqe-L.js";import"./index-BrEYDHSM.js";import"./renderedTicksSlice-CKzVsDw2.js";import"./index-CVXi-tnN.js";import"./CartesianChart-a0B_k2pR.js";import"./chartDataContext-CxsSdioC.js";import"./CategoricalChart-CSXyHKQE.js";import"./CartesianAxis-CnqpkBi3.js";import"./Layer-D4LkPBUk.js";import"./Text-CPiy7pnu.js";import"./DOMUtils-C0afjJmd.js";import"./useId-nraStDaz.js";import"./useBackwardsCompatibleTheme-CLSYsBSa.js";import"./Label-hOa9Xaax.js";import"./ZIndexLayer-CIa5rzLp.js";import"./types-CA0d64vS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Bxt2Mhs_.js";import"./useAnimationId-CuFFFGhn.js";import"./Curve-SQL-HHnd.js";import"./step-BHb_S66N.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CWuq_eDw.js";import"./Symbols-Cqtcw8wG.js";import"./symbol-i8QsJMqg.js";import"./ActiveShapeUtils-nVjPub3k.js";import"./RegisterGraphicalItemId-eknPVKNp.js";import"./ErrorBarContext-DNaI9-CH.js";import"./GraphicalItemClipPath-DFiiV3dA.js";import"./SetGraphicalItem-BS2ba3Ul.js";import"./useGraphicalItemIdentity-esDnMWhm.js";import"./CSSTransitionAnimate-FCsuH2es.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-TFsjHbYB.js";import"./uniqBy-BpF-KHKu.js";import"./iteratee-B0GexjSp.js";import"./Cross-DPVWnZFy.js";import"./Rectangle-Cx8oRFI-.js";import"./Sector-CsgGEWRb.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
