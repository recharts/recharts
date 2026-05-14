import{e as t}from"./iframe-BH41_KsK.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-qj5w2hU5.js";import{R as l}from"./arrayEqualityCheck-CGbsBh9H.js";import{C as x}from"./ComposedChart-ClapdULO.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-3QoDAssZ.js";import{L as a}from"./Line-C-svjPgG.js";import{X as A}from"./XAxis-CohOmQtN.js";import{T as g}from"./Tooltip-CEdHYHgy.js";import{R as f}from"./RechartsHookInspector-DcrWhI6K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DLqmQhKV.js";import"./Layer-C2G5KafR.js";import"./resolveDefaultProps-C5jg0EzG.js";import"./Text-DDTyrmBt.js";import"./DOMUtils-BSZC47d4.js";import"./Label-CXdyAx7z.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CP6TEiwa.js";import"./zIndexSlice-Dbf9wnDO.js";import"./immer-ZwRip_iH.js";import"./types-BL4s3hIy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-3bqcLC8e.js";import"./hooks-DSeH88Zv.js";import"./axisSelectors-C71PNMoj.js";import"./d3-scale-DNp6AOXD.js";import"./RechartsWrapper-B5rnF5yF.js";import"./index-Bz_RkPth.js";import"./CartesianChart-DMgQ1LDd.js";import"./chartDataContext-DMreHK63.js";import"./CategoricalChart-Cd1ApljN.js";import"./tooltipContext-ieTvpbQS.js";import"./ReactUtils-DkBJREDm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-mHpAd-Np.js";import"./isPlainObject-BU-7yv7P.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B9TxAhtg.js";import"./useAnimationId-BwPLyDxM.js";import"./Trapezoid-uwg0MM0K.js";import"./Sector-CWlkVSPf.js";import"./Symbols-DfJpNQwy.js";import"./symbol-aaNUhI62.js";import"./step-DW6seU4F.js";import"./Curve-CO9gbDjZ.js";import"./RegisterGraphicalItemId-r9QXM6NT.js";import"./ErrorBarContext-zSTRxri5.js";import"./GraphicalItemClipPath-Bh82AnDN.js";import"./SetGraphicalItem-DdDIdBuP.js";import"./getZIndexFromUnknown-BkGSvyMb.js";import"./graphicalItemSelectors-CKaxkyVq.js";import"./ActivePoints-C4m1trAF.js";import"./Dot-_SaUOdRl.js";import"./getRadiusAndStrokeWidthFromDot-av-B5cKk.js";import"./useElementOffset-Cuf0LXOB.js";import"./uniqBy-6xFv1rvL.js";import"./iteratee-Y_N2yMWH.js";import"./Cross-BOW0T4uq.js";import"./index-Dm7aDTFq.js";import"./ChartSizeDimensions-DM4vIE32.js";import"./OffsetShower-U9U3cZHq.js";import"./PlotAreaShower-D2pJ4Br5.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
