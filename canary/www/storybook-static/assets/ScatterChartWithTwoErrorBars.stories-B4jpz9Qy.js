import{R as r}from"./iframe-Knpgl7bH.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DzauSQ0a.js";import{C as d}from"./CartesianGrid-BgJ1w8c3.js";import{X as c}from"./XAxis-C-pGSkx8.js";import{Y as y}from"./YAxis-BPwWglGS.js";import{S as h}from"./Scatter-CfQdYf_1.js";import{E as e}from"./ErrorBar-0vUqRrmY.js";import{T as u}from"./Tooltip-CLC2K7Jb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-RFuLYV8r.js";import"./zIndexSlice-D_JvDPdC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-E9uQbFMh.js";import"./throttle-CxSZxpUT.js";import"./index-CMcZZbu7.js";import"./index-flTgedm9.js";import"./axisSelectors-DzWAhEt3.js";import"./polarAxisSelectors-_ossNi2Y.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-loN--ZL0.js";import"./index-DBy5LZ5m.js";import"./index-CtQ1gC2H.js";import"./renderedTicksSlice-BhGylDYr.js";import"./index-DCjquko5.js";import"./fillDefinitions-D-i4EmzR.js";import"./CartesianChart-BRDQdhrJ.js";import"./chartDataContext-DMJoTbMZ.js";import"./CategoricalChart-BP24IEWh.js";import"./CartesianAxis-d_ZDtRCQ.js";import"./Layer-BPxKddK_.js";import"./Text-2mzzLjyY.js";import"./ZIndexLayer-B7sLboyu.js";import"./Label-CUqt0NPv.js";import"./types-TSpqzzom.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CP1LR4vd.js";import"./activeStyles-Dx-Bb5mv.js";import"./useAnimationId-sq4gt-Rn.js";import"./Curve-CoppqT_1.js";import"./step-CX6BMVFF.js";import"./path-BBMZd4YL.js";import"./tooltipContext-BYlYvGUW.js";import"./Symbols-DbPd2MPF.js";import"./symbol-D5IcYaCj.js";import"./ActiveShapeUtils-DmSfMRR5.js";import"./ErrorBarContext-CNCcQkpF.js";import"./SetGraphicalItem-CJ2jMQXm.js";import"./useEffectiveDataKey-DbJ28nvU.js";import"./CSSTransitionAnimate-CN8AaVQ5.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-lkTznI83.js";import"./uniqBy-BRZL2BBs.js";import"./iteratee-CHAMY_xX.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CFbCQW-3.js";import"./Rectangle-DSFuXVLV.js";import"./Sector-J3mzscDv.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
