import{R as t}from"./iframe-C8vQGZXk.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-B6tlBAdH.js";import{R as l}from"./zIndexSlice-ByprO6Sm.js";import{C as x}from"./ComposedChart-CHNyRbuw.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BYRNeN-L.js";import{L as a}from"./Line-ysek8YuF.js";import{X as c}from"./XAxis-CeEiPhih.js";import{T as g}from"./Tooltip-BFXXitgf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CYWEtH1_.js";import"./Text-4tQX4Uia.js";import"./resolveDefaultProps-V67edAdk.js";import"./DOMUtils-CYXp4dKG.js";import"./isWellBehavedNumber-C0Xo9Op-.js";import"./useId-BhWWyhoE.js";import"./useBackwardsCompatibleTheme-WNjwGM1x.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DTaI93aT.js";import"./index-CPGq0YmD.js";import"./index-DcRT1P9Q.js";import"./RechartsWrapper-8pTUTugH.js";import"./index-DGglMQ8l.js";import"./index-C62uqfyt.js";import"./throttle-h__ZU4m4.js";import"./axisSelectors-QRAfsrXG.js";import"./d3-scale-CtBXoG-U.js";import"./renderedTicksSlice-DsrGsPip.js";import"./CartesianAxis-C_7-gYtt.js";import"./Layer-sgegzG2x.js";import"./types-Cx0FcaGa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Tp1RpXRt.js";import"./chartDataContext-DHzBZ8lS.js";import"./CategoricalChart-3d5zHnsL.js";import"./AnimatedItems-v0KEsWrQ.js";import"./useAnimationId-CCh5p5CL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-De7ejmNi.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B1Mwe2wI.js";import"./tooltipContext-9X0XSZOh.js";import"./RegisterGraphicalItemId-Cui1oLRd.js";import"./ErrorBarContext-BpNPFGVG.js";import"./GraphicalItemClipPath-BrujiRiU.js";import"./SetGraphicalItem-CLgoHfzk.js";import"./getZIndexFromUnknown-3C3-Yx_o.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-BIKowErt.js";import"./Curve-BHwHIA5E.js";import"./step-BEmml1DS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DpUGItzr.js";import"./Dot-D-cyWkmh.js";import"./getRadiusAndStrokeWidthFromDot-CYNakwFb.js";import"./useElementOffset-D676kBYp.js";import"./uniqBy-CNeAHYAw.js";import"./iteratee-BgpO85yG.js";import"./Cross-CXjzHFBx.js";import"./Sector-BX1OUJvA.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Rt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
