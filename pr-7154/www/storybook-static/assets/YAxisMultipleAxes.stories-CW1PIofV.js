import{e as t}from"./iframe-DsUMSIoB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwQ9PO5l.js";import{Y as r}from"./YAxis-CTnSzHcV.js";import{R as l}from"./arrayEqualityCheck-CZsQnfge.js";import{C as x}from"./ComposedChart-CBU4OVsT.js";import{B as o}from"./Bar-BcfvrqhD.js";import{L as a}from"./Line-CB6y22ET.js";import{X as c}from"./XAxis-BzmMsMrb.js";import{T as A}from"./Tooltip-BGXoX1w9.js";import{R as g}from"./RechartsHookInspector-DFkKDQjz.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CoMq3-ST.js";import"./Layer-CW99gOx_.js";import"./resolveDefaultProps-Dxu6XJ62.js";import"./Text-DgusKYHb.js";import"./DOMUtils-ByvJp_q1.js";import"./Label-DJgqAx1l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tLtAagmx.js";import"./zIndexSlice-BDZOwce-.js";import"./immer-D_NmV9ya.js";import"./types-DN9VSCi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-TGaTZgu3.js";import"./hooks-VVLooFbP.js";import"./axisSelectors-BtEB30-b.js";import"./d3-scale-B0RJDOHU.js";import"./RechartsWrapper-mUXPQGkR.js";import"./index-BFxM37Jd.js";import"./CartesianChart-Duzb9tyy.js";import"./chartDataContext-DJEsKFHL.js";import"./CategoricalChart-LslF1x-i.js";import"./tooltipContext-anNrNI_B.js";import"./ReactUtils-BqswSBIq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dj4smYQ8.js";import"./isPlainObject-DFvEMqvd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIwirMVx.js";import"./useAnimationId-DmBkD_4u.js";import"./Trapezoid-tpniWtB4.js";import"./Sector-pL7nB78h.js";import"./Symbols-BAzW_gm6.js";import"./symbol-DKO9W9xf.js";import"./step-eBA07Zoi.js";import"./Curve-BkdTmnon.js";import"./RegisterGraphicalItemId-BclML1JJ.js";import"./ErrorBarContext-DPQTg4jn.js";import"./GraphicalItemClipPath-CgRDa1Kp.js";import"./SetGraphicalItem-k0XQScGi.js";import"./getZIndexFromUnknown-BNhmGvmH.js";import"./graphicalItemSelectors-BzQEGCwl.js";import"./ActivePoints-CHYb11Tn.js";import"./Dot-D-uZOgZW.js";import"./getRadiusAndStrokeWidthFromDot-DpPgV3ut.js";import"./useElementOffset-BkAQKih2.js";import"./uniqBy-ZtGpxLFX.js";import"./iteratee-BnLCU3fu.js";import"./Cross-C_WJsaqZ.js";import"./index-CfUCN5Mt.js";import"./ChartSizeDimensions-CcoGZBL4.js";import"./OffsetShower-BdILJQRM.js";import"./PlotAreaShower-DssL7f_B.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
