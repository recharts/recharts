import{R as t}from"./iframe-DzBbDK3f.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DfXf3Bj6.js";import{R as l}from"./zIndexSlice-BhAJBvui.js";import{C as x}from"./ComposedChart-DlJ6UxJ6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CtBMsH9V.js";import{L as a}from"./Line-fO8G_nMa.js";import{X as c}from"./XAxis-CQnsilRX.js";import{T as g}from"./Tooltip-B0uFRFn0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B36j_mfg.js";import"./CartesianAxis-CeDbxL1s.js";import"./Layer-BXEIHXdm.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./Label-CGWWfPsR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpRTlowh.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./types-NVYIi3uc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9_diZXM.js";import"./immer-DQoMHntF.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./axisSelectors-VQ5WENH-.js";import"./d3-scale-qbHfyqh1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DtImfiMD.js";import"./chartDataContext-Czi5ozBn.js";import"./CategoricalChart-DVCKFz9W.js";import"./tooltipContext-C3hDu3Lw.js";import"./AnimatedItems-B0itj7bz.js";import"./useAnimationId-B-2-DeJx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BlGzqP8k.js";import"./ActiveShapeUtils-CdFzq6u2.js";import"./RegisterGraphicalItemId-gHdffHfG.js";import"./ErrorBarContext-BH6nTEug.js";import"./GraphicalItemClipPath-iFuYGze8.js";import"./SetGraphicalItem-BisBTBFQ.js";import"./getZIndexFromUnknown-hK6g1Ro_.js";import"./graphicalItemSelectors-CQG1X6Vk.js";import"./Curve-BT7bGYlu.js";import"./step-DAtqKpLg.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BMU7oyBA.js";import"./Dot-DJtVuX_I.js";import"./getRadiusAndStrokeWidthFromDot-DqCoJDrQ.js";import"./useElementOffset-DluJVRhv.js";import"./uniqBy-DjJrV_db.js";import"./iteratee-CGKb1kMs.js";import"./Cross-CwjOYZ8e.js";import"./Sector-Bgl1uNuC.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)};var m,s,n;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const Yt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Yt as __namedExportsOrder,Ct as default};
