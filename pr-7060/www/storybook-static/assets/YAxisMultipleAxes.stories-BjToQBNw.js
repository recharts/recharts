import{e as t}from"./iframe-Ch2H383w.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-E6ZISSH3.js";import{Y as r}from"./YAxis-DxTWoH9V.js";import{R as l}from"./arrayEqualityCheck-CcoXvTIe.js";import{C as x}from"./ComposedChart-IGKBWSvp.js";import{B as o}from"./Bar-BOqcBXON.js";import{L as a}from"./Line-h7uGauY1.js";import{X as c}from"./XAxis-CNQurGdF.js";import{T as A}from"./Tooltip-Dw0YKWvU.js";import{R as g}from"./RechartsHookInspector-BJIWLpAN.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DOQRlkLH.js";import"./Layer-yB3Q88eR.js";import"./resolveDefaultProps-Ce5Vf20-.js";import"./Text-CMCGaMex.js";import"./DOMUtils-DvEd-B07.js";import"./Label-h8Lj8ZpR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bo-lDWay.js";import"./zIndexSlice-D0Km72rD.js";import"./immer-CuzWzTfz.js";import"./types-yO-TS24R.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cpaoi516.js";import"./hooks-CSqGm2Vh.js";import"./axisSelectors-D5kbvOqb.js";import"./d3-scale--P9_UiJN.js";import"./RechartsWrapper-B4us9W1h.js";import"./index-B83dRs4n.js";import"./CartesianChart-Bsy01o0m.js";import"./chartDataContext-Dkm8eTMR.js";import"./CategoricalChart-DRsF6Hco.js";import"./tooltipContext-DxircbSh.js";import"./ReactUtils-BnK3eejK.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BKBe1trq.js";import"./isPlainObject-Bve2BbtD.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BKDxLQJC.js";import"./useAnimationId-dRwxXRVb.js";import"./Trapezoid-DPpAMK_h.js";import"./Sector-HOrLF-jD.js";import"./Symbols-DbTFPMcv.js";import"./symbol-BWpDFnQE.js";import"./step-BoAzBu0R.js";import"./Curve-BBxbYyGH.js";import"./RegisterGraphicalItemId-DrnJwnvQ.js";import"./ErrorBarContext-BZSQmULr.js";import"./GraphicalItemClipPath-rQxmGc46.js";import"./SetGraphicalItem-BZ3_hlL3.js";import"./getZIndexFromUnknown-BTDbutHh.js";import"./graphicalItemSelectors-CbMnGhzf.js";import"./ActivePoints-DcrHd6tF.js";import"./Dot-CviiMKw7.js";import"./getRadiusAndStrokeWidthFromDot-D-cthvwF.js";import"./useElementOffset-BaotFERl.js";import"./uniqBy-vwrZhKLb.js";import"./iteratee-ChwvZgWQ.js";import"./Cross-DWE_Jsgj.js";import"./index-DtZkbyPi.js";import"./ChartSizeDimensions-7l9XUt5L.js";import"./OffsetShower-DDeP8nwr.js";import"./PlotAreaShower-CC7ji8nO.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:f},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(A,null),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
