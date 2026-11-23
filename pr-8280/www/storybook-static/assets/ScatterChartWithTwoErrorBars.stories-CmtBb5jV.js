import{R as r}from"./iframe-B3Q9BieZ.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DFuXblAf.js";import{C as d}from"./CartesianGrid-DTELdrvM.js";import{X as c}from"./XAxis-D2lT-EVr.js";import{Y as y}from"./YAxis-DvVjGCkX.js";import{S as h}from"./Scatter-sexcKOpD.js";import{E as e}from"./ErrorBar-DnABgCdh.js";import{T as u}from"./Tooltip-C3uuRk_U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cfrbgio_.js";import"./zIndexSlice-sqFd1bzt.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BfktPE_A.js";import"./throttle-D7B_fzZD.js";import"./index-BCJi3GJg.js";import"./index-vYqwVqCg.js";import"./axisSelectors-DvTAFEOk.js";import"./polarAxisSelectors-DPwJ5LbZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C94aTEcE.js";import"./index-DcskzPeY.js";import"./index-orRyden8.js";import"./renderedTicksSlice-1Ib_b5H5.js";import"./index-CII0l-xa.js";import"./fillDefinitions-DFJ8_pt7.js";import"./CartesianChart-Cr3Ujgb_.js";import"./chartDataContext-BZMC5ZNk.js";import"./CategoricalChart-DW1p8FyC.js";import"./CartesianAxis-COGs4upa.js";import"./Layer-CM6IL6TI.js";import"./Text-vJxvkBMX.js";import"./ZIndexLayer-D273i2uL.js";import"./Label-DqBOaUXK.js";import"./types-D4j33x05.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DvvOVUEP.js";import"./activeStyles-BLYIXqri.js";import"./useAnimationId-2VJaNjeA.js";import"./Curve-1WEPDMRv.js";import"./step-CLCxHiga.js";import"./path-BBMZd4YL.js";import"./tooltipContext-DrUQbg9p.js";import"./Symbols-CWY2nbRa.js";import"./symbol-MUjZPdnP.js";import"./ActiveShapeUtils-axs2zJFe.js";import"./ErrorBarContext-B613I2F5.js";import"./SetGraphicalItem-B51ay4rQ.js";import"./useEffectiveDataKey-CELfbHpr.js";import"./CSSTransitionAnimate-CST0ogN-.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BjLkxFtO.js";import"./uniqBy-BY6j9O5X.js";import"./iteratee-CK_fQl9o.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D4GVRzZw.js";import"./Rectangle-uE9FLPYH.js";import"./Sector-C3a2lDVG.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
