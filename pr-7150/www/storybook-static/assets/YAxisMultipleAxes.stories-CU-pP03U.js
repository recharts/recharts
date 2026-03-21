import{e as t}from"./iframe-rLfMAXZA.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BkAFZjuO.js";import{R as l}from"./arrayEqualityCheck-OjJIGGxq.js";import{C as x}from"./ComposedChart-BjVk6FMS.js";import{B as o}from"./Bar-DYWDdnde.js";import{L as a}from"./Line-CyeIrLy7.js";import{X as c}from"./XAxis-B_pkAheb.js";import{T as A}from"./Tooltip-BwSux9tc.js";import{R as g}from"./RechartsHookInspector-CGMMyBd8.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C2v11b4L.js";import"./Layer-B0Vv-b1h.js";import"./resolveDefaultProps-Cy3Gz-UL.js";import"./Text-BWQYbcH-.js";import"./DOMUtils-CYiDz4oM.js";import"./Label-BHs-e8Zr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CsEI63Vc.js";import"./zIndexSlice-CNK81FG0.js";import"./immer-DvqdMPbs.js";import"./types-BRd5e3b8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BlSnCr41.js";import"./hooks-DgA2khsF.js";import"./axisSelectors-Cq_h1C-j.js";import"./d3-scale-DULTCxaQ.js";import"./RechartsWrapper-C5rZD4qh.js";import"./index-1CgFOnhG.js";import"./CartesianChart-C_VZaAy7.js";import"./chartDataContext-B3WND6K7.js";import"./CategoricalChart-CTzB8VLC.js";import"./tooltipContext-BiA8xJam.js";import"./ReactUtils-BClzbOkG.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BxNoVXTY.js";import"./isPlainObject-xuio5Ndz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CweQqCr6.js";import"./useAnimationId-Bi7bZ4Q9.js";import"./Trapezoid-BajFM_G_.js";import"./Sector-Bx3vc8cf.js";import"./Symbols-DNEFR3nz.js";import"./symbol-CTj6pWvp.js";import"./step-DkSlwgc8.js";import"./Curve-DS3UGKj9.js";import"./RegisterGraphicalItemId-5AOI34gd.js";import"./ErrorBarContext-BvpDrqLU.js";import"./GraphicalItemClipPath-f54LuI1V.js";import"./SetGraphicalItem-Coif6o--.js";import"./getZIndexFromUnknown-B9VAhH5P.js";import"./graphicalItemSelectors-BXXhlkhw.js";import"./ActivePoints-l6297kMX.js";import"./Dot-0q9wAizM.js";import"./getRadiusAndStrokeWidthFromDot-CJ49ydrZ.js";import"./useElementOffset-OnGDg19o.js";import"./uniqBy-DZwvWIvi.js";import"./iteratee-BUpKOxlc.js";import"./Cross-1SRpgydM.js";import"./index-Ck4Yf9Sw.js";import"./ChartSizeDimensions-83vg2xh3.js";import"./OffsetShower-E_iTtzu1.js";import"./PlotAreaShower-Df-GR4o6.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
