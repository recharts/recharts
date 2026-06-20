import{R as r}from"./iframe-BT2fAbbB.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CZSGiVcE.js";import{C as d}from"./CartesianGrid-vXCbkaod.js";import{X as c}from"./XAxis-BoVnFGs6.js";import{Y as y}from"./YAxis-ChrnpRQE.js";import{S as h}from"./Scatter-D3hrXlyj.js";import{E as e}from"./ErrorBar-DMZWk0C4.js";import{T as u}from"./Tooltip-Bfhr633F.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdzpqzJC.js";import"./zIndexSlice-0bHXttbZ.js";import"./immer-Cs_HwjFQ.js";import"./index-CVxrCFbF.js";import"./index-Doyfjfw4.js";import"./get-C017lSC3.js";import"./resolveDefaultProps-C3R0rg6J.js";import"./isWellBehavedNumber-LZ0iz-Mn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BploPkwU.js";import"./index-DkhzDGLz.js";import"./renderedTicksSlice-CiEsNdJ7.js";import"./axisSelectors-BROcexci.js";import"./d3-scale-DCH5M94w.js";import"./CartesianChart-kqjinDmq.js";import"./chartDataContext-BrLfw6WI.js";import"./CategoricalChart-CkHyoyCb.js";import"./CartesianAxis-BeeS8R2V.js";import"./Layer-CwmO2g8o.js";import"./Text-Bl7vRhlA.js";import"./DOMUtils-BAS9saz0.js";import"./Label-BKr83VYg.js";import"./ZIndexLayer-vZErJXnS.js";import"./types-UgUXQeZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-B9eraKkz.js";import"./useAnimationId-B9b4cNZQ.js";import"./Curve-5RTqUT5x.js";import"./step-CJvEyRUy.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ftJi64Sx.js";import"./Symbols-CBCiu4_t.js";import"./symbol-B-UyWOPJ.js";import"./ActiveShapeUtils-aZ-707nn.js";import"./RegisterGraphicalItemId-rv099XyT.js";import"./ErrorBarContext-Dl3pruuO.js";import"./GraphicalItemClipPath-BtLAGmDV.js";import"./SetGraphicalItem-C_0DsyJ6.js";import"./CSSTransitionAnimate-DembIoV9.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DxfqGQMG.js";import"./uniqBy-CE3wruLK.js";import"./iteratee-JLoe2DiT.js";import"./Cross-DbWE21IQ.js";import"./Rectangle-BI2jxxVC.js";import"./Sector-BxOoJOCl.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
