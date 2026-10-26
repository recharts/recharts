import{R as r}from"./iframe-C-3ZsddJ.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Bekwn-_O.js";import{C as d}from"./CartesianGrid-DaW9DFl3.js";import{X as c}from"./XAxis-ZaXNF9D9.js";import{Y as y}from"./YAxis-D4KLVqJs.js";import{S as h}from"./Scatter-DxlnOzRR.js";import{E as e}from"./ErrorBar-DHhVc427.js";import{T as u}from"./Tooltip-iM448N5g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-wMqgqvbl.js";import"./zIndexSlice-CznyzfFG.js";import"./throttle-B2MnXNQi.js";import"./index-DEbaciLb.js";import"./index--fwLI_yC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4qg6ukUo.js";import"./isWellBehavedNumber-CP7J40iL.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BJ1i-OvH.js";import"./d3-scale-DV_TqrZd.js";import"./index-CcPqlA3d.js";import"./index-CyMO1IzJ.js";import"./renderedTicksSlice-ICI7wfEt.js";import"./index-ClJuK0WQ.js";import"./CartesianChart-COKBOn7U.js";import"./chartDataContext-BcbpFEXE.js";import"./CategoricalChart-sAB9uLf6.js";import"./CartesianAxis-BdVIPGTu.js";import"./Layer-Cx38LgLI.js";import"./Text-gCPwfBz1.js";import"./pageBackground-Bkm5uuC-.js";import"./useId-BDuxZkB8.js";import"./useBackwardsCompatibleTheme-X6WlIU0M.js";import"./Label-DKMse05f.js";import"./ZIndexLayer-G1m3PEiN.js";import"./dataEntryStyles-CEJLUdCX.js";import"./types-DCBC51xd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-L7DCCiqF.js";import"./useAnimationId-SiWxI2IO.js";import"./Curve-W1QfAwKp.js";import"./step-DTUF9rZD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DIAgqQux.js";import"./Symbols-OLVEorTH.js";import"./symbol-CerJsWCH.js";import"./ActiveShapeUtils-DDCkf_lK.js";import"./RegisterGraphicalItemId-CDIE6wwE.js";import"./ErrorBarContext-CDKXoSuu.js";import"./SetGraphicalItem-BIMysWhn.js";import"./useEffectiveDataKey-B7scz4IZ.js";import"./CSSTransitionAnimate-VK8P4aOQ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BHApDFqY.js";import"./uniqBy-B15nsN6v.js";import"./iteratee-iSL6B2R2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-B6l53nAc.js";import"./Rectangle-BFI7v7xW.js";import"./Sector-CGlTysj4.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
