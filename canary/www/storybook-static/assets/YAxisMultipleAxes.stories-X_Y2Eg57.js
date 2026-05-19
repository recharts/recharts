import{e as t}from"./iframe-Dm92CwFH.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-LNhJTikZ.js";import{g as l}from"./arrayEqualityCheck-CILmZ2ng.js";import{C as x}from"./ComposedChart-8hVtFBq4.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-DY8cCYbD.js";import{L as a}from"./Line-CsaarKM8.js";import{X as A}from"./XAxis-BxDV4NmS.js";import{T as g}from"./Tooltip-AjXhhwjO.js";import{R as f}from"./RechartsHookInspector-DjDPWpLA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DhxbGkzM.js";import"./Layer-CpozC2HI.js";import"./resolveDefaultProps-URK34NLy.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./Label-C3d_UHx_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRpAcZD_.js";import"./zIndexSlice-CZsiKlhz.js";import"./immer-C2lunnZL.js";import"./types-CksUkFiR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./tooltipContext-B8ItisrQ.js";import"./ReactUtils-vWuNVuHD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CnNIQnOr.js";import"./isPlainObject-BU4pDjKs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYOH8rGO.js";import"./useAnimationId-DN3FgicD.js";import"./Trapezoid-CRsqSHYT.js";import"./Sector-BkPUWzJ_.js";import"./Symbols-D8RnZW1D.js";import"./symbol-aLdk9boG.js";import"./step-BOUe13iO.js";import"./Curve-gF21399W.js";import"./RegisterGraphicalItemId-Bgnu5jtR.js";import"./ErrorBarContext-DWWXrCiO.js";import"./GraphicalItemClipPath-C8gejsmY.js";import"./SetGraphicalItem-C8FWpJGs.js";import"./getZIndexFromUnknown-DWiQrRON.js";import"./graphicalItemSelectors-BeyTcZ1c.js";import"./ActivePoints-CqTWkagC.js";import"./Dot-D9ItCAkE.js";import"./getRadiusAndStrokeWidthFromDot-EjdN7dQP.js";import"./useElementOffset-D-mxBOd4.js";import"./uniqBy-CnkbcL_D.js";import"./iteratee-DgYznPUB.js";import"./Cross-D0w41uNF.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./OffsetShower-VDfu5cmL.js";import"./PlotAreaShower-DIqDk6Vd.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
