import{e as r}from"./iframe-DLKusaH2.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-Czb9OF7F.js";import{C as d}from"./CartesianGrid-Dh5MSo5g.js";import{X as c}from"./XAxis-BUV3YVxT.js";import{Y as y}from"./YAxis-BL7gWkiR.js";import{S as h}from"./Scatter-DgTNZdX6.js";import{E as e}from"./ErrorBar-BnR20Zb3.js";import{T as u}from"./Tooltip-BTu9VEAI.js";import{R as f}from"./RechartsHookInspector-twmg_15g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CJ9yMdSa.js";import"./arrayEqualityCheck-OSXbFffx.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CDQxtKgJ.js";import"./immer-DopQgQur.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DY64JRGf.js";import"./hooks-BDR2OTLs.js";import"./axisSelectors-DmwBGoOF.js";import"./d3-scale-D-d_ip1o.js";import"./zIndexSlice-DwCBvGVu.js";import"./renderedTicksSlice-CLJGAcv7.js";import"./CartesianChart-BJXvgRi8.js";import"./chartDataContext-DetDLZ8r.js";import"./CategoricalChart-CYNzwdSP.js";import"./CartesianAxis-CLffz-s6.js";import"./Layer-CRYoZDBs.js";import"./Text-BOg1Bx7_.js";import"./DOMUtils-BHhU0voP.js";import"./Label-BolsaftX.js";import"./ZIndexLayer-BNchc-lc.js";import"./types-9gVu3p3S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Bgb6ualA.js";import"./Curve-DxlUhp1s.js";import"./step-jIStQ4yh.js";import"./tooltipContext-CV96zHQs.js";import"./Symbols-D_ER3HkZ.js";import"./symbol-CW5_VIgV.js";import"./ActiveShapeUtils-CwYLB_hF.js";import"./isPlainObject-DqS4h4Cl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZVl3FJ9j.js";import"./useAnimationId-BcRo8icb.js";import"./Trapezoid-IVY3pKxT.js";import"./Sector-BwEeuI-t.js";import"./RegisterGraphicalItemId-Co2yDXiB.js";import"./ErrorBarContext-DZOjNR9y.js";import"./GraphicalItemClipPath-Ac_55wTe.js";import"./SetGraphicalItem-f0Wubofs.js";import"./CSSTransitionAnimate-CrzoYIMU.js";import"./useElementOffset-BDsoNk_l.js";import"./uniqBy-DkXBDuym.js";import"./iteratee-n0s9Zbyc.js";import"./Cross-BMD5jBrY.js";import"./index-D68W2HqG.js";import"./ChartSizeDimensions-t4E4BRLz.js";import"./OffsetShower-KjsHbNXS.js";import"./PlotAreaShower-D_C1tqvZ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
