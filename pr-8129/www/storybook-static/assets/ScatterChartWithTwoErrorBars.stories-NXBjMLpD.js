import{R as r}from"./iframe-BvC_nX2I.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B2ERbE_1.js";import{C as d}from"./CartesianGrid-SNfuGx3f.js";import{X as c}from"./XAxis-DJblgq_P.js";import{Y as y}from"./YAxis-Dnd7ECK6.js";import{S as h}from"./Scatter-CfqPA0po.js";import{E as e}from"./ErrorBar-Cv7whadK.js";import{T as u}from"./Tooltip-DVnkgbDa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YXBLwPUp.js";import"./zIndexSlice-Deux2KLj.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DT691zhh.js";import"./throttle-CirueaOA.js";import"./index-CbvgqQkR.js";import"./index-C-6557Zz.js";import"./axisSelectors-D1Op89Ra.js";import"./polarAxisSelectors-Bv7-VLAe.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-oQwuANVt.js";import"./index-CVNtrs8_.js";import"./index-Cthsl8Eg.js";import"./renderedTicksSlice-Bg6jRWvt.js";import"./index-C59oTpld.js";import"./CartesianChart-C1otsVa1.js";import"./ZIndexPortal-BgIvcEBP.js";import"./CategoricalChart-BNHZ2U_e.js";import"./CartesianAxis-CcuHoEVr.js";import"./Layer-BgbmxeTS.js";import"./Text-3ao1DtcI.js";import"./DOMUtils-DlV8uPCF.js";import"./pageBackground-BygNKisP.js";import"./ZIndexLayer-CJcw2vh_.js";import"./Label-CNqVbewr.js";import"./types-CcK0_WR7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CZGVPI6N.js";import"./LabelList-CRaDVB5f.js";import"./activeStyles-D5yKyFeN.js";import"./useAnimationId-CfSQBeBZ.js";import"./dataEntryStyles-DH8AExSk.js";import"./Curve-Dwq2onbG.js";import"./step-MgrEs1-v.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CZ7EZjaJ.js";import"./Symbols-DHQWc_0k.js";import"./symbol-BOIFwd4y.js";import"./ActiveShapeUtils-CHw2ZkCc.js";import"./ErrorBarContext-p-ctGfT-.js";import"./SetGraphicalItem-P596Nxos.js";import"./useEffectiveDataKey-B9rISrD-.js";import"./CSSTransitionAnimate-C2p1JpZM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C7rqP3X3.js";import"./uniqBy-BF0sKSrQ.js";import"./iteratee-B6a_e8WW.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DzDfYPf9.js";import"./Rectangle-CaXkiWJ0.js";import"./Sector-Dsg_Vl6t.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
