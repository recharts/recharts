import{R as t}from"./iframe-BaPbaLaJ.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-DYYvtRQh.js";import{R as l}from"./zIndexSlice-Ct9oD4yM.js";import{C as x}from"./ComposedChart-Cue8tnaZ.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BX6LyV64.js";import{L as a}from"./Line-Qtz2YiMf.js";import{X as c}from"./XAxis-DyE7q0u7.js";import{T as g}from"./Tooltip-CPyECygK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D2ZTbC0U.js";import"./CartesianAxis-C9WUsr8e.js";import"./Layer-DnTHWC2s.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./Label-nvXx3zPl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./types-Bxe0zMe1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./immer-DiDZ85-K.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./tooltipContext-Dxao8-sY.js";import"./AnimatedItems-BRL6-mrZ.js";import"./useAnimationId-BlKkbeMI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ClzNIlMR.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getZIndexFromUnknown-DjS664wq.js";import"./graphicalItemSelectors-CIniFY1e.js";import"./Curve-Upd9kr-b.js";import"./step-Dmz9aP0W.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DjBhRx8i.js";import"./Dot-C2L5-Wjg.js";import"./getRadiusAndStrokeWidthFromDot-CwJ3_b_N.js";import"./useElementOffset-BiSEPHYV.js";import"./uniqBy-CEb4341A.js";import"./iteratee-DHRfW3v4.js";import"./Cross-BvxMZ5D8.js";import"./Sector-BAoP8TPe.js";const Ct={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
