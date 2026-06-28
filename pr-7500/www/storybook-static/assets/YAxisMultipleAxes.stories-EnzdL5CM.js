import{R as t}from"./iframe-Cz3m2SJ3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DcGNi3Zk.js";import{R as l}from"./zIndexSlice-Cjh-3nYc.js";import{C as x}from"./ComposedChart-CSmCvL3U.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-VGxnhh_M.js";import{L as a}from"./Line-C1Jzdpj9.js";import{X as c}from"./XAxis-BOtH_Bb_.js";import{T as g}from"./Tooltip-C9yhbHaY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DnJGsTBL.js";import"./CartesianAxis-C3-vjNSw.js";import"./Layer-DT2BS3Fo.js";import"./resolveDefaultProps-C8QIhMpF.js";import"./Text-CM8vLpAR.js";import"./DOMUtils-DZThnrL0.js";import"./isWellBehavedNumber-CDOyudGY.js";import"./Label-DtW8Frf2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-dXuwT3rZ.js";import"./index-Ch8SxpQ7.js";import"./index-NxrJrzZn.js";import"./types-CfBB8f9x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFzmMv1J.js";import"./immer-BpZE7kkB.js";import"./RechartsWrapper-B4Ii8FQX.js";import"./index-BaDzCXFV.js";import"./index-CMdFAdtp.js";import"./axisSelectors-kRjEmRJx.js";import"./d3-scale-WEKEQNVu.js";import"./CartesianChart-BLcm5KGH.js";import"./chartDataContext-BYln8BgM.js";import"./CategoricalChart-DoGmIe9w.js";import"./tooltipContext-Bkx1J4ih.js";import"./AnimatedItems-BHx4y2NH.js";import"./useAnimationId-BTiOYTQB.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-pvDgbZGd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CXFbPlV-.js";import"./RegisterGraphicalItemId-CDGD75SL.js";import"./ErrorBarContext--7X7cLyV.js";import"./GraphicalItemClipPath-Bz4IuZP3.js";import"./SetGraphicalItem-Ci_nDVmD.js";import"./getZIndexFromUnknown-tViS5WT4.js";import"./graphicalItemSelectors-R8m2abgh.js";import"./Curve-Bwoz_RSs.js";import"./step-Cw3d9gls.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CgF4v4_S.js";import"./Dot-D0XFaE4d.js";import"./getRadiusAndStrokeWidthFromDot-C8BKdMCZ.js";import"./useElementOffset-DWoELxA5.js";import"./uniqBy-C-5jUlDv.js";import"./iteratee-BYbJoUdv.js";import"./Cross-DTqDEQzI.js";import"./Sector-BXolgb6h.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
