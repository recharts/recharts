import{R as t}from"./iframe-Bfq89VA1.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BKOVychP.js";import{R as l}from"./zIndexSlice-CIiurCy7.js";import{C as x}from"./ComposedChart-DVfhgAYP.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CIlr7XdY.js";import{L as a}from"./Line-BUzvUqJl.js";import{X as c}from"./XAxis-XWWA5Vcg.js";import{T as g}from"./Tooltip-DsAve4cr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BwpzYsrw.js";import"./Layer-Ddny-Z-5.js";import"./resolveDefaultProps-sI76rt8e.js";import"./Text-hgAABJUd.js";import"./DOMUtils-D5O5VN8V.js";import"./isWellBehavedNumber-Cjy03S2S.js";import"./Label-TzQ05lix.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BNbeMphj.js";import"./index-CYj6WtTt.js";import"./index-BrZplGoV.js";import"./types-BzfB60xK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bq1WS_1z.js";import"./throttle-D9Dxi9p7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-Clucjzln.js";import"./index-CJwKc2JD.js";import"./index-C5yh5hWX.js";import"./axisSelectors-DeSjN-yN.js";import"./d3-scale-DNdF6BGI.js";import"./CartesianChart-BR20NBVb.js";import"./chartDataContext-CtFpG3fr.js";import"./CategoricalChart-C2BN44hW.js";import"./tooltipContext-DxTmDpmc.js";import"./AnimatedItems-u8tbY5MQ.js";import"./useAnimationId-nFx4hlTa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-TJ7hJnR0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWYip-It.js";import"./RegisterGraphicalItemId-Cqi3B4nU.js";import"./ErrorBarContext-C94DxYOd.js";import"./GraphicalItemClipPath-BPnHFI7W.js";import"./SetGraphicalItem-COSatqks.js";import"./getZIndexFromUnknown-DbJJeh79.js";import"./graphicalItemSelectors-CUTgWtLp.js";import"./Curve-DuW3zwTN.js";import"./step-De5xdkMr.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BuFY0qPt.js";import"./Dot-CdihK_4o.js";import"./getRadiusAndStrokeWidthFromDot-SR9W1edy.js";import"./useElementOffset-JKh4KBSu.js";import"./uniqBy-Bd3SP3U8.js";import"./iteratee-C88R0o-M.js";import"./Cross-D285--m4.js";import"./Sector-Bf9g04ER.js";const Yt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const vt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,vt as __namedExportsOrder,Yt as default};
