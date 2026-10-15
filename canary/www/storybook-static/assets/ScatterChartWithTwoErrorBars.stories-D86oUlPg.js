import{R as r}from"./iframe-CjAZXmgk.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-MQdRB9Y9.js";import{C as d}from"./CartesianGrid-Dv_tqLlh.js";import{X as c}from"./XAxis-XXYcX2bn.js";import{Y as y}from"./YAxis-CunYyPtb.js";import{S as h}from"./Scatter-YeE4f-fG.js";import{E as e}from"./ErrorBar-BaYA2qMQ.js";import{T as u}from"./Tooltip-BMETZi0y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C1tX5Xq9.js";import"./zIndexSlice-DZ6wU0kL.js";import"./throttle-aHpS-uJF.js";import"./index-CXqdHhNs.js";import"./index-D72PX-EN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B3dy_A6W.js";import"./isWellBehavedNumber-CbOfPh0Q.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DVMe8D3h.js";import"./d3-scale-Cdy5oRLL.js";import"./index-CgP4dGwF.js";import"./index-DoglCRE6.js";import"./renderedTicksSlice-DRvvM2hj.js";import"./index-jRxYEVM9.js";import"./CartesianChart-Bi3Tf3h4.js";import"./chartDataContext-Brj1C6P1.js";import"./CategoricalChart-ChU13xsV.js";import"./CartesianAxis-CNPqH8LV.js";import"./Layer-CMYvDThQ.js";import"./Text-VSZhuuVN.js";import"./pageBackground-CYQU4eM8.js";import"./useId-UofRKXbz.js";import"./useBackwardsCompatibleTheme-C26HYKO8.js";import"./Label-DnpXC07H.js";import"./ZIndexLayer-maUeBX7p.js";import"./types-BUTy-eCs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-BjWwonc4.js";import"./useAnimationId-BxmhNVS4.js";import"./dataEntryStyles-BHBmvArk.js";import"./Curve-BAdd7Cc7.js";import"./step-DNHn4BEu.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BjJ9NNny.js";import"./Symbols-uvqP7PSU.js";import"./symbol-DCSxYWeK.js";import"./ActiveShapeUtils-Lt_dXYUR.js";import"./ErrorBarContext-CzSreuRh.js";import"./GraphicalItemClipPath-uyo9nSDN.js";import"./SetGraphicalItem-D6iWzq9o.js";import"./useEffectiveDataKey-NmC8up5p.js";import"./CSSTransitionAnimate-CkiL-cOK.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B7ar2O_j.js";import"./uniqBy-DzMYEmyq.js";import"./iteratee-BZjhhQST.js";import"./Cross-Mi64MTa2.js";import"./Rectangle-Cg0Vumjf.js";import"./Sector-P4GUkmMC.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
