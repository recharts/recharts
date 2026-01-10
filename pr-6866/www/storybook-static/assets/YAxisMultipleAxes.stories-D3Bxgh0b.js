import{e as t}from"./iframe-tCRQIxYB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisProps-ByMyQu0r.js";import{Y as r}from"./YAxis-C5YEwPYl.js";import{R as l}from"./arrayEqualityCheck-DFgE1twh.js";import{C as x}from"./ComposedChart-B_kjiHsD.js";import{B as o}from"./Bar-0p1DbV1h.js";import{L as a}from"./Line-BVHIm-vM.js";import{X as c}from"./XAxis-o_gppMSb.js";import{T as A}from"./Tooltip-CFzd-RiE.js";import{R as f}from"./RechartsHookInspector-bM2S9Z_N.js";import{p as g}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-D2e6YxB0.js";import"./CartesianAxis-ipmvl_eK.js";import"./Layer-Okfcyfin.js";import"./Text-DOFY9JIO.js";import"./DOMUtils-fQQV3uNK.js";import"./Label-JD75mQPI.js";import"./PolarUtils-BLxmkcH1.js";import"./ZIndexLayer-DZ5tWnEb.js";import"./zIndexSlice-IJ_zl8YN.js";import"./types-CbdV4-dc.js";import"./hooks-Simc1mEI.js";import"./axisSelectors-DzjYUh9I.js";import"./RechartsWrapper-Bp9yhMvy.js";import"./CartesianChart-Dy39hE-Z.js";import"./chartDataContext-NlnzkvR2.js";import"./CategoricalChart-BbdLegKy.js";import"./tooltipContext-C5mjD3mc.js";import"./ReactUtils-CF2khIYu.js";import"./ActiveShapeUtils-B61GuIrI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BUsvopn3.js";import"./useAnimationId-D2oVQKnr.js";import"./Trapezoid-hUxVvC3O.js";import"./Sector-DQ482-FH.js";import"./Symbols-DwIizSNL.js";import"./Curve-NiEgXiq2.js";import"./RegisterGraphicalItemId-CFqAxJ1Q.js";import"./ErrorBarContext-B8Ubbuxs.js";import"./GraphicalItemClipPath-D1JoWQAT.js";import"./SetGraphicalItem-DozJQrmf.js";import"./getZIndexFromUnknown-BYF37b1M.js";import"./graphicalItemSelectors-kD6BeSeA.js";import"./ActivePoints-BVkf9rZJ.js";import"./Dot-DRKOPpIx.js";import"./getRadiusAndStrokeWidthFromDot-BKo_PtlD.js";import"./useElementOffset-D0-uD3Uj.js";import"./iteratee-QAA3_HSJ.js";import"./Cross-B215_L-1.js";import"./index-CkWn_0P6.js";import"./ChartSizeDimensions-BUG6iQR7.js";import"./OffsetShower-B78P8GFz.js";import"./PlotAreaShower-R2kW5Azb.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:g},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
