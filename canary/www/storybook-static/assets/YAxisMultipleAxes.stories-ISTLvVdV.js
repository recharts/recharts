import{e as t}from"./iframe-DbVDg_ca.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-C-wbbJhP.js";import{R as l}from"./arrayEqualityCheck-BSVOQ7T-.js";import{C as x}from"./ComposedChart-BlXi-i9v.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-D2gqqMwU.js";import{L as a}from"./Line-DEUmSR0a.js";import{X as A}from"./XAxis-nk-GltPq.js";import{T as g}from"./Tooltip-mRYLvKKE.js";import{R as f}from"./RechartsHookInspector-WP52i-1p.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-wfs3tk0I.js";import"./Layer-C9NfejAk.js";import"./resolveDefaultProps-DgDD8GmR.js";import"./Text-BjaMrcvh.js";import"./DOMUtils-DXLQ8uU1.js";import"./Label-CT2eYMKi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5PjewgR.js";import"./zIndexSlice-CDzSIoPc.js";import"./immer-0ZZjS5Nj.js";import"./types-9bS4DgjT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BYUGSQCb.js";import"./hooks-8LGpZrMc.js";import"./axisSelectors-DuQQA8AF.js";import"./d3-scale-Ca2GXXvQ.js";import"./RechartsWrapper-sJojUHlC.js";import"./index-CUo349tj.js";import"./CartesianChart-BIeZSTsS.js";import"./chartDataContext-DkZqMAvH.js";import"./CategoricalChart-DW6_TUNV.js";import"./tooltipContext-By3RIlXL.js";import"./ReactUtils-ruqV-srf.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-a-btUYcY.js";import"./isPlainObject-qXbjbrRe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C71dLN6n.js";import"./useAnimationId-BGASjBYn.js";import"./Trapezoid-DCNj78K7.js";import"./Sector-DIpZMX41.js";import"./Symbols-h61-aZIG.js";import"./symbol-suQNbvDu.js";import"./step-DVp28hgV.js";import"./Curve-7li-NOkq.js";import"./RegisterGraphicalItemId-BdjwpoFI.js";import"./ErrorBarContext-BvEmMKSO.js";import"./GraphicalItemClipPath-CLSG_HT0.js";import"./SetGraphicalItem-BwNPbTjt.js";import"./getZIndexFromUnknown-D-b5Gqbj.js";import"./graphicalItemSelectors-DRaebRWv.js";import"./ActivePoints-Ck9TrlmM.js";import"./Dot-Boac-7JN.js";import"./getRadiusAndStrokeWidthFromDot-I2XTj7OF.js";import"./useElementOffset-lMXxs2jy.js";import"./uniqBy-B0VkYOM0.js";import"./iteratee-DJFQcjLL.js";import"./Cross-DjwFZztB.js";import"./index-SfPrSKbK.js";import"./ChartSizeDimensions-DQlshRXH.js";import"./OffsetShower-DH3pRQIv.js";import"./PlotAreaShower-D9cE9N3J.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
