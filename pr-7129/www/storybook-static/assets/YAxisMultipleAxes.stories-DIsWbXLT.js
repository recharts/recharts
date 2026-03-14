import{e as t}from"./iframe-DTYvDHnt.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-D1_iMkgA.js";import{R as l}from"./arrayEqualityCheck-1nsmynxr.js";import{C as x}from"./ComposedChart-3AuQ4-dj.js";import{B as o}from"./Bar-DanlCo5l.js";import{L as a}from"./Line-jorbotEa.js";import{X as c}from"./XAxis-D4mtTZaA.js";import{T as A}from"./Tooltip-CD_Acrkl.js";import{R as g}from"./RechartsHookInspector-Pg_EkWGi.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BvJIB3EW.js";import"./Layer-D1ZUQvW9.js";import"./resolveDefaultProps-DkSqodrF.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./Label-Dl6pWHvn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhriUgdb.js";import"./zIndexSlice-CBk7l9Bz.js";import"./immer-D3GAE1ff.js";import"./types-JQYj2LUa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./RechartsWrapper-C_fFV3co.js";import"./index-B3wSVZ9D.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./tooltipContext-BoDWUbo_.js";import"./ReactUtils-C-Mw6kzE.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-vpnhlhYE.js";import"./isPlainObject-D_8yM-sa.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpDkrfm.js";import"./useAnimationId-CwNlC5fD.js";import"./Trapezoid-BdxbKZVQ.js";import"./Sector-BIC07wIa.js";import"./Symbols-iaprTSLF.js";import"./symbol-Bx0PtbXY.js";import"./step-CL79bITl.js";import"./Curve-D1NGPsms.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./ErrorBarContext-C4u9P8TO.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./getZIndexFromUnknown-Ds77s1AT.js";import"./graphicalItemSelectors-xdRnjXRN.js";import"./ActivePoints-C_uAyo2G.js";import"./Dot-CYQCTbwY.js";import"./getRadiusAndStrokeWidthFromDot-BR4iej6B.js";import"./useElementOffset-C3QFuFW6.js";import"./uniqBy-Cx8gc7BP.js";import"./iteratee-DofHrmgf.js";import"./Cross-Bs6X0R9T.js";import"./index-CrrTnEOk.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
