import{e as t}from"./iframe-B49GSwh0.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-BQIKrjqI.js";import{Y as r}from"./YAxis--1-yNCnR.js";import{R as l}from"./arrayEqualityCheck-DINBFxv3.js";import{C as x}from"./ComposedChart-DRfqwsU9.js";import{B as o}from"./Bar-yhKPdfTR.js";import{L as a}from"./Line-Cr1GgxdN.js";import{X as c}from"./XAxis-D-J-5rSI.js";import{T as A}from"./Tooltip-Dm5out2O.js";import{R as g}from"./RechartsHookInspector-OdbWm_9I.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C-joITAz.js";import"./CartesianAxis-hdd-vl6G.js";import"./Layer-D1N02uqa.js";import"./Text-gOylDML8.js";import"./DOMUtils-CT05d_hW.js";import"./Label-CpKUDdzk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDRmqb48.js";import"./zIndexSlice-BRDipK6V.js";import"./types-OGa7TdGT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks--sxETzV1.js";import"./axisSelectors-CUIhtG5P.js";import"./RechartsWrapper-csJjzcSq.js";import"./CartesianChart-CCaI-Ryf.js";import"./chartDataContext-Bk-Ja4C1.js";import"./CategoricalChart-B5pRHHkW.js";import"./tooltipContext-BGuZis9J.js";import"./ReactUtils-yuOGi8sn.js";import"./ActiveShapeUtils-JgGGelTB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdQI0GjN.js";import"./useAnimationId-CWbWu1ju.js";import"./Trapezoid-BEs5OYZ_.js";import"./Sector-CcMeAO1d.js";import"./Symbols-BhCWiDph.js";import"./Curve-D2h7ncG8.js";import"./RegisterGraphicalItemId-DpeQt7zq.js";import"./ErrorBarContext-Kb4FINZU.js";import"./GraphicalItemClipPath-DFKAd39R.js";import"./SetGraphicalItem-CkvQT2hd.js";import"./getZIndexFromUnknown-nK1_zmle.js";import"./graphicalItemSelectors-B20R-uhD.js";import"./ActivePoints-DAZjB2zT.js";import"./Dot-Dh4m0OXw.js";import"./getRadiusAndStrokeWidthFromDot-CDrV5QBb.js";import"./useElementOffset-DzO4T-Oi.js";import"./iteratee-Di8bf76v.js";import"./Cross-B2dRM0oN.js";import"./index-DmOyJeTl.js";import"./ChartSizeDimensions-CBThhMTI.js";import"./OffsetShower-Cs62sl11.js";import"./PlotAreaShower-DCgwyzvC.js";const ut={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const It=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,It as __namedExportsOrder,ut as default};
