import{R as r}from"./iframe-B3isOhIl.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DnabslPH.js";import{C as d}from"./CartesianGrid-radKLxBu.js";import{X as c}from"./XAxis-XCclqj4B.js";import{Y as y}from"./YAxis-DVwvC3Cs.js";import{S as h}from"./Scatter-DzKZzJD5.js";import{E as e}from"./ErrorBar-BkozO4TM.js";import{T as u}from"./Tooltip-CHFsfwA0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMqUbMYB.js";import"./zIndexSlice-B54EHMmU.js";import"./throttle-twRdBhxV.js";import"./index-l8cQaZi5.js";import"./index-BCE7BcH7.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CDjD_Xww.js";import"./isWellBehavedNumber-BqtgSWx4.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DsO3f3GY.js";import"./d3-scale-C7hQHBL4.js";import"./index-DTYhzia9.js";import"./index-DD7K-mQd.js";import"./renderedTicksSlice-RPn9Fn_C.js";import"./index-CTz2_SJP.js";import"./CartesianChart-B6c5jQVZ.js";import"./chartDataContext-CzVXhMmy.js";import"./CategoricalChart-BlqE1d7Y.js";import"./CartesianAxis-CpEPqood.js";import"./Layer-DDNmqfG8.js";import"./Text-BQG2REj-.js";import"./pageBackground-DLA1FFDB.js";import"./useId-BSb_3vlL.js";import"./useBackwardsCompatibleTheme-BnO74GVQ.js";import"./Label-CVF_BzUf.js";import"./ZIndexLayer-DVIMR7Fc.js";import"./types-BQEZ_W3y.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-D2IXZFhG.js";import"./useAnimationId-BArccDj7.js";import"./dataEntryStyles-COQULstw.js";import"./Curve-DIW9jtlG.js";import"./step-Dv6pVXah.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DPnQxXAI.js";import"./Symbols-CHRhA_xc.js";import"./symbol-C0zBHoL6.js";import"./ActiveShapeUtils-D_L17MSu.js";import"./ErrorBarContext-C1S_4TWD.js";import"./GraphicalItemClipPath-CFeguTu_.js";import"./SetGraphicalItem-4H3JYgxm.js";import"./useEffectiveDataKey-_8Y1huCA.js";import"./CSSTransitionAnimate-CHkWFl-6.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Bt2O-KAE.js";import"./uniqBy-CLwCtMAQ.js";import"./iteratee-TbnSWGh6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYpdfAgk.js";import"./Rectangle-CbypY_BX.js";import"./Sector-w4IeksJR.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
