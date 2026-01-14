import{e as t}from"./iframe-CaIgGyHM.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CtpClMsJ.js";import{Y as r}from"./YAxis-CtUU2Zal.js";import{R as l}from"./arrayEqualityCheck-CjxR2bSj.js";import{C as x}from"./ComposedChart-ByOO_lp0.js";import{B as o}from"./Bar-BfNBbSRo.js";import{L as a}from"./Line-JaWJo4pn.js";import{X as c}from"./XAxis-CTD8LeaB.js";import{T as A}from"./Tooltip-BSsCpQhd.js";import{R as g}from"./RechartsHookInspector-Dwl6GEES.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DWSFOFU9.js";import"./CartesianAxis-BIL2gr42.js";import"./Layer-Bv6QiOXu.js";import"./Text-b4cawV-F.js";import"./DOMUtils-Bp1vNIxR.js";import"./Label-P-OvPLPn.js";import"./PolarUtils-DrqRDweU.js";import"./ZIndexLayer-Dbr8-T8d.js";import"./zIndexSlice-Q7xIp-VY.js";import"./types-8d_H4dY-.js";import"./hooks-C-Cwfz9Q.js";import"./axisSelectors-CnuhT51I.js";import"./RechartsWrapper-GR6QdmkY.js";import"./CartesianChart-oU5kzf8D.js";import"./chartDataContext-D2XV3P37.js";import"./CategoricalChart-BosqoloG.js";import"./tooltipContext-C07Af5tl.js";import"./ReactUtils-CsC3O-TD.js";import"./ActiveShapeUtils-BYK5wQE6.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CaJA74zA.js";import"./useAnimationId-C8_uny94.js";import"./Trapezoid-DwBeZXV_.js";import"./Sector-BJsydvu6.js";import"./Symbols-Crj6RDt9.js";import"./Curve-9htNi4i5.js";import"./RegisterGraphicalItemId-BuoGtP2e.js";import"./ErrorBarContext-Dm8UQh69.js";import"./GraphicalItemClipPath-DomblT_L.js";import"./SetGraphicalItem-ByoAYqMJ.js";import"./getZIndexFromUnknown-DVHAN2Ok.js";import"./graphicalItemSelectors-CqQnKRMs.js";import"./ActivePoints-C6Jn1jar.js";import"./Dot-LAxET7O2.js";import"./getRadiusAndStrokeWidthFromDot-_YFZPvzl.js";import"./useElementOffset-HsHwXild.js";import"./iteratee-BXSQ8JUf.js";import"./Cross-lPqrfSfL.js";import"./index-B-tNTan1.js";import"./ChartSizeDimensions-BI1RWPz_.js";import"./OffsetShower-BPLk7P8i.js";import"./PlotAreaShower-CFgftmSD.js";const yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const ut=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,ut as __namedExportsOrder,yt as default};
