import{e as r}from"./iframe-But0a38P.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CD4pmF2b.js";import{C as d}from"./CartesianGrid-NrKmnmqB.js";import{X as c}from"./XAxis-BAXANk5N.js";import{Y as y}from"./YAxis-DG24jA9M.js";import{S as h}from"./Scatter-DtUKNwSt.js";import{E as e}from"./ErrorBar-9RQ5A6HP.js";import{T as u}from"./Tooltip-DDsbfsc5.js";import{R as f}from"./RechartsHookInspector-C5Pe1Yuk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PnZQcIU_.js";import"./arrayEqualityCheck-CYbCyNsP.js";import"./resolveDefaultProps-Bm0IZKgg.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-CpJdPTaX.js";import"./axisSelectors-C4f3hvSw.js";import"./zIndexSlice-BltV0wsp.js";import"./CartesianChart-Cwa6sqm_.js";import"./chartDataContext-BNuUAnVq.js";import"./CategoricalChart-B2oR5-3x.js";import"./CartesianAxis-C8-lm3EO.js";import"./Layer-afBuC6vE.js";import"./Text-CcNcGCTu.js";import"./DOMUtils-Du126Ke7.js";import"./Label-C7EMJJOB.js";import"./ZIndexLayer-BqdPe-lh.js";import"./types-BORgRnck.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BkpqDUuI.js";import"./Curve-B4UI-EDA.js";import"./tooltipContext-Bec1jSl9.js";import"./Symbols-D7e9GUiu.js";import"./ActiveShapeUtils-CpE5KD3c.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BVahoehG.js";import"./useAnimationId-DCy88jod.js";import"./Trapezoid-OOuCLK_Z.js";import"./Sector-BzzDDKvP.js";import"./RegisterGraphicalItemId-ByXCQiha.js";import"./ErrorBarContext-C-Z575OG.js";import"./GraphicalItemClipPath-YNxfKYWD.js";import"./SetGraphicalItem-BNXEXR48.js";import"./CSSTransitionAnimate-kA-pVehq.js";import"./useElementOffset-B8Ksl-QF.js";import"./iteratee-Dt4Ii8C3.js";import"./Cross-CSBpAIQj.js";import"./index-C00Mu2Jv.js";import"./ChartSizeDimensions-C_cjOMUb.js";import"./OffsetShower-CyyKWRo3.js";import"./PlotAreaShower-LOYVmRHK.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
