import{R as r}from"./iframe-Bcl-Wsua.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Ba42IopH.js";import{C as d}from"./CartesianGrid-B2dFGKDr.js";import{X as c}from"./XAxis-BkzTF5vO.js";import{Y as y}from"./YAxis-DiEiYw2x.js";import{S as h}from"./Scatter-DRH3TgEZ.js";import{E as e}from"./ErrorBar-CtqVT4tR.js";import{T as u}from"./Tooltip-f5YOsvaZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAZxuN02.js";import"./zIndexSlice-CAQaUmZK.js";import"./throttle-ByTEOgqW.js";import"./index-Byo_Z8h8.js";import"./index-CiCiyWr1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dz58eYC6.js";import"./isWellBehavedNumber-DyceyyjX.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-HkZtvUb3.js";import"./d3-scale-Bz3uBv2F.js";import"./index-YOpejnVN.js";import"./index-6jgft-oG.js";import"./renderedTicksSlice-BjEraSyi.js";import"./index-D0zdUyje.js";import"./CartesianChart-5huH0yXB.js";import"./chartDataContext-LpcG4P9k.js";import"./CategoricalChart-xwTlxCLL.js";import"./CartesianAxis-C4G_M4Jp.js";import"./Layer-DZWwUS0u.js";import"./Text-82Vb94kC.js";import"./DOMUtils-f-jZlskf.js";import"./useId-B3g5LtRX.js";import"./useBackwardsCompatibleTheme-hNwFldyo.js";import"./Label-CKR6MZGL.js";import"./ZIndexLayer-j6jNc8g-.js";import"./types-DyxZGeRY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Du4sNDn0.js";import"./useAnimationId-CLfnnxh1.js";import"./Curve-nBoa-bSt.js";import"./step-D_84ehuK.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BDCJdzM-.js";import"./Symbols-BPHmHU6k.js";import"./symbol-CCVwldng.js";import"./ActiveShapeUtils-BI8YD_7c.js";import"./RegisterGraphicalItemId-gwGVCH_O.js";import"./ErrorBarContext-Yi3ZPeq6.js";import"./GraphicalItemClipPath-w0-QNnMD.js";import"./SetGraphicalItem-Bv_ZKENs.js";import"./useGraphicalItemIdentity-BOUOyfoU.js";import"./CSSTransitionAnimate-CNcyDP7_.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BS3Hp3MX.js";import"./uniqBy-BBRqX64r.js";import"./iteratee-BOTGeGNB.js";import"./Cross-CQH5U3p4.js";import"./Rectangle-Cc97JTbq.js";import"./Sector-Be7wcIe7.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
