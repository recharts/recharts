import{R as t}from"./iframe-x9YCwuVc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CcW9nNm_.js";import{R as l}from"./zIndexSlice-BV1eDa8t.js";import{C as x}from"./ComposedChart-vHYW6JZh.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DFnJDgvs.js";import{L as a}from"./Line-B5t4aXxo.js";import{X as c}from"./XAxis-DOrrA_AO.js";import{T as g}from"./Tooltip-CXDzUWmd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BWVi17tM.js";import"./Text-COBhbjuo.js";import"./resolveDefaultProps-IMSWVxjI.js";import"./pageBackground-TE-MQad5.js";import"./isWellBehavedNumber-BfcoqVbY.js";import"./useId-CMngnmGp.js";import"./useBackwardsCompatibleTheme-BQTuAdi2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DrSAG7iO.js";import"./index-4vAc-1PY.js";import"./index-_DnjTFHH.js";import"./dataEntryStyles-Drm_aJ2X.js";import"./axisSelectors-DUrnAUTK.js";import"./throttle-CFpl0b0L.js";import"./d3-scale-DeFHX2Lm.js";import"./CartesianAxis-C1FOk_u6.js";import"./Layer-byU46PKm.js";import"./types-fCYwQ83-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BQZVpqNr.js";import"./index-CnDSa4vm.js";import"./index-BC1Gmj01.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DuSi3yuo.js";import"./index-BC2a9-E_.js";import"./CartesianChart-pmy50aWE.js";import"./chartDataContext-CCIkzP_F.js";import"./CategoricalChart-DqHAXNep.js";import"./activeStyles-B5NsC4ZM.js";import"./useAnimationId-DxnlQorl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B-VzFgv3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CYeGEQWR.js";import"./tooltipContext-xDqSQrod.js";import"./RegisterGraphicalItemId-DNM5emxE.js";import"./ErrorBarContext-a5it_Nak.js";import"./GraphicalItemClipPath-DXDK6Y35.js";import"./SetGraphicalItem-D1wyT9-l.js";import"./getZIndexFromUnknown-DLpSImyH.js";import"./useEffectiveDataKey-D48S_iiZ.js";import"./omit-CcqWmCMh.js";import"./isArguments-yB-y1yaH.js";import"./Curve-8b-Qxogq.js";import"./step-DWJVpFVS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BL8qk4Kh.js";import"./Dot-B98z2wU8.js";import"./getRadiusAndStrokeWidthFromDot-DRWTNSpx.js";import"./useElementOffset-Q7vbrrOH.js";import"./uniqBy-bvQ6Ay4K.js";import"./iteratee-_rf4IMM8.js";import"./Cross-B9ZBBQd6.js";import"./Sector-e9C-YfcB.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
