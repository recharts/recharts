import{R as t}from"./iframe-BMzdo2OO.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BNMn58Qu.js";import{R as l}from"./zIndexSlice-ChqivVgc.js";import{C as x}from"./ComposedChart-DSKFy6An.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-4hoGeeeg.js";import{L as a}from"./Line-HvZ-B3uy.js";import{X as c}from"./XAxis-D0FZw3tk.js";import{T as g}from"./Tooltip-BCXNVYKW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXGFYQ6y.js";import"./Text-BUhrLoyp.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./DOMUtils-CENQr-dm.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J0q0oOXM.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./RechartsWrapper-DZyZLCSd.js";import"./axisSelectors-DePv-gjT.js";import"./throttle-Bn5L-Spy.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./CartesianAxis-BwqV9jtY.js";import"./Layer-DI_tMp3J.js";import"./types-XidxuGSX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./AnimatedItems-aWQxtrPp.js";import"./useAnimationId-DMkWUgfv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYGVySvu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./tooltipContext-tK_9rBe4.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./ErrorBarContext-Dvnk9Osp.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getZIndexFromUnknown-DSnQSZfK.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";import"./dataEntryStyles-eOg5bOhW.js";import"./Curve--AxPXvQm.js";import"./step-C6IWo9eW.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DbFNvnJX.js";import"./Dot-C8FkbxSc.js";import"./getRadiusAndStrokeWidthFromDot-CrQ8YxTR.js";import"./useElementOffset-CNLeBMxi.js";import"./uniqBy-DlBrbasH.js";import"./iteratee-k4aeFlqG.js";import"./Cross-BtRQT9ij.js";import"./Sector-dxcau_Jz.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
