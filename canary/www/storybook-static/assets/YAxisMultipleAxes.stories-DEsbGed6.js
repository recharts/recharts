import{e as t}from"./iframe-Ck9vc756.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-CN8GVS1Z.js";import{R as l}from"./arrayEqualityCheck-vzCieRp2.js";import{C as x}from"./ComposedChart-DfP8SAqH.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-WFLWX3XG.js";import{L as a}from"./Line-BQJSgsKR.js";import{X as A}from"./XAxis-DhL58n8S.js";import{T as g}from"./Tooltip-DHifCrTz.js";import{R as f}from"./RechartsHookInspector-jYNw452D.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B_BJsMJ6.js";import"./Layer-C26sMZzH.js";import"./resolveDefaultProps-nQu5Go0U.js";import"./Text-DDesK1Nf.js";import"./DOMUtils-BCDfv7vR.js";import"./Label-Crw3CPfI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CJ-WJ8V7.js";import"./zIndexSlice-y206Xv9r.js";import"./immer-DxfnJBPA.js";import"./types-BGHQe8uG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DZ5s87U9.js";import"./hooks-e18ms5aC.js";import"./axisSelectors-BUVUYV1B.js";import"./d3-scale-CWye4qHt.js";import"./RechartsWrapper-VxEE_HZc.js";import"./index-DcmFMlNy.js";import"./CartesianChart-DU17ec1s.js";import"./chartDataContext-w_xDJEY9.js";import"./CategoricalChart-dlD1y7dU.js";import"./tooltipContext-DYLBHXp0.js";import"./ReactUtils-QBrDvIPv.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BEDy9_pC.js";import"./isPlainObject-BGDfWSco.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DmefmFIR.js";import"./useAnimationId-B40SS4XH.js";import"./Trapezoid-DfEdCmhW.js";import"./Sector-DK3gU8wt.js";import"./Symbols-DO4Vi22k.js";import"./symbol-DBHvF3Bk.js";import"./step-BIffBEER.js";import"./Curve-DcMGJFRD.js";import"./RegisterGraphicalItemId-Ddc28GTk.js";import"./ErrorBarContext-wfunW0SD.js";import"./GraphicalItemClipPath-O2r-hl13.js";import"./SetGraphicalItem-Dos1M3Gw.js";import"./getZIndexFromUnknown-DENUaQ8e.js";import"./graphicalItemSelectors-DCZgLbeh.js";import"./ActivePoints-D7rmE1Zy.js";import"./Dot-BSnXD6GM.js";import"./getRadiusAndStrokeWidthFromDot-r9WuKRbn.js";import"./useElementOffset-BeZBXZ-x.js";import"./uniqBy-DMfO8TM9.js";import"./iteratee-B1ZaElV0.js";import"./Cross-ahEwNB3P.js";import"./index-D1Nat1jZ.js";import"./ChartSizeDimensions-DeS7AUEB.js";import"./OffsetShower-B5SEMIpQ.js";import"./PlotAreaShower-BRBe-I_w.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
