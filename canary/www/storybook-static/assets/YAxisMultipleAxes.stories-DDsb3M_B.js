import{e as t}from"./iframe-DVKGYMpC.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-DMMOmwli.js";import{Y as r}from"./YAxis-36kfWwzX.js";import{R as l}from"./arrayEqualityCheck-C3dMZwVz.js";import{C as x}from"./ComposedChart-DpZn3J7A.js";import{B as o}from"./Bar-CccLtcnB.js";import{L as a}from"./Line-DM6-icql.js";import{X as c}from"./XAxis-WP1B-t-F.js";import{T as A}from"./Tooltip-2satjD6Z.js";import{R as g}from"./RechartsHookInspector-BRvRKLe7.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-hM284rmA.js";import"./Layer-Cbzg46jm.js";import"./resolveDefaultProps-m52n9a41.js";import"./Text-D8j9jByl.js";import"./DOMUtils-Cq0pXhle.js";import"./Label-CgM8GhgJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D9yE2b_P.js";import"./zIndexSlice-BCKi_K05.js";import"./immer-mdmEhKTL.js";import"./types-D5_2czw6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DNTEgzlA.js";import"./hooks-KmYc7udA.js";import"./axisSelectors-C6zo9Ho5.js";import"./d3-scale-CKFP8_y_.js";import"./RechartsWrapper-VcgGm0Mh.js";import"./index-XfA7Rruh.js";import"./CartesianChart-20x7b3cD.js";import"./chartDataContext-DkfeKHKL.js";import"./CategoricalChart-lWTiO2LF.js";import"./tooltipContext-FOInBi45.js";import"./ReactUtils-2VJeHFxo.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DbiEWzYq.js";import"./isPlainObject-JLSnB0Dw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA2b7ur5.js";import"./useAnimationId-BLC1f5rw.js";import"./Trapezoid-Byuc0lU9.js";import"./Sector-BMT_0fK5.js";import"./Symbols-CUdlDqJ5.js";import"./symbol-BuAcBDh_.js";import"./step-BPnB-OiB.js";import"./Curve-DFpbuCXU.js";import"./RegisterGraphicalItemId-DFvy2IAN.js";import"./ErrorBarContext-D0RCHEkz.js";import"./GraphicalItemClipPath-Dbga3z9T.js";import"./SetGraphicalItem-Dd-xAAAu.js";import"./getZIndexFromUnknown-BUqxiGhn.js";import"./graphicalItemSelectors-2hcKKw8o.js";import"./ActivePoints-D-CneBw2.js";import"./Dot-Du5UEN4g.js";import"./getRadiusAndStrokeWidthFromDot-DUAFpNa5.js";import"./useElementOffset-DmaGgdgh.js";import"./uniqBy-DKpKL2nk.js";import"./iteratee-D92tm2NM.js";import"./Cross-BLkWNH7r.js";import"./index-DH-aWMW3.js";import"./ChartSizeDimensions-DAFzj3WJ.js";import"./OffsetShower-lcp6F4HW.js";import"./PlotAreaShower-BUpHI0ia.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
