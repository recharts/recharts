import{e as t}from"./iframe-BNAvIRSF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-DKn9Z0NX.js";import{R as l}from"./arrayEqualityCheck-B_mhFHzb.js";import{C as x}from"./ComposedChart-CL-Wzbwp.js";import{B as o}from"./Bar-DTIp-Stn.js";import{L as a}from"./Line-Bse-X7XW.js";import{X as c}from"./XAxis-jNdEOqKJ.js";import{T as A}from"./Tooltip-BLcJz2Wy.js";import{R as g}from"./RechartsHookInspector-RJGN-lnu.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B-mMrgKm.js";import"./Layer-DWhwKERy.js";import"./resolveDefaultProps-D8b97oaV.js";import"./Text-3IHlO_kG.js";import"./DOMUtils-PvS2Tri4.js";import"./Label-CPS78KHE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-H82-bw69.js";import"./zIndexSlice-Di15SS1w.js";import"./immer-CgHRgtA8.js";import"./types-QGUyibIY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BJfEJ4_M.js";import"./hooks-BLrpM1nt.js";import"./axisSelectors-BdwfMvGg.js";import"./d3-scale-H_vF25Xi.js";import"./RechartsWrapper-DOKHmNYT.js";import"./index-C8X3jAB2.js";import"./CartesianChart-CvP_4bZU.js";import"./chartDataContext-CvjStfkk.js";import"./CategoricalChart-sDSM-fNf.js";import"./tooltipContext-C5OdXhD3.js";import"./ReactUtils-DDF_v5tC.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-7ytblip2.js";import"./isPlainObject-D9rsbW2B.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DxFfTDWj.js";import"./useAnimationId-COyixU_T.js";import"./Trapezoid-qTCS7j3n.js";import"./Sector-B7_OzMPm.js";import"./Symbols-DgKTLzDc.js";import"./symbol-CoAiT4va.js";import"./step-CmqF8yoP.js";import"./Curve-BiyZrQzX.js";import"./RegisterGraphicalItemId-Ddyr6RRu.js";import"./ErrorBarContext-BmA35ro-.js";import"./GraphicalItemClipPath-B3V5TXUV.js";import"./SetGraphicalItem-BnPwV1U_.js";import"./getZIndexFromUnknown-UsILd-Bk.js";import"./graphicalItemSelectors-FmA9hzqV.js";import"./ActivePoints-BuD7fFwZ.js";import"./Dot-C0S93Sbg.js";import"./getRadiusAndStrokeWidthFromDot-BJXSwpXZ.js";import"./useElementOffset-BPd1-EH2.js";import"./uniqBy-Bi-fCKKM.js";import"./iteratee-Dv4KjMpy.js";import"./Cross-BQR9pRs1.js";import"./index-BjQmXn2i.js";import"./ChartSizeDimensions-BQzIEJvl.js";import"./OffsetShower-DQh6BuRU.js";import"./PlotAreaShower-C8HeOK1-.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
