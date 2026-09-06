import{R as r}from"./iframe-DPI0lJK_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-5YYkLF0s.js";import{C as d}from"./CartesianGrid-YR-L210P.js";import{X as c}from"./XAxis-DfhI7JxR.js";import{Y as y}from"./YAxis-kaLm4VRJ.js";import{S as h}from"./Scatter-BJjH9Q1v.js";import{E as e}from"./ErrorBar-2RMkcNzI.js";import{T as u}from"./Tooltip-K2aBGj1S.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9a7fYH3g.js";import"./zIndexSlice-DaD71mPe.js";import"./throttle-Bk9jlA84.js";import"./index-Ccm70UBL.js";import"./index-CCmLOwTb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DO_KkPbE.js";import"./isWellBehavedNumber-BdpmJ8W0.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Cch7lJrg.js";import"./d3-scale-CLDzT5En.js";import"./index-DBJXL9j6.js";import"./index-DbAySsVp.js";import"./renderedTicksSlice-CXjOM9N8.js";import"./index-BlnGx-VT.js";import"./CartesianChart-BZZn2Q8U.js";import"./chartDataContext-BIJOOMrT.js";import"./CategoricalChart-DSBOz4pd.js";import"./CartesianAxis-Dt2jxgOw.js";import"./Layer-vYxXJLXx.js";import"./Text-C3fZ5G2B.js";import"./DOMUtils-CbbnwRqi.js";import"./useId-DHEE7UYl.js";import"./useBackwardsCompatibleTheme-BwpcPfQP.js";import"./Label-BtlIETXs.js";import"./ZIndexLayer-B60U3eb3.js";import"./types-BLM3hXld.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DshdCAFR.js";import"./useAnimationId-DHeK0bmN.js";import"./Curve-CU38nB5d.js";import"./step-V5YLtyHD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-COYOoKhj.js";import"./Symbols-Br1RuLoh.js";import"./symbol-Dg22-sA7.js";import"./ActiveShapeUtils-Bg0Vulpa.js";import"./RegisterGraphicalItemId-D_AIaJ8K.js";import"./ErrorBarContext-DcryNH3m.js";import"./GraphicalItemClipPath-D7kbGJpV.js";import"./SetGraphicalItem-CPTpIfRJ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DpTxF94d.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BEd0h0Or.js";import"./uniqBy-BrJUdere.js";import"./iteratee-Dj8b9wE-.js";import"./Cross-CspjEJg6.js";import"./Rectangle-DsDRrIHk.js";import"./Sector-C5YQzuCE.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
