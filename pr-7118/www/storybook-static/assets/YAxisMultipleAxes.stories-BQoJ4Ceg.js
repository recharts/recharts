import{e as t}from"./iframe-C-iVd-D9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BMfSetrt.js";import{R as l}from"./arrayEqualityCheck-CykFyG3w.js";import{C as x}from"./ComposedChart-BhT7kidc.js";import{B as o}from"./Bar-DLIH3GGF.js";import{L as a}from"./Line-BK3Dxm5K.js";import{X as c}from"./XAxis-DSNvwzP_.js";import{T as A}from"./Tooltip-NRqZx3_w.js";import{R as g}from"./RechartsHookInspector-BmWQIBw0.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DbYsYZ3j.js";import"./Layer-PcuWobZF.js";import"./resolveDefaultProps-CaPMqnUf.js";import"./Text-DV9U-A1x.js";import"./DOMUtils-CDMIcntA.js";import"./Label-B2Hnjv9f.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CF1VRPo3.js";import"./zIndexSlice-DM0eYjRM.js";import"./immer-9akI4mGC.js";import"./types-DAf5tiec.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-XpTaEf7K.js";import"./hooks-DgAj9GmX.js";import"./axisSelectors-B51mUxQh.js";import"./d3-scale-BLCaIo2v.js";import"./RechartsWrapper-OZYl-Tz6.js";import"./index-D7iAvCJZ.js";import"./CartesianChart-DCeJ5hMu.js";import"./chartDataContext-Dod_jDwP.js";import"./CategoricalChart-DQuyNjww.js";import"./tooltipContext-DmQQI9hK.js";import"./ReactUtils-nzFm5ghx.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-LerByRq_.js";import"./isPlainObject-y7gB3M8h.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CZ4Fndbl.js";import"./useAnimationId-DF-bmt8J.js";import"./Trapezoid-C-P9UIeU.js";import"./Sector-Xd_RhtXJ.js";import"./Symbols-DpPGUMp-.js";import"./symbol-BuPqUUJq.js";import"./step-Ca8O5Pe5.js";import"./Curve-6NVtDyjZ.js";import"./RegisterGraphicalItemId-DBYhzviE.js";import"./ErrorBarContext-DToJ31oQ.js";import"./GraphicalItemClipPath-DlmVzEBx.js";import"./SetGraphicalItem-D9P8g2wE.js";import"./getZIndexFromUnknown-2a0m8kz2.js";import"./graphicalItemSelectors-CGXQJwpT.js";import"./ActivePoints-D0xySLpj.js";import"./Dot-BoKtt_Pl.js";import"./getRadiusAndStrokeWidthFromDot-DYJAnKvi.js";import"./useElementOffset-Cxc-8owW.js";import"./uniqBy-Can407_D.js";import"./iteratee-BQhHXczZ.js";import"./Cross-R11RP0qC.js";import"./index-4pvBd6R2.js";import"./ChartSizeDimensions-7dl-q0eS.js";import"./OffsetShower-DgEJieR9.js";import"./PlotAreaShower-Dw5kcDju.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
