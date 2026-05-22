import{e as r}from"./iframe-B82q9u-Y.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DivNzlv1.js";import{C as d}from"./CartesianGrid-39AKtB2i.js";import{X as c}from"./XAxis-BRaoe5W0.js";import{Y as y}from"./YAxis-CWyiNt5V.js";import{S as h}from"./Scatter-C0SqZBS9.js";import{E as e}from"./ErrorBar-DZ0u-U_Z.js";import{T as u}from"./Tooltip-DoN-IRTo.js";import{R as f}from"./RechartsHookInspector-z9cebFjB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CBADlju4.js";import"./arrayEqualityCheck-CKCQU2qV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-g5aDd7Yf.js";import"./immer-WiujJWUS.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DXyPKPXc.js";import"./hooks-Sri1sPLr.js";import"./axisSelectors-DXfv2Drb.js";import"./d3-scale-B8FZewzC.js";import"./string-yHBgcFlJ.js";import"./zIndexSlice-I2t58hxh.js";import"./renderedTicksSlice-CInncnPk.js";import"./CartesianChart-5ApupumH.js";import"./chartDataContext-D6HVVC2S.js";import"./CategoricalChart-DKDPW_6L.js";import"./CartesianAxis-U5xnp7fG.js";import"./Layer-C2GvyuKR.js";import"./Text-DlTF1_pF.js";import"./DOMUtils-CfA92o7z.js";import"./Label-yJEcHIim.js";import"./ZIndexLayer-DTDC0Rqe.js";import"./types-BjP-coDb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./AnimatedItems-COwEU_uD.js";import"./useAnimationId-DLlegLLP.js";import"./Curve-BwRgum1p.js";import"./step-BxVbCn_a.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BAcgJM-p.js";import"./Symbols-D0OvFEPa.js";import"./symbol-BgLdl-Fp.js";import"./ActiveShapeUtils-D-OS5cJ_.js";import"./RegisterGraphicalItemId-kL3h8ct-.js";import"./ErrorBarContext-BL5FMVHx.js";import"./GraphicalItemClipPath-BpOAg0aH.js";import"./SetGraphicalItem-BoZe1188.js";import"./CSSTransitionAnimate-rXZyXwGz.js";import"./useElementOffset-C7Quszb0.js";import"./uniqBy-DRfr_3Tm.js";import"./iteratee-DVb5hUcr.js";import"./Cross-C2dTsZH7.js";import"./Rectangle-BGMFafl1.js";import"./Sector-RiuWdAe8.js";import"./index-dYimQAlj.js";import"./ChartSizeDimensions-BGSkMu5K.js";import"./OffsetShower-DzS61Pg9.js";import"./PlotAreaShower-uXu1OgRK.js";const Ar={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
