import{e as t}from"./iframe-BB4UUGL6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-BjQFu2fY.js";import{R as l}from"./arrayEqualityCheck-BYmPeJrr.js";import{C as x}from"./ComposedChart-C2BzGzPZ.js";import{B as o}from"./Bar-CmXoqB39.js";import{L as a}from"./Line-BuVVGvA7.js";import{X as c}from"./XAxis-Sg_yoptQ.js";import{T as A}from"./Tooltip-UgzVMgnv.js";import{R as g}from"./RechartsHookInspector-Bh0xNYsg.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D42FnObu.js";import"./Layer-CzRXBUT9.js";import"./resolveDefaultProps-Dwn4tBVe.js";import"./Text-xAwQNVqR.js";import"./DOMUtils-DBhHNbvA.js";import"./Label-BuQHIgdG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C40yFkyN.js";import"./zIndexSlice-CuyQJUW0.js";import"./immer-CGr0ptDX.js";import"./types-DX1g5Szp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-lC7cSHHa.js";import"./hooks-DFTFZ2_R.js";import"./axisSelectors-xhLV-t5X.js";import"./d3-scale-T-qah3ml.js";import"./RechartsWrapper-D-mKRVYc.js";import"./index-DU7ieidm.js";import"./CartesianChart-BRe-Cj4k.js";import"./chartDataContext-zlvG9ShK.js";import"./CategoricalChart-Ct_zc7o_.js";import"./tooltipContext-BBUNFgLK.js";import"./ReactUtils-C_PCtVqv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DQggNROu.js";import"./isPlainObject-BHtqOomI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BoM2sg2T.js";import"./useAnimationId-CR73Z47T.js";import"./Trapezoid-02WGJX_U.js";import"./Sector-DNRZINVD.js";import"./Symbols-CZ1AA7rn.js";import"./symbol-DNGflvzo.js";import"./step-BIZ2Vv4e.js";import"./Curve--7RAEkWQ.js";import"./RegisterGraphicalItemId-DlFEoDs3.js";import"./ErrorBarContext-CSlHUW5r.js";import"./GraphicalItemClipPath-Y2-czyRy.js";import"./SetGraphicalItem-Da_W53nM.js";import"./getZIndexFromUnknown-B_CfMx-d.js";import"./graphicalItemSelectors-BlHR2ggU.js";import"./ActivePoints-qho3Mxiu.js";import"./Dot-BGQcGA8a.js";import"./getRadiusAndStrokeWidthFromDot-DX4q2mcQ.js";import"./useElementOffset-DLf_jPLb.js";import"./uniqBy-DnQsVhpX.js";import"./iteratee-CSGtCKt7.js";import"./Cross-ugVlNa1O.js";import"./index-UCZ6NmO8.js";import"./ChartSizeDimensions-Dx8qGUZW.js";import"./OffsetShower-6Dk3TPlH.js";import"./PlotAreaShower-CdNqGPUL.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
