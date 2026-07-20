import{R as r}from"./iframe-CV15e7az.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DQEIsGeg.js";import{C as d}from"./CartesianGrid-BLV9M795.js";import{X as c}from"./XAxis-DLZMrQJA.js";import{Y as y}from"./YAxis-BGgz64vm.js";import{S as h}from"./Scatter-BcBS1oau.js";import{E as e}from"./ErrorBar-BN5ycvGh.js";import{T as u}from"./Tooltip-CTPM0Q4A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DDXDvVK3.js";import"./zIndexSlice-CjGsmEi1.js";import"./throttle-CHzP70vu.js";import"./index-93JCPKbn.js";import"./index-CVAE3ToH.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-C-NTBoJu.js";import"./isWellBehavedNumber-ieBgpEor.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BoM1UPcR.js";import"./index-BBpab-Hd.js";import"./renderedTicksSlice-fTbz0eeh.js";import"./axisSelectors-CI8TiAbs.js";import"./d3-scale-BchuFtEx.js";import"./CartesianChart-CvIpxzyO.js";import"./chartDataContext-BjsNRzum.js";import"./CategoricalChart-Cjf4C7PM.js";import"./CartesianAxis-C65u4Bt5.js";import"./Layer-D7-BURxK.js";import"./Text-DlLjmiQX.js";import"./DOMUtils-DvhMIjVB.js";import"./Label-CWZ2l2lA.js";import"./ZIndexLayer-D33L973J.js";import"./types-CWD3xXR9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-CwcBVWiQ.js";import"./useAnimationId-CAqTHHd1.js";import"./Curve-DJiquf3-.js";import"./step-BDRmzmOQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DGJzCTsW.js";import"./Symbols-Cnzawx9f.js";import"./symbol-D3b_j2Zz.js";import"./ActiveShapeUtils-D4G9dWIO.js";import"./RegisterGraphicalItemId-CTyQ2SsK.js";import"./ErrorBarContext-DbIUjAn0.js";import"./GraphicalItemClipPath-Cho1rLIH.js";import"./SetGraphicalItem-BMbMD-I2.js";import"./CSSTransitionAnimate-CaEs4gjX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CYeD-QhL.js";import"./uniqBy-C1LhrqqD.js";import"./iteratee-OgcCVfTc.js";import"./Cross-1cQgvQtS.js";import"./Rectangle-Bx-fAemw.js";import"./Sector-CHHGLCHU.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
