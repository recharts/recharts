import{R as r}from"./iframe-BGa_aXYV.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BQF9I4lE.js";import{C as d}from"./CartesianGrid-BkXJee70.js";import{X as c}from"./XAxis-CE3oHyxg.js";import{Y as y}from"./YAxis-CP1brurK.js";import{S as h}from"./Scatter-Clpx3Nvj.js";import{E as e}from"./ErrorBar-BzaAzjNR.js";import{T as u}from"./Tooltip-MhnN-294.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTlrgf4s.js";import"./zIndexSlice-Ck6l0OZs.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--MxbOSxe.js";import"./throttle-odPHgumR.js";import"./index-wG94lJw7.js";import"./index-Bi5RYh62.js";import"./axisSelectors-BhlTci4j.js";import"./polarAxisSelectors-DZZ_sV95.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-D32hxSnZ.js";import"./index-CCS8tdiB.js";import"./index-_XAYd-SQ.js";import"./renderedTicksSlice-D_6jJO7k.js";import"./index-DF81NAeA.js";import"./CartesianChart-BVZLzzem.js";import"./ZIndexPortal-yBnaKAUB.js";import"./CategoricalChart-C-tokN3T.js";import"./CartesianAxis-D2QFH6SB.js";import"./Layer-Bzj9T_Rp.js";import"./Text-mATLrig6.js";import"./pageBackground-BUMPEk7V.js";import"./ZIndexLayer-D3eS8Esu.js";import"./Label-Bzq01dK8.js";import"./types-BlkSdkM7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-dSe8emrx.js";import"./activeStyles-DZX2Soqz.js";import"./useAnimationId-BY6DYNe9.js";import"./dataEntryStyles-3sm9ZLw4.js";import"./Curve-yqHv3532.js";import"./step-Bk4v6FYF.js";import"./path-DyVhHtw_.js";import"./tooltipContext-rNLAi3ah.js";import"./Symbols-D-n9Z7lT.js";import"./symbol-CZaSDg5i.js";import"./ActiveShapeUtils-Luuswf_P.js";import"./ErrorBarContext-DCAq7oKy.js";import"./SetGraphicalItem-Ds0lF9cJ.js";import"./useEffectiveDataKey-D5yK2eiQ.js";import"./CSSTransitionAnimate-_lW_T0IZ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-PZh3tzwx.js";import"./uniqBy-BD2wLUuV.js";import"./iteratee-GuFU32s6.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D3L1ZFfF.js";import"./Rectangle-BNMIfASl.js";import"./Sector-hq76lirF.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
