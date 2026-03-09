import{e as r}from"./iframe-CE_u6gw7.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DTkALrzi.js";import{C as d}from"./CartesianGrid-Cc4ioig5.js";import{X as c}from"./XAxis-CLmHv_2r.js";import{Y as y}from"./YAxis-Bs0Yklvo.js";import{S as h}from"./Scatter-ClR1WZqS.js";import{E as e}from"./ErrorBar-DgCaZd28.js";import{T as u}from"./Tooltip-BZFuu6Lh.js";import{R as f}from"./RechartsHookInspector-Dl79BROd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6u2BPsd.js";import"./arrayEqualityCheck-DrWQ_zH1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B_XoAT-1.js";import"./immer-B4lMi1z1.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CxjNEs9W.js";import"./hooks-PVjuMKZG.js";import"./axisSelectors-BIg47fnU.js";import"./d3-scale-DJKgZxBp.js";import"./zIndexSlice-BphKS-MH.js";import"./renderedTicksSlice-PB7f1cWi.js";import"./CartesianChart-Cxn-kkBD.js";import"./chartDataContext-DcP55NXx.js";import"./CategoricalChart-8rYVrRQy.js";import"./CartesianAxis-CWIyTumo.js";import"./Layer-DWHUvPCA.js";import"./Text-CMYMNHqG.js";import"./DOMUtils-BxWdBvEt.js";import"./Label-B0RF5qp9.js";import"./ZIndexLayer-DmUZ0Rp1.js";import"./types-BY4GBGia.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DKt0JvWb.js";import"./Curve-VV1uNtUT.js";import"./step-CYcDECZ0.js";import"./tooltipContext-BjdUKaWd.js";import"./Symbols-BcL7Z710.js";import"./symbol-CRUhxG3e.js";import"./ActiveShapeUtils-bsQr1W6P.js";import"./isPlainObject-B1Oby2ns.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CJD0TK60.js";import"./useAnimationId-Ey9rpLv3.js";import"./Trapezoid-3IU8o-1x.js";import"./Sector-DrGniStY.js";import"./RegisterGraphicalItemId-CbUb9Psg.js";import"./ErrorBarContext-Cf8SIugI.js";import"./GraphicalItemClipPath-DEfFS43K.js";import"./SetGraphicalItem-afAcTt-s.js";import"./CSSTransitionAnimate-DtNhkKLT.js";import"./useElementOffset-CsNs9pCE.js";import"./uniqBy-B6So3ul3.js";import"./iteratee-D0NxlJV3.js";import"./Cross-Ci23TiHh.js";import"./index-BnKoqAo2.js";import"./ChartSizeDimensions-DBXaHco-.js";import"./OffsetShower-Dg42jmMc.js";import"./PlotAreaShower-Dg2xDHUw.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
