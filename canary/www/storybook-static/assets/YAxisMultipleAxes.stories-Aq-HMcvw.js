import{R as t}from"./iframe-3h349717.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-tMbI8NgR.js";import{R as l}from"./zIndexSlice-BzHS8zt2.js";import{C as x}from"./ComposedChart-DCVALNVc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-rQmdxBM1.js";import{L as a}from"./Line-CdkVEHcj.js";import{X as c}from"./XAxis-Bw5xxXY1.js";import{T as g}from"./Tooltip-zSQBQnXA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dtiya_7s.js";import"./Text-DVnErtU5.js";import"./resolveDefaultProps-DJBK0DUa.js";import"./DOMUtils--0390Y1X.js";import"./isWellBehavedNumber-D3Yo8GQB.js";import"./useId-Ced_CVYT.js";import"./useBackwardsCompatibleTheme-BYrRaigu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BTc3Y12q.js";import"./index-oX4N-tXs.js";import"./index-BRv0H6zV.js";import"./RechartsWrapper-CUULyex2.js";import"./axisSelectors-CTBJiowg.js";import"./throttle-BlVp8HkD.js";import"./d3-scale-CLmVRDrj.js";import"./index-CsFq6h3I.js";import"./index-BbUWtFl0.js";import"./renderedTicksSlice-6SwbUeKS.js";import"./index-Bo8dIp4D.js";import"./CartesianAxis-DyDK0v82.js";import"./Layer-BPJ6tmqq.js";import"./types-D64Ekh4L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CFmcy4vR.js";import"./chartDataContext-Chtbdmd2.js";import"./CategoricalChart-Lt1wUyHP.js";import"./AnimatedItems-DOjhrzsE.js";import"./useAnimationId-BzBuvVRV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tvaTM7i9.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C78HHNIc.js";import"./tooltipContext-Bjerhbx-.js";import"./RegisterGraphicalItemId-Byw__Yoi.js";import"./ErrorBarContext-BtoBWPHm.js";import"./GraphicalItemClipPath-C24GD_Bh.js";import"./SetGraphicalItem-wGbg7zCS.js";import"./getZIndexFromUnknown-CS48zjz3.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B39tiPNn.js";import"./Curve-Bi3KcdO0.js";import"./step-DOsNm07K.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BcO3Gsaw.js";import"./Dot-CUMV7p2u.js";import"./getRadiusAndStrokeWidthFromDot-qaKJk7YD.js";import"./useElementOffset-DNp2u43t.js";import"./uniqBy-C8soMpcc.js";import"./iteratee-Dt6uUIOF.js";import"./Cross-Dk7k_2l8.js";import"./Sector-MO_FaW_H.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
