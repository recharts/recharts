import{e as t}from"./iframe-DkoPPqoz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BYjsEyTB.js";import{R as l}from"./arrayEqualityCheck-ConoiXxh.js";import{C as x}from"./ComposedChart-BDGpBivc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bw3phBX2.js";import{L as a}from"./Line-Ch8ZpIZ6.js";import{X as A}from"./XAxis-TP4nil4a.js";import{T as g}from"./Tooltip-1wKJEkgw.js";import{R as f}from"./RechartsHookInspector-JABbqkig.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DqLKklwY.js";import"./Layer-zW4foO2t.js";import"./resolveDefaultProps-rTEBizGM.js";import"./Text-Czgex7sv.js";import"./DOMUtils-BK7Rx0Uu.js";import"./Label-bvaOdScm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkIqpuZB.js";import"./zIndexSlice-DRo4EBFA.js";import"./immer-h70EVoAC.js";import"./types-BY9uJX-K.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C3i94H6-.js";import"./hooks-kkIG_obm.js";import"./axisSelectors-DrsKaFAE.js";import"./d3-scale-DMaSDVSj.js";import"./RechartsWrapper-D7r7vnZw.js";import"./index-avHK6rAb.js";import"./CartesianChart-FkpJPUOg.js";import"./chartDataContext-RI6mXRe4.js";import"./CategoricalChart-BVNqzoUx.js";import"./tooltipContext-DeDbv-GP.js";import"./ReactUtils-t--G_5qe.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DVJC97NJ.js";import"./isPlainObject-gasvROJA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0hnRgW6.js";import"./useAnimationId-BkaDppf2.js";import"./Trapezoid-BJDCCDSe.js";import"./Sector-hs2Rz1EN.js";import"./Symbols-riOWWUH2.js";import"./symbol-Mw7pfSpK.js";import"./step-BXtSxhKs.js";import"./Curve-Ue3PdtjH.js";import"./RegisterGraphicalItemId-DO3T0gKQ.js";import"./ErrorBarContext-D8jzUn2M.js";import"./GraphicalItemClipPath-DPMqkNK-.js";import"./SetGraphicalItem-Dy_UcRx-.js";import"./getZIndexFromUnknown-vIk4_vy8.js";import"./graphicalItemSelectors-DJVaZkKs.js";import"./ActivePoints-CofuFEcX.js";import"./Dot-C9hCbkHm.js";import"./getRadiusAndStrokeWidthFromDot-DA4yVcY7.js";import"./useElementOffset-CaDAE_vK.js";import"./uniqBy-Dp6QPwT2.js";import"./iteratee-DHJJjjdJ.js";import"./Cross-oJRgsa_B.js";import"./index-B78ZsepT.js";import"./ChartSizeDimensions-DJpvKh-u.js";import"./OffsetShower-x7RdLh9q.js";import"./PlotAreaShower-BlqZdS3t.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
              <RechartsHookInspector />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
