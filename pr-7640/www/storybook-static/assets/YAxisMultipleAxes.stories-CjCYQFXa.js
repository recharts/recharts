import{R as t}from"./iframe-BISZbF8S.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-m7WuayWG.js";import{R as l}from"./zIndexSlice-tLqWCh4O.js";import{C as x}from"./ComposedChart-Bb88RiXV.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BruO2Mnt.js";import{L as a}from"./Line-Ct3QeI60.js";import{X as c}from"./XAxis-DhvWA3ze.js";import{T as g}from"./Tooltip-C8DzValB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label--u0r0Ebh.js";import"./Text-DWq927Nt.js";import"./resolveDefaultProps-Wc0qnLHS.js";import"./DOMUtils-CTLtTqZ2.js";import"./isWellBehavedNumber-C9XsHOt-.js";import"./useId-DvaMlJaB.js";import"./useBackwardsCompatibleTheme-DE0n-uz4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DScewirg.js";import"./index-hSuJddDh.js";import"./index-DIL3iNST.js";import"./RechartsWrapper-een6OCKs.js";import"./index-BW9K1TDZ.js";import"./index-Ce0beIqY.js";import"./throttle-qMyvzBrr.js";import"./axisSelectors-SJG9ph2l.js";import"./d3-scale-DNcorMEn.js";import"./renderedTicksSlice-bJIEIhcB.js";import"./CartesianAxis-D7TS5Yfq.js";import"./Layer-qSEbrkuT.js";import"./types-DYnGyjc0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-GFukGdve.js";import"./chartDataContext-iswJ2W_c.js";import"./CategoricalChart-CluxlQf_.js";import"./AnimatedItems-DssiNuXL.js";import"./useAnimationId-BeL21vg8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6oc1dJQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-PTy3S8F2.js";import"./tooltipContext-3qQsJ6sB.js";import"./RegisterGraphicalItemId-DfyOG4VN.js";import"./ErrorBarContext-DGuh-__T.js";import"./GraphicalItemClipPath-b6ezYgAg.js";import"./SetGraphicalItem-DKxsB3By.js";import"./getZIndexFromUnknown-4VqTvqPo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C6O1LkkN.js";import"./Curve-DnqgdcKJ.js";import"./step-DstMREJ8.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ccjhq822.js";import"./Dot-ClbVOSp4.js";import"./getRadiusAndStrokeWidthFromDot-CSyFsC-5.js";import"./useElementOffset-D_71pDwY.js";import"./uniqBy-1z9FZ0dO.js";import"./iteratee-azZ5Zz_L.js";import"./Cross-BlvQQYk4.js";import"./Sector-D33X9QbA.js";const Mt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
