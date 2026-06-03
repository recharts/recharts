import{c as t}from"./iframe-BL0vDUY1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DxphIXAP.js";import{g as l}from"./zIndexSlice-DAAOwj36.js";import{C as x}from"./ComposedChart-CpDFoA5e.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-CxBxc3Wd.js";import{L as a}from"./Line-DW5G8Isa.js";import{X as A}from"./XAxis-BqoRDN9a.js";import{T as g}from"./Tooltip-oByFuPe7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-m6Gdqips.js";import"./CartesianAxis-D1s0-vhb.js";import"./Layer-CaYvEIsW.js";import"./resolveDefaultProps-ZSI9VFO3.js";import"./Text-0yUJxWRz.js";import"./DOMUtils-DBRkXAWK.js";import"./isWellBehavedNumber-C9kFBhSy.js";import"./Label-C0g2piVD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGBBuQwI.js";import"./index-vndO0F7c.js";import"./index-BQNr1vMH.js";import"./types-C45pB88z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgGULbP3.js";import"./immer-gfsZ7y3h.js";import"./RechartsWrapper-DJ0hXPGE.js";import"./index-C8Q9Qlzv.js";import"./index-B3rgiiof.js";import"./axisSelectors-DLsK43Oc.js";import"./d3-scale-DCyWVOsR.js";import"./CartesianChart-BhVqKQAk.js";import"./chartDataContext-BU-8Dj6p.js";import"./CategoricalChart-Dx4CHgqj.js";import"./tooltipContext-C7vrrHS_.js";import"./ReactUtils-2UhHZda9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DISm3zYB.js";import"./useAnimationId-Dpb32_8Y.js";import"./ActiveShapeUtils-BDjEEgo3.js";import"./RegisterGraphicalItemId-CkGBqTpZ.js";import"./ErrorBarContext-rpVVIvWF.js";import"./GraphicalItemClipPath-CzWahSjY.js";import"./SetGraphicalItem-CpMSDPev.js";import"./getZIndexFromUnknown-CObXE44T.js";import"./graphicalItemSelectors-B6Mjt85n.js";import"./Curve-Cc4T7AcR.js";import"./step-BQd4YsZo.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DnbgDyGh.js";import"./Dot-BQDzh87g.js";import"./getRadiusAndStrokeWidthFromDot-BPkJ8Kki.js";import"./useElementOffset-ygCelvpZ.js";import"./uniqBy-BeGOK-hH.js";import"./iteratee-CLiHz7HZ.js";import"./Cross-CPBbOftl.js";import"./Sector-BuBE9LFV.js";const Et={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Ct=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Ct as __namedExportsOrder,Et as default};
