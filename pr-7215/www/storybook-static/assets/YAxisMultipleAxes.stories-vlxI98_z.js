import{e as t}from"./iframe-BRNudyUC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-LQ7YWmSW.js";import{R as l}from"./arrayEqualityCheck-BDDqf68l.js";import{C as x}from"./ComposedChart-L_fez2fu.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CPkOULeV.js";import{L as a}from"./Line-BJJ523l_.js";import{X as A}from"./XAxis-D5flW7iC.js";import{T as g}from"./Tooltip-TOPlPeHn.js";import{R as f}from"./RechartsHookInspector-bCgKsqnr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BGRfLIi8.js";import"./Layer-72bRSYZY.js";import"./resolveDefaultProps-bvYT90Do.js";import"./Text-DYXt0Tk2.js";import"./DOMUtils-BUce29Ys.js";import"./Label-C0IwlP1f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BqNsDADZ.js";import"./zIndexSlice-Bxbwbl5M.js";import"./immer-efUMdrFM.js";import"./types-CuUkJyrv.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Dd_sUH3I.js";import"./hooks-g1pwYnn9.js";import"./axisSelectors-DBRNeiSB.js";import"./d3-scale-BE1R65Yr.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-Ny_QHnuL.js";import"./index-BpzgcC1p.js";import"./CartesianChart-DtfUiseX.js";import"./chartDataContext-DWt96v8T.js";import"./CategoricalChart-BAXoX5YA.js";import"./tooltipContext-a1yvY8Zp.js";import"./AnimatedItems-DyV65I1f.js";import"./useAnimationId-DKTA-eAm.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BgG6X-fa.js";import"./isPlainObject-D-_-2woO.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWclrIl5.js";import"./Trapezoid-Da1UYdj_.js";import"./Sector-D7BMvRVb.js";import"./Symbols-hkZNpq1J.js";import"./symbol-BcfkrHFP.js";import"./step-OjWirnGE.js";import"./Curve-DS1o2tEO.js";import"./RegisterGraphicalItemId-DKtlUZkV.js";import"./ErrorBarContext-D3Lj0Odf.js";import"./GraphicalItemClipPath-sl_sf-ia.js";import"./SetGraphicalItem-BMN_yPrU.js";import"./getZIndexFromUnknown-CMXRnERf.js";import"./graphicalItemSelectors-BJwrjMjb.js";import"./ActivePoints-BzKj6q44.js";import"./Dot-DQc05o-V.js";import"./getRadiusAndStrokeWidthFromDot-DyploHpC.js";import"./useElementOffset-RgQmJUcl.js";import"./uniqBy-rvlhAAW8.js";import"./iteratee-Lmk9FC8H.js";import"./Cross-0aWBMcDJ.js";import"./index-DrL1-A17.js";import"./ChartSizeDimensions-Bj0myzFp.js";import"./OffsetShower-6Jy39FxY.js";import"./PlotAreaShower-DGNr6qsk.js";const Tt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Wt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
