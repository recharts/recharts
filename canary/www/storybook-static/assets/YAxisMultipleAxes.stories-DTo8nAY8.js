import{e as t}from"./iframe-Dw3q2J_C.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-Sk_2BRIW.js";import{Y as r}from"./YAxis-Rj4UToqR.js";import{R as l}from"./arrayEqualityCheck-CyZN96pQ.js";import{C as x}from"./ComposedChart-qdmZkWDY.js";import{B as o}from"./Bar-DOE3cfUG.js";import{L as a}from"./Line-c1IAKOzu.js";import{X as c}from"./XAxis-BkGhyUaZ.js";import{T as A}from"./Tooltip-0x8wBCfm.js";import{R as g}from"./RechartsHookInspector-CjBXEdYk.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BpxWTFo7.js";import"./CartesianAxis-Dx05xS85.js";import"./Layer-kgIv22jT.js";import"./Text-DlpZzH26.js";import"./DOMUtils-9f_FxyP7.js";import"./Label-BTeufvbK.js";import"./PolarUtils-DdS5KPsI.js";import"./ZIndexLayer-QOZqstTD.js";import"./zIndexSlice-CgOi6Kpf.js";import"./types-BJHbMGwM.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-CXCEGVm_.js";import"./axisSelectors-Bj4F6VGN.js";import"./RechartsWrapper-BxCpSvqF.js";import"./CartesianChart-BoeRzCq2.js";import"./chartDataContext-toYkGVnu.js";import"./CategoricalChart-D0JPHmvG.js";import"./tooltipContext-DjZXsZgx.js";import"./ReactUtils-CRr71kpZ.js";import"./ActiveShapeUtils-CnPzR9TY.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdkJqkle.js";import"./useAnimationId-BJQnqM8-.js";import"./Trapezoid-BYebN7Pj.js";import"./Sector-C3UDCS_F.js";import"./Symbols-CuhIBlUX.js";import"./Curve-DlYk4-Kk.js";import"./RegisterGraphicalItemId-CrW_A7sx.js";import"./ErrorBarContext-CH81KESR.js";import"./GraphicalItemClipPath-BL_BqIRg.js";import"./SetGraphicalItem-C0Kooi_K.js";import"./getZIndexFromUnknown-MbbDtbEN.js";import"./graphicalItemSelectors-3hnzH_cf.js";import"./ActivePoints-D4tj1Ft8.js";import"./Dot-U-LLWdez.js";import"./getRadiusAndStrokeWidthFromDot-DUMZDB8N.js";import"./useElementOffset-m4QFPyQu.js";import"./iteratee-CYRk1_iR.js";import"./Cross-Btj8qbbV.js";import"./index-cG5s137W.js";import"./ChartSizeDimensions-BOI7XDYO.js";import"./OffsetShower-shA12VSX.js";import"./PlotAreaShower-DksCyK2N.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
