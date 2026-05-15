import{e as t}from"./iframe-CFLjOTm5.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-D1od4iBb.js";import{g as l}from"./arrayEqualityCheck-ChmsrC0B.js";import{C as x}from"./ComposedChart-FER9Vi0e.js";import{p as c}from"./Page-DPte-9pC.js";import{B as o}from"./Bar-BdMUviFN.js";import{L as a}from"./Line-Vg9WsR_0.js";import{X as A}from"./XAxis-CPArG0UG.js";import{T as g}from"./Tooltip-DRz3bTA0.js";import{R as f}from"./RechartsHookInspector-BDSD1XTs.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BpdXJUIh.js";import"./Layer-CWq3y3ul.js";import"./resolveDefaultProps-BU0Jf3lU.js";import"./Text-BZYuARJv.js";import"./DOMUtils-DJPQYNDH.js";import"./Label-BSOdMnMn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7dGD0_V.js";import"./zIndexSlice-Cx77az4x.js";import"./immer-e_Tfrumf.js";import"./types-CgNdS23P.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-odoaHiua.js";import"./hooks-C_Gw3bpR.js";import"./axisSelectors-DczBvRuT.js";import"./d3-scale-CTwBFda5.js";import"./RechartsWrapper-D7LYgHfU.js";import"./index-DU898aRA.js";import"./CartesianChart-Dkwg52u_.js";import"./chartDataContext-CdLUr7Zf.js";import"./CategoricalChart-BQR3q1EG.js";import"./tooltipContext-DQRc-e97.js";import"./ReactUtils-DhONHYWu.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DrwY_Mc1.js";import"./isPlainObject-CzNO0PsU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DwfIT2qv.js";import"./useAnimationId-DK1cyyuV.js";import"./Trapezoid-B5Lh4oRr.js";import"./Sector-DsUts6aH.js";import"./Symbols-CkgCxPkV.js";import"./symbol-BeYyKtHZ.js";import"./step-BuRaAczm.js";import"./Curve-BhvAwYBS.js";import"./RegisterGraphicalItemId-E3PAioKC.js";import"./ErrorBarContext--tEIgjZN.js";import"./GraphicalItemClipPath-Diu1h3xz.js";import"./SetGraphicalItem-Tg4ql8Pw.js";import"./getZIndexFromUnknown-CAlG6STk.js";import"./graphicalItemSelectors-D5sFVyPf.js";import"./ActivePoints-9HVyXSwD.js";import"./Dot-BsIP-wxa.js";import"./getRadiusAndStrokeWidthFromDot-CiQZJYhU.js";import"./useElementOffset-C2egQmGh.js";import"./uniqBy-C7HTjv5J.js";import"./iteratee-BzNhxdj8.js";import"./Cross-CW35skaP.js";import"./index-xA73MIG_.js";import"./ChartSizeDimensions-DagJBs5z.js";import"./OffsetShower-CbRTjXXF.js";import"./PlotAreaShower-Bz-8aerp.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
